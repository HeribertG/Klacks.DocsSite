---
sidebar_position: 7
---

# Macro

Các khoản phụ cấp cho làm việc ban đêm, chủ nhật và ngày lễ, hay việc tính toán chính xác số giờ cho kỳ nghỉ và nghĩa vụ quân sự, không thể được bao quát bằng một công thức cố định cho mọi doanh nghiệp. Trong mục Cài đặt > Macro, bạn viết những đoạn script nhỏ của riêng mình bằng một ngôn ngữ giống BASIC cho việc này.

## Cách thức hoạt động

**Macro dùng để làm gì:** Một macro tính toán từ dữ liệu của một dịch vụ (Work) hoặc một công việc ra một giá trị trả về duy nhất — thường là một khoản phụ cấp tính bằng giờ hoặc bằng franc. Kết quả được lưu vào `Work.Surcharges` và tự động đưa vào bảng đánh giá số giờ (ClientPeriodHours). Mỗi macro thuộc về một loại — ca làm việc/công việc hoặc quy tắc làm việc — và có thể được đặt tên, chỉnh sửa và xóa như bất kỳ cài đặt nào khác.

**Dữ liệu khả dụng:** Thông qua `IMPORT`, script có thể truy cập, trong số những thứ khác, `hour` (số giờ làm việc), `fromhour`/`untilhour` (thời gian bắt đầu/kết thúc dưới dạng giờ thập phân), `weekday` (theo ISO-8601: 1 = Thứ Hai … 7 = Chủ Nhật), `holiday`/`holidaynextday` (ngày hiện tại hoặc ngày tiếp theo có phải là ngày lễ hay không), cũng như các mức phụ cấp được lưu trong hợp đồng `nightrate`, `holidayrate`, `sarate` (Thứ Bảy) và `sorate` (Chủ Nhật).

**Phạm vi ngôn ngữ:** Ngôn ngữ script hỗ trợ các cấu trúc điều khiển (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), các hàm tự định nghĩa (`FUNCTION`) và thủ tục (`SUB`, phải được định nghĩa trước lần gọi đầu tiên), cũng như các hàm chuỗi, toán học, lượng giác và thời gian có sẵn (ví dụ `TimeToHours`, `TimeOverlap` cho các khoảng thời gian vượt qua nửa đêm). Kết quả được trả về thông qua `OUTPUT typ, wert`.

**Kiểm thử trong trình soạn thảo:** Trình soạn thảo macro có một tab Kiểm thử riêng: bạn nhập các giá trị mẫu cho các biến đã import, kiểm tra cú pháp và chạy thử script. `DEBUGPRINT`/`DEBUGCLEAR` xuất thêm các giá trị trong cửa sổ kiểm thử mà không ảnh hưởng đến giá trị trả về thực tế.

**Bảo mật:** Trình thông dịch chạy trong một sandbox không có quyền truy cập vào hệ thống tệp hay mạng — một macro có thể tính toán sai, nhưng không thể gây ra thiệt hại nào ngoài phạm vi phép tính.

## Điều cần biết

- `DIM` khai báo một biến nhưng không đồng thời khởi tạo nó — `DIM x = 10` là lỗi cú pháp, phải viết `DIM x` trước rồi mới gán `x = 10` riêng biệt.
- Các từ khóa như `ENDIF`, `ENDFUNCTION` và `ENDSUB` được viết liền, không có khoảng trắng.
- `weekday` luôn tuân theo ISO-8601 (1 = Thứ Hai … 7 = Chủ Nhật) — khi tự viết các truy vấn `SELECT CASE` cho "cuối tuần", đó là các giá trị 6 (Thứ Bảy) và 7 (Chủ Nhật).

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
