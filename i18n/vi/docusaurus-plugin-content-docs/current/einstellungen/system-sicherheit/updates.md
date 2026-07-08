---
sidebar_position: 4
---

# Cập nhật

Trong mục Cài đặt > Cập nhật, bạn xem phiên bản Klacks hiện đang được cài đặt và phiên bản mới nhất có sẵn, điều khiển hành vi cập nhật tự động và, khi cần, kích hoạt thủ công một cập nhật hoặc một rollback (khôi phục).

## Cách hoạt động

**Trạng thái:** Thẻ hiển thị phiên bản hiện tại, liệu có phiên bản mới hơn hay không, cũng như thao tác cập nhật đang chạy hoặc được thực hiện gần nhất kèm trạng thái.

**Kích hoạt cập nhật hoặc khôi phục:** Qua "Cài đặt ngay", bạn khởi động thủ công một cập nhật có sẵn; "Hoàn tác" sẽ hoàn tác thao tác cập nhật thành công gần nhất. Cả hai hành động đều bị khóa khi đã có một thao tác đang chạy.

**Cấu hình tự động:**
- **Kích hoạt cập nhật tự động** bật hoặc tắt việc kiểm tra và thực hiện cập nhật tự động.
- **Chỉ thông báo** không kích hoạt cập nhật tự động, nhưng báo cho biết khi có phiên bản mới.
- **Kênh** chọn giữa `Stable` và `Beta` làm nguồn cập nhật.
- **Khoảng thời gian kiểm tra** (giờ) và một **cửa sổ bảo trì** (thời gian bắt đầu/kết thúc) xác định tần suất và khung thời gian kiểm tra hoặc cài đặt.
- **Số lượng bản sao lưu được giữ lại** xác định số lượng bản sao lưu được giữ trước một lần di chuyển (migration), trước khi các bản cũ hơn tự động bị xóa.

**Lịch sử:** Một bảng liệt kê các thao tác cập nhật gần đây nhất với loại, phiên bản đích, trạng thái và thời điểm yêu cầu.

## Nên biết

- Trước mỗi lần di chuyển (migration), Klacks tự động tạo một bản sao lưu — nếu không có bản sao lưu, sẽ không có migration nào được áp dụng.
- Nếu kiểm tra tình trạng sức khỏe sau một cập nhật thất bại, Klacks sẽ tự động rollback về phiên bản trước đó (khôi phục bản sao lưu → kích hoạt phiên bản cũ → kiểm tra lại); chỉ khi bản thân rollback này thất bại thì mới cần can thiệp thủ công.
- Một rollback thủ công khôi phục có mục tiêu bản sao lưu thuộc về thao tác thành công gần nhất và kích hoạt phiên bản gốc của nó — không đơn giản là "lùi lại một phiên bản".
- Cập nhật và rollback là các hành động chỉ dành cho Admin.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
