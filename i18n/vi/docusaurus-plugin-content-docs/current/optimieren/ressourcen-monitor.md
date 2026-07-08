---
sidebar_position: 3
---

Giám sát tài nguyên cho thấy ngay tình trạng sử dụng nhân sự của một nhóm (hoặc tất cả các nhóm) trong năm được chọn — mỗi ngày một thanh, xuyên suốt 365 ngày là toàn bộ diễn biến của năm.

## Cách hoạt động

Cách hiển thị tuân theo mô hình «Capacity vs. Workload Chart» đã được thiết lập trong lập kế hoạch nhân sự (trong tài liệu quản lý dự án còn được gọi là «Resource Histogram»). Các yếu tố:

- **Thanh màu xanh lá — Ca làm việc:** Số lượng ca làm việc đã lên kế hoạch trong ngày. Mỗi ca được tính là một vị trí nhân viên; các ca Container được tính là 1.
- **Thanh màu xám — Vắng mặt:** Số lượng nhân viên vắng mặt, được xếp chồng lên các thanh màu xanh lá. Một lần nghỉ phép hoặc ốm đau trọn ngày được tính là 1, nửa ngày được tính là 0.5 — kể cả vào cuối tuần.
- **Đường chấm màu hồng — Mức sẵn sàng mong muốn:** Trung bình có bao nhiêu nhân viên sẵn sàng nếu tuân thủ số ngày làm việc mong muốn mỗi tuần (mặc định: 5 ngày làm việc, 2 ngày nghỉ). Đây là mục tiêu lập kế hoạch.
- **Đường gạch ngang màu đỏ — Mức sẵn sàng tối đa:** Giới hạn tối đa về mặt thể chất/pháp lý với số ngày làm việc liên tiếp tối đa được phép (mặc định: 6). Luôn nằm trên hoặc bằng đường màu hồng.
- **Đường màu xanh dương — Số lượng nhân viên:** Toàn bộ nhân sự có hợp đồng còn hiệu lực vào ngày tương ứng (Headcount).

**Cách đọc:** Nếu đỉnh của các thanh màu xanh lá tiến gần đến đường màu hồng, nghĩa là nhân sự đang được sử dụng tối ưu. Khoảng cách giữa đường màu xanh dương và đỉnh của các thanh xếp chồng chính là khoảng dự phòng của bạn.

Dùng các nút mũi tên ở góc trên bên phải để chuyển năm; dùng phần chọn nhóm để giới hạn theo một địa điểm hoặc một đội.

## Điều cần biết

- Kinh nghiệm thực tế: đỉnh của các thanh vắng mặt màu xám không nên vượt quá một phần ba khoảng cách giữa ca làm việc và tổng nhân sự — nếu không, khoảng dự phòng vận hành sẽ bị đe dọa và các đợt cao điểm ốm đau hay nghỉ phép sẽ khó bù đắp.
- Các giá trị chỉ là ước tính và xấp xỉ, không phải số liệu tính toán chính xác — chúng cho một ấn tượng về mức độ sẵn sàng.
- Các ca làm việc lấy từ kế hoạch, không phải từ thực tế đã thực hiện — vì vậy cả các ca trong tương lai cũng hiển thị được.
- Với hợp đồng 24/7, đường màu hồng được làm mượt qua cả tuần (khoảng 0,71 mỗi người mỗi ngày lịch); với hợp đồng Thứ Hai–Thứ Sáu, nó ở mức 1,0 vào các ngày làm việc và 0 vào cuối tuần.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
