---
sidebar_position: 1
---

Tại Cài đặt > Quy tắc lập kế hoạch (Giá trị mặc định), bạn xác định các giá trị sẽ được điền sẵn tự động khi tạo một hợp đồng mới hoặc một quy tắc lập kế hoạch mới.

## Cách hoạt động

Trang này gộp nhiều nhóm giá trị điền sẵn:

- **Giờ làm việc:** Giờ làm việc hàng ngày (giờ định mức), giới hạn giờ làm thêm (giờ/tuần), số giờ đảm bảo, tối thiểu và tối đa hàng tháng cũng như số giờ toàn thời gian.
- **Ngưỡng giới hạn quy tắc lập kế hoạch:** Số ngày làm việc tối đa, số ngày nghỉ tối thiểu giữa hai khối làm việc, số giờ nghỉ tối thiểu giữa hai ngày làm việc, khoảng cách tối ưu tối đa giữa các ca, số giờ tối đa mỗi ngày/tuần và số ngày làm việc liên tiếp tối đa — cùng những đại lượng mà một quy tắc lập kế hoạch riêng lẻ cũng định nghĩa.
- **Phụ cấp:** Phụ cấp đêm, ngày lễ, thứ Bảy và Chủ Nhật tính theo phần trăm.
- **Ngày làm việc mặc định và cuối tuần:** Những ngày trong tuần nào được coi là ngày làm việc, có áp dụng làm việc theo ca (ca sáng/chiều/đêm) hay không, những ngày nào được tính là cuối tuần và tuần bắt đầu vào ngày nào trong tuần.
- **Lệnh lập kế hoạch (Từ khóa):** Các lệnh văn bản `FREE`, `EARLY`, `LATE`, `NIGHT` cũng như dạng phủ định tương ứng `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` có thể cấu hình tại đây. Khi một người gõ trực tiếp những từ này vào một ô ngày trong lịch trực, Klacks không nhận diện đó là ghi chú mà là một nguyện vọng: `FREE` nghĩa là "vào ngày này không phân công nếu có thể", `EARLY`/`LATE`/`NIGHT` ưu tiên hoặc bắt buộc một loại ca cụ thể, các biến thể phủ định loại trừ điều ngược lại. Cả tính năng Tự động lập kế hoạch lẫn Harmonizer đều xem xét những nguyện vọng này như một yêu cầu đầu vào.

## Điều cần biết

- Trang này quản lý các **giá trị mặc định toàn hệ thống** — thay đổi chỉ ảnh hưởng đến các hợp đồng hoặc quy tắc lập kế hoạch **mới** được tạo, không có hiệu lực hồi tố đối với những cái đã tồn tại.
- Các ngưỡng giới hạn quy tắc lập kế hoạch ở đây giống hệt với những gì bạn thường thiết lập riêng cho từng hợp đồng — ở đây bạn chỉ xác định giá trị khởi đầu mà một hợp đồng mới sẽ nhận được.
- Các lệnh lập kế hoạch mặc định bị ẩn trong lịch trực và có thể được hiển thị qua một biểu tượng riêng trên thanh công cụ.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
