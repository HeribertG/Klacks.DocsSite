---
sidebar_position: 7
---

# Giờ làm thêm

Trong mục Cài đặt > Compliance & Quy tắc phụ cấp (Chế độ chuyên gia) > Giờ làm thêm, bạn xác định từ bao nhiêu giờ tích lũy thì giờ làm thêm phải chịu phụ cấp và mức phụ cấp ở mỗi bậc là bao nhiêu.

## Cách hoạt động

**Cơ sở tính toán:** Theo ngày hoặc Theo tuần — không có lựa chọn nào khác. Cơ sở theo tháng hay theo năm không được hỗ trợ. Với "Theo tuần", tuần bắt đầu vào ngày trong tuần đầu tiên đã được cấu hình.

**Tối đa ba bậc:** Mỗi bậc gồm hai trường — "Bậc X từ số giờ" (số giờ tích lũy trong ngày hay trong tuần, từ đó bậc này có hiệu lực) và "Phụ cấp bậc X" tính theo phần trăm. Bậc được cấu hình cao nhất luôn mở, không có giới hạn trên.

**Mỗi bậc chỉ tính số giờ trong phạm vi riêng của nó**, không phải toàn bộ số giờ từ số không. Nếu bậc 1 bắt đầu từ 8 giờ và bậc 2 bắt đầu từ 10 giờ, một ngày làm việc mười tiếng rưỡi sẽ trả mức phụ cấp bậc 1 cho hai giờ giữa mốc 8 và 10, và mức phụ cấp bậc 2 chỉ cho nửa giờ vượt trên đó — không bao giờ trả mức phụ cấp bậc 2 cho toàn bộ mười tiếng rưỡi. Vì vậy, một khối làm việc đơn lẻ có thể tạo ra nhiều khoản phụ cấp, mỗi khoản ứng với một bậc đã đạt được.

**Một bậc chưa hoàn chỉnh sẽ tự động bị bỏ qua:** Nếu thiếu giá trị số giờ, hoặc mức phụ cấp bằng không hoặc âm, bậc đó không được tính. Vì vậy có thể có từ không đến ba bậc thực sự đang hoạt động.

**Phụ cấp là khoản cộng thêm, không phải tổng số tiền:** 25% nghĩa là thêm một phần tư giờ cho mỗi giờ làm việc ở bậc đó — không phải là giờ đó được trả với hệ số 1,25. Chế độ phụ cấp bên cạnh (hệ số nhân hoặc số tiền cố định mỗi giờ) chỉ xác định đơn vị tính; phép tính đằng sau vẫn giữ nguyên.

**Những gì được tính là giờ đã làm trước đó:** Các bậc được lấp đầy dựa trên số giờ đã làm trước đó trong cùng ngày hay cùng tuần — sắp xếp trước theo ngày, sau đó theo giờ bắt đầu. Nhờ vậy, mỗi khối làm việc chiếm đúng vị trí của nó trong phạm vi, và không giờ nào bị tính hai lần vào một bậc cao hơn. Nếu một mục trước đó thay đổi, các mục sau sẽ được tính lại.

**Các giá trị này đến từ đâu:** Thẻ này cung cấp các giá trị áp dụng cho toàn công ty — chúng chỉ có hiệu lực khi không có nguồn nào khác được ưu tiên hơn. Nếu hợp đồng của một người được gán một [Quy tắc lập kế hoạch](../../planen/planungsregeln.md) có các bậc giờ làm thêm riêng, quy tắc đó được ưu tiên; một phiên bản mới hơn của quy tắc này, có hiệu lực cho ngày tương ứng, sẽ thay thế toàn bộ tập hợp bậc khi cần, nhưng nếu phiên bản đó không có khối giờ làm thêm riêng, nó sẽ quay về các cài đặt công ty được hiển thị ở đây, chứ không quay về quy tắc lập kế hoạch. Nếu không nơi nào có cấu hình bậc nào cả, phương án dự phòng cuối cùng chỉ là **ngưỡng giờ làm thêm** từ quy tắc lập kế hoạch — và ngưỡng đó chỉ được dùng làm giá trị khởi điểm của bậc đầu tiên, không bao giờ là mức phụ cấp. Các nguồn không bao giờ bị trộn lẫn: ai cung cấp bậc đầu tiên thì cũng cung cấp tất cả các bậc tiếp theo.

**Hai điều kiện, thiếu một trong hai thì không phát sinh phụ cấp nào:**

- Ca làm việc cần có một macro tính toán. Công việc trên một ca làm việc không có macro sẽ không bao giờ được kiểm tra giờ làm thêm.
- Phải có ít nhất một bậc hoàn chỉnh được cấu hình. Nếu không có bậc nào như vậy, kết quả không phải là "không có giờ làm thêm", mà là hoàn toàn không có việc kiểm tra nào diễn ra.

**Ngoại lệ:** Các khoản hiệu chỉnh và người thay ca đột xuất không bao giờ được kiểm tra giờ làm thêm — chỉ có công việc thông thường mới được tính.

**Cộng dồn với các khoản phụ cấp khác:** Cùng một giờ có thể đồng thời đủ điều kiện cho cả giờ làm thêm lẫn một khoản phụ cấp theo hoàn cảnh, ví dụ làm việc ban đêm hoặc cuối tuần. Việc cả hai được cộng lại hay chỉ mức cao hơn có hiệu lực không do thẻ này quyết định, mà do macro tính toán của ca làm việc tương ứng.

**Lưu trữ:** Thẻ này nằm trong phần Compliance & Quy tắc phụ cấp của trang cài đặt (cùng với Nghỉ bù, Chế độ phụ cấp và Thực thi Compliance), chỉ hiển thị trong Chế độ chuyên gia. Các thay đổi được thu thập và được lưu hoặc hủy qua thanh lưu chung của trang cài đặt — không có nút lưu riêng trên thẻ này.

## Điều cần biết

- Thẻ này chỉ bao quát việc phân bậc giờ làm thêm tự động theo ngưỡng ngày hoặc tuần. Ngược lại, các khoản phụ cấp cho làm việc ban đêm, chủ nhật hay ngày lễ được tính một cách chung bằng script — xem [Macro](../klacksy-konfiguration/makros.md).
- Một bậc không có giá trị "từ số giờ" hoặc có mức phụ cấp bằng 0% hoặc thấp hơn sẽ bị bỏ qua — nhờ đó bạn có thể vô hiệu hóa từng bậc riêng lẻ mà không cần xóa chúng.
- Nếu không có ít nhất một bậc hoàn chỉnh và không có macro tính toán trên ca làm việc, về nguyên tắc sẽ không phát sinh khoản phụ cấp giờ làm thêm nào, kể cả với những ca làm việc rất dài.
- Một quy tắc lập kế hoạch có các bậc giờ làm thêm riêng sẽ ghi đè hoàn toàn các giá trị áp dụng cho toàn công ty này, chứ không chỉ từng bậc riêng lẻ.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
