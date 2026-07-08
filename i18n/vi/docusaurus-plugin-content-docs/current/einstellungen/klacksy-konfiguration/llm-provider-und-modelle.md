---
sidebar_position: 1
---

# Nhà cung cấp LLM và các mô hình

Klacksy cần một mô hình ngôn ngữ để hiểu và hành động. Trong mục Cài đặt > LLM-Provider, LLM-Modelle và LLM-Sync-Log, bạn xác định những nhà cung cấp và mô hình cụ thể nào mà Klacks được phép sử dụng cho việc này.

## Cách thức hoạt động

**Thêm nhà cung cấp:** Một nhà cung cấp (Provider) gộp chung URL cơ sở, phiên bản API và khóa API của một đơn vị cung cấp. Sáu nhà cung cấp (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) được tích hợp cố định trong mã nguồn; mọi nhà cung cấp khác đều chạy qua một kết nối chung, tương thích chuẩn OpenAI — nhờ đó có thể tích hợp ví dụ Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity hoặc một mô hình do bạn tự vận hành. Qua chức năng "Tìm nhà cung cấp", Klacks còn đề xuất thêm những nhà cung cấp mà bạn chưa tạo: từ một danh mục các địa chỉ đã được xác minh, hoặc — nếu đã cấu hình tìm kiếm trên internet — thông qua tra cứu trực tuyến. Mỗi đề xuất đều được kiểm tra khả năng truy cập trực tiếp trước khi hiển thị; các nhà cung cấp được chọn sẽ được tạo ở trạng thái tắt và không có khóa API, mà bạn sẽ tự bổ sung sau đó.

**Khóa API và mức ưu tiên:** Sau khi lưu, khóa sẽ không bao giờ được hiển thị lại dưới dạng văn bản rõ trên giao diện — chỉ hiển thị việc đã có khóa hay chưa ("Đã cấu hình"). Mức ưu tiên xác định thứ tự sử dụng các nhà cung cấp đang được kích hoạt.

**Quản lý mô hình:** Trong mục LLM-Modelle, bạn tạo từng mô hình riêng lẻ theo từng nhà cung cấp (tên hiển thị, ID mô hình kỹ thuật của nhà cung cấp, cửa sổ ngữ cảnh, số token tối đa, chi phí trên mỗi 1000 token đầu vào/đầu ra). Một mô hình có thể được đánh dấu là mô hình mặc định; không thể xóa một nhà cung cấp chừng nào một trong các mô hình của nó vẫn đang là mô hình mặc định hiện tại.

**LLM-Sync-Log:** Một dịch vụ nền theo mặc định tự động kiểm tra mỗi 24 giờ xem những mô hình nào mới khả dụng hoặc đã ngừng cung cấp ở các nhà cung cấp đang kích hoạt. Các mô hình mới được kiểm tra trước bằng một yêu cầu thử nghiệm thực sự và chỉ được thêm vào ở trạng thái kích hoạt nếu thành công; các mô hình không còn được cung cấp sẽ tự động bị vô hiệu hóa. Nhật ký đồng bộ hiển thị toàn bộ lịch sử theo từng nhà cung cấp kèm ngày tháng, số lượng mô hình mới/bị vô hiệu hóa/thất bại và kết quả kiểm tra có thể mở rộng xem chi tiết. Quản trị viên sẽ nhận thêm một thông báo dạng toast về các sự kiện đồng bộ chưa đọc ngay sau lần đăng nhập tiếp theo.

## Điều cần biết

- Chỉ có sáu nhà cung cấp (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) có triển khai riêng biệt — tất cả các nhà cung cấp còn lại đều chạy qua một kết nối chung, tương thích chuẩn OpenAI.
- Danh mục cho "Tìm nhà cung cấp" hiện đang chứa mười hai nhà cung cấp đã được xác minh; các đề xuất từ web chỉ xuất hiện khi đã cấu hình tìm kiếm trên internet trong mục Cài đặt.
- Dịch vụ nhật ký đồng bộ chạy độc lập với phiên làm việc của bạn ở chế độ nền — bạn không cần phải giữ trang mở để dịch vụ này hoạt động.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
