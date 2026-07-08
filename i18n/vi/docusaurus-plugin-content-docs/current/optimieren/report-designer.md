---
sidebar_position: 6
---

Với Trình thiết kế báo cáo, bạn tự thiết kế các mẫu in riêng — từ lịch trực đến danh sách địa chỉ — trực tiếp trong Klacks, không cần công cụ bên ngoài.

## Cách hoạt động

Một báo cáo bao gồm ba khu vực, được chỉnh sửa trong tab *Thiết kế*:

- **Header** — được in ở đầu mỗi trang. Nó có ba vùng (Trái, Giữa, Phải), có thể chứa các trường dữ liệu từ cơ sở dữ liệu, văn bản tự do hoặc hình ảnh (ví dụ: logo công ty của bạn, được tải lên qua trình quản lý hình ảnh).
- **Body** — chứa một hoặc nhiều bảng dữ liệu. Bạn thêm cột bằng cách kéo và thả từ danh sách trường; thứ tự cũng được điều chỉnh bằng kéo và thả, còn độ rộng thông qua một ô nhập phần trăm cho mỗi cột.
- **Footer** — được in ở cuối mỗi trang.

Mỗi bảng được liên kết với một **nguồn dữ liệu**, được chọn trong tab *Nguồn dữ liệu*: Lịch làm việc (Schedule), địa chỉ dưới dạng danh sách hoặc chi tiết, vắng mặt, ca làm việc, nhóm hoặc mẫu Container. Nguồn dữ liệu xác định các trường nào khả dụng.

Để thiết kế, có sẵn:
- **Định dạng** cho từng ô và văn bản tự do: phông chữ, kích thước, đậm/nghiêng/gạch chân, màu chữ, căn lề.
- **Viền ô** riêng cho từng cạnh (trên/phải/dưới/trái) với kiểu và màu đường kẻ.
- **Dòng chân bảng** với các trường SUM: các cột số được tự động tính tổng.
- **Dòng văn bản tự do** trước hoặc sau các bảng dữ liệu — ví dụ cho ghi chú, điều kiện hoặc ô chữ ký.
- **Cài đặt trang** trong tab *Chung*: chiều dọc hoặc ngang, khổ giấy (A4, A3, B4/B5 JIS, Letter) và lề trang tính theo mm.

## Điều cần biết

- **Merged Fields:** Thông qua thanh công cụ của trường đang được chọn, bạn có thể kết hợp nhiều trường vào một cột duy nhất; ký tự phân cách (dấu phẩy, khoảng trắng, xuống dòng, gạch nối) có thể cấu hình được.
- Với nguồn dữ liệu **Lịch làm việc**, có hai tùy chọn bổ sung: *Gộp các mục trong cùng một ngày* (nhiều mục trong cùng một ngày vào một dòng) và *Hiển thị toàn bộ kỳ* (tất cả các ngày, kể cả không có mục nào).
- Dòng chân bảng được kích hoạt qua một ô chọn ngay dưới bảng tương ứng; nhãn SUM có thể được ẩn hoặc hiện riêng cho trường dòng chân.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
