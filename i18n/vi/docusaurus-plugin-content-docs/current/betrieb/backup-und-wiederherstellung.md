---
sidebar_position: 2
---
# Sao lưu và khôi phục

Dữ liệu của bạn nằm hoàn toàn trên hạ tầng của bạn — vì vậy việc sao lưu cũng thuộc về bạn. Trang này cho biết cần sao lưu những gì và cách khôi phục chúng.

## Những gì cần sao lưu

| Gì | Ở đâu | Tần suất |
|---|---|---|
| Cơ sở dữ liệu | Volume `postgres_data` | hằng ngày, ít nhất là trước mỗi lần cập nhật |
| Tệp tải lên | Volume `api-uploads` | cùng với cơ sở dữ liệu |
| Tài liệu | Volume `api-documents` | cùng với cơ sở dữ liệu |
| Chuỗi khóa | Volume `api-dataprotection` | cùng với cơ sở dữ liệu, **tuyệt đối bắt buộc** |

Volume `api-dataprotection` chứa chuỗi khóa mà Klacks dùng để giải mã các cài đặt đã được mã hóa (ví dụ thông tin đăng nhập vào các kênh liên lạc). Một cơ sở dữ liệu không có chuỗi khóa này tuy vẫn tồn tại nhưng không dùng được đầy đủ — hãy luôn sao lưu nó cùng lúc.

## Sao lưu cơ sở dữ liệu

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Định dạng `-Fc` (custom) nén dữ liệu và cho phép chọn từng bảng riêng khi khôi phục.

## Khôi phục cơ sở dữ liệu

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` dọn các đối tượng hiện có trước, để việc khôi phục không thất bại do các bảng đã tồn tại.

## Cái bẫy: rollback sau một lần migration thất bại

Chính ở đây, trong quá khứ đã từng xảy ra một sự cố ngừng hoạt động trên môi trường production, và cơ chế này là của mọi cách rollback dựa trên dump:

Nếu một phiên bản lỗi tạo **bảng mới** qua migration, những bảng này không có trong dump. Khi khôi phục, cơ sở dữ liệu vì thế không dừng lại ở trạng thái cũ — các bảng mới **vẫn còn sống sót** sau khi khôi phục, trong khi lịch sử migration (`__EFMigrationsHistory`) bị đặt về trạng thái cũ. Lần khởi động tiếp theo sẽ gặp lỗi `42P07: relation "…" already exists` và hệ thống cài đặt kẹt trong vòng lặp khởi động lại.

Vì vậy, nếu sau một bản cập nhật thất bại bạn rollback thủ công, hãy kiểm tra sau khi khôi phục xem có còn sót bảng nào mà phiên bản cũ chưa có hay không, và xóa chúng đi **trước khi** khởi động lại API.

## Lưu trữ và xóa

Klacks không chỉ xóa dữ liệu bằng dấu đánh dấu xóa, mà xóa **vật lý**. Một dịch vụ nền chạy hằng ngày và loại bỏ vĩnh viễn mọi dòng được đánh dấu là đã xóa mà thời điểm xóa đã quá thời hạn được cấu hình — trên **mọi** bảng có dấu đánh dấu xóa (nhân viên, địa chỉ, nhóm, dịch vụ, thời gian làm việc, vắng mặt, giờ nghỉ, v.v.). Không có danh sách ngoại lệ; nghĩa vụ xóa được cố ý đặt trước khả năng khôi phục.

Bạn điều khiển thời hạn qua cài đặt `DATA_RETENTION_DAYS`; nếu không tự khai báo thì giá trị mặc định là **3650 ngày (10 năm)**. Trang [Lưu trữ dữ liệu](../../einstellungen/system-sicherheit/datenaufbewahrung/) mô tả chi tiết cài đặt này.

## Nên biết

- **Trước mỗi lần cập nhật, Klacks tự sao lưu.** Dịch vụ cập nhật tạo một bản sao lưu dữ liệu trước khi kích hoạt phiên bản mới; với migration, bản sao lưu gắn với thao tác cập nhật và được dùng lại cho việc rollback tự động hoặc thủ công. Điều này không thay thế bản sao lưu **bên ngoài** của riêng bạn — bản đó bảo vệ đúng trong những trường hợp chính máy chủ bị ảnh hưởng.
- **Hãy kiểm tra bản sao lưu của bạn.** Một bản dump chưa bao giờ được khôi phục chỉ là một giả định, không phải một bản sao lưu. Hãy tạo một cơ sở dữ liệu dùng một lần và khôi phục vào đó trước khi bạn tin cậy vào quy trình này.
- **Hãy cất chuỗi khóa tách biệt khỏi cơ sở dữ liệu.** Nếu `api-dataprotection` nằm trong cùng một bộ sao lưu và cùng một sự cố làm hỏng cả hai thì việc mã hóa trở nên vô giá trị.

---

*Câu hỏi về vận hành? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
