---
sidebar_position: 5
---

# Điểm tiếp nhận ERP

Trong mục Cài đặt > Import (chỉ hiển thị ở chế độ chuyên gia), thẻ "ERP Drop Points", bạn cấu hình cách các đơn hàng từ một hệ thống ERP bên ngoài được tự động tiếp nhận vào Klacks dưới dạng tệp XML.

## Cách thức hoạt động

**Ba cách chuyển giao:** Hệ thống ERP có thể đặt các tệp XML vào một thư mục trên máy chủ Klacks (Klacks tự động lấy về theo lịch trình ngay khi một tệp không thay đổi trong 10 giây), gửi trực tiếp qua HTTPS-POST đến một điểm cuối import (xác thực bằng một token truy cập), hoặc một quản trị viên tải tệp XML lên thủ công trên trang này bằng cách kéo-thả (import bắt đầu ngay lập tức). Không có SFTP; chỉ các tệp XML theo định dạng `ErpOrderImport` mới được import.

**Drop-Point** là hộp thư trung tâm, do chính Klacks quản lý, cho tất cả các tệp import — nó hiển thị ba khu vực: Đến (đã nhận hoặc đang được import), Đã xử lý (kèm bản tóm tắt cho từng tệp) và Lỗi (các tệp không đọc được hoặc không hợp lệ kèm lý do lỗi, với khả năng import lại hoặc xóa). Một lịch trình (biểu thức Cron, mặc định hàng giờ) cũng như một công tắc bật/tắt để tạm dừng điều khiển việc lấy tệp tự động.

**Cách nào phù hợp với kiểu cài đặt nào?** Trên máy tính văn phòng (cài đặt Windows), thư mục là cách hiển nhiên nhất; thư mục mặc định là `C:\ProgramData\Klacks\ErpImport\erp\orders`. Thư mục này được bảo vệ, chỉ SYSTEM và quản trị viên mới được ghi vào đó: một quản trị viên phải cấp cho tài khoản chạy tác vụ xuất ERP quyền "Modify" đúng trên thư mục `erp\orders`, chứ không phải trên toàn bộ thư mục `ProgramData\Klacks`. Trên máy chủ Docker riêng, thư mục (`/app/ErpImport/erp/orders`) nằm bên trong container, trong một named volume; một ERP chạy trên máy tính của máy chủ chỉ truy cập được nếu quản trị viên gắn (mount) một thư mục của máy chủ vào `/app/ErpImport`, nếu không thì chỉ còn push bằng token truy cập hoặc tải lên thủ công. Với bản cài đặt do chúng tôi lưu trữ, không có quyền truy cập vào các thư mục của máy chủ: push bằng token truy cập hoặc tải lên thủ công.

**Token truy cập** chỉ cần thiết khi một hệ thống ERP gửi tệp theo hình thức push. Mỗi token bắt đầu bằng `klacks_erp_`, có hiệu lực 1–730 ngày (mặc định 365) và chỉ được hiển thị dưới dạng văn bản rõ **một lần duy nhất khi tạo**. Một token như vậy chỉ có hiệu lực cho điểm cuối import, không áp dụng cho phần truy cập API còn lại, và có thể bị thu hồi bất cứ lúc nào.

**Xử lý:** Các đơn hàng được gán cho một khách hàng đã tồn tại hoặc mới được tạo dựa trên ID hệ thống nguồn và mã tham chiếu khách hàng bên ngoài (hoặc thay thế bằng công ty/mã bưu điện/đường phố), và ban đầu được tạo dưới dạng bản nháp mà người lập kế hoạch phải kiểm tra và niêm phong. Một lần giao hàng mới đã thay đổi của một đơn hàng đã niêm phong sẽ tự động đóng đơn hàng cũ và tạo ra một phiên bản mới, được liên kết; các lần giao hàng lặp lại không thay đổi sẽ không kích hoạt gì cả.

## Điều cần biết

- Các đơn hàng riêng lẻ bị lỗi (ví dụ thiếu ngày trong tuần hoặc có mã tham chiếu trùng lặp) sẽ bị từ chối mà không chặn các đơn hàng hợp lệ còn lại trong cùng tệp; tệp đó vẫn xuất hiện trong khu vực Đã xử lý, được đánh dấu bằng biểu tượng cảnh báo, và có thể mở rộng các đơn hàng bị từ chối để xem lý do.
- Các tệp không bị di chuyển hay lưu trữ: chúng vẫn nằm trong thư mục và trạng thái được lưu trong cơ sở dữ liệu. Các tệp được xử lý thành công sẽ tự động bị xóa sau 90 ngày; các tệp trong khu vực Lỗi được giữ lại cho đến khi được import lại hoặc bị xóa.
- Định dạng XML chính xác (các trường bắt buộc, định dạng ngày tháng, logic ngày trong tuần) được ghi lại trực tiếp trong sổ tay hướng dẫn ngay trên trang cài đặt cũng như qua một tệp mẫu có thể tải xuống.
- Cấu hình này nằm trong khu vực Cài đặt và do đó chỉ dành cho các vai trò quản trị.

---
*Dùng thử ngay: [Klacks Playground](https://play.klacks-software.ch) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
