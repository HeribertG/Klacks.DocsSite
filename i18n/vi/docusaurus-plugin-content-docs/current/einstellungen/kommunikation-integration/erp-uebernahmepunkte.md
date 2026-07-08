---
sidebar_position: 5
---

Trong mục Cài đặt > Điểm tiếp nhận ERP, bạn cấu hình cách các đơn hàng từ một hệ thống ERP bên ngoài được tự động tiếp nhận vào Klacks dưới dạng tệp XML.

## Cách thức hoạt động

**Ba cách chuyển giao:** Hệ thống ERP có thể cung cấp các tệp trong kho lưu trữ tệp của Drop-Point (Klacks tự động lấy về theo lịch trình), gửi trực tiếp qua HTTP-POST đến một điểm cuối import (xác thực bằng một token truy cập), hoặc một quản trị viên tải tệp XML lên thủ công trên trang này bằng cách kéo-thả.

**Drop-Point** là hộp thư trung tâm, do chính Klacks quản lý, cho tất cả các tệp import — nó hiển thị ba khu vực: Đến (đang chờ lượt chạy tiếp theo), Đã xử lý (lưu trữ) và Lỗi (các tệp không hợp lệ kèm lý do lỗi, với khả năng import lại). Một lịch trình (biểu thức Cron, mặc định hàng giờ) cũng như một công tắc bật/tắt để tạm dừng điều khiển việc lấy tệp tự động.

**Token truy cập** chỉ cần thiết khi một hệ thống ERP gửi tệp theo hình thức push. Mỗi token bắt đầu bằng `klacks_erp_`, có hiệu lực 1–730 ngày (mặc định 365) và chỉ được hiển thị dưới dạng văn bản rõ **một lần duy nhất khi tạo**. Một token như vậy chỉ có hiệu lực cho điểm cuối import, không áp dụng cho phần truy cập API còn lại, và có thể bị thu hồi bất cứ lúc nào.

**Xử lý:** Các đơn hàng được gán cho một khách hàng đã tồn tại hoặc mới được tạo dựa trên ID hệ thống nguồn và mã tham chiếu khách hàng bên ngoài (hoặc thay thế bằng công ty/mã bưu điện/đường phố), và ban đầu được tạo dưới dạng bản nháp mà người lập kế hoạch phải kiểm tra và niêm phong. Một lần giao hàng mới đã thay đổi của một đơn hàng đã niêm phong sẽ tự động đóng đơn hàng cũ và tạo ra một phiên bản mới, được liên kết; các lần giao hàng lặp lại không thay đổi sẽ không kích hoạt gì cả.

## Điều cần biết

- Các đơn hàng riêng lẻ bị lỗi (ví dụ thiếu ngày trong tuần hoặc có mã tham chiếu trùng lặp) sẽ bị từ chối mà không chặn các đơn hàng hợp lệ còn lại trong cùng tệp; toàn bộ tệp đó vẫn sẽ nằm trong khu vực Lỗi để không bị bỏ sót.
- Các tệp đã xử lý được lưu trữ, không bị xóa.
- Định dạng XML chính xác (các trường bắt buộc, định dạng ngày tháng, logic ngày trong tuần) được ghi lại trực tiếp trong sổ tay hướng dẫn ngay trên trang cài đặt cũng như qua một tệp mẫu có thể tải xuống.
- Cấu hình này nằm trong khu vực Cài đặt và do đó chỉ dành cho các vai trò quản trị.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
