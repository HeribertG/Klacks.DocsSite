---
sidebar_position: 3
---

Quản lý địa chỉ và con người là trung tâm của dữ liệu gốc: nhân viên, khách hàng và cả bên ngoài với địa chỉ, thông tin liên hệ, hợp đồng, thành viên nhóm và trình độ chuyên môn — có thể truy cập qua biểu tượng Con người trong thanh điều hướng.

## Cách hoạt động

**Tạo nhân viên mới:** Các trường bắt buộc là tên, họ và giới tính (Nữ/Nam/Liên giới tính/Pháp nhân). Bạn có thể tùy chọn nhập ngày sinh, e-mail, điện thoại, địa chỉ (đường, mã bưu điện, nơi ở, bang/tỉnh, quốc gia) cũng như nhóm/phòng ban. Ngoài ra, bạn cũng có thể để trợ lý Klacksy tạo giúp («tạo một nhân viên …»).

**Trạng thái:** Trạng thái được tự động xác định dựa trên ngày bắt đầu và kết thúc của thành viên — không có trường trạng thái thủ công. Người ta phân biệt *Đang hoạt động* (thành viên đang còn hiệu lực), *Trước đây* (ngày kết thúc đã ở trong quá khứ) và *Sắp tới* (ngày bắt đầu vẫn còn ở phía trước).

**Nhóm và phòng ban:** Nhân viên có thể được gán vào các nhóm. Cấu trúc mang tính phân cấp (ví dụ `Klacks AG > IT > Phát triển`), cho phép gán nhiều nhóm cùng lúc, và quyền hạn có thể được kiểm soát ở cấp độ nhóm.

**Hợp đồng:** Mỗi người có thể có nhiều hợp đồng, ví dụ khi thay đổi tỷ lệ làm việc. Bản thân các mẫu hợp đồng có thể được tự do định nghĩa: Trong Cài đặt > Hợp đồng, bạn tạo các hợp đồng riêng với tên, tỷ lệ làm việc, số giờ định mức/tối đa/tối thiểu, phụ cấp (đêm, chủ nhật và ngày lễ) và chu kỳ thanh toán; ngoài ra mỗi hợp đồng có thể được gán một lịch ngày lễ riêng, nhờ đó có thể thể hiện được ví dụ như sự khác biệt về ngày lễ theo từng bang/tỉnh. Mỗi hợp đồng có thể có thời hạn xác định hoặc không xác định.

**Nhập dữ liệu:** Không có chức năng nhập dữ liệu gốc bằng CSV. Các danh bạ hiện có sẽ được tự động chuyển vào thông qua đồng bộ hóa LDAP/Active Directory qua một Identity Provider; từng cá nhân riêng lẻ được tạo thủ công hoặc thông qua Klacksy.

**Tìm kiếm và lọc:** Tìm kiếm văn bản tự do tìm người theo họ, tên, công ty hoặc mã số nhân viên cũng như qua số điện thoại/mã bưu điện; ngoài ra bạn có thể lọc theo bang/tỉnh, trạng thái (Đang hoạt động/Trước đây/Sắp tới) và nhóm.

## Điều cần biết

- Chỉ *Đang hoạt động* mới có thể được lập kế hoạch — hãy kiểm tra ngày bắt đầu/kết thúc thành viên nếu ai đó không xuất hiện trong bảng phân công.
- Việc một người có nhiều hợp đồng là bình thường, chẳng hạn khi thay đổi tỷ lệ làm việc — bạn không cần tạo một người thứ hai cho việc đó. Các mẫu hợp đồng mới (tỷ lệ làm việc, phụ cấp, lịch) do chính bạn tạo trong Cài đặt > Hợp đồng.
- Hãy tạo cấu trúc nhóm trước rồi mới gán người vào — như vậy quyền hạn ở cấp độ nhóm sẽ có hiệu lực ngay từ đầu.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
