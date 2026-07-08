---
sidebar_position: 4
---

Lịch vạn niên tự động tính toán ngày lễ cho từng năm — bạn chỉ cần định nghĩa quy tắc một lần, Klacks sẽ biết các ngày lễ cho tất cả các năm sắp tới.

## Cách hoạt động

Mỗi ngày lễ được mô tả bằng một quy tắc ngắn gọn. Có hai loại cơ bản:

- **Ngày cố định** theo định dạng `MM/DD`: `01/01` là ngày đầu năm mới, `08/01` là ngày quốc khánh Thụy Sĩ, `12/25` là Giáng sinh.
- **Ngày liên quan đến Lễ Phục sinh** theo định dạng `EASTER+XX` hoặc `EASTER-XX`: Ngày Phục sinh được tự động tính theo công thức Phục sinh của Gauss, ngày lễ được xác định theo khoảng cách so với ngày đó. Ví dụ: `EASTER-02` = Thứ Sáu Tuần Thánh, `EASTER+01` = Thứ Hai Phục sinh, `EASTER+39` = Lễ Thăng thiên, `EASTER+50` = Thứ Hai lễ Hiện xuống, `EASTER+60` = Lễ Mình Thánh Chúa.

Ngoài ra còn có **ngày cố định với dịch chuyển theo ngày trong tuần** (`MM/DD+XX+WW` hoặc `MM/DD+XX-WW`) cho các ngày lễ như «thứ Năm đầu tiên của tháng 11» (`11/01+00+TH`) hoặc «thứ Hai cuối cùng của tháng 5» (`05/25+00-MO`).

Với **SubRules**, bạn tự động dịch chuyển một ngày lễ nếu nó rơi vào một ngày trong tuần nhất định — ví dụ `SA+2;SU+1`: Nếu ngày đó rơi vào thứ Bảy hoặc Chủ nhật, nó sẽ được chuyển sang thứ Hai. Nhiều quy tắc được phân tách bằng `;`.

Với mỗi quy tắc, bạn cũng nhập tên và mô tả (đa ngôn ngữ), quốc gia và bang/tiểu bang, cũng như các ô chọn **Ngày lễ theo luật định** và **Có trả lương**.

## Điều cần biết

- Các chữ viết tắt ngày trong tuần là bằng tiếng Anh: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules chủ yếu được dùng để dịch chuyển ngày lễ từ cuối tuần sang ngày làm việc tiếp theo.
- Ô chọn **Có trả lương** có liên quan đến việc tính lương.
- Thông qua quốc gia và bang/tiểu bang, bạn kiểm soát các khác biệt theo vùng — ví dụ Thứ Sáu Tuần Thánh không áp dụng ở tất cả các bang tại Thụy Sĩ (ngoại lệ: VS, TI).
- Các gói lịch được cài đặt sẵn cho các quốc gia và bang Thụy Sĩ được khóa không cho xóa; các lựa chọn lịch tự tạo thì bạn có thể xóa bất cứ lúc nào.

![Quy tắc ngày lễ trong Klacks](/img/app-calendar-de.png)

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
