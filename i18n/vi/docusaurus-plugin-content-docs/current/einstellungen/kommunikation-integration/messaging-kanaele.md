---
sidebar_position: 6
---

Trong mục Cài đặt > Nhà cung cấp nhắn tin, bạn kết nối các kênh chat và SMS bên ngoài mà Klacks (và Klacksy) có thể dùng để nhắn tin trực tiếp cho nhân viên và khách hàng — thay thế hoặc bổ sung cho email.

## Cách thức hoạt động

**Nguyên tắc chung:** Tất cả các kênh đều được cấu hình qua cùng một danh sách: tên nội bộ, tên hiển thị, loại nhà cung cấp và dữ liệu truy cập khác nhau tùy theo kênh (token, ID tài khoản, chứng chỉ, v.v.), cùng với một công tắc bật/tắt và một nút kiểm tra cho mỗi mục để kiểm tra kết nối ngay lập tức. Ai sẽ nhận được một tin nhắn được xác định thông qua mã định danh riêng của kênh (số điện thoại, tên người dùng, User-ID, v.v.) được lưu tại mục Địa chỉ > Dữ liệu liên hệ của nhân viên hoặc khách hàng — bạn không cần phải tự gõ các ID thô.

**Messaging được sử dụng trong Klacks để làm gì:** như một kênh thông báo bổ sung bên cạnh email, ví dụ cho các thông báo từ lịch làm việc hoặc tin nhắn từ Klacksy — tùy thuộc vào những kênh nào đã được kích hoạt và được lưu cho từng người.

**Tổng quan 11 kênh:**

| Kênh | Gửi/Nhận | Đặc điểm |
|---|---|---|
| Slack | Gửi + Nhận | Bot còn phải được mời rõ ràng vào từng kênh bằng lệnh `/invite`. |
| Telegram | Gửi + Nhận | Người nhận phải tự kích hoạt bot trước bằng lệnh `/start`. |
| Signal | Chỉ gửi | Yêu cầu một cầu nối signal-cli tự vận hành (Docker) với số điện thoại riêng được liên kết qua mã QR — không có API đám mây chính thức. |
| Microsoft Teams | Chỉ gửi | Một webhook Power Automate cho mỗi kênh; không có tin nhắn 1:1, cần nhiều mục nhập cho nhiều kênh Teams. |
| SMS | Chỉ gửi | Số điện thoại theo định dạng E.164; đối với tài khoản dùng thử (ví dụ Twilio) chỉ gửi đến các số đã được xác minh trước, quốc gia đích phải được kích hoạt. |
| WeChat | Chỉ gửi | Việc xác minh là Official Account bên ngoài Trung Quốc khá phức tạp; chỉ tiếp cận được những người theo dõi có tương tác trong 48 giờ gần nhất. |
| KakaoTalk | Chỉ gửi | Token truy cập chỉ có hiệu lực khoảng 6 giờ và phải được gia hạn thủ công; người nhận phải là "bạn bè" của ứng dụng. |
| Line | Gửi + Nhận | Hạn ngạch gửi tin hàng tháng bị giới hạn tùy theo gói; ID người nhận chỉ được biết đến sau khi có một tin nhắn gửi đến. |
| Threema | Chỉ gửi | Tài khoản Threema Gateway trả phí (mô hình số dư); không nhận được, vì không sử dụng chế độ mã hóa đầu cuối. |
| Viber | Gửi + Nhận | Bot chỉ được phép nhắn cho những người đã đăng ký theo dõi trước đó; webhook cần HTTPS có thể truy cập công khai. |
| Zalo | Chỉ gửi | Token truy cập hết hạn sau khoảng 25 giờ, chỉ có thể gửi trong một khung thời gian tương tác. |

## Điều cần biết

- Mỗi kênh đều có một sổ tay hướng dẫn chi tiết riêng với các bước thiết lập cụ thể tại nhà cung cấp tương ứng — có thể xem trực tiếp trên trang cài đặt của từng mục nhà cung cấp.
- Nhiều kênh có thể đang hoạt động song song; kênh nào thực sự được sử dụng phụ thuộc vào dữ liệu liên hệ nào được lưu cho từng người.
- Đối với tất cả các kênh có token truy cập giới hạn thời gian (ví dụ KakaoTalk, Zalo), token này phải được gia hạn bên ngoài Klacks tại nhà cung cấp và bổ sung lại vào Klacks, nếu không việc gửi tin qua kênh này sẽ bị gián đoạn.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
