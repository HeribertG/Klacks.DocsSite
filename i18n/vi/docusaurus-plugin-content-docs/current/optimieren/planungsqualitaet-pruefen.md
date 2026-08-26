---
sidebar_position: 7
---

# Kiểm tra chất lượng lập kế hoạch: Vi phạm, thiếu hụt và phần bị bỏ qua

Sau một lượt chạy của các trợ lý lập kế hoạch, Klacks đặt ba bảng chẩn đoán bên cạnh kết quả: nơi kế hoạch va phải một quy tắc, nơi thiếu một trình độ chuyên môn và những gì hoàn toàn chưa được lập kế hoạch.

## Cách hoạt động

Ba báo cáo này xuất hiện trong hộp thoại của trợ lý lập kế hoạch tương ứng — không phải trong lưới kế hoạch. Chúng thuộc về kết quả của một lượt chạy trợ lý và chỉ hiển thị cho quản trị viên, vì việc lập kế hoạch tự động nói chung đòi hỏi vai trò Admin. Mỗi báo cáo nêu số lượng mục của nó trong tiêu đề và **hoàn toàn không hiển thị nếu không tìm thấy gì** — vì vậy một khung bị thiếu chính là một tin tốt.

**Cách bạn mở được các hộp thoại này:** Nút đũa thần trong lịch làm việc, ở trạng thái mặc định, khởi động ngay một lượt lập kế hoạch mà không hiển thị hộp thoại nào. Với **Ctrl+Shift+H**, quản trị viên chuyển nút này thành một danh sách thả xuống với từng trợ lý lập kế hoạch riêng lẻ (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — chỉ qua danh sách thả xuống này, các hộp thoại với bảng chẩn đoán mới mở ra.

**Thiếu hụt trình độ chuyên môn** xuất hiện cùng với kết quả, tức là *trước khi* bạn nhận kết quả đó. Các cột: Mức độ nghiêm trọng, Ca làm việc, Ngày, Trình độ chuyên môn yêu cầu, Lý do — cộng thêm một cột "Nhân viên", ngay khi có ít nhất một dòng nêu tên một người. Là lý do, có thể là *Không có*, *Đã hết hạn* hoặc *Bậc quá thấp*. Đằng sau đó là hai trường hợp khác nhau: hoặc một vị trí ca làm việc bị bỏ trống vì không có ai sẵn sàng mang trình độ chuyên môn được yêu cầu — khi đó dòng này không nêu tên người nào. Hoặc một người vẫn được xếp vào một ca làm việc mà họ không đủ trình độ chuyên môn — khi đó tên của họ được ghi kèm theo. Nếu trình độ chuyên môn chỉ thiếu trong hệ thống, hãy lưu nó cho người đó; [Danh mục trình độ chuyên môn](../einstellungen/stammdaten-organisation/qualifikationen.md) mô tả cách quản lý trình độ chuyên môn. Nếu không, bạn hãy xếp người khác vào hoặc điều chỉnh lại yêu cầu của ca làm việc.

**Vi phạm Compliance** xuất hiện *sau khi* bạn đã nhận kết quả. Các cột: Ngày, Nhân viên, Nhận xét; nhận xét nêu rõ bằng lời quy tắc bị vi phạm cùng với các giá trị cụ thể. Các dòng màu đỏ là lỗi, màu vàng là cảnh báo và ghi chú. Đối với hai trợ lý hài hòa (Harmonizer), báo cáo chỉ hiển thị những gì kịch bản mới mang lại **thêm** so với kế hoạch thực tế — và ngoài ra còn cho biết có bao nhiêu vi phạm trong số đó được quản lý ở chế độ Block. Những vi phạm này ngăn không cho kịch bản được nhận, cho đến khi chúng được khắc phục hoặc được một người có thẩm quyền chủ động ghi đè.

**Các vị trí bị bỏ qua** chỉ có ở trợ lý lập kế hoạch ca làm việc, cũng xuất hiện sau khi nhận kết quả — và luôn có màu đỏ. Các cột: Ngày, Nhân viên, Ca làm việc, Lý do. Ở đây không ghi những gì đã được lập kế hoạch, mà là những gì Klacks cố ý **không** ghi: những phân công lẽ ra sẽ vi phạm một quy tắc được quản lý ở chế độ Block. Lý do xuất hiện dưới dạng một danh mục ngắn ("Thời gian nghỉ quá ngắn", "Quá nhiều ngày làm việc liên tiếp", "Xung đột thời gian" …). Tùy tình huống, bên dưới đó Klacks có thể đề nghị người có thẩm quyền vẫn nhận lượt chạy này bằng Override; tất cả những người khác nhận được gợi ý lặp lại trợ lý với Override đã kích hoạt hoặc nhờ một người có thẩm quyền thực hiện việc đó. Mỗi lần Override đều được ghi lại.

Những quy tắc nào được kiểm tra và mức độ nghiêm ngặt của chúng được xác định trong [Quy tắc lập kế hoạch](../planen/planungsregeln.md); cách kế hoạch được tạo ra ngay từ đầu được mô tả trong [Tự động lập kế hoạch: Bản kế hoạch trong vài giây](../planen/auto-planung.md).

## Điều cần biết

- Một mục bị chặn không loại bỏ toàn bộ kế hoạch: chỉ những phân công bị ảnh hưởng mới mất đi, các mục hợp lệ khác của cùng một người vẫn được ghi.
- Về mức độ nghiêm trọng của thiếu hụt trình độ chuyên môn, có một quy tắc đơn giản: chỉ là **Lỗi** khi một trình độ chuyên môn được đánh dấu bắt buộc hoàn toàn không có. Một trình độ chuyên môn đã hết hạn, một bậc quá thấp và mọi yêu cầu tùy chọn đều xuất hiện dưới dạng **Cảnh báo**.
- Một vị trí ca làm việc trống chỉ xuất hiện trong danh sách thiếu hụt trình độ chuyên môn nếu thực sự không có ai sẵn sàng phù hợp. Nếu nó bị bỏ trống vì lý do khác, đó là tình trạng thiếu nhân lực thông thường và sẽ không được báo cáo ở đây.
- Nếu việc lập kế hoạch tự động chạy như một lượt tổng thể, Klacks chỉ báo kết quả bằng một thông báo ngắn kèm số lượng thiếu hụt trình độ chuyên môn — các bảng chi tiết đầy đủ thuộc về hộp thoại của từng trợ lý riêng lẻ.
- Các báo cáo này chỉ là chế độ xem thuần túy: không thể chỉnh sửa và không làm thay đổi bất cứ điều gì. Việc sửa chữa được thực hiện trong [Lưới kế hoạch: Ma trận thời gian tương tác của bạn](../planen/plan-raster.md) hoặc bằng một lượt chạy mới.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
