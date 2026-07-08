---
sidebar_position: 2
---

Trong mục Cài đặt > Cài đặt IMAP, bạn lưu một hộp thư mà Klacks sẽ liên tục truy vấn ở chế độ nền và hiển thị trong khu vực "Hộp thư đến" — nhờ đó có thể tự động theo dõi thư từ đến được gán cho nhân viên và khách hàng.

## Cách thức hoạt động

**Dữ liệu kết nối:** Server, port (mặc định 993), mã hóa SSL, tên người dùng, mật khẩu, thư mục cần truy vấn (mặc định `INBOX`) cũng như khoảng thời gian truy vấn tính bằng giây (mặc định 300).

**Điều gì xảy ra với các email đã được truy vấn:** Klacks định kỳ truy vấn hộp thư qua IMAP, kiểm tra các tin nhắn mới bằng bộ lọc spam (thư rác được chuyển vào thư mục Junk cả trong Klacks lẫn trên hộp thư thực) và tự động gán các tin nhắn còn lại cho hồ sơ khách hàng hoặc nhân viên phù hợp, nếu địa chỉ người gửi được lưu trong dữ liệu liên hệ. Nhờ đó, một lịch sử thư từ có thể lọc theo từng người được tạo ra trong "Hộp thư đến". Các thay đổi như "đánh dấu đã đọc", di chuyển hoặc xóa cũng có tác động ngược lại lên hộp thư thực.

**Kiểm tra kết nối:** Nút "Kiểm tra kết nối IMAP" thực sự kết nối với server, đăng nhập, mở thư mục đã cấu hình ở chế độ chỉ đọc và hiển thị số lượng tin nhắn tìm thấy. Nếu thư mục không tồn tại, điều này sẽ được báo cáo rõ ràng.

## Điều cần biết

- Hộp thư này **không phải** là một kênh cho các thông báo vắng mặt và **không phải** là một phần của việc tiếp nhận đơn hàng ERP (đối với việc đó có các điểm tiếp nhận riêng, xem trang riêng) — nó chỉ cung cấp dữ liệu cho "Hộp thư đến" chung.
- Cài đặt này áp dụng chung cho toàn bộ hệ thống — không có tài khoản IMAP riêng cho từng người dùng.
- Nếu khóa mã hóa của hệ thống được đặt lại, Klacks sẽ không thể giải mã mật khẩu đã lưu nữa và sẽ tạm dừng việc truy vấn cho đến khi mật khẩu được lưu lại.
- Các tin nhắn trong hộp thư đến có thể được dịch trực tiếp nếu DeepL đã được cấu hình (xem trang riêng).

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
