---
sidebar_position: 8
---
# Bảng thuật ngữ

Những thuật ngữ thường xuyên xuất hiện trong Klacks và trong tài liệu này — ngắn gọn và theo thứ tự bạn sẽ gặp chúng.

## Lập kế hoạch

**Dòng nhân viên**
Đơn vị nhỏ nhất có thể lập kế hoạch. Không phải con người và cũng không phải ngày, mà là dòng của một người trong một bảng kế hoạch cụ thể. Mọi giá trị kế hoạch đều gắn với dòng này.

**Bảng kế hoạch**
Một vật chứa gom các **tham chiếu** đến các dòng nhân viên — không phải bản sao. Vì vậy một người chỉ tồn tại một lần, dù xuất hiện trong bao nhiêu kế hoạch con, và mọi thay đổi đều hiển thị ngay lập tức ở khắp nơi. Nền tảng của [lập kế hoạch theo mô-đun](../planen/modulare-planung/).

**Tự động lập kế hoạch**
Trợ lý điền đầy một bản kế hoạch theo các quy tắc của bạn. Việc tính toán chạy trong nền trong khi bạn tiếp tục làm việc — xem [Tự động lập kế hoạch](../planen/auto-planung/).

**Tình trạng sẵn sàng**
Khi nào một người sẵn sàng làm việc — chính xác theo giờ hoặc theo ngày, cho nhân viên nội bộ và nhân viên bên ngoài. Xem [Lưới tình trạng sẵn sàng](../planen/verfuegbarkeits-raster/).

**Đơn hàng (đơn đặt)**
Bản phác thảo của một lượt triển khai vẫn còn có thể chỉnh sửa. Một đơn hàng **chưa thể lập kế hoạch**.

**Niêm phong**
Bước duy nhất một lần, **không thể hoàn tác**, biến một đơn hàng thành một dịch vụ có thể lập kế hoạch. Cùng lúc đó, bản đối ứng có thể lập kế hoạch của đơn hàng được tạo ra. Trong Klacks không có cách tạo trực tiếp một dịch vụ có thể lập kế hoạch — mọi dịch vụ đều hình thành thông qua việc niêm phong. Xem [Vòng đời của một dịch vụ](../planen/schicht-lebenszyklus/).

**Dịch vụ (ca)**
Lượt triển khai đã niêm phong, có thể lập kế hoạch. Thuật ngữ "ca" mang cùng một ý nghĩa.

**Các giai đoạn phê duyệt (lịch làm việc)**
Lịch làm việc đi qua bốn trạng thái theo thứ tự cố định: **mở → đã xác nhận → đã phê duyệt → đã hoàn tất**. Xác nhận thì mọi tài khoản đã đăng nhập đều được; phê duyệt chỉ Supervisor và Admin; hoàn tất chỉ riêng Admin. Xem [Quy trình phê duyệt](../planen/freigabe-workflow/).

**Kỳ / Chốt kỳ**
Kỳ kế toán (hằng tuần, hai tuần một lần, hằng tháng hoặc tùy chỉnh; được xác định qua khoảng thời gian thanh toán). Việc chốt kỳ làm cho một kỳ có tính ràng buộc và chỉ dành riêng cho Admin — xem [Chốt kỳ](../planen/periodenabschluss/).

**Vắng mặt — hai khái niệm, một từ**
Trong phần dữ liệu gốc, "vắng mặt" là **danh mục các loại vắng mặt** (tên, màu sắc, độ dài mặc định, giá trị mặc định). Còn các thanh trong lịch là một **nguyện vọng** (vắng mặt dự kiến, có thể di chuyển tự do và không có mức khóa) hoặc một **vắng mặt đã đăng ký** (lấy từ kế hoạch bố trí, trên trang Vắng mặt chỉ có thể đọc và có mức khóa). Ai nhầm lẫn hai khái niệm này sẽ tìm sai chỗ.

## Trợ lý AI

**Klacksy**
Trợ lý AI của Klacks. Nó lập kế hoạch, giải thích và thực thi — với mô hình có thể chọn tự do. Xem [Klacksy](../ki/klacksy-ki-assistent/).

**Kỹ năng**
Một năng lực riêng lẻ, có phạm vi rõ ràng của Klacksy — một lớp bao khai báo quanh logic chương trình cụ thể ("Tìm nhân viên", "Gán hợp đồng", "Tạo báo cáo"). Klacksy chọn các kỹ năng phù hợp tại thời điểm chạy.

**Mức độ tự chủ**
Klacksy được phép đi xa đến đâu mà không cần hỏi lại:

| Mức | Tên | Hành vi |
|---|---|---|
| 0 | Đề xuất | Mọi hành động ghi đều cần bạn xác nhận |
| 1 | Hỗ trợ | Các hành động có thể đảo ngược được thực hiện trực tiếp; hành động cuối cùng và nhạy cảm sẽ hỏi lại |
| 2 | Tự động (mặc định) | Mọi thứ đều chạy trực tiếp, trừ những hành động được xếp vào loại nhạy cảm |
| 3 | Hoàn toàn tự động | Cả các bước cuối cùng cũng được thực hiện trực tiếp |

Các hành động nhạy cảm — chẳng hạn xóa người dùng hoặc thay đổi quyền — luôn hỏi lại ở **mọi** mức. Xem [Các mức độ tự chủ](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Vai trò và vận hành

**Admin / Supervisor / Người lập kế hoạch**
Ba cấp truy cập. Admin được làm mọi thứ, Supervisor được tạo và chỉnh sửa, một tài khoản không có vai trò là người lập kế hoạch. Tổng quan có tại [Vai trò và quyền hạn](../erste-schritte/rollen-und-rechte/).

**Hồ sơ quốc gia**
Một bộ cài đặt được chuẩn bị sẵn cho một quốc gia: ngôn ngữ, múi giờ, lịch ngày lễ, cuối tuần và ngày bắt đầu tuần, giới hạn thời gian làm việc, quyền lợi nghỉ phép, phụ cấp, xuất lương mặc định và các mẫu theo ngành. Được chọn khi cài đặt qua `REGION`.

**Playground**
Phiên bản thử nghiệm công khai tại [play.klacks-software.ch](https://play.klacks-software.ch) với dữ liệu mẫu — dành riêng để dùng thử, không có dữ liệu cá nhân thật. Xem [Cài đặt và Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Vận hành trên hạ tầng của chính bạn: phần cứng của bạn, cơ sở dữ liệu của bạn, dữ liệu của bạn. Đối lập với phương án được lưu trữ trên đám mây.

**Dịch vụ cập nhật**
Dịch vụ đi kèm giúp cài đặt các bản cập nhật có chữ ký — có sao lưu trước và tự động rollback khi có sự cố. Xem [Cập nhật và rollback](../betrieb/updates-und-rollback/).

**Vai trò và bảo vệ dữ liệu**
Klacks không "gọi về nhà": không có dữ liệu nào của bạn được gửi ngược về nhà sản xuất. Với những dữ liệu thực sự cần xóa, [Lưu trữ dữ liệu](../einstellungen/system-sicherheit/datenaufbewahrung/) đảm nhiệm việc đó — các bản ghi đã xóa sẽ được loại bỏ vật lý sau khi hết thời hạn.

---

*Thiếu thuật ngữ hoặc giải thích sai? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
