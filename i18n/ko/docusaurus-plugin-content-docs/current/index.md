---
sidebar_position: 1
slug: /
---

# Klacks 문서에 오신 것을 환영합니다

**Klacks**는 교대 및 현장 운영 조직을 위한 오픈소스 인력 배치 계획 플랫폼입니다: 근무를 자동으로 계획하고, 투어를 최적화하며, AI 어시스턴트로 제어할 수 있습니다 — 온프레미스로, 원하는 AI 모델을 자유롭게 선택하여. Spitex(재택 돌봄), 병원, 보안, 청소, 물류 업체를 위한 솔루션입니다.

이 위키는 Klacks의 작동 방식을 짧은 글 단위로 설명합니다. 각 페이지는 몇 분이면 읽을 수 있으며, 모든 내용을 공개 Playground에서 바로 체험해 볼 수 있습니다.

## 바로 시작하기

| | |
|---|---|
| 🎮 **체험하기** | [Klacks Playground](https://klacks-software.ch:7643) — 로그인 `admin@test.com` / `P@ssw0rt1` (공개 테스트 인스턴스, 데이터는 매일 초기화됩니다) |
| 📦 **설치하기** | [온프레미스 패키지 다운로드](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — 명령어 한 줄이면 Klacks가 실행됩니다 |
| 💬 **질문 및 교류** | [Discord의 Klacks 커뮤니티](https://discord.gg/YRP8p2abVC) |
| 🌐 **웹사이트** | [klacks-software.ch](https://klacks-software.ch) |

## 둘러보기

**Klacks 소개**
- [Klacks의 철학](./ueber-klacks/philosophie.md) — 데이터 주권, AI 선택의 자유, 오픈소스

**시작하기**
- [설치 및 Playground](./erste-schritte/installation-und-playground.md) — 몇 분 만에 실행되는 Klacks
- [안내형 초기 설정 투어](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy가 기본 설정을 안내합니다
- [직원과 기준 데이터](./erste-schritte/mitarbeiter-und-stammdaten.md) — 모든 계획의 토대
- [역할과 권한](./erste-schritte/rollen-und-rechte.md) — Supervisor와 Admin, 명확하게 구분됩니다

**계획**
- [자동 계획: 몇 초 만에 완성되는 계획](./planen/auto-planung.md) — 클릭 한 번으로 몇 초 만에 완성되는 계획
- [계획 그리드: 인터랙티브 시간 매트릭스](./planen/plan-raster.md) — 드래그 앤 드롭이 가능한 인터랙티브 시간 매트릭스
- [모듈형 계획: 분할 정복](./planen/modulare-planung.md) — 중복 배정 없이 큰 계획을 나누기
- [승인 워크플로: 초안에서 확정 계획까지](./planen/freigabe-workflow.md) — 초안부터 봉인된 계획까지
- [계획 규칙](./planen/planungsregeln.md) — 휴식 시간, 한도, 근무일
- [기간 마감](./planen/periodenabschluss.md) — 월 단위로 확정 마감하기

**최적화 및 분석**
- [투어 및 경로 최적화](./optimieren/touren-und-routenoptimierung.md) — 최적의 경로를 자동으로
- [한눈에 보는 결근 현황](./optimieren/absenzen-im-blick.md) — 휴가와 병가를 간트 차트로 한눈에
- [리소스 모니터](./optimieren/ressourcen-monitor.md) — 가동률을 한눈에
- [공휴일 및 캘린더](./optimieren/feiertage-und-kalender.md) — 지역 단위까지 정확하게
- [스킬 관계](./optimieren/skill-beziehungen.md) — Klacksy가 스스로 어떤 능력들이 서로 연관되는지 학습합니다
- [리포트 디자이너](./optimieren/report-designer.md) — 나만의 보고서 만들기

**AI 어시스턴트**
- [Klacksy: 계획을 위한 AI 어시스턴트](./ki/klacksy-ki-assistent.md) — 음성으로 계획하고, 원하는 모델을 자유롭게 선택

**설정**

*기준 데이터 및 조직*
- [지점](./einstellungen/stammdaten-organisation/branches.md), [국가](./einstellungen/stammdaten-organisation/laender.md), [운영자 주소](./einstellungen/stammdaten-organisation/owner-address.md), [근무 기본 설정](./einstellungen/stammdaten-organisation/work-setting.md), [자격 카탈로그](./einstellungen/stammdaten-organisation/qualifikationen.md), [계약 템플릿](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*계획 및 자동화*
- [계획 규칙 기본값](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [캘린더 선택](./einstellungen/planung-automatisierung/kalenderauswahl.md), [마법사 설정](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [경로 최적화 API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [그룹 표시 범위](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy 구성*
- [LLM 제공자 및 모델](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [성격](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [음성 입출력](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [자율성 단계](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [모델 연결 테스트](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [스킬 제안](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [매크로](./einstellungen/klacksy-konfiguration/makros.md)

*커뮤니케이션 및 통합*
- [이메일 발송](./einstellungen/kommunikation-integration/email-versand.md), [이메일 수신](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL 번역](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [ID 공급자](./einstellungen/kommunikation-integration/identity-provider.md), [ERP 연동 지점](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [메시징 채널](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*시스템 및 보안*
- [사용자 관리](./einstellungen/system-sicherheit/benutzerverwaltung.md), [개인 액세스 토큰](./einstellungen/system-sicherheit/personal-access-tokens.md), [데이터 보존](./einstellungen/system-sicherheit/datenaufbewahrung.md), [업데이트](./einstellungen/system-sicherheit/updates.md), [기능 플러그인](./einstellungen/system-sicherheit/feature-plugins.md), [언어 플러그인](./einstellungen/system-sicherheit/sprach-plugins.md), [스팸 규칙](./einstellungen/system-sicherheit/spam-regeln.md), [일반 설정](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks는 MIT 라이선스의 오픈 소스입니다 — [GitHub에서 소스 코드 보기](https://github.com/HeribertG/Klacks.Api).*
