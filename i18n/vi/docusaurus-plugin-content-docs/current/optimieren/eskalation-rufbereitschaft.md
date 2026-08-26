---
sidebar_position: 8
---

# Leo thang và trực gọi

Có người vắng mặt đột xuất, và ca làm việc bắt đầu trong vài giờ nữa. Klacks khi đó không đánh thức cả đội một cách bừa bãi, mà xử lý theo một danh sách trực gọi đã thiết lập sẵn — từng người một, cho đến khi có người nhận.

## Cách hoạt động

- **Chuỗi leo thang được kích hoạt khi xử lý một trường hợp vắng mặt**: Với mỗi ngày bị ảnh hưởng mà người vắng mặt có một ca làm việc, Klacks tạo ra một đợt leo thang riêng — gắn với đúng ca làm việc đó (xem [Theo dõi vắng mặt](./absenzen-im-blick.md)).
- **Bạn thiết lập danh sách trực gọi một lần duy nhất**: Trong mục Cài đặt > Danh sách trực gọi leo thang, có tất cả người dùng có khả năng hiển thị theo nhóm và đã lưu số điện thoại. Bạn xác định thứ tự bằng kéo & thả, thứ tự này được lưu ngay lập tức — một thứ tự áp dụng cho toàn bộ hoạt động.
- **Ai thực sự được gọi sẽ được quyết định trong tình huống thực tế**: Từ thứ tự của bạn, Klacks lấy những người có khả năng hiển thị trên nhóm cấp trên, bỏ qua tất cả những người hiện đang được ghi là vắng mặt, và gắn quản trị viên vào cuối như lưới an toàn.
- **Việc thông báo được thực hiện qua nhiều kênh**: Yêu cầu luôn xuất hiện trong hộp thư đến của Klacks, hiện ngay trong ứng dụng đối với những người đang đăng nhập, và ngoài ra còn được gửi qua kênh nhắn tin đã kết nối — vì vào lúc 3 giờ sáng, không ai ngồi trước một trình duyệt đang mở. Việc kết nối với ứng dụng nhắn tin và việc tự động chuyển sang người tiếp theo trong chuỗi được kích hoạt riêng cho từng bản cài đặt.
- **Đồng ý chỉ bằng một từ**: Người đang được yêu cầu trả lời ngắn gọn qua ứng dụng nhắn tin («Tôi nhận»); quản trị viên có thể dùng *Nhận* trên trang *Các đợt leo thang đang diễn ra* thay vào đó. Sau đó, người đồng ý nhận được một xác nhận, tất cả những người đã được hỏi trước đó nhận được một ghi chú im lặng — không ai bị đánh thức lần thứ hai.

## Điều cần biết

- Thời hạn không phải là thời điểm bắt đầu ca làm việc, mà là một khoảng thời gian chuẩn bị trước đó (mặc định là hai giờ) — nhờ đó người nhận vẫn còn thời gian để lên đường.
- Klacks tính thời gian mỗi bậc được phép dùng dựa trên thời hạn còn lại: ca làm việc càng gần, các vòng càng ngắn. Nếu quá gấp để hỏi lần lượt, Klacks sẽ hỏi tất cả những người còn lại cùng một lúc.
- Trên trang *Các đợt leo thang đang diễn ra*, bạn thấy trạng thái của từng bậc — đang chờ, đã hỏi, đã nhận, không có phản hồi, đã bỏ qua hoặc đã hủy. Nếu có một đợt leo thang đang diễn ra, một biểu tượng cảnh báo sẽ xuất hiện thêm ở thanh tiêu đề.
- Danh sách trực gọi và trang tổng quan chỉ dành cho quản trị viên (xem [Vai trò và quyền hạn](../erste-schritte/rollen-und-rechte.md)). Quản trị viên được phép hủy một đợt leo thang đang diễn ra — kèm lý do, để sau này vẫn có thể theo dõi được vì sao chuỗi bị dừng lại.
- Ai không có số điện thoại trong tài khoản người dùng sẽ hoàn toàn không xuất hiện trong danh sách trực gọi. Đối với yêu cầu qua ứng dụng nhắn tin, cần thêm một liên hệ nhắn tin đã được liên kết. Bạn quản lý các khoảng vắng mặt của bộ phận trực gọi trực tiếp trong cùng danh sách đó: từ–đến, kèm lý do tùy chọn, có thể đặt vĩnh viễn nếu muốn.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
