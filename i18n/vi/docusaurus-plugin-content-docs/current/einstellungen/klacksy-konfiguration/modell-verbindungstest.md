---
sidebar_position: 5
---

# Kiểm tra kết nối mô hình

Không phải mô hình ngôn ngữ nào cũng phù hợp với Klacksy — nó phải cung cấp các lệnh gọi hàm có cấu trúc một cách đáng tin cậy thay vì trả lời bằng văn xuôi. Trong mục Cài đặt > Klacksy Kiểm tra mô hình, Klacks tự động kiểm tra điều này cho tất cả các mô hình đã được cấu hình.

## Cách thức hoạt động

**Bài kiểm tra:** Nhấp vào "Tìm mô hình tốt nhất" sẽ gửi cho mỗi mô hình đã cấu hình (kể cả những mô hình đang bị tắt) cùng một nhiệm vụ kiểm tra nhỏ: "Tạo một nhân viên mới tên là Anna Müller." Mô hình phải phản hồi bằng lệnh gọi hàm có cấu trúc phù hợp và các tham số tên chính xác — chứ không phải bằng một câu trả lời dạng văn bản. Ngoài ra, cửa sổ ngữ cảnh phải có ít nhất 32.000 token để system prompt và các khả năng của Klacksy có thể vừa vào đó. Mỗi bài kiểm tra chạy với giới hạn thời gian 30 giây.

**Kết quả:** Các mô hình đáp ứng cả hai tiêu chí được coi là "phù hợp" và tự động được kích hoạt; các mô hình không phù hợp sẽ bị vô hiệu hóa. Danh sách kết quả được sắp xếp theo mức độ phù hợp, sau đó theo khả năng gọi hàm, chi phí, độ trễ và cửa sổ ngữ cảnh.

**Đặt mô hình mặc định:** Qua nút "Đặt làm mặc định", bạn chọn trực tiếp từ danh sách kết quả mô hình nào Klacksy sẽ sử dụng làm mặc định trong tương lai. Nếu không tự chọn, Klacks sẽ tự động đặt mô hình phù hợp nhất làm mặc định.

## Điều cần biết

- Bài kiểm tra kiểm tra tất cả các mô hình đã lưu, không chỉ những mô hình đang được kích hoạt — nhờ đó, ngay cả những mô hình trước đó bị tắt cũng có thể được kích hoạt nếu vượt qua bài kiểm tra.
- Vượt qua bài kiểm tra không đồng nghĩa với việc kiểm soát chi phí: các mô hình đắt tiền nhưng phù hợp cũng sẽ được kích hoạt. Chi phí trên mỗi 1000 token được hiển thị trong danh sách kết quả.
- Bài kiểm tra này được thiết kế riêng cho khả năng gọi hàm nhằm phục vụ khả năng hành động, và độc lập với chức năng kiểm tra mô hình ở phần cài đặt ngôn ngữ, vốn chỉ yêu cầu cửa sổ ngữ cảnh thấp hơn cho việc làm sạch bản ghi thuần túy.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
