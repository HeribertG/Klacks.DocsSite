---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT) là các khóa API tồn tại lâu dài, qua đó các công cụ và dịch vụ bên ngoài có thể truy cập Klacks một cách an toàn mà không cần tên người dùng và mật khẩu — ví dụ như các trợ lý AI như Claude Desktop qua Model Context Protocol (MCP), các script tự động hóa hoặc các pipeline CI/CD.

## Cách hoạt động

**Tạo token:** Trong mục Cài đặt > Personal Access Tokens, bấm vào "Tạo token mới", đặt một tên có ý nghĩa (ví dụ `Claude Desktop` hoặc `CI-Pipeline`) và chọn thời hạn hiệu lực từ 1 đến 730 ngày (mặc định: 365 ngày). Token sẽ được hiển thị theo định dạng `klacks_pat_<chuỗi ký tự ngẫu nhiên>` **đúng một lần duy nhất** sau khi tạo — hãy sao chép ngay lập tức, vì sau đó không thể truy xuất lại được nữa.

**Sử dụng:** Token được gửi dưới dạng Bearer-Token trong header `Authorization` của mỗi yêu cầu API, ví dụ `Authorization: Bearer klacks_pat_...`. Đối với các client MCP như Claude Desktop, bạn nhập token này làm biến môi trường `AUTHORIZATION` của máy chủ MCP, trỏ đến `/mcp`.

**Quản lý:** Bảng tổng quan hiển thị tên, ngày tạo, ngày hết hạn và lần sử dụng cuối cùng của mỗi token — bản thân token dạng văn bản thuần sẽ không bao giờ được hiển thị lại ở đó. Các token sẽ hết hạn trong 30 ngày tới được đánh dấu trong danh sách. Qua nút Thu hồi, một token bị khóa ngay lập tức và vĩnh viễn.

## Nên biết

- Klacks chỉ lưu trữ một hash SHA-256 của token, không bao giờ lưu token dạng văn bản thuần — một token bị mất không thể khôi phục được, chỉ có thể thu hồi và tạo lại.
- Mỗi token được gắn với tài khoản người dùng của bạn và có cùng quyền hạn như chính tài khoản của bạn — không có giới hạn phạm vi (scope) chi tiết theo từng token.
- Hãy sử dụng một token riêng cho mỗi công cụ, để khi nghi ngờ có sự lạm dụng, bạn có thể thu hồi có mục tiêu mà không làm gián đoạn các tích hợp khác.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
