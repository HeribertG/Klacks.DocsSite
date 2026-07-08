---
sidebar_position: 3
---

# Lưu giữ dữ liệu

Trong mục Cài đặt > Lưu giữ dữ liệu, bạn xác định thời gian các bản ghi đã xóa — nhân viên, địa chỉ, nhóm, dịch vụ, thời gian làm việc, vắng mặt, giờ nghỉ và nhiều hơn nữa — được giữ lại trong hệ thống trước khi bị xóa vĩnh viễn.

## Cách hoạt động

**Xóa hai giai đoạn:** Khi bạn xóa một bản ghi trong Klacks, trước tiên nó chỉ được đánh dấu xóa mềm (soft-delete) (được đánh dấu là đã xóa, nhưng vẫn tồn tại về mặt vật lý). Chỉ sau khi hết thời hạn được cấu hình ở đây, một dịch vụ nền chạy hàng ngày mới xóa các dòng được đánh dấu đã xóa **vĩnh viễn và không thể khôi phục** khỏi cơ sở dữ liệu — trên tất cả các bảng liên quan, không chỉ cho một khu vực đơn lẻ.

**Thiết lập thời hạn lưu giữ:** Trường nhập nhận các giá trị từ 30 đến 36.500 ngày (khoảng 1 tháng đến 100 năm); bên cạnh đó Klacks còn hiển thị thời hạn theo năm/tháng. Giá trị mặc định là 3.650 ngày (10 năm).

## Nên biết

- Việc rút ngắn thời hạn cũng ảnh hưởng đến các bản ghi đã tồn tại từ trước, đã được xóa từ lâu: mọi thứ cũ hơn thời hạn mới sẽ bị xóa ở lần chạy tiếp theo của dịch vụ nền — hãy kiểm tra trước khi rút ngắn xem điều này có phải là điều bạn mong muốn hay không.
- Việc xóa vật lý là vĩnh viễn — sau đó không còn khả năng khôi phục, kể cả thông qua bộ phận hỗ trợ.
- Cài đặt này là nền tảng kỹ thuật của các thời hạn xóa được mô tả trong tuyên bố bảo vệ dữ liệu; nó có hiệu lực toàn cục cho tất cả các loại dữ liệu hỗ trợ xóa mềm, không thể cấu hình riêng theo từng mô-đun.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
