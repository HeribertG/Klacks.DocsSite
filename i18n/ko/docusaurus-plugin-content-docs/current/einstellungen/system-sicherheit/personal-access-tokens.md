---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Token(PAT)은 사용자 이름과 비밀번호 없이도 외부 도구와 서비스가 안전하게 Klacks에 접근할 수 있도록 하는 장기 API 키입니다 — 예를 들어 Model Context Protocol(MCP)을 통한 Claude Desktop과 같은 AI 어시스턴트, 자동화 스크립트, CI/CD 파이프라인 등이 있습니다.

## 작동 방식

**토큰 생성:** 설정 > Personal Access Tokens에서 "새 토큰 생성"을 클릭하고, 의미 있는 이름(예: `Claude Desktop` 또는 `CI-Pipeline`)을 지정한 다음 1일에서 730일 사이의 유효 기간(기본값: 365일)을 선택합니다. 토큰은 생성 후 `klacks_pat_<임의 문자열>` 형식으로 **단 한 번만** 표시됩니다 — 이후에는 다시 조회할 수 없으므로 즉시 복사해 두어야 합니다.

**사용:** 토큰은 모든 API 요청의 `Authorization` 헤더에 Bearer 토큰 형식으로 전달됩니다. 예: `Authorization: Bearer klacks_pat_...`. Claude Desktop과 같은 MCP 클라이언트의 경우, `/mcp`를 가리키는 MCP 서버의 `AUTHORIZATION` 환경 변수로 등록합니다.

**관리:** 개요 화면에는 각 토큰의 이름, 생성일, 만료일, 마지막 사용 시각이 표시됩니다 — 평문 토큰 자체는 이후 다시 표시되지 않습니다. 앞으로 30일 이내에 만료되는 토큰은 목록에서 별도로 표시됩니다. 취소 버튼을 클릭하면 토큰이 즉시 영구적으로 차단됩니다.

## 알아두면 좋은 점

- Klacks는 토큰의 SHA-256 해시만 저장할 뿐, 평문 토큰 자체는 절대 저장하지 않습니다 — 분실한 토큰은 복구할 수 없으며, 취소하고 새로 생성하는 것만 가능합니다.
- 모든 토큰은 사용자 계정에 연결되어 있으며 본인 계정과 동일한 권한을 가집니다 — 토큰별로 세분화된 범위(scope) 제한은 없습니다.
- 도구마다 별도의 토큰을 사용하면, 오남용이 의심될 때 다른 통합을 중단시키지 않고도 해당 토큰만 선택적으로 취소할 수 있습니다.

---
*직접 사용해 보기: [Klacks Playground](https://klacks-software.ch:7643) — 로그인 `admin@test.com` / `P@ssw0rt1`, 데이터는 매일 초기화됩니다.*
