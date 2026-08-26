---
sidebar_position: 8
---

# Klacksy: Thành viên chủ động trong nhóm

Klacksy không chờ được hỏi. Mỗi giờ một lần, nó tự xem xét hoạt động vận hành ở chế độ nền và báo cáo những gì nó nhận thấy: dịch vụ chưa có người đảm nhận, hợp đồng sắp hết hạn, kỳ quá hạn, dữ liệu gốc còn thiếu. Quản trị viên tự quyết định Klacksy được phép đi xa đến đâu, riêng cho từng loại phát hiện — theo cài đặt gốc, nó chỉ báo cáo và không bao giờ tự ý hành động.

Đừng nhầm lẫn với [Mức độ tự chủ](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): ở đó là chuyện Klacksy cần bao nhiêu xác nhận khi **bạn** yêu cầu nó điều gì đó trong khung chat. Còn ở đây là điều ngược lại — là những gì nó làm **mà không được yêu cầu**.

## Cách hoạt động

**Một phát hiện là gì:** Một phát hiện là một nhận định mà Klacksy tự mình đưa ra — ví dụ "ca làm việc này trong ba ngày nữa vẫn chưa có người đảm nhận" hoặc "kỳ thanh toán này đã quá hạn một tuần". Để làm việc đó, mỗi giờ có một lượt chạy nền quét qua khoảng một chục quy tắc kiểm tra. Bản thân việc phát hiện được lập trình cố định: không có mô hình ngôn ngữ nào quyết định điều gì là một phát hiện — cùng một quy tắc luôn cho ra cùng một kết quả, bất kể bạn dùng nhà cung cấp AI nào.

**Mười bốn loại phát hiện có thể điều chỉnh được,** trong đó có Dịch vụ chưa có người đảm nhận, Khoảng trống trong tình trạng sẵn sàng, Hợp đồng sắp hết hạn, Thiếu dữ liệu gốc, Đơn hàng còn mở, Chốt kỳ sắp đến hạn, Kỳ quá hạn, Chênh lệch so với giờ định mức, Container trống, Xung đột khóa và Kịch bản còn mở. Hai trong số đó không phát sinh từ lượt chạy hàng giờ, mà từ việc nhập đơn hàng ERP.

**Ba mức — riêng cho từng loại phát hiện:** Trong mục Cài đặt > Klacksy > "Phạm vi hành động của Klacksy" (Chế độ chuyên gia, chỉ dành cho quản trị viên), mỗi loại phát hiện có một dòng riêng với cột "Mức cao nhất":

- **Chỉ báo cáo** — Klacksy chỉ báo cho biết, không hơn. Đây là cài đặt gốc cho mọi loại phát hiện.
- **Chuẩn bị sẵn kịch bản** — Klacksy còn chuẩn bị thêm một giải pháp hoàn chỉnh dưới dạng kịch bản để bên cạnh, con người chỉ cần chấp nhận.
- **Thực hiện** — Klacksy tự khắc phục phát hiện đó và sau đó báo cáo lại.

Từ mức "Chuẩn bị sẵn kịch bản" trở lên, phải có một người chịu trách nhiệm được chỉ định: hành động được thực hiện dưới quyền của người đó, và người đó nhận báo cáo. Ngoài ra, mỗi dòng còn có các ngân sách giới hạn số lần Klacksy được phép hành động (theo cài đặt gốc, tối đa 5 hành động mỗi ngày và 3 hành động trong vòng 60 phút), cùng một công tắc "Hoạt động". Công tắc này chỉ điều khiển việc hành động tự chủ — còn việc bạn có nhận được một thông báo hay không và bằng cách nào vẫn là cài đặt thông báo cá nhân của bạn.

**Giới hạn cứng trong chương trình:** Một mức cao hơn chỉ có tác dụng ở nơi thực sự có sẵn một cách khắc phục tự động cho loại phát hiện đó. Nếu không có, mọi thứ vẫn dừng ở việc báo cáo — bất kể cài đặt là gì, kể cả khi có ai đó ủy quyền phát hiện đó cho Klacksy trong từng trường hợp cụ thể. Giới hạn này nằm trong mã nguồn của chương trình và không thể mở ra qua giao diện. Hiện tại chỉ có đúng một cách khắc phục được cài đặt sẵn: với loại phát hiện "Container trống", Klacksy có thể tự tạo mẫu vị trí (slot) còn thiếu.

**Nơi các phát hiện xuất hiện:** Trên nút Klacksy ở thanh tiêu đề, một bộ đếm hiển thị số thông báo chưa đọc. Một cú nhấp sẽ mở thanh bên, nơi các phát hiện được tập hợp dưới tiêu đề "Trong lúc bạn vắng mặt…". Với mỗi thông báo, có sẵn các nút "Cho tôi xem" (nhảy đến vị trí bị ảnh hưởng), "Hữu ích" và "Ẩn" — mục cuối có thể chọn kèm một lý do ("Tôi nói chung không muốn nhận những thông báo như vậy", "Lần này thông báo bị sai", "Đã được xử lý rồi") hoặc không cần lý do. Ở những nơi được phép, còn có thêm "Bạn làm đi": một sự cho phép riêng lẻ, nâng đúng phát hiện này lên mức "Chuẩn bị sẵn kịch bản". Bạn cũng có thể hỏi trực tiếp Klacksy trong khung chat những phát hiện nào đang còn mở.

**Khi một phát hiện đã được khắc phục:** Dòng bị ảnh hưởng mang dấu "Đã được Klacksy khắc phục vào …" trong chế độ xem Container của danh sách dịch vụ — cả khi Klacksy tự thực hiện việc khắc phục, lẫn khi một con người chấp nhận một kịch bản do Klacksy chuẩn bị sẵn. Nếu Klacksy tự thực hiện, một báo cáo cũng được gửi thêm đến người chịu trách nhiệm.

**Nút dừng khẩn cấp:** Phía trên khung chat, quản trị viên thấy công tắc "Klacksy hành động tự chủ: BẬT/TẮT". Tắt công tắc này sẽ ngay lập tức đặt lại mọi loại phát hiện về "chỉ báo cáo" — kể cả những cho phép riêng lẻ đã được cấp trước đó. Các thông báo không vì thế mà dừng lại: nút dừng khẩn cấp chỉ dừng hành động, không dừng việc báo cáo. Công tắc tương tự cũng có mặt trong thẻ cài đặt.

## Điều cần biết

- Theo cài đặt gốc, mọi loại phát hiện đều ở mức "Chỉ báo cáo" — Klacksy chỉ hành động khi một quản trị viên chủ động nâng mức lên. Nút dừng khẩn cấp không cần thiết cho việc đó: nó không được bật theo cài đặt gốc và vẫn nằm trong dự trữ như một phanh tức thời.
- Thông báo chỉ được gửi đến quản trị viên và người lập kế hoạch có thẩm quyền. Ai chỉ được phép xem một số nhóm nhất định thì cũng chỉ nhận phát hiện từ những nhóm đó; quản trị viên thấy tất cả. Người lập kế hoạch nhận được các phát hiện nhưng không thấy cài đặt mức.
- Mức "Chuẩn bị sẵn kịch bản" chỉ có tác dụng với những cách khắc phục có thể thể hiện được dưới dạng kịch bản. Cách khắc phục hiện đang được cài đặt sẵn không thuộc loại đó — với nó, chỉ có "Thực hiện" có tác dụng.
- Thẻ cài đặt và công tắc tự chủ đòi hỏi quyền quản trị viên; nếu không có quyền đó, trạng thái tự chủ không thể xem được.
- Nhịp hàng giờ được lập trình cố định và không thể điều chỉnh qua giao diện; lượt chạy đầu tiên bắt đầu hai phút sau khi chương trình khởi động.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
