---
sidebar_position: 1
---

# Cài đặt và Playground

Bạn có thể dùng thử Klacks trong một phút — và cài đặt nó trong vài phút. Không cần đăng ký, không cần trao đổi bán hàng.

## Phương án 1: Playground (không cần cài đặt gì)

Một phiên bản Klacks công khai với dữ liệu mẫu đang chạy tại **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Đăng nhập:** `admin@test.com` · **Mật khẩu:** `P@ssw0rt1`
- Bạn có đầy đủ quyền Admin — cứ thoải mái dùng thử mọi thứ.
- Toàn bộ dữ liệu sẽ **tự động được đặt lại mỗi ngày**. Vì vậy đừng nhập dữ liệu cá nhân thật.

## Phương án 2: Trên máy chủ riêng (On-Premise)

Gói On-Premise bao gồm mọi thứ cần thiết: các Docker image, trình cài đặt, cơ sở dữ liệu, HTTPS và cập nhật tự động.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Trên Windows: dùng `install.ps1` thay vì `install.sh`. Trình cài đặt sẽ tự tạo mật khẩu và chứng chỉ, tải về các Docker image mới nhất và chờ cho đến khi mọi thứ chạy xong. Đăng nhập lần đầu bằng `admin@test.com` / `P@ssw0rt1` — **hãy đổi mật khẩu này ngay sau lần đăng nhập đầu tiên.**

## Điều cần biết

- Một dịch vụ cập nhật đi kèm sẽ tự động giữ cho hệ thống của bạn luôn cập nhật — kèm sao lưu trước mỗi lần cập nhật và tự động khôi phục (rollback) nếu có sự cố.
- Dữ liệu của bạn hoàn toàn nằm trên hạ tầng của bạn; Klacks không gửi dữ liệu về đâu cả.
- Điều kiện tiên quyết là một máy chủ có Docker, có quyền truy cập Internet ra ngoài (để tải Docker image và cập nhật) và các cổng 80/443 đang mở.

---
*Có câu hỏi về việc cài đặt? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
