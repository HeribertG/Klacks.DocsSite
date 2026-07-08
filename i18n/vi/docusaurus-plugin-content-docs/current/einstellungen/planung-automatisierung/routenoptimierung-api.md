---
sidebar_position: 4
---

Tại Cài đặt > OpenRoute, bạn lưu khóa API cho dịch vụ bên ngoài openrouteservice.org mà Klacks sử dụng để tối ưu hóa tuyến đường.

## Cách hoạt động

OpenRouteService tính toán thời gian di chuyển và khoảng cách — cho lái xe, đi xe đạp và đi bộ — và qua đó cung cấp nền tảng cho việc tối ưu hóa tuyến đường trong Klacks. Bạn nhập khóa API cá nhân của mình vào trường duy nhất trên trang này. Bạn có thể lấy một khóa miễn phí qua liên kết đăng ký được liên kết trên trang tới openrouteservice.org.

## Điều cần biết

- Khóa được gửi trực tiếp từ trình duyệt đến openrouteservice.org và vì vậy được cố ý hiển thị **ở dạng văn bản thuần** thay vì che dấu (`***`) — khác với ví dụ như mật khẩu email. Điều này được thiết kế như vậy để bạn có thể nhận ra một lỗi gõ vô tình hoặc một khóa đã hết hạn, đây không phải là lỗi hiển thị.
- Trong cơ sở dữ liệu, khóa vẫn được lưu trữ ở dạng mã hóa.
- Nếu không có khóa hợp lệ, tính năng tối ưu hóa tuyến đường sẽ không hoạt động — thời gian di chuyển và khoảng cách khi đó không thể được tính toán.
- Đối với việc chuyển đổi thuần túy từ địa chỉ sang tọa độ (Geocoding), Klacks sử dụng một dịch vụ khác, riêng biệt — khóa này chỉ dành riêng cho việc tính toán tuyến đường.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
