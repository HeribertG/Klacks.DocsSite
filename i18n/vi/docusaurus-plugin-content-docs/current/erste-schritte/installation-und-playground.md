---
sidebar_position: 1
---

# Cài đặt và Playground

Bạn có thể dùng thử Klacks trong một phút — và cài đặt nó trong vài phút. Không cần đăng ký, không cần trao đổi bán hàng.

## Playground: sân chơi để làm quen

Playground không phải là một phương án cài đặt, mà là một phiên bản Klacks công khai với dữ liệu mẫu để bạn nghịch thử thoải mái, không ràng buộc gì — đây cũng chính là lý do cho cái tên này. Nó chạy tại **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Đăng nhập:** `admin@test.com` · **Mật khẩu:** `P@ssw0rt1`
- Bạn có đầy đủ quyền Admin — cứ thoải mái dùng thử mọi thứ.
- Toàn bộ dữ liệu sẽ **tự động được đặt lại mỗi ngày**. Vì vậy đừng nhập dữ liệu cá nhân thật.

## Cài đặt: Trên máy chủ riêng (On-Premise)

Gói On-Premise bao gồm mọi thứ cần thiết: các Docker image, trình cài đặt, cơ sở dữ liệu, HTTPS và cập nhật tự động. Gói này chỉ có trên [Klacks Store](https://klacks-software.ch/store/?culture=vi).

Trong Klacks Store, chọn ngành nếu muốn, tải tệp ZIP cho quốc gia của bạn và giải nén trên máy đích. Hãy chọn một thư mục cố định (ví dụ: `~/klacks`): tính năng cập nhật tự động hoạt động với thư mục này.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Trên Windows: dùng `install-*.ps1` thay vì `install-*.sh`. Trình cài đặt sẽ tự tạo mật khẩu và chứng chỉ, tải về các Docker image mới nhất và chờ cho đến khi mọi thứ chạy xong. Đăng nhập lần đầu bằng `admin@test.com` / `P@ssw0rt1` — **hãy đổi mật khẩu này ngay sau lần đăng nhập đầu tiên.**

## Máy tính văn phòng chạy Windows: cũng có trên Microsoft Store

Cho một máy tính văn phòng đơn lẻ chạy Windows có một trình cài đặt riêng hoạt động không cần Docker. Bạn có thể tải trình cài đặt này trên [Klacks Store](https://klacks-software.ch/store/?culture=vi) tại trang của quốc gia bạn và cả trên [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (mục "Klacks"). Ở cả hai cửa hàng đây là cùng một trình cài đặt. Khi cài từ Microsoft Store, trình cài đặt áp dụng quốc gia được thiết lập trong Windows; ở đó bạn không chọn ngành, và nếu quốc gia đó không có hồ sơ quốc gia thì trình cài đặt không thiết lập hồ sơ nào. Cài đặt trên máy chủ, Docker và Linux cũng như các gói theo quốc gia và theo ngành chỉ có trên Klacks Store.

Trên máy tính văn phòng, các phiên bản mới được cập nhật qua Cài đặt > [Cập nhật phần mềm](../einstellungen/system-sicherheit/updates.md) trong Klacks, kể cả khi Klacks được cài từ Microsoft Store. Không thể cài một trình cài đặt mới hơn đè lên một bản cài đặt hiện có.

## Điều cần biết

- Một dịch vụ cập nhật đi kèm sẽ tự động giữ cho hệ thống của bạn luôn cập nhật — kèm sao lưu trước mỗi lần cập nhật và tự động khôi phục (rollback) nếu có sự cố.
- Dữ liệu của bạn hoàn toàn nằm trên hạ tầng của bạn; Klacks không gửi dữ liệu về đâu cả.
- Điều kiện tiên quyết là một máy chủ có Docker, có quyền truy cập Internet ra ngoài (để tải Docker image và cập nhật) và các cổng 80/443 đang mở.

---
*Có câu hỏi về việc cài đặt? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
