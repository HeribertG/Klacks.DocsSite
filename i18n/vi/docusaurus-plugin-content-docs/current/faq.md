---
sidebar_position: 9
---
# Câu hỏi thường gặp

Những câu hỏi được đặt ra nhiều nhất trước lần sử dụng đầu tiên — với những câu trả lời trung thực, kể cả khi câu trả lời là "chưa có".

## Dùng thử và bắt đầu

**Tôi có phải cài đặt Klacks mới xem được không?**
Không. [Playground](https://play.klacks-software.ch) là một phiên bản công khai với dữ liệu mẫu; bạn đăng nhập bằng `admin@test.com` / `P@ssw0rt1` và có đầy đủ quyền Admin. Cơ sở dữ liệu được đặt lại hằng ngày lúc 04:00 giờ Thụy Sĩ — đừng tạo dữ liệu cá nhân thật ở đó.

**Cài đặt mất bao lâu?**
Trình cài đặt chỉ là một lệnh. Nó tạo mật khẩu và chứng chỉ, ghim phiên bản hiện tại, khởi động stack và chờ cho đến khi mọi thứ hoạt động tốt. Phần lớn thời gian là tải các image về. Điều kiện tiên quyết có tại [Yêu cầu hệ thống](../betrieb/systemvoraussetzungen/).

**Tại sao tôi phải tạo tài khoản Admin riêng?**
Vì tài khoản đi kèm có mật khẩu được công khai. Klacks chỉ cho bạn đăng nhập bằng tài khoản đó đúng một lần rồi yêu cầu tài khoản của chính bạn; sau đó tài khoản mặc định bị tắt. Đây là chủ ý, không phải lỗi.

## Vận hành

**Dữ liệu của tôi nằm ở đâu?**
Trên hạ tầng của bạn. Klacks không gửi dữ liệu của bạn ngược về nhà sản xuất. Nếu bạn tích hợp một mô hình AI như một dịch vụ bên ngoài, thì điều khoản của **dịch vụ đó** tất nhiên sẽ được áp dụng — việc chọn mô hình là do bạn.

**Tôi có nhất thiết cần một nhà cung cấp đám mây không?**
Không, đó chính là cốt lõi của On-Premise: stack chạy trên máy chủ của bạn. Bạn chỉ cần truy cập **đi ra** tới các nguồn gói và cập nhật (`ghcr.io`, `github.com`). Hiện tại **không** có chế độ vận hành hoàn toàn không có kết nối internet — việc cài đặt trong mạng cô lập là một bước mở rộng chưa được thực hiện.

**Làm thế nào để sao lưu dữ liệu của tôi?**
Tự bạn thực hiện — việc sao lưu thuộc trách nhiệm của bạn. Cách làm và volume nào tuyệt đối không được quên có tại [Sao lưu và khôi phục](../betrieb/backup-und-wiederherstellung/).

**Điều gì xảy ra nếu một bản cập nhật gặp sự cố?**
Dịch vụ cập nhật sao lưu cơ sở dữ liệu trước, chuyển các phiên bản mới cùng lúc, rồi kiểm tra tình trạng hoạt động. Nếu phiên bản mới không ổn, nó tự động rollback. Chi tiết tại [Cập nhật và rollback](../betrieb/updates-und-rollback/).

**Klacks có chạy trên phần cứng hiện có của tôi không?**
Theo chỉ dẫn tham khảo: **8 GB RAM và 4 vCPU**. Với các máy chủ nhỏ hơn có những cài đặt được ghi chép giúp giải phóng bộ nhớ — đổi lại, câu hỏi tiếp theo gửi cho Klacksy sẽ mất nhiều thời gian hơn một chút.

**Klacks có tương thích với Identity Provider của tôi không?**
Có. Klacks có thể kết nối với một nhà cung cấp danh tính hiện có thay vì tự quản lý tài khoản — xem [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Tính năng

**Klacks phù hợp với những ngành nào?**
Nó được thiết kế cho các đơn vị làm việc theo ca và điều phối: chăm sóc điều dưỡng ngoại trú và Spitex, bệnh viện, dịch vụ an ninh, dịch vụ vệ sinh và dọn dẹp gia đình, cũng như logistics.

**Giao diện hỗ trợ những ngôn ngữ nào?**
Tài liệu có sẵn bằng 25 ngôn ngữ, trong đó có tiếng Đức, Anh, Pháp, Ý, Tây Ban Nha, Ba Lan, Nhật, Trung (giản thể và phồn thể), Ả Rập và Do Thái — tiếng Ả Rập và Do Thái cũng được hỗ trợ cả hướng đọc từ phải sang trái.

**Tôi có phải quyết định chọn một mô hình AI không?**
Bạn tự chọn nhà cung cấp và mô hình, và có thể đổi chúng. Cách thiết lập và kiểm tra có tại [Nhà cung cấp LLM và mô hình](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) và [Kiểm tra kết nối mô hình](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Klacks có giá bao nhiêu?**
Mã nguồn nằm dưới giấy phép GNU Affero General Public License v3 (AGPL-3.0) — bạn được đọc, chỉnh sửa và tự vận hành. Nếu bạn cung cấp một phiên bản đã chỉnh sửa cho người khác qua mạng, bạn cũng phải cung cấp mã nguồn đã chỉnh sửa đó cho những người dùng này theo AGPL-3.0. Mọi thứ vượt ra ngoài phạm vi đó (câu hỏi, trao đổi, phát triển tiếp) đều diễn ra qua [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC) và [kho mã nguồn công khai](https://github.com/HeribertG/Klacks.Api).

**Klacks đã hoàn thiện chưa?**
Chưa, và cũng không có chỗ nào nói như vậy. Klacks đang trong quá trình xây dựng, nhưng được phát triển công khai và thực sự đang được vận hành — trong Playground, bạn có thể tự kiểm tra hiện trạng bất cứ lúc nào thay vì tin vào một lời mô tả.

## Cùng tham gia

**Tôi phát hiện một lỗi hoặc có một câu hỏi.**
Nhanh nhất là trong [cộng đồng trên Discord](https://discord.gg/YRP8p2abVC). Với lỗi của phần mềm, báo cáo nên được gửi vào [kho mã nguồn](https://github.com/HeribertG/Klacks.Api). Những thông tin luôn hữu ích: phiên bản, bước cuối cùng trước khi xảy ra lỗi và những dòng cuối cùng của nhật ký — xem [Khắc phục sự cố](../betrieb/fehlerbehebung/).

**Tôi có thể tự đóng góp không?**
Mã nguồn là mở và tài liệu nằm cùng một nơi. Những gợi ý về chỗ chưa rõ cũng được hoan nghênh như mã nguồn vậy.

---

*Câu hỏi của bạn chưa có? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
