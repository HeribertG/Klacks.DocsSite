---
sidebar_position: 1
---

# 설치 및 Playground

Klacks는 1분 안에 체험해 볼 수 있으며, 설치도 몇 분이면 완료됩니다. 등록도, 영업 상담도 필요 없습니다.

## 방법 1: Playground (아무것도 설치하지 않음)

샘플 데이터가 담긴 공개 Klacks 인스턴스가 **[klacks-software.ch](https://klacks-software.ch:7643)** 에서 운영되고 있습니다.

- **로그인:** `admin@test.com` · **비밀번호:** `P@ssw0rt1`
- 전체 관리자 권한이 부여되므로 모든 기능을 자유롭게 사용해 보실 수 있습니다.
- 모든 데이터는 **매일 자동으로 초기화**됩니다. 실제 개인 데이터는 입력하지 마십시오.

## 방법 2: 자체 서버에 설치 (온프레미스)

온프레미스 패키지에는 필요한 모든 것이 포함되어 있습니다: Docker 이미지, 설치 프로그램, 데이터베이스, HTTPS, 자동 업데이트.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Windows에서는 `install.sh` 대신 `install.ps1`을 사용합니다. 설치 프로그램이 비밀번호와 인증서를 자체적으로 생성하고, 최신 Docker 이미지를 내려받은 뒤, 모든 것이 정상적으로 실행될 때까지 대기합니다. 최초 로그인은 `admin@test.com` / `P@ssw0rt1`이며, **첫 로그인 직후 이 비밀번호를 반드시 변경하십시오.**

## 알아두면 좋은 점

- 함께 제공되는 업데이트 서비스가 설치본을 자동으로 최신 상태로 유지합니다 — 매 업데이트 전 백업을 생성하고, 문제 발생 시 자동으로 롤백합니다.
- 데이터는 온전히 사용자의 인프라 안에만 남습니다. Klacks는 외부로 데이터를 전송하지 않습니다.
- 필요한 전제 조건은 Docker가 설치된 서버, 아웃바운드 인터넷 접속(Docker 이미지 및 업데이트용), 그리고 열려 있는 80/443 포트입니다.

---
*설치 관련 문의사항이 있으신가요? [Discord의 Klacks 커뮤니티](https://discord.gg/YRP8p2abVC).*
