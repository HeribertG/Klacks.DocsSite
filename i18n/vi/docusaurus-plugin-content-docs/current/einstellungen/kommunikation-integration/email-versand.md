---
sidebar_position: 1
---

Trong mục Cài đặt > Cài đặt Email, bạn lưu máy chủ SMTP mà Klacks sử dụng để gửi email đi — ví dụ như các thông báo, email đặt lại mật khẩu hoặc các tin nhắn do Klacksy gửi.

## Cách thức hoạt động

**Dữ liệu kết nối:** Bạn nhập server, port, timeout, chế độ SSL/TLS, loại xác thực (Không, LOGIN, NTLM, GSSAPI, WDIGEST) cũng như tên người dùng và mật khẩu. Ngoài ra, bạn có thể cấu hình xác nhận đã đọc/thông báo gửi thành công và một địa chỉ trả lời. Chế độ SSL/TLS còn được suy ra từ port: port 465 sử dụng SSL trực tiếp, port 587 (hoặc SSL được kích hoạt) sử dụng StartTLS.

**Lưu:** Không có nút lưu rõ ràng — mỗi trường được tự động lưu sau một khoảng trễ ngắn ngay khi bạn thay đổi nó.

**Kiểm tra kết nối:** Nút "Gửi email kiểm tra" thiết lập một kết nối SMTP thực sự, xác thực và gửi một email kiểm tra thực tế đến địa chỉ người dùng đã lưu. Đây không chỉ là một kiểm tra kết nối đơn thuần, mà là một lần gửi thư thực sự — hữu ích để xác minh ngay lập tức dữ liệu truy cập. Đối với các nhà cung cấp phổ biến (Outlook, Gmail, Yahoo, GMX, v.v.), Klacks bắt buộc yêu cầu một loại xác thực khác "Không".

## Điều cần biết

- Cài đặt này áp dụng chung cho toàn bộ hệ thống — không có tài khoản SMTP riêng cho từng người dùng.
- Chỉ người có quyền quản trị viên mới có thể cấu hình trang này.
- Mật khẩu được lưu trữ ở dạng mã hóa và có thể ẩn/hiện trong biểu mẫu bằng một biểu tượng con mắt, không bao giờ được hiển thị dưới dạng văn bản rõ.
- Nếu kiểm tra kết nối thất bại, Klacks sẽ báo cáo lý do cụ thể (ví dụ lỗi xác thực, lỗi bắt tay SSL, hết thời gian chờ) thay vì một thông báo lỗi chung chung.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
