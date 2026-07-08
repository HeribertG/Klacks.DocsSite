---
sidebar_position: 1
---

# Tối ưu hóa tour và tuyến đường

Đối với các hoạt động di động — tour Spitex, tuần tra an ninh, các đối tượng vệ sinh, giao hàng — Klacks không chỉ lập kế hoạch *ai* mà còn *theo thứ tự nào*.

## Cách hoạt động

Mỗi địa điểm hoạt động được lưu kèm địa chỉ; nhờ đó Klacks biết các tuyến đường. Một **thuật toán đàn kiến** (một phương pháp tối ưu hóa đã được chứng minh cho các bài toán về tuyến đường) tính toán từ các địa chỉ hoạt động ra thứ tự hợp lý nhất:

1. **Nhập địa chỉ** — lưu một lần tại các địa điểm hoạt động
2. **Tối ưu hóa thứ tự** — Klacks xác định trình tự ngắn nhất hợp lý; các đường vòng và chuyến đi không tải sẽ được loại bỏ
3. **Hiển thị trên bản đồ** — tour hoàn chỉnh xuất hiện dưới dạng tuyến đường, tùy chọn cho ô tô, xe đạp hoặc đi bộ

Nếu một hoạt động có khung giờ cố định được lưu (ví dụ chỉ vào buổi sáng), điều này sẽ được đưa vào việc lập kế hoạch tour — nhưng đây không phải là một cam kết cứng về việc tuân thủ.

## Điều cần biết

- Để tính khoảng cách và thời gian di chuyển, Klacks có thể tích hợp dịch vụ bên ngoài OpenRouteService (tọa độ GPS được truyền đi dưới dạng ẩn danh) — tùy theo cấu hình của instance.
- Tối ưu hóa tour là một thành phần độc lập dành cho các dịch vụ Container; việc lập kế hoạch tự động chung của lịch trực đánh giá độc lập về mức độ bao phủ, sự công bằng và tuân thủ quy tắc.
- Phương tiện di chuyển có thể chọn riêng cho từng tour — tiện lợi cho các tour xe đạp trong thành phố bên cạnh các tour ô tô ở nông thôn.
- Nếu ai đó vắng mặt, Klacks sẽ ngay lập tức hiển thị ai đủ trình độ và sẵn sàng.

![Chế độ xem dòng thời gian cho việc lập kế hoạch tuyến đường](/img/app-timeline-de.png)

---
*Dùng thử ngay: [Klacks Playground](https://klacks-software.ch:7643) — Đăng nhập `admin@test.com` / `P@ssw0rt1`, dữ liệu được đặt lại mỗi ngày.*
