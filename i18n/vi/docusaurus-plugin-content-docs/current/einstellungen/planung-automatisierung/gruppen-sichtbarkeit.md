---
sidebar_position: 5
---

Tại Cài đặt > Khả năng hiển thị nhóm theo từng người dùng, bạn xác định người dùng nào được phép xem những nhóm nào — và qua đó là những dữ liệu liên quan nào.

## Cách hoạt động

Danh sách hiển thị tất cả người dùng cùng tên và số lượng nhóm gốc (root) được gán (hiển thị) cho họ. Nhấp vào con số sẽ mở một biểu mẫu với danh sách checkbox chứa tất cả các nhóm gốc; tại đây bạn đánh dấu những nhóm mà người dùng này được phép xem. Khi một nhóm gốc được cấp quyền xem, điều này tự động áp dụng cho tất cả các nhóm con của nó.

Quản trị viên được miễn trừ khỏi giới hạn này: đối với họ, nút này bị vô hiệu hóa, và con số hiển thị luôn tương ứng với tổng số tất cả các nhóm gốc — quản trị viên về nguyên tắc nhìn thấy tất cả.

## Điều cần biết

- Đối với một người dùng thông thường (không phải admin) không có bất kỳ gán nào, "0 nhóm được gán" có nghĩa là: người dùng này hiện **không nhìn thấy gì** trong các khu vực bị giới hạn theo nhóm (ví dụ: Dashboard, danh sách khách hàng) — đây không phải là lỗi mà là hệ quả trực tiếp của việc chưa được gán.
- Ngoại lệ: nếu hệ thống hiện tại **không có** nhóm nào, tất cả người dùng sẽ nhìn thấy tất cả — các bản cài đặt không có cấu trúc nhóm vì vậy không cần bảo trì cài đặt này.
- Hãy tạo cấu trúc nhóm trong dữ liệu gốc trước, rồi mới thực hiện gán ở đây — nếu không có nhóm nào tồn tại thì sẽ không có gì để đánh dấu ở đây.
- Cài đặt này kiểm soát **khả năng hiển thị** của dữ liệu, không phải **quyền hạn** cơ bản của một vai trò — vai trò/quyền được quản lý độc lập với cài đặt này.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
