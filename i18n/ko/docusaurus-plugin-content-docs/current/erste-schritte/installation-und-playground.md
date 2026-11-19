---
sidebar_position: 1
---

# 설치 및 Playground

Klacks는 1분 안에 체험해 볼 수 있으며, 설치도 몇 분이면 완료됩니다. 등록도, 영업 상담도 필요 없습니다.

## Playground: 편하게 둘러보는 놀이터

Playground는 설치 방식이 아니라, 부담 없이 마음껏 써볼 수 있는 샘플 데이터 기반의 공개 Klacks 인스턴스입니다 — 이름 그대로 '놀이터'인 셈이죠. **[play.klacks-software.ch](https://play.klacks-software.ch)** 에서 운영되고 있습니다:

- **로그인:** `admin@test.com` · **비밀번호:** `P@ssw0rt1`
- 전체 관리자 권한이 부여되므로 모든 기능을 자유롭게 사용해 보실 수 있습니다.
- 샘플 데이터에는 약 5'000명의 클라이언트가 포함되어 있으며, 모두 순수한 데모 데이터입니다.
- **실제 개인 데이터는 입력하지 마십시오.** 데이터베이스는 매일 스위스 시간 04:00(UTC 02:00)에 정해진 상태로 초기화됩니다.

## 설치: 자체 서버에서 (온프레미스)

온프레미스 패키지에는 필요한 모든 것이 포함되어 있습니다: Docker 이미지, 설치 프로그램, 데이터베이스, HTTPS, 자동 업데이트. 이 패키지는 [Klacks Store](https://klacks-software.ch/store/?culture=ko)에서만 받을 수 있습니다.

Klacks Store에서 원하면 업종을 선택하고, 귀사 국가용 ZIP을 다운로드하세요. 설치 프로그램이 비밀번호와 인증서를 자체적으로 생성하고, 최신 Docker 이미지를 내려받은 뒤, 모든 것이 정상적으로 실행될 때까지 대기합니다.

### Linux: 단계별 안내

RAM이 8 GB 이상이고, 80번과 443번 포트가 비어 있으며, 인터넷에 연결되어 있고, `sudo` 권한이 있는 계정을 가진 컴퓨터가 필요합니다. Docker가 미리 설치되어 있지 않아도 됩니다(4단계 참조).

1. **Klacks Store에서 ZIP을 다운로드합니다.** [Klacks Store](https://klacks-software.ch/store/?culture=ko)의 귀사 국가 페이지에서, 원하면 업종을 지정하여 받습니다.
2. **고정된 폴더에 압축을 해제합니다.** 예를 들어 `~/klacks`처럼 하고, `Downloads`나 `/tmp`는 피하세요. 자동 업데이트는 나중에 바로 이 폴더를 기준으로 작동하므로, 폴더를 삭제하거나 옮기면 작동하지 않습니다. 설치 프로그램이 `Downloads` 또는 `/tmp`에서 실행되면 경고를 표시합니다.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **해당 폴더에서 터미널을 엽니다.** 파일 관리자에서는 대개 폴더 안에서 마우스 오른쪽 버튼을 눌러 열 수 있으며(메뉴 이름은 데스크톱 환경에 따라 다릅니다), 또는 `cd ~/klacks`를 입력합니다.
4. **설치 프로그램을 시작합니다:**

   ```bash
   sudo bash ./install-de.sh
   ```

   독일용 패키지에서는 스크립트 이름이 `install-de.sh`입니다. 다른 국가 패키지에서는 해당 국가 코드가 이름에 들어가므로, 일반적으로 `sudo bash ./install-*.sh`가 됩니다. 설치 프로그램이 Docker를 다루고 필요하면 설치할 수 있도록 `sudo`가 필요합니다. `sudo` 없이 실행하려면 Docker가 이미 설치되어 있고 사용자가 `docker` 그룹에 속해 있어야 합니다.

   **Docker가 없으면** 설치 프로그램이 `get.docker.com`의 공식 스크립트로 Docker Engine을 설치할지 묻습니다. 이는 사용자가 확인(`[y/N]`, 기본값은 No)한 경우에만 진행되며, Ubuntu, Debian, Fedora, CentOS, RHEL에서만 가능합니다. 이를 위해 컴퓨터에 `curl` 또는 `wget`과 인터넷 연결이 필요합니다. 다른 배포판에서는 [Docker 안내](https://docs.docker.com/engine/install/)에 따라 Docker Engine을 Compose 플러그인과 함께 직접 설치하세요. 설치 프로그램을 터미널 없이 실행하는 경우 `INSTALL_DOCKER=yes`가 질문에 "예"로 답합니다. Docker 자체는 이 스크립트를 운영 환경에 권장하지 않으므로, 운영 서버에서는 Docker를 직접 설치하는 편이 좋습니다. 이전 버전인 `docker-compose`(버전 1)는 지원되지 않으며, `docker compose` 플러그인이 필요합니다.
5. **기다립니다.** 설치 프로그램이 비밀번호와 자체 서명 인증서를 생성하고, 이미지를 내려받아 스택을 시작합니다. 처음 시작할 때 API가 데이터베이스를 마이그레이션하므로, 설치 프로그램은 최대 10분까지 기다립니다. 마지막에 `Klacks is up at https://…`가 표시되고 그 아래에 **설정 코드**(`Your setup code`, 네 글자씩 세 묶음의 열두 글자)가 나옵니다. 이 코드를 적어 두세요. 설치 폴더의 `.env` 파일에도 `KLACKS_SETUP_CODE`로 들어 있습니다.
6. **Klacks를 엽니다:** `https://localhost`(서버 이름이나 HTTPS 포트가 다르면 설치 프로그램의 메시지에 나온 주소). 브라우저가 자체 서명 인증서에 대해 경고하므로, 경고를 확인하고 계속 진행하세요. 그런 다음 설정 코드로 본인의 관리자 계정을 만듭니다. [첫 로그인](#first-login)을 참조하세요.
7. **업데이트**는 그 후 함께 제공되는 업데이트 서비스가 자동으로 처리합니다. 이를 위해 설치 프로그램을 다시 시작할 필요는 없습니다.

Docker가 사용할 수 있는 메모리가 7 GiB 미만이면 최초 설치가 중단됩니다. 더 작은 호스트를 설정하는 방법은 [시스템 요구 사항](../betrieb/systemvoraussetzungen.md)에 나와 있습니다.

### Windows

Windows에서는 `install-*.sh` 대신 `install-*.ps1`을 실행합니다.

### 옵션: 서버 이름과 국가 프로필

선택 사항인 국가 프로필을 지정하면, 설치 프로그램이 첫 시작 시 언어, 공휴일, 근로 시간 한도, 할증, 업종 템플릿을 바로 설정합니다:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Linux에서는 변수를 `sudo` **뒤에** 둡니다. `sudo`는 앞에 둔 변수를 대개 설치 프로그램에 전달하지 않습니다. 국가 패키지의 스크립트를 쓰면 호출은 다음과 같습니다: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Klacks Store의 국가 패키지에는 해당 국가의 프로필이 들어 있습니다. 함께 제공되는 `install-*.sh`와 `install-*.ps1`은 `REGION` 또는 `-Region`을 이미 그 국가 코드로 설정해 둡니다. 예를 들어 독일용 패키지에서는 `install-de.sh`와 `install-de.ps1`입니다. `install.sh` 또는 `install.ps1`을 직접 호출할 때는 `REGION` 또는 `-Region`이 그 국가 코드여야 하며, 없으면 설치 프로그램은 국가 프로필을 설정하지 않습니다.

## Windows 사무용 PC: Microsoft Store에서도 제공

Windows 사무용 PC 한 대를 위해 Docker 없이 동작하는 별도의 설치 프로그램이 있습니다. [Klacks Store](https://klacks-software.ch/store/?culture=ko)의 해당 국가 페이지와 [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26)('Klacks' 항목)에서 받을 수 있습니다. 두 스토어의 설치 프로그램은 동일합니다. Microsoft Store에서 설치하면 Windows에 설정된 국가가 적용됩니다. 그곳에서는 업종을 선택하지 않으며, 해당 국가의 국가 프로필이 없으면 설치 프로그램은 프로필을 설정하지 않습니다. 서버, Docker, Linux 설치와 국가별·업종별 패키지는 Klacks Store에서만 제공됩니다.

사무용 PC에서 새 버전은 Klacks의 설정 > [소프트웨어 업데이트](../einstellungen/system-sicherheit/updates.md)를 통해 받습니다. Klacks를 Microsoft Store에서 설치한 경우에도 마찬가지입니다. 기존 설치 위에 더 새로운 설치 프로그램을 설치할 수는 없습니다.

## 첫 로그인: 본인의 관리자 계정 {#first-login}

새로 설치한 Klacks에는 아직 사용자 본인의 계정이 없습니다. 그래서 브라우저에서 처음 열면, 로그인보다 먼저 "본인의 관리자 계정 설정" 페이지가 나타납니다. 이름과 성, 이메일 주소(로그인 이름이 됩니다), 그리고 두 번 입력하는 비밀번호를 입력합니다. 비밀번호 조건은 옆에 실시간으로 표시됩니다.

서버(Docker)에서는 이 페이지가 추가로 **설정 코드**를 요구합니다. 서버 자체의 브라우저에서 Klacks를 여는 경우에도 마찬가지입니다. 코드는 설치가 끝날 때 설치 프로그램이 표시했으며, 설치 폴더의 `.env` 파일에도 `KLACKS_SETUP_CODE`로 들어 있습니다. 이 코드는 이번 한 번의 설정에만 유효합니다. 잘못된 코드는 거부됩니다("설정 코드가 일치하지 않습니다. 확인한 후 다시 시도하세요.").

저장하면 계정에 관리자 역할이 부여되고, 함께 제공된 테스트 계정은 같은 과정에서 완전히 비활성화됩니다. 그 후 Klacks는 사용자 본인의 계정으로 자동 로그인합니다. 이것이 실패하면 새 자격 증명으로 로그인하세요. 설정 코드가 지정되어 있는 동안에는 함께 제공된 테스트 계정을 브라우저 로그인에 사용할 수 없습니다. 다음으로 "국가 및 업종" 페이지가 이어집니다.

본인의 계정이 만들어질 때까지 서버는 그 밖의 모든 요청을 오류 코드 `SETUP_REQUIRED`(HTTP 403)로 차단합니다. 이는 장애가 아닙니다. 설정만 남아 있을 뿐입니다.

- Windows 사무용 PC에서는 같은 PC의 브라우저에서 Klacks를 여는 경우 설정 코드가 필요하지 않습니다. 다른 컴퓨터에서는 로그인 페이지만 나타납니다.
- 대신 로그인 페이지가 나타나는 경우(예: 설정 코드 없이 설치한 경우), 설치 프로그램의 출력에 함께 제공된 계정이 나와 있습니다. 이 경우에도 Klacks는 본인의 관리자 계정 만들기로 바로 안내합니다.
- 두 사람이 동시에 제출하면 먼저 제출한 사람만 관리자가 됩니다. 두 번째 사람은 로그인 페이지로 이동합니다.

이 게이트가 의도적으로 꺼져 있는 것은 Playground와 로컬 개발 환경뿐이며, 그곳에서는 함께 제공된 계정이 그대로 유지됩니다.

## 알아두면 좋은 점

- **전제 조건:** RAM 8 GB 이상과 4 vCPU, Compose v2가 포함된 Docker(Linux에서는 질문에 동의하면 설치 프로그램이 Docker를 설치합니다), 비어 있는 80번과 443번 포트, 그리고 `ghcr.io`와 `github.com`에 대한 아웃바운드 HTTPS 접속. 자세한 내용과 더 작은 호스트를 위한 계산 예시는 [시스템 요구 사항](../betrieb/systemvoraussetzungen.md)에 나와 있습니다.
- 함께 제공되는 업데이트 서비스가 설치본을 자동으로 최신 상태로 유지합니다 — 매 업데이트 전 백업을 생성하고, 문제 발생 시 자동으로 롤백합니다. 자세한 진행 방식은 [업데이트와 롤백](../betrieb/updates-und-rollback.md)에 나와 있습니다.
- 데이터는 사용자의 인프라에 있는 사용자 자신의 데이터베이스에 저장됩니다. 다만 일부 기능은 외부 서비스를 호출합니다. 어떤 서비스인지는 다음 섹션에 나와 있습니다.
- 설치 프로그램을 다시 실행해도 해가 되지 않지만, 업데이트는 아닙니다. 비밀번호, 인증서, 최초 설치 때 정해진 버전은 그대로 유지되고 스택이 다시 시작됩니다(Linux에서는 처음에 `sudo`로 설치했다면 이번에도 `sudo`를 사용합니다). 이렇게 하면 더 이상 실행되지 않는 스택을 복구할 수 있습니다. 새 버전은 설치 프로그램이 아니라 업데이트 서비스가 적용합니다.
- 자체 인증서를 사용하려면 설치 전에 `server.crt`와 `server.key`를 설치 폴더의 `nginx/certs/`에 두세요. 그렇지 않으면 설치 프로그램이 자체 서명 인증서를 생성합니다.
- 데이터베이스는 정기적으로 직접 백업하세요. 방법은 [백업 및 복원](../betrieb/backup-und-wiederherstellung.md)에 나와 있습니다.

## Klacks가 호출하는 외부 서비스

데이터는 사용자의 서버에 있습니다. 그럼에도 일부 기능을 위해 Klacks는 기본 운영에서 인터넷의 공개 서비스를 호출합니다. 이 서비스들의 주소는 고정되어 내장되어 있으며, 자체 지오코딩, 라우팅 또는 지도 서버는 현재 지정할 수 없습니다.

| 서비스 | 용도 | 전송되는 내용 | 기본값 | 끄기 |
|---|---|---|---|---|
| OpenStreetMap의 Nominatim(`nominatim.openstreetmap.org`) | 주소를 좌표로 변환: 주소를 저장할 때, 회사 위치, 투어 계획, 그리고 주소와 그룹 위치를 위한 백그라운드 서비스에서 | 거리, 우편번호, 도시, 국가. 사람 이름은 포함되지 않음. 그룹 위치의 경우 지역명 또는 그룹명 | 켜짐 | `BackgroundServices__AddressGeocoding=false`와 `BackgroundServices__GroupGeocoding=false`는 백그라운드 서비스만 끕니다. 주소를 저장할 때는 계속 지오코딩됩니다. |
| 공개 OSRM 서버(`router.project-osrm.org`) | 이동 시간, 거리, 지도의 경로 | 방문 장소의 좌표. 이름은 포함되지 않음 | OpenRouteService 키가 등록되어 있지 않은 동안 켜짐. Klacks 서버가 경로를 제공하지 못하면 브라우저도 OSRM에 직접 요청함 | 제공되지 않음 |
| OpenRouteService(`api.heigit.org`) | OSRM과 같음. 추가로 자전거와 도보 | 방문 장소의 좌표. 이름은 포함되지 않음 | API 키가 등록된 경우에만 | 설정 > OpenRoute에서 키를 삭제 |
| 지도 타일(OpenStreetMap, OpenStreetMap.de 또는 CARTO) | 대시보드의 지도 표시 | 브라우저에서: IP 주소와 표시된 지도 영역 | 지도가 표시되는 즉시 켜짐 | 지도에서 제공자를 선택할 수 있으나, 자체 타일 서버는 불가 |
| GitHub(`github.com`)와 GitHub Container Registry(`ghcr.io`) | 설치와 자동 업데이트: 릴리스 매니페스트와 Docker 이미지 | 일반적인 다운로드 요청. 계획 데이터는 포함되지 않음 | 켜짐 | — |
| Klacks 마켓플레이스(`klacks-software.ch/store`) | 언어 패키지와 국가 패키지 | 국가 코드, 패키지 코드 또는 검색어 | 패키지 검색 시와 국가 프로필을 불러올 때 | 주소는 `LanguagePlugins__MarketplaceUrl`로 설정 가능 |
| Hugging Face(`huggingface.co`) | Klacksy용 검색 모델을 한 번만 다운로드 | 고객 데이터는 포함되지 않음(파일 다운로드) | 처음 필요할 때 | — |
| Open-Meteo(`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | 환영 위젯의 날씨 및 대기질 안내, Klacksy를 통한 날씨 조회 | 브라우저의 좌표(허용된 경우) 또는 회사 위치의 좌표 | 켜짐 | `Assistant__Ambient__Enabled=false`는 대기질 및 공휴일 안내만 끄며, 환영 위젯의 날씨 조회는 끄지 않습니다 |
| Nager.Date(`date.nager.at`) | 환영 위젯의 공휴일 안내 | 국가 코드 | 켜짐 | `Assistant__Ambient__Enabled=false` |
| 클라우드 AI 제공자(예: OpenAI, Anthropic, Google, DeepSeek) | Klacksy와 AI 기반 백그라운드 기능(예: 그룹 위치 분류) | 요청과, 이를 위해 필요한 사용자 데이터의 맥락 | 클라우드 모델이 설정된 경우에만 | 로컬 모델 사용 |
| 음성, 검색, 번역 서비스(예: Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, 웹 검색) | 음성 입력 및 출력, 웹 검색, 번역 | 오디오 또는 텍스트 | 사용하거나 설정한 경우에만. 브라우저의 음성 인식은 브라우저에 따라 해당 브라우저의 온라인 서비스를 통해 작동함 | 기능을 사용하지 않음 |

"끄기" 열의 스위치는 `klacks-api` 컨테이너의 환경 변수입니다. `docker-compose.yml`에서 이 서비스의 `environment:` 아래에 입력하세요. `.env` 파일에만 입력해서는 충분하지 않습니다. 이 서비스가 해당 파일을 `env_file`로 읽어 들이지 않기 때문입니다.

로컬 AI 모델을 사용하면 언어 모델에 대한 요청이 외부 AI 제공자에게 전달되지 않습니다. 이 표의 나머지 서비스에는 영향이 없습니다.

---

*설치 관련 문의사항이 있으신가요? [Discord의 Klacks 커뮤니티](https://discord.gg/YRP8p2abVC).*
