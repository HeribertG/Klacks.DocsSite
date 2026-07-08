---
sidebar_position: 4
---

Trong mục Cài đặt > Identity Provider, bạn kết nối Klacks với một dịch vụ thư mục bên ngoài — LDAP/Active Directory hoặc OAuth2/OpenID Connect — để tự động nhập nhân viên và/hoặc xử lý việc đăng nhập thông qua đó.

## Cách thức hoạt động

**LDAP/Active Directory:** Bạn lưu host, port (389/636), SSL, Base DN, Bind DN, mật khẩu Bind và một bộ lọc người dùng. Một công tắc "Sử dụng cho import khách hàng" kích hoạt việc import tự động: tên, họ, chức danh, công ty và địa chỉ được lấy từ các thuộc tính thư mục — với OpenLDAP và Active Directory, đôi khi dưới các tên thuộc tính khác nhau (ví dụ `uid` so với `sAMAccountName`, `street` so với `streetAddress`). Các ánh xạ trường này được cố định trong backend và không thể chỉnh sửa qua giao diện.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, tùy chọn Tenant-ID (Azure), URL ủy quyền, token và UserInfo cũng như các scope — dùng cho việc đăng nhập qua Google, Microsoft hoặc GitHub.

**Kiểm tra kết nối và đồng bộ hóa:** Đối với các nhà cung cấp LDAP/AD, "Kiểm tra kết nối" hiển thị số lượng người dùng tìm thấy kèm tên người dùng mẫu. Nếu chức năng import khách hàng đã được kích hoạt, "Đồng bộ ngay" sẽ kích hoạt một lần đồng bộ thủ công; kết quả (đã xử lý/mới/đã cập nhật/đã vô hiệu hóa) sẽ xuất hiện ngay sau đó dưới dạng thông báo trên trang.

## Điều cần biết

- Trang này **chỉ dành cho quản trị viên**, không dành cho vai trò Supervisor.
- Mật khẩu Bind và Client-Secret được lưu trữ ở dạng mã hóa và chỉ hiển thị ẩn (`***`) trên giao diện; khi lưu mà không thay đổi, giá trị hiện có vẫn được giữ nguyên.
- Hiện tại một nhật ký đồng bộ hóa lâu dài (lịch sử, lịch sử lỗi) **không** được hiển thị trên giao diện — chỉ hiển thị kết quả của lần chạy thủ công gần nhất.
- Những người không còn được tìm thấy trong thư mục sẽ không bị xóa khi đồng bộ hóa, mà bị vô hiệu hóa thông qua ngày kết thúc thành viên của họ; nếu họ xuất hiện lại sau đó, họ sẽ tự động được kích hoạt lại.
- Một mã định danh bên ngoài từ thư mục (LDAP ObjectGUID hoặc thay thế bằng Distinguished Name) ngăn chặn việc trùng lặp: nếu cùng một mã định danh được tìm thấy trong lần đồng bộ hóa tiếp theo, người đã tồn tại sẽ được cập nhật thay vì tạo mới.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
