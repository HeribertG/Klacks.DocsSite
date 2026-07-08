---
sidebar_position: 1
---

# Tự động lập kế hoạch: Bản kế hoạch trong vài giây

Phần vất vả nhất của việc lập lịch làm việc — phân công người vào ca — được Klacks thực hiện chỉ với một cú nhấp chuột.

## Cách hoạt động

Đằng sau tính năng tự động lập kế hoạch chỉ với 1 cú nhấp là một **thuật toán di truyền (genetic algorithm)**: nó tạo ra hàng nghìn phương án kế hoạch, đánh giá chúng và tiếp tục kết hợp những phương án tốt nhất — cho đến khi có được một giải pháp cân bằng. Các quy tắc bắt buộc luôn được ưu tiên hàng đầu, chỉ sau đó mới đến các mục tiêu khác:

- **Quy tắc** — luật lao động, thời gian nghỉ ngơi, trình độ chuyên môn và tình trạng sẵn sàng làm việc là không thể thương lượng: dù kết quả có tốt đến đâu cũng không được vi phạm một quy tắc bắt buộc nào
- **Độ bao phủ** — mỗi ca làm việc được bố trí đủ số lượng người theo yêu cầu
- **Công bằng** — giờ làm việc được phân bổ đồng đều, và trình tự ca làm việc của mỗi người tuân theo, nếu có thể, mẫu hình Sáng → Chiều → Đêm
- **Tính liên tục** — nếu có thể, nhân viên vẫn được giữ ở nơi làm việc quen thuộc

Bạn khởi động tính năng tự động lập kế hoạch trực tiếp từ lịch làm việc cho khoảng thời gian đã chọn. Kết quả xuất hiện như một bản kế hoạch dự thảo bình thường: mọi thứ vẫn có thể điều chỉnh thủ công, không có gì bị chốt cứng mà không hỏi ý kiến.

## Điều cần biết

- Trình độ chuyên môn hoạt động như một ranh giới thực sự: ai không có trình độ chuyên môn được yêu cầu sẽ không được xếp lịch.
- Tính năng tự động lập kế hoạch tôn trọng các mục đã có sẵn — vì vậy bạn có thể đặt trước các điểm cố định rồi để phần còn lại được lấp đầy tự động.
- Nếu không hài lòng với kết quả, chỉ cần lập kế hoạch lại: thuật toán sẽ tìm ra các phương án thay thế tương đương.

![Lưới kế hoạch trực của Klacks](/img/app-schedule-de.png)

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
