---
sidebar_position: 4
---
# Khắc phục sự cố

Khi Klacks không làm đúng điều nó cần làm, con đường hầu như luôn đi qua nhật ký của hai dịch vụ bị nghi ngờ — và qua câu hỏi liệu tiến trình có thực sự còn chạy hay không.

## Trước hết: xem cái gì đang chạy

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` cho biết dịch vụ nào đang chạy và có hoạt động tốt hay không. `klacks-api` ghi lại quá trình khởi động, migration và nạp dữ liệu vào cơ sở dữ liệu; `klacks-updater` ghi lại việc phát hiện, sao lưu, chuyển đổi và đường lui của một bản cập nhật.

## Nhật ký cũ không phải là bằng chứng

Một cái bẫy đã từng tốn thời gian: tệp nhật ký có thể đến từ một lần khởi động **trước đó**. Ai tìm thấy lỗi trong đó rồi cho rằng đó là lỗi hiện tại thì đang tìm sai chỗ.

Vì vậy hãy kiểm tra xem nhật ký **có còn tăng không**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Nếu kích thước giữ nguyên (tăng 0 byte), tiến trình không còn ghi nữa — nó không chạy, bất kể trong nhật ký viết gì. Chỉ khi lỗi được lặp lại với một nhật ký chắc chắn đang chạy thì mới có cơ sở đáng tin cậy.

## Các thông báo thường gặp và ý nghĩa của chúng

| Thông báo | Ý nghĩa | Cần làm gì |
|---|---|---|
| `no matching manifest for linux/amd64` | Image không có cho kiến trúc của bạn | Nhà sản xuất phải phát hành image đa kiến trúc (amd64 **và** arm64) |
| `pull access denied` | Gói trong kho gói ở chế độ riêng tư | Cài đặt lại kèm thông tin đăng nhập: `-GhcrUser`/`-GhcrToken` trên Windows, `GHCR_USER`/`GHCR_TOKEN` trên Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Cổng thiết lập Admin đang hoạt động | Đăng nhập bằng `admin@test.com` và tạo tài khoản Admin của riêng bạn — xem [Cài đặt và Playground](../../erste-schritte/installation-und-playground/) |
| Container kết thúc mà không có managed stack trace với mã thoát `-1` (`0xffffffff`) | Một sự cố **native** trong thư viện C/C++ mà không `try/catch` C# nào bắt được | Xem đầu ra của container trên **stderr** — nguyên nhân thật nằm ở đó, không phải trong nhật ký ứng dụng |
| Container bị kết thúc dù trong nhật ký không có lỗi ứng dụng nào | Kernel đã dừng tiến trình do thiếu bộ nhớ (OOM) | Kiểm tra giới hạn bộ nhớ — xem [Yêu cầu hệ thống](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` sau một bản cập nhật thất bại | Một migration đã tạo các bảng mà việc khôi phục không xóa đi | Xem cái bẫy tại [Sao lưu và khôi phục](../backup-und-wiederherstellung/) |
| API chết vài giây sau `Application started` | Khởi động thành công, sự cố xảy ra sau đó — điển hình của một thư viện native | Cùng dấu vết như mã thoát `-1`: kiểm tra stderr, không phải nhật ký ứng dụng |

Trên một **máy Windows-on-ARM** (Snapdragon X), tính năng tìm kiếm chạy cục bộ trước đây đã từng thất bại đúng ở một thư viện native như vậy: API báo `Application started`, nhưng vài giây sau giao diện không còn truy cập được. Nếu bạn thấy kiểu này trên một máy chủ ARM-Windows, hãy nhìn đầu tiên vào đầu ra của console (không phải nhật ký dạng tệp) — thông báo của bước nhận diện CPU bị ảnh hưởng đã xuất hiện ở đó.

## Cách khoanh vùng một lỗi

1. **Chính xác bạn đã làm gì**, và bạn mong đợi điều gì? Bước cuối cùng trước khi xảy ra lỗi là một nửa câu trả lời.
2. **Những dịch vụ nào đang chạy?** `docker compose ps`.
3. **Nhật ký có còn tăng không?** Xem ở trên.
4. **Dòng cuối cùng trên stderr là gì?** Với các sự cố native, đây là nguồn duy nhất.
5. **Gần đây có gì thay đổi?** Một bản cập nhật, một cài đặt, một chứng chỉ mới.

## Nên biết

- **Một dịch vụ khởi động sớm và một dịch vụ khỏe mạnh trông giống nhau trong nhật ký.** Nếu trên giao diện không có gì đến nơi, hãy kiểm tra xem tiến trình có còn chạy hay không — chứ không chỉ xem lần cuối nó đã ghi gì.
- **Khi sự cố xảy ra mà không có lỗi ứng dụng, bộ nhớ là nghi phạm đầu tiên**, đặc biệt sau một bản cập nhật có mô hình tìm kiếm mới.
- **Thông tin hữu ích cho một báo cáo:** phiên bản bị ảnh hưởng (`KLACKS_API_TAG`/`KLACKS_UI_TAG` từ `.env`), đầu ra của `docker compose ps`, những dòng cuối của cả hai nhật ký và bước cuối cùng trước khi xảy ra lỗi. Xin **không** kèm mật khẩu và khóa từ `.env`.
- Nếu còn nghi ngờ, hãy hỏi cộng đồng: [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).

---

*Câu hỏi về vận hành? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
