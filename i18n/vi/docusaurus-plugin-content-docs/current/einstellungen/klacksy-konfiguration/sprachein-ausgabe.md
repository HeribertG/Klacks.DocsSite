---
sidebar_position: 3
---

# Nhập và xuất giọng nói

Klacksy cũng có thể được điều khiển bằng giọng nói — trong mục Cài đặt > Klacksy Giọng nói, bạn thiết lập dịch vụ nào sẽ chuyển giọng nói của bạn thành văn bản (Speech-to-Text) và giọng nói nào Klacksy sẽ dùng để trả lời (Text-to-Speech).

## Cách thức hoạt động

**Nhận dạng giọng nói (STT):** Có bốn engine để lựa chọn — trình duyệt miễn phí (Web Speech API), Deepgram (streaming thời gian thực), Groq Whisper (nhanh và rẻ) cũng như AssemblyAI (streaming). Đối với tất cả trừ trình duyệt, bạn lưu một khóa API riêng và có thể kiểm tra kết nối trực tiếp.

**Xuất giọng nói (TTS):** Cũng có bốn nhà cung cấp — Edge TTS (miễn phí), OpenAI TTS, ElevenLabs và Google Cloud TTS. Tùy theo nhà cung cấp được chọn, Klacks sẽ tự động tải về các giọng đọc khả dụng; ở đây cũng có thể kiểm tra kết nối.

**Chế độ xuất:** Xác định liệu các câu trả lời chỉ hiển thị dưới dạng văn bản, chỉ dưới dạng âm thanh, dưới dạng văn bản với khả năng kích hoạt giọng nói thủ công, hay dưới dạng văn bản với giọng nói tự động. Chức năng phát hiện khoảng lặng (500–3000 ms, mặc định 1500 ms) xác định thời gian chờ sau khi nói xong trước khi bản ghi âm được gửi đi tự động.

**Làm sạch bản ghi:** Nếu tùy chọn này được kích hoạt, văn bản STT thô sẽ được đưa qua một LLM để loại bỏ các từ đệm, giải quyết các lần tự sửa lỗi và làm mượt ngữ pháp/số liệu. Bạn tự chọn mô hình được sử dụng cho việc này; qua chức năng "Tìm mô hình tốt nhất", Klacks kiểm tra tất cả các mô hình đã kích hoạt có cửa sổ ngữ cảnh từ 16.000 token trở lên và đề xuất những ứng viên rẻ nhất, nhanh nhất (timeout 30 giây cho mỗi mô hình). Prompt làm sạch có thể chỉnh sửa và có thể đặt lại về cài đặt gốc.

**Từ điển:** Đối với các thuật ngữ mà nhận dạng giọng nói thường xuyên hiểu sai (ví dụ tên riêng hoặc thuật ngữ chuyên ngành), bạn tạo các mục nhập với thuật ngữ đúng, danh mục, các biến thể phát âm và tùy chọn gán ngôn ngữ — Klacksy sẽ sửa các thuật ngữ này một cách có mục tiêu.

## Điều cần biết

- Chế độ trình duyệt không cần khóa API, nhưng phụ thuộc vào khả năng nhận dạng giọng nói của trình duyệt tương ứng và không thể so sánh về chất lượng với các dịch vụ trả phí.
- Sau khi lưu, khóa API chỉ được hiển thị là "Đã cấu hình", không bao giờ hiển thị dưới dạng văn bản rõ nữa.
- Kiểm tra mô hình ở đây chỉ kiểm tra sự phù hợp cho việc làm sạch bản ghi (cửa sổ ngữ cảnh ≥ 16.000 token) — đối với sự phù hợp tổng quát làm mô hình chính của Klacksy, có một bài kiểm tra riêng, nghiêm ngặt hơn (xem Kiểm tra kết nối mô hình).

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
