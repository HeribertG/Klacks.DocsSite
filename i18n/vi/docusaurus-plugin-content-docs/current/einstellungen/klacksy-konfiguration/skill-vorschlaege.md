---
sidebar_position: 6
---

# Đề xuất Skill của Klacksy

Klacksy học từ chính những lỗi của mình: nếu bạn sửa lại trong khung chat rằng Klacksy đã chọn sai kỹ năng (skill), hệ thống sẽ ghi nhớ sự chỉnh sửa này. Trong mục Cài đặt > Klacksy Đề xuất kỹ năng, quản trị viên có thể xem những cải tiến nào được đề xuất cho các mô tả skill dựa trên đó, và quyết định có áp dụng hay không.

## Cách thức hoạt động

**Các đề xuất đến từ đâu:** Khi Klacksy chọn sai kỹ năng (Skill) cho một yêu cầu trong khung chat và người dùng sửa lại điều đó, chuỗi hội thoại này sẽ được đánh dấu là "đã được sửa". Một bộ tối ưu hóa nội bộ phân tích các chuỗi đã được sửa như vậy và từ đó rút ra những thay đổi văn bản cụ thể cho các mô tả skill — với mục tiêu để Klacksy gán đúng kỹ năng liên quan vào lần tiếp theo.

**Tạo đề xuất:** Nút "Tạo đề xuất" kích hoạt việc phân tích 30 chuỗi hội thoại đã được sửa gần đây nhất và tạo ra các đề xuất mới từ đó, nếu tìm thấy các mẫu phù hợp.

**Một thẻ đề xuất hiển thị:** skill liên quan và trường đã bị thay đổi, sự thay đổi ở dạng so sánh trước/sau, một lý giải tại sao sự thay đổi này hợp lý, cũng như — có thể mở rộng — các yêu cầu cụ thể của người dùng đã dẫn đến đề xuất này.

**Quyết định:** Mỗi đề xuất đang chờ được xử lý riêng lẻ bằng cách **chấp nhận** (mô tả skill sẽ được thay đổi ngay lập tức) hoặc **từ chối** (đề xuất bị loại bỏ mà không có gì thay đổi). Không có việc tự động áp dụng — luôn luôn có con người tham gia quyết định.

## Điều cần biết

- Nếu không có sự chỉnh sửa nào trong khung chat, sẽ không có đề xuất nào được tạo ra — hệ thống cần những lần sửa lỗi thực tế làm cơ sở huấn luyện, chứ không chỉ là việc sử dụng thông thường.
- Chức năng này chỉ thay đổi các đoạn văn mô tả của các kỹ năng để Klacksy chọn đúng chúng — nó không thay đổi những gì một kỹ năng thực sự làm.
- Chức năng này yêu cầu quyền quản trị viên.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
