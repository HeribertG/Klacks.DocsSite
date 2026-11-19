---
sidebar_position: 1
---

# Cài đặt và Playground

Bạn có thể dùng thử Klacks trong một phút — và cài đặt nó trong vài phút. Không cần đăng ký, không cần trao đổi bán hàng.

## Playground: sân chơi để làm quen

Playground không phải là một phương án cài đặt, mà là một phiên bản Klacks công khai với dữ liệu mẫu để bạn nghịch thử thoải mái, không ràng buộc gì — đây cũng chính là lý do cho cái tên này. Nó chạy tại **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Đăng nhập:** `admin@test.com` · **Mật khẩu:** `P@ssw0rt1`
- Bạn có đầy đủ quyền Admin — cứ thoải mái dùng thử mọi thứ.
- Dữ liệu mẫu gồm khoảng 5'000 khách hàng và hoàn toàn chỉ là dữ liệu demo.
- **Đừng nhập dữ liệu cá nhân thật.** Cơ sở dữ liệu được đặt lại về một trạng thái cố định mỗi ngày lúc 04:00 giờ Thụy Sĩ (02:00 UTC).

## Cài đặt: Trên máy chủ riêng (On-Premise)

Gói On-Premise bao gồm mọi thứ cần thiết: các Docker image, trình cài đặt, cơ sở dữ liệu, HTTPS và cập nhật tự động. Bạn chỉ tải gói này từ [Klacks Store](https://klacks-software.ch/store/?culture=vi).

Trong Klacks Store, chọn ngành nếu muốn và tải tệp ZIP cho quốc gia của bạn. Trình cài đặt tự tạo mật khẩu và chứng chỉ, tải về các Docker image mới nhất và chờ cho đến khi mọi thứ chạy xong.

### Linux: từng bước một

Bạn cần một máy có ít nhất 8 GB RAM, các cổng 80 và 443 còn trống, có kết nối Internet và một tài khoản có quyền `sudo`. Docker không cần phải được cài sẵn (xem bước 4).

1. **Tải tệp ZIP từ Klacks Store.** Trên trang của quốc gia bạn trong [Klacks Store](https://klacks-software.ch/store/?culture=vi), nếu muốn thì kèm theo ngành của bạn.
2. **Giải nén vào một thư mục cố định**, ví dụ `~/klacks`, không phải `Downloads` hay `/tmp`. Về sau, tính năng cập nhật tự động làm việc đúng với thư mục này; nếu thư mục bị xóa hoặc di chuyển, cập nhật sẽ hỏng. Trình cài đặt sẽ cảnh báo nếu nó được chạy trong `Downloads` hoặc `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Mở một terminal trong thư mục đó.** Trong trình quản lý tệp, thường làm được bằng cách nhấp chuột phải vào thư mục (tên mục tùy thuộc vào môi trường desktop), hoặc bạn gõ `cd ~/klacks`.
4. **Khởi chạy trình cài đặt:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Trong gói cho Đức, tập lệnh có tên `install-de.sh`; trong các gói quốc gia khác, mã quốc gia tương ứng nằm trong tên, nói chung là `sudo bash ./install-*.sh`. Trình cài đặt cần `sudo` để được phép làm việc với Docker và cài đặt Docker khi cần. Không có `sudo` thì chỉ chạy được khi Docker đã được cài và người dùng của bạn thuộc nhóm `docker`.

   **Nếu thiếu Docker**, trình cài đặt đề nghị cài Docker Engine bằng tập lệnh chính thức từ `get.docker.com`. Việc này chỉ diễn ra sau khi hỏi bạn (`[y/N]`, mặc định là Không) và chỉ trên Ubuntu, Debian, Fedora, CentOS và RHEL; máy cần có `curl` hoặc `wget` và kết nối Internet. Trên các bản phân phối khác, hãy tự cài Docker Engine cùng plugin Compose theo [hướng dẫn của Docker](https://docs.docker.com/engine/install/). Nếu trình cài đặt chạy không có terminal, `INSTALL_DOCKER=yes` sẽ trả lời câu hỏi đó là Có. Chính Docker không khuyến nghị dùng tập lệnh này cho môi trường production; với một máy chủ production, tốt hơn là bạn tự cài Docker. `docker-compose` cũ (phiên bản 1) không được hỗ trợ, cần có plugin `docker compose`.
5. **Chờ.** Trình cài đặt tạo mật khẩu và một chứng chỉ tự ký, tải các image và khởi động stack. Ở lần khởi động đầu tiên, API di chuyển (migrate) cơ sở dữ liệu; trình cài đặt chờ việc này tối đa mười phút. Cuối cùng sẽ hiện `Klacks is up at https://…` và bên dưới là **mã thiết lập của bạn** (`Your setup code`, mười hai ký tự chia thành ba nhóm bốn). Hãy ghi lại; mã này cũng nằm trong tệp `.env` của thư mục cài đặt dưới tên `KLACKS_SETUP_CODE`.
6. **Mở Klacks:** `https://localhost` (nếu dùng tên máy chủ hoặc cổng HTTPS khác, hãy dùng địa chỉ trong thông báo của trình cài đặt). Trình duyệt cảnh báo về chứng chỉ tự ký; hãy xác nhận cảnh báo đó. Sau đó bạn dùng mã thiết lập để tạo tài khoản Admin của riêng bạn, xem [Lần đăng nhập đầu tiên](#first-login).
7. **Cập nhật** sau đó diễn ra tự động thông qua dịch vụ cập nhật đi kèm. Bạn không cần chạy lại trình cài đặt cho việc này.

Nếu Docker thấy ít hơn 7 GiB bộ nhớ, lần cài đặt đầu tiên sẽ bị hủy. Cách thiết lập một máy chủ nhỏ hơn có trong [Yêu cầu hệ thống](../betrieb/systemvoraussetzungen.md).

### Windows

Trên Windows, bạn chạy `install-*.ps1` thay vì `install-*.sh`.

### Tùy chọn: tên máy chủ và hồ sơ quốc gia

Với hồ sơ quốc gia tùy chọn, ngay ở lần khởi động đầu tiên trình cài đặt sẽ thiết lập sẵn ngôn ngữ, ngày lễ, giới hạn thời gian làm việc, phụ cấp và các mẫu theo ngành:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Trên Linux, các biến đặt **sau** `sudo`: `sudo` thường không chuyển tiếp các biến đứng trước nó cho trình cài đặt. Với tập lệnh của gói quốc gia, lệnh gọi trông như sau: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Gói quốc gia từ Klacks Store chứa hồ sơ của quốc gia đó. Các tập lệnh đi kèm `install-*.sh` và `install-*.ps1` đã đặt sẵn `REGION` hoặc `-Region` thành mã quốc gia của nó — trong gói cho Đức chẳng hạn là `install-de.sh` và `install-de.ps1`. Nếu bạn gọi trực tiếp `install.sh` hoặc `install.ps1`, `REGION` hoặc `-Region` phải là mã quốc gia đó; không có nó, trình cài đặt không thiết lập hồ sơ quốc gia nào.

## Máy tính văn phòng chạy Windows: cũng có trên Microsoft Store

Cho một máy tính văn phòng đơn lẻ chạy Windows có một trình cài đặt riêng hoạt động không cần Docker. Bạn có thể tải trình cài đặt này trên [Klacks Store](https://klacks-software.ch/store/?culture=vi) tại trang của quốc gia bạn và cả trên [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (mục "Klacks"). Ở cả hai cửa hàng đây là cùng một trình cài đặt. Khi cài từ Microsoft Store, trình cài đặt áp dụng quốc gia được thiết lập trong Windows; ở đó bạn không chọn ngành, và nếu quốc gia đó không có hồ sơ quốc gia thì trình cài đặt không thiết lập hồ sơ nào. Cài đặt trên máy chủ, Docker và Linux cũng như các gói theo quốc gia và theo ngành chỉ có trên Klacks Store.

Trên máy tính văn phòng, các phiên bản mới được cập nhật qua Cài đặt > [Cập nhật phần mềm](../einstellungen/system-sicherheit/updates.md) trong Klacks, kể cả khi Klacks được cài từ Microsoft Store. Không thể cài một trình cài đặt mới hơn đè lên một bản cài đặt hiện có.

## Lần đăng nhập đầu tiên: tài khoản Admin của riêng bạn {#first-login}

Một bản Klacks mới cài chưa có tài khoản nào của bạn. Vì vậy, khi mở lần đầu trong trình duyệt, trang "Thiết lập tài khoản quản trị của riêng bạn" hiện ra ngay, trước mọi lần đăng nhập: họ và tên, địa chỉ email (sẽ là tên đăng nhập của bạn) và một mật khẩu nhập hai lần; các quy tắc mật khẩu hiển thị trực tiếp bên cạnh.

Trên máy chủ (Docker), trang này yêu cầu thêm **mã thiết lập**, kể cả khi bạn mở Klacks trong trình duyệt ngay trên máy chủ. Trình cài đặt đã hiển thị mã ở cuối quá trình cài đặt; mã cũng nằm trong tệp `.env` của thư mục cài đặt dưới tên `KLACKS_SETUP_CODE`. Mã chỉ có hiệu lực cho đúng một lần thiết lập này. Mã sai sẽ bị từ chối ("Mã thiết lập không khớp. Vui lòng kiểm tra và thử lại.").

Ngay khi bạn lưu, tài khoản của bạn nhận vai trò Admin và tài khoản thử nghiệm đi kèm bị tắt vĩnh viễn trong cùng thao tác; sau đó Klacks tự động đăng nhập bạn bằng tài khoản của chính bạn; nếu việc đó không thành, hãy đăng nhập bằng thông tin đăng nhập mới. Chừng nào còn đặt mã thiết lập, tài khoản thử nghiệm đi kèm vốn không thể dùng để đăng nhập trong trình duyệt. Bước tiếp theo là trang "Quốc gia và ngành".

Cho đến khi tài khoản của bạn được tạo, máy chủ chặn mọi yêu cầu khác bằng mã lỗi `SETUP_REQUIRED` (HTTP 403). Đằng sau đó không phải là sự cố: chỉ là còn thiếu bước thiết lập.

- Trên máy tính văn phòng chạy Windows, bạn không cần mã thiết lập nếu mở Klacks trong trình duyệt ngay trên cùng máy tính đó. Từ một máy khác chỉ hiện trang đăng nhập.
- Nếu Klacks hiện trang đăng nhập thay vào đó, chẳng hạn ở một bản cài đặt không có mã thiết lập, thì kết quả đầu ra của trình cài đặt nêu tài khoản đi kèm; ngay cả khi đó Klacks cũng dẫn bạn thẳng đến việc tạo tài khoản Admin của riêng bạn.
- Nếu hai người gửi cùng một lúc, chỉ người đầu tiên trở thành quản trị viên; người thứ hai sẽ bị đưa về trang đăng nhập.

Chỉ trong Playground và trong môi trường phát triển cục bộ, cổng này được cố ý tắt; ở đó tài khoản đi kèm vẫn được giữ lại.

## Điều cần biết

- **Điều kiện tiên quyết:** ít nhất 8 GB RAM và 4 vCPU, Docker với Compose v2 (trên Linux, trình cài đặt sẽ cài Docker sau khi hỏi bạn), các cổng 80 và 443 còn trống cùng quyền truy cập HTTPS đi ra tới `ghcr.io` và `github.com`. Chi tiết và các ví dụ tính toán cho máy chủ nhỏ hơn có trong [Yêu cầu hệ thống](../betrieb/systemvoraussetzungen.md).
- Một dịch vụ cập nhật đi kèm sẽ tự động giữ cho hệ thống của bạn luôn cập nhật — kèm sao lưu trước mỗi lần cập nhật và tự động khôi phục (rollback) nếu có sự cố. Quy trình chi tiết có trong [Cập nhật và rollback](../betrieb/updates-und-rollback.md).
- Dữ liệu của bạn nằm trong cơ sở dữ liệu riêng của bạn, trên hạ tầng của bạn. Tuy vậy, một số chức năng có gọi các dịch vụ bên ngoài — đó là những dịch vụ nào, xem ở phần tiếp theo.
- Gọi lại trình cài đặt là vô hại nhưng không phải là cập nhật: nó giữ nguyên mật khẩu, chứng chỉ và phiên bản đã chọn ở lần cài đặt đầu tiên, rồi khởi động lại stack (trên Linux lại dùng `sudo` nếu lúc đầu bạn cài bằng `sudo`). Đây là cách sửa một stack không còn chạy. Phiên bản mới do dịch vụ cập nhật cài, không phải trình cài đặt.
- Nếu bạn có chứng chỉ riêng, hãy đặt `server.crt` và `server.key` vào `nginx/certs/` trong thư mục cài đặt trước khi cài đặt; nếu không, trình cài đặt sẽ tạo một chứng chỉ tự ký.
- Bạn tự sao lưu cơ sở dữ liệu của mình một cách đều đặn — cách làm có trong [Sao lưu và khôi phục](../betrieb/backup-und-wiederherstellung.md).

## Klacks gọi những dịch vụ bên ngoài nào

Dữ liệu của bạn nằm trên máy chủ của bạn. Tuy vậy, ở chế độ vận hành mặc định, Klacks vẫn gọi một số dịch vụ công khai trên Internet cho một vài chức năng. Địa chỉ của các dịch vụ này được tích hợp cứng; hiện tại bạn không thể nhập máy chủ geocoding, định tuyến hay bản đồ của riêng mình.

| Dịch vụ | Dùng để làm gì | Dữ liệu được gửi đi | Mặc định | Cách tắt |
|---|---|---|---|---|
| Nominatim của OpenStreetMap (`nominatim.openstreetmap.org`) | Chuyển địa chỉ thành tọa độ: khi lưu một địa chỉ, cho địa điểm của công ty, trong lập kế hoạch tuyến đường và trong các dịch vụ nền cho địa chỉ và địa điểm của nhóm | Đường phố, mã bưu chính, địa phương và quốc gia, không kèm tên người; với địa điểm của nhóm là tên địa phương hoặc tên nhóm | bật | `BackgroundServices__AddressGeocoding=false` và `BackgroundServices__GroupGeocoding=false` chỉ tắt các dịch vụ nền. Khi lưu một địa chỉ, việc geocoding vẫn được thực hiện. |
| Máy chủ OSRM công khai (`router.project-osrm.org`) | Thời gian di chuyển, khoảng cách và tuyến đường trên bản đồ | Tọa độ các địa điểm làm việc, không kèm tên | bật chừng nào chưa có khóa OpenRouteService; ngoài ra trình duyệt hỏi OSRM trực tiếp khi máy chủ Klacks không trả về tuyến đường nào | không có |
| OpenRouteService (`api.heigit.org`) | như OSRM, thêm xe đạp và đi bộ | Tọa độ các địa điểm làm việc, không kèm tên | chỉ khi đã nhập khóa API | Xóa khóa trong Cài đặt > OpenRoute |
| Ô bản đồ (OpenStreetMap, OpenStreetMap.de hoặc CARTO) | Hiển thị bản đồ trên Dashboard | từ trình duyệt: địa chỉ IP và vùng bản đồ đang hiển thị | bật ngay khi bản đồ được hiển thị | có thể chọn nhà cung cấp trong bản đồ, nhưng không thể dùng máy chủ ô bản đồ riêng |
| GitHub (`github.com`) và GitHub Container Registry (`ghcr.io`) | Cài đặt và cập nhật tự động: manifest phát hành và các Docker image | các yêu cầu tải xuống thông thường, không có dữ liệu lập kế hoạch | bật | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Gói ngôn ngữ và gói quốc gia | Mã quốc gia, mã gói hoặc từ khóa tìm kiếm | khi tìm gói và khi tải một hồ sơ quốc gia | địa chỉ có thể cấu hình qua `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Tải xuống một lần các mô hình tìm kiếm cho Klacksy | không có dữ liệu khách hàng (tải tệp) | khi cần lần đầu tiên | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Gợi ý thời tiết và chất lượng không khí trong widget chào mừng, truy vấn thời tiết qua Klacksy | Tọa độ của trình duyệt (nếu được cho phép) hoặc của địa điểm công ty | bật | `Assistant__Ambient__Enabled=false` chỉ tắt gợi ý chất lượng không khí và ngày lễ, không tắt truy vấn thời tiết của lời chào |
| Nager.Date (`date.nager.at`) | Gợi ý ngày lễ trong widget chào mừng | Mã quốc gia | bật | `Assistant__Ambient__Enabled=false` |
| Nhà cung cấp AI đám mây (ví dụ OpenAI, Anthropic, Google, DeepSeek) | Klacksy và các chức năng nền có AI hỗ trợ (ví dụ phân loại địa điểm của nhóm) | Các yêu cầu kèm ngữ cảnh cần thiết từ dữ liệu của bạn | chỉ khi đã cấu hình một mô hình đám mây | dùng mô hình cục bộ |
| Dịch vụ giọng nói, tìm kiếm và dịch thuật (ví dụ Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, tìm kiếm web) | Nhập và xuất giọng nói, tìm kiếm web, dịch thuật | Âm thanh hoặc văn bản | chỉ khi được dùng hoặc cấu hình; tùy trình duyệt, nhận dạng giọng nói của trình duyệt hoạt động qua dịch vụ trực tuyến của chính trình duyệt đó | không dùng chức năng này |

Các công tắc trong cột "Cách tắt" là biến môi trường của container `klacks-api`; hãy ghi chúng vào `docker-compose.yml` dưới `environment:` của dịch vụ này. Chỉ ghi vào tệp `.env` là không đủ, vì dịch vụ không đọc tệp đó như một `env_file`.

Với mô hình AI cục bộ, không có yêu cầu nào tới mô hình ngôn ngữ được gửi đến nhà cung cấp AI bên ngoài. Điều này không thay đổi gì đối với các dịch vụ còn lại trong bảng này.

---

*Câu hỏi về việc cài đặt? [Cộng đồng Klacks trên Discord](https://discord.gg/YRP8p2abVC).*
