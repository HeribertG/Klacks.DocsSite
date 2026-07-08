---
sidebar_position: 3
---

Trong mục Cài đặt > DeepL, bạn lưu một khóa API DeepL để Klacks có thể tự động dịch văn bản — hiện tại chủ yếu là các email đến trong hộp thư đến.

## Cách thức hoạt động

**Khóa API:** Một ô nhập duy nhất nhận khóa API DeepL (định dạng `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` cho API Free miễn phí, hoặc không có hậu tố `:fx` đối với API Pro trả phí). Klacks tự động nhận diện dựa trên hậu tố `:fx` để biết địa chỉ API nào trong hai địa chỉ DeepL sẽ được sử dụng — không cần chuyển đổi riêng giữa Free và Pro. Bạn có thể tạo tài khoản và lấy khóa tại deepl.com/pro-api.

**Cách sử dụng:** Trong "Hộp thư đến", mỗi email có thể được dịch sang ngôn ngữ giao diện đang được cài đặt thông qua biểu tượng Dịch; bản gốc và bản dịch có thể so sánh qua nút chuyển đổi. Nếu không có khóa được lưu, chức năng này sẽ không khả dụng.

## Điều cần biết

- Cài đặt này áp dụng chung cho toàn bộ hệ thống — không có khóa riêng cho từng người dùng.
- Không có nút "Kiểm tra" riêng trên trang này; việc khóa có hoạt động hay không sẽ được thể hiện ở lần thử dịch đầu tiên trong hộp thư đến.
- Nếu khóa không hợp lệ hoặc đã hết hạn, Klacks sẽ nhận biết điều này qua phản hồi từ DeepL (lỗi xác thực) và báo lỗi này thay vì hiển thị một bản dịch trống hoặc sai.
- Khóa được lưu trữ ở dạng mã hóa và được hiển thị ẩn đi trong biểu mẫu.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
