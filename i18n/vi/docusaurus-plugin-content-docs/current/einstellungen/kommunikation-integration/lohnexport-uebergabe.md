---
sidebar_position: 7
---

# Bàn giao xuất lương

Khi niêm phong một kỳ được giới hạn theo nhóm, Klacks có thể tự động bàn giao dữ liệu lương của kỳ đó cho một hệ thống lương bên ngoài. Trang này giải thích điều kiện cần thiết cho việc đó và vì sao việc bàn giao đôi khi có vẻ như không mang lại gì cả — trường hợp hỗ trợ phổ biến nhất liên quan đến tính năng này.

## Cách hoạt động

**Điều kiện: gói bổ sung cho việc xuất lương.** Việc tự động bàn giao cho một hệ thống lương không phải là chức năng cốt lõi, mà cần một gói bổ sung riêng, gói này phải được cài đặt **và** đang hoạt động trong mục Cài đặt > Plugin tính năng. Nếu thiếu gói bổ sung này, hoặc nó chỉ bị vô hiệu hóa, việc bàn giao sẽ hoàn toàn không mang lại gì — không có tệp, không có thông báo, không có mục nào mà bạn có thể thấy được. Điều này còn nghiêm ngặt hơn cả một định dạng xuất bị vô hiệu hóa trong cài đặt xuất dữ liệu: trường hợp đó ít nhất còn để lại một mục trong nhật ký máy chủ — ở đây thì không có gì cả.

**Chỉ bàn giao một lần duy nhất (Idempotency).** Việc tự động bàn giao chỉ chạy đúng một lần cho mỗi tổ hợp nhóm, hệ thống đích và khoảng ngày chính xác — điều này ngăn không cho cùng một dữ liệu lương vô tình đến hệ thống lương hai lần. Nếu bạn mở lại một kỳ đã niêm phong, sửa một điều gì đó rồi niêm phong lại, lần bàn giao thứ hai sẽ bị bỏ qua mà không có thông báo nào: cho đúng tổ hợp này đã có sẵn một mục bàn giao, và việc mở lại không xóa mục đó đi.

**Một lần tải xuống thủ công cũng được tính như vậy.** Một lần tải xuống lương thủ công, theo nhu cầu, cho cùng nhóm/cùng hệ thống đích/cùng khoảng thời gian sẽ tạo ra cùng một mục như một lần bàn giao tự động. Một lần tải xuống thủ công được thực hiện trước lần bàn giao tự động sẽ "dùng hết" lượt bàn giao đó cho khoảng thời gian bị ảnh hưởng, y hệt như thể nó đã chạy tự động rồi.

| Vì sao không có gì (mới) đến? | Đã có mục nào chưa? | Có chặn một lần tải xuống thủ công sau đó không? |
|---|---|---|
| Gói bổ sung chưa được cài đặt/kích hoạt | không | không |
| Đã bàn giao cho đúng tổ hợp này rồi | có (hiển thị trong tab „Nhật ký" của phần Chốt kỳ) | không |

**Hai điểm cần lưu ý chính xác:**

- Một lần tải xuống thủ công **không** áp dụng bất kỳ điều chỉnh định dạng xuất nào mà bộ phận hỗ trợ có thể đã thiết lập — nó luôn dùng các giá trị mặc định, ngay cả khi có một điều chỉnh đang hoạt động cho hệ thống đích, điều chỉnh này lẽ ra sẽ có hiệu lực trong đường dẫn tự động.
- Lượt khóa "chỉ một lần" là chính xác tuyệt đối: nó chỉ có hiệu lực khi nhóm, hệ thống đích và ngày bắt đầu/kết thúc đều giống hệt nhau. Một khoảng thời gian khác hoặc một hệ thống đích khác sẽ không bị chặn bởi một lần bàn giao trước đó.

**Nếu sau khi niêm phong không có gì đến, hoặc cần gửi bổ sung các số liệu đã sửa:** Trước tiên hãy kiểm tra xem gói bổ sung phù hợp đã được cài đặt và đang hoạt động trong mục Cài đặt > Plugin tính năng hay chưa. Sau khi mở lại và sửa chữa, cách đáng tin cậy để đưa các số liệu đã sửa vào hệ thống lương là **xuất dữ liệu thủ công** trong khu vực Chốt kỳ (tab „Xuất dữ liệu") — nó không chịu ràng buộc bởi lượt khóa của gói bổ sung, cũng không chịu ràng buộc bởi lượt khóa "chỉ một lần" của việc bàn giao tự động. Vì nó cũng không áp dụng điều chỉnh định dạng xuất, trong trường hợp này hãy tự tay kiểm tra các số liệu đã xuất so với một điều chỉnh có thể đang hoạt động.

## Điều cần biết

- Cơ sở cho mỗi lần bàn giao là một kỳ đã niêm phong, được giới hạn theo nhóm — cách niêm phong một kỳ được mô tả trên trang [Chốt kỳ](../../planen/periodenabschluss.md). Việc niêm phong và mở lại ở đó chỉ dành cho các vai trò quản trị.
- Trang này mô tả việc **xuất** dữ liệu lương từ Klacks sang một hệ thống lương. Chiều ngược lại — việc **nhập** đơn hàng từ một hệ thống ERP vào Klacks — được mô tả trong [Điểm tiếp nhận ERP](./erp-uebernahmepunkte.md).
- Các gói bổ sung được quản lý tập trung trong mục Cài đặt > Plugin tính năng: cài đặt, kích hoạt/vô hiệu hóa hoặc gỡ bỏ hoàn toàn.
- Một gói bổ sung bị vô hiệu hóa vẫn được cài đặt, nhưng khóa việc tự động bàn giao hoàn toàn giống như khi chưa được cài đặt.

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
