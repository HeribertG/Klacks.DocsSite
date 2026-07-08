---
sidebar_position: 7
---

# Quy tắc chống spam

Trong mục Cài đặt > Quy tắc chống spam, bạn định nghĩa các quy tắc lọc để tự động phân loại các email đến trong mô-đun Inbox là spam — các quy tắc này có hiệu lực cả khi đang lấy email mới (IMAP-Polling) lẫn khi đánh giá lại các email đã nhận trước đó.

## Cách hoạt động

**Tạo quy tắc:** Chọn một loại quy tắc — Người gửi chứa, Tên miền người gửi, Chủ đề chứa hoặc Nội dung chứa — nhập mẫu cần kiểm tra và bấm Thêm.

**Quản lý quy tắc:** Mỗi quy tắc có thể được kích hoạt hoặc vô hiệu hóa qua một hộp kiểm mà không cần xóa, cũng như xóa vĩnh viễn qua nút thùng rác.

## Nên biết

- Các quy tắc bị vô hiệu hóa vẫn được lưu lại, nhưng không còn tác động đến các email mới hoặc được đánh giá lại — hữu ích để tạm ngưng một quy tắc thay vì xóa nó.
- Klacks sử dụng cùng một hộp thư đến cho việc nhập đơn hàng ERP như mô-đun Inbox email thông thường (kiến trúc một hộp thư). Vì vậy, một quy tắc được đặt quá rộng (ví dụ toàn bộ một tên miền người gửi) về lý thuyết cũng có thể phân loại các email đơn hàng ERP đến là spam — hãy kiểm tra cẩn thận các quy tắc mới trước khi kích hoạt chúng.
- Hãy sử dụng các quy tắc theo tên miền người gửi để chặn toàn bộ các tổ chức gửi không mong muốn, thay vì ghi lại từng địa chỉ riêng lẻ dưới dạng quy tắc người-gửi-chứa.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
