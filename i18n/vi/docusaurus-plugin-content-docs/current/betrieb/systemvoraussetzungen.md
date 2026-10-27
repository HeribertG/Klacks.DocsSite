---
sidebar_position: 1
---
# Yêu cầu hệ thống và kiến trúc

Klacks chạy như một Docker stack trên máy chủ của chính bạn. Trang này mô tả những dịch vụ nào được khởi động và cách bạn xác định quy mô máy chủ — kèm theo các số liệu đo đạc làm cơ sở cho khuyến nghị.

## Kiến trúc: năm dịch vụ

Gói On-Premise chỉ khởi động đúng những gì cần thiết cho vận hành:

| Dịch vụ | Image | Nhiệm vụ |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Cơ sở dữ liệu; phần mở rộng vector đã được tích hợp sẵn |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; thực hiện migration và nạp dữ liệu vào cơ sở dữ liệu khi khởi động |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Giao diện Angular, được phân phối qua nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | cài đặt các bản cập nhật có chữ ký (api và ui cùng nhau) |
| `klacks-proxy` | `nginx:alpine` | Kết thúc TLS và reverse proxy |

Các dịch vụ nội bộ của nhà sản xuất (kho tri thức phát triển, marketing, marketplace, pgAdmin, certbot, giao diện Blazor) được cố ý **không** đưa vào. Vì vậy với tư cách người vận hành, bạn chỉ thấy stack của chính mình.

## Máy chủ cần đáp ứng những gì

- **8 GB RAM và 4 vCPU** là mức tối thiểu (xem phép tính bên dưới).
- Docker Desktop (Windows/macOS) hoặc Docker Engine với Compose v2 (Linux), **amd64 hoặc arm64**.
- Các cổng **80 và 443** còn trống — có thể ghi đè qua `HTTP_PORT` và `HTTPS_PORT`.
- Truy cập HTTPS **đi ra** tới `ghcr.io` (image) và `github.com` (manifest cập nhật có chữ ký).
- Tùy chọn: truy cập `klacks-software.ch:7553` để lấy gói quốc gia và plugin ngôn ngữ từ marketplace.

## Bộ nhớ: tại sao là 8 GB, và điều gì xảy ra với máy chủ nhỏ hơn

Klacks chạy hai mô hình tìm kiếm của nó (embedder và reranker) **cục bộ trong tiến trình** `klacks-api`. Cả hai phiên ONNX luôn nằm trong bộ nhớ — chúng không bị gỡ ra sau mỗi câu hỏi.

Đo trên máy chủ production của nhà sản xuất ngày 12.09.2026:

- Tải nền của tiến trình: khoảng 1'017 MB
- Embedder: khoảng 1'171 MB
- Reranker: khoảng 116 MB
- Tổng: một mức ổn định khoảng **2'304 MB**
- Dưới giới hạn 2'560 MB, kernel đã dừng container ở mức 2'471 MB (OOM).

Vì vậy Compose đi kèm đặt **3'584M** và 3,0 CPU cho `klacks-api`, với tính năng gỡ khi nhàn rỗi bị tắt. Tính trên toàn bộ stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**, phần còn lại của 8 GB dành cho hệ điều hành và bộ nhớ đệm tệp.

**Máy chủ nhỏ hơn, khoảng 3 GB cho `klacks-api`:** Hãy đặt trong `.env` **cả hai** dòng sau — tuyệt đối không chỉ đặt riêng dòng bộ nhớ:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Tính năng gỡ khi nhàn rỗi giải phóng một phiên sau 30 phút không có truy cập. Cái giá phải trả: câu hỏi tiếp theo sau đó sẽ nạp lại phiên (khoảng 2,2–2,9 s cho embedder, khoảng 1,1 s cho reranker). Các giá trị từ 1 đến 5 được nâng lên thành 5, `0` có nghĩa là: không bao giờ gỡ.

## CPU: ít nhân hơn chỉ làm chậm đi, không làm hỏng

Tìm kiếm vẫn hoạt động với ít nhân hơn nhưng chậm hơn — reranker là bước tốn nhiều tính toán nhất. Đã đo: 2'994–3'163 ms cho 25 ứng viên với 3,0 CPU so với 4'339–4'860 ms với 1,5 CPU, khi đó dịch vụ còn bị giới hạn (throttle) thêm 7,15 s. Với một máy chủ nhỏ hơn:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Hạn mức CPU của stack được cố ý cộng lại thành 4,75 với 4 vCPU: hạn mức là mức trần chứ không phải sự đặt trước, và các dịch vụ không bao giờ đạt đỉnh cùng một lúc.

## Nên biết

- **Mật khẩu và khóa cần giữ ổn định.** `POSTGRES_PASSWORD` được ghi cứng vào volume dữ liệu ở lần khởi động đầu tiên — thay đổi sau đó sẽ làm cơ sở dữ liệu mồ côi. `JWT_SECRET` ký các phiên đăng nhập; thay đổi sẽ đăng xuất mọi người dùng. Trình cài đặt giữ nguyên cả hai ở mỗi lần chạy lại.
- **`COMPOSE_PROJECT_NAME=klacks`** được ghi cứng để máy chủ và dịch vụ cập nhật cùng trỏ đến một dự án Compose, bất kể tên thư mục. Không thay đổi nữa sau khi cài đặt.
- **`KnowledgeIndex__WarmupEnabled=false` không phải là tùy chọn về bộ nhớ.** Nó chỉ dời việc xây dựng chỉ mục tìm kiếm từ lúc khởi động sang yêu cầu chat đầu tiên; khi vận hành liên tục, các phiên vẫn hiện diện như nhau. Chỉ hữu ích nếu máy chủ bị thiếu bộ nhớ lúc khởi động.
- **Có nhiều hơn một instance API?** Khi đó bạn cần một SignalR backplane. Klacks không kèm sẵn: hãy tự triển khai một dịch vụ tương thích RESP (ví dụ Valkey — được cấp phép BSD-3 từ phiên bản 7.4, khác với Redis) và bật sticky upstream (`ip_hash`) đã được chuẩn bị sẵn trong mẫu nginx. Không có backplane thì chỉ chạy đúng một instance `klacks-api`, như mọi bản cài đặt hiện nay.
- **Hồ sơ quốc gia:** Trình cài đặt biết 30 hồ sơ: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Một hồ sơ đặt ở lần khởi động đầu tiên ngôn ngữ, quốc gia/vùng và múi giờ, lịch ngày lễ, cuối tuần và ngày bắt đầu tuần, giới hạn thời gian làm việc, quyền lợi nghỉ phép, phụ cấp, hệ thống đích xuất lương mặc định (với Thụy Sĩ chẳng hạn là `abaconnect-ch`) cùng các mẫu theo ngành — với Spitex chẳng hạn là mẫu quy tắc lập kế hoạch "CH Spitex Standard". Không có hồ sơ, Klacks khởi động ở trạng thái trung tính và bạn tự cấu hình mọi thứ bằng tay.

---

*Câu hỏi về vận hành? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
