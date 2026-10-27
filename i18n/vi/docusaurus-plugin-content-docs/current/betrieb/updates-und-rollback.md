---
sidebar_position: 3
---
# Cập nhật và rollback

Klacks tự cập nhật — với các gói có chữ ký, một bản sao lưu trước mỗi bước và đường lui tự động nếu có sự cố. Trang này giải thích những gì diễn ra và cách bạn có thể can thiệp.

## Một bản cập nhật diễn ra như thế nào

1. **Phát hiện.** API truy vấn manifest có chữ ký mà nhà sản xuất công bố cùng mỗi bản phát hành. Nếu ở đó có ghi một phiên bản mới hơn, bản cập nhật được coi là sẵn có.
2. **Sao lưu.** Dịch vụ cập nhật tạo một bản sao lưu dữ liệu của cơ sở dữ liệu. Nếu phiên bản mới chứa một migration, bản sao lưu này được gắn chặt với thao tác cập nhật và sau đó sẵn sàng cho đường lui.
3. **Tải về và kích hoạt cùng nhau.** Dịch vụ tải các image mới cho `klacks-api` **và** `klacks-ui` rồi chuyển cả hai cùng lúc — hai phần luôn chạy đồng bộ, không bao giờ ở các phiên bản khác nhau.
4. **Kiểm tra.** Sau khi chuyển, dịch vụ truy vấn kiểm tra tình trạng sâu `/internal/health/deep`.
5. **Đánh giá.** Nếu phiên bản mới hoạt động tốt, bản cập nhật được coi là thành công. Nếu không, dịch vụ tự động rollback **cả hai** phần về phiên bản trước và kiểm tra lại. Nếu điều đó cũng không thành công, trạng thái được ghi nhận là thất bại để bạn nhìn thấy.

## "Có chữ ký" nghĩa là gì

Nhà sản xuất ký mỗi bản phát hành, và Klacks của bạn kiểm tra chữ ký trước khi chấp nhận một gói. Khóa công khai và địa chỉ của manifest là các giá trị cố định của nhà sản xuất trong `.env` của bạn:

- `UPDATE_MANIFEST_BASE_URL` — cố định trỏ tới nguồn phát hành của nhà sản xuất
- `UPDATE_SIGNATURE_PUBLIC_KEY` — phải khớp với khóa riêng mà nhà sản xuất dùng để ký

Hai giá trị này **không được thiết kế để thay đổi**. Ai thay chúng sẽ vô hiệu hóa việc kiểm tra và qua đó mở đúng lỗ hổng mà chữ ký đã đóng lại.

Manifest chứa, trong số những thứ khác: kênh (`Stable` hoặc `Beta`), phiên bản mới nhất, phiên bản tối thiểu từ đó có thể cập nhật trực tiếp (`MinUpgradableFrom`), ngày phát hành, có kèm migration cơ sở dữ liệu hay không, các artifact, chữ ký và một tham chiếu đến danh sách thay đổi.

`klacks-api` và `klacks-ui` được **ghim vào một phiên bản chính xác** trong `.env` để chúng không lặng lẽ lệch nhau. Bản thân dịch vụ cập nhật luôn chạy ở `latest` — nó cố ý không nằm trong manifest có chữ ký và chỉ thay thế api và ui.

## Cài đặt khi vận hành

Trong khu vực Admin tại **Hệ thống → Cập nhật**:

| Cài đặt | Tác dụng |
|---|---|
| **Kích hoạt cập nhật tự động** | Các bản cập nhật được phát hiện và cài đặt tự động |
| **Chỉ thông báo** | Các bản cập nhật chỉ được **phát hiện**, nhưng không được cài đặt cho đến khi bạn kích hoạt |
| **Cửa sổ bảo trì** | Khoảng thời gian cho phép các bản cập nhật tự động chạy |

Các cài đặt này nằm trong cơ sở dữ liệu và ghi đè các giá trị khởi đầu từ `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), vốn chỉ có hiệu lực ở lần khởi động đầu tiên.

## Rollback thủ công

Về mặt tự động thì không ai phải can thiệp ở đây — dịch vụ tự rollback một bản cập nhật thất bại. Nếu bạn chủ động muốn lùi một bước:

1. Đặt `KLACKS_API_TAG` và `KLACKS_UI_TAG` trong `.env` về phiên bản trước.
2. Kích hoạt lại stack: `docker compose up -d klacks-api klacks-ui`.
3. **Nếu phiên bản lỗi đã thực hiện migration**, hãy khôi phục thêm bản sao lưu tương ứng từ trước khi cập nhật — và lưu ý cái bẫy trên trang [Sao lưu và khôi phục](../backup-und-wiederherstellung/): các bảng do phiên bản mới tạo ra vẫn còn sau khi khôi phục và chặn lần khởi động tiếp theo.

## Nên biết

- **Đường lui không phải là giải pháp chữa cháy, mà là trường hợp bình thường.** Mỗi thao tác cập nhật đều có một trạng thái: thành công, đã rollback hoặc đường lui thất bại. Một bản cập nhật đã rollback là một thao tác bình thường, được ghi nhận — không phải một sự cố.
- **Một bản cập nhật đã rollback không có nghĩa là đã được đặt lại.** Rollback khôi phục phiên bản, không phải dữ liệu của bạn. Những thay đổi dữ liệu mà bạn thực hiện giữa lúc cập nhật và lúc quay lui sẽ lấy từ trạng thái của bản sao lưu.
- **Bạn có thể xem lại trong nhật ký:** `docker compose logs klacks-updater` cho thấy việc phát hiện, sao lưu, chuyển đổi và đường lui.

---

*Câu hỏi về vận hành? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
