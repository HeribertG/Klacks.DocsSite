---
sidebar_position: 4
---

# Vai trò và quyền hạn

Klacks chỉ có đúng hai cấp quyền có thể gán cho tài khoản đăng nhập: **Supervisor** và **Admin**. Không có vai trò thứ ba, độc lập về mặt kỹ thuật — các thuật ngữ như "Người lập kế hoạch" được mô tả dưới đây chỉ là một **chức năng trong công việc thường ngày**, chứ không phải một cấp quyền bổ sung.

## Hai vai trò thực sự

**Supervisor** được phép tạo, chỉnh sửa và xóa địa chỉ, nhóm, hợp đồng, vắng mặt và ca làm việc, cũng như phê duyệt một ngày hoặc một nhóm trong bảng phân công ca và rút lại phê duyệt đó. Ngược lại, việc chỉ xác nhận từng giờ làm việc riêng lẻ không cần vai trò đặc biệt nào — bất kỳ tài khoản đăng nhập nào cũng có thể làm được.

**Admin** được phép làm thêm mọi thứ mà Supervisor có thể làm, cộng với: quyền truy cập vào tất cả cài đặt (bao gồm cả chính việc quản lý người dùng), chốt và mở lại các kỳ, cũng như quản lý các khu vực được bảo vệ đặc biệt như Identity Provider, báo cáo và quy tắc lịch.

Việc gán vai trò được thực hiện qua một menu thả xuống trong phần quản lý người dùng (biểu tượng bánh răng) và có hiệu lực ngay lập tức, không cần bấm nút lưu riêng.

## "Người lập kế hoạch" là một chức năng, không phải một vai trò

Trong thực tế hàng ngày, thường một tài khoản Supervisor sẽ đảm nhận công việc lập kế hoạch thực sự — khởi động lập kế hoạch tự động, điều chỉnh trong lưới kế hoạch bằng thao tác kéo-thả, gửi các ngày hoặc nhóm để phê duyệt. Đây không phải là một cấp quyền riêng, mà đơn giản chỉ là những quyền mà một tài khoản Supervisor vốn đã có sẵn.

## Điều cần biết

- Người dùng đăng nhập gần nhất sẽ được hiển thị trong phần quản lý người dùng, nhưng không thể tự chỉnh sửa, thay đổi quyền hạn của chính mình hoặc tự xóa mình tại đó.
- Việc chốt hoặc mở lại kỳ một cách dứt khoát vẫn luôn thuộc thẩm quyền riêng của Admin — ngay cả khi Supervisor đã phê duyệt các ngày hoặc nhóm.
- Một tài khoản đăng nhập không nhất thiết phải được liên kết với một hồ sơ dữ liệu gốc của nhân viên — quản lý người dùng và quản lý con người là hai khu vực tách biệt.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
