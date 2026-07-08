---
sidebar_position: 5
---

Quy tắc lập kế hoạch xác định các điều kiện khung cho việc lập lịch làm việc tự động — thời gian làm việc, thời gian nghỉ ngơi và năng lực mà Klacks tuân thủ khi phân bổ các ca làm việc.

## Cách hoạt động

Một quy tắc lập kế hoạch được gán cho một **hợp đồng**. Các giá trị giới hạn được xác định sẽ áp dụng cho tất cả nhân viên có hợp đồng này. Mỗi quy tắc bao gồm bốn phần:

**Ngày làm việc & thời gian nghỉ ngơi**
- Số ngày làm việc tối đa: quy tắc mềm cho độ dài khối làm việc được ưu tiên, trước khi một ngày nghỉ được xếp lịch (ví dụ „làm việc 5 ngày, sau đó nghỉ") — vi phạm quy tắc này không làm cho kế hoạch không hợp lệ, chỉ là kém tối ưu hơn
- Số ngày nghỉ tối thiểu giữa hai khối làm việc
- Số giờ nghỉ tối thiểu giữa hai ngày làm việc (thời gian nghỉ tính từ khi kết thúc một ngày làm việc đến khi bắt đầu ngày tiếp theo)
- Khoảng cách tối ưu tối đa giữa các ca làm việc tính bằng giờ
- Số ngày làm việc liên tiếp tối đa mà không có ngày nghỉ

**Giới hạn giờ làm**
- Số giờ tối đa mỗi ngày và số giờ tối đa mỗi tuần
- Số giờ làm việc hàng ngày (giờ định mức)
- Ngưỡng làm thêm giờ: từ số giờ làm việc theo tuần này trở lên, các giờ được tính là giờ làm thêm

**Giờ hàng tháng**
- Số giờ được đảm bảo (số lượng tối thiểu được cam kết với nhân viên mỗi tháng)
- Số giờ tối thiểu và tối đa mỗi tháng
- Số giờ toàn thời gian (số giờ hàng tháng tương ứng với một vị trí làm việc toàn thời gian)

**Nghỉ phép**
- Số ngày nghỉ phép mỗi năm dương lịch

## Điều cần biết

- Khi tạo một quy tắc mới, **các giá trị mặc định từ phần cài đặt** (Quy tắc lập kế hoạch — Giá trị mặc định) sẽ tự động được áp dụng; sau đó bạn có thể điều chỉnh từng giá trị riêng lẻ theo ý muốn.
- Quy tắc lập kế hoạch hoạt động thông qua hợp đồng — bạn không cần phải duy trì chúng cho từng người. Nếu một quy tắc thay đổi, điều đó sẽ ảnh hưởng đến tất cả nhân viên có hợp đồng này.
- Ngưỡng làm thêm giờ và giờ định mức là hai khái niệm khác nhau: giờ định mức là tiêu chuẩn mỗi ngày, còn ngưỡng làm thêm giờ là giá trị ngưỡng mỗi tuần.
- „Số ngày làm việc tối đa" (ưu tiên mềm cho độ dài khối làm việc) và „Số ngày làm việc liên tiếp tối đa" (giới hạn cứng, không bao giờ được vượt quá) là hai quy tắc khác nhau — không nên nhầm lẫn.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
