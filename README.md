# Impeccable Unity

**Impeccable 기반의 비공식 Unity UI Toolkit용 에이전트 스킬입니다.** 원본 프로젝트나 Unity Technologies의 공식 배포판이 아닙니다.

기존 아트 스타일을 유지하면서 배치, 글자 위계, UX 문구, 오류 복구, 입력 피드백과 구현 품질을 개선합니다. 21개 명령과 공식 사례에 대응하는 Before/After 지침을 하나의 스킬로 제공합니다. 이 저장소에는 Unity 데모 프로젝트가 없습니다.

## 설치

[skills.sh CLI](https://github.com/vercel-labs/skills)를 사용합니다. 사용할 프로젝트 폴더에서 실행하세요.

```sh
# 설치 가능한 스킬 확인
npx skills add ev3rlit/impeccable-unity --list

# Codex 프로젝트에 설치
npx skills add ev3rlit/impeccable-unity --skill impeccable-unity --agent codex

# Claude Code 프로젝트에 설치
npx skills add ev3rlit/impeccable-unity --skill impeccable-unity --agent claude-code
```

모든 프로젝트에서 사용하려면 설치 명령에 `--global`을 추가합니다. 스킬을 선택하면 `skills/impeccable-unity/` 안의 지침·참조·보조 스크립트·라이선스 고지가 함께 설치됩니다. 별도의 npm 패키지 게시나 Unity 패키지 설치는 필요하지 않습니다.

저장소를 로컬에 클론한 경우에도 설치할 수 있습니다.

```sh
npx skills add . --skill impeccable-unity --agent codex
```

## 사용

Codex에서 스킬을 선택하거나 이름을 지정해 요청합니다.

```text
$impeccable-unity layout Assets/UI/Settings.uxml
현재 아트 스타일과 기능을 유지하면서 설정 항목의 묶음과 간격을 개선해줘.
```

```text
$impeccable-unity harden Assets/UI/Inventory.uxml
긴 이름, 빈 목록, 오류와 재시도 상태를 점검하고 처리해줘.
```

에이전트가 프로젝트의 `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`와 입력 규칙을 읽고 해당 명령의 범위에서 작업합니다. `audit`와 `critique`는 진단을 제공하며 자동으로 파일을 수정하지 않습니다. 일반적인 새 UI 제작도 스킬 진입점에서 요청할 수 있습니다.

| 목적 | 명령 |
| --- | --- |
| 맥락·설계·기록·공통화 | `init`, `shape`, `document`, `extract` |
| 진단 | `critique`, `audit` |
| 배치·글자·색·문구·마감 | `layout`, `typeset`, `colorize`, `clarify`, `polish` |
| 단순화·강조 조절 | `distill`, `bolder`, `quieter` |
| 화면·경계 상황 대응 | `adapt`, `harden` |
| 피드백·입문·특수 표현 | `animate`, `delight`, `onboard`, `overdrive` |
| 성능 | `optimize` |

[명령별 지침](skills/impeccable-unity/SKILL.md)과 [21개 공식 사례의 Unity 적용](skills/impeccable-unity/reference/before-after-cases.md)을 확인할 수 있습니다. 사례의 카드 수·색·배치를 모든 프로젝트에 강제하지 않습니다.

## 요구 사항과 범위

- 대상: Unity UI Toolkit의 UXML·USS·C# 및 Editor/Runtime UI. uGUI·IMGUI·웹 UI는 대상이 아닙니다.
- 보조 라우터: Node.js 18 이상. 파일을 읽어 명령·참조·프로젝트 정보를 전달하며 UI를 스스로 수정하지 않습니다. Node.js가 없으면 스킬의 직접 참조 절차를 따릅니다.
- 실제 임포트·렌더링·입력·성능 확인: 사용 중인 Unity Editor와 실행 도구가 별도로 필요합니다. 스킬 설치만으로 Editor 연결이나 실행 검증이 완료되지는 않습니다.
- 프로젝트별 Unity 버전과 USS 지원 범위를 확인합니다. 정적 검사를 실제 렌더링 또는 장치 입력 검증으로 보고하지 않습니다.

## 유지보수

`skills/impeccable-unity/`가 설치 가능한 원본입니다. 생성된 파일을 별도 저장소에서 다시 가져올 필요 없이 이 폴더를 직접 수정합니다.

[Task](https://taskfile.dev/)와 Node.js를 설치한 뒤 실행합니다.

```sh
task check        # 스킬 라우터, 로컬 참조, 고지, 배포 경계 검사
task install:smoke # 로컬 소스를 임시 프로젝트에 설치해 검사
task install:remote # 게시된 GitHub 소스를 임시 프로젝트에 설치해 검사
task package      # dist/impeccable-unity.zip 생성 (zip 필요)
```

설치 검사는 `skills@1.7.2`를 사용하며 임시 프로젝트에만 복사합니다. 전역 스킬을 변경하지 않습니다. 검사 결과 파일이나 Unity 데모는 저장소에 생성하지 않습니다.

## 출처와 라이선스

원본은 [Paul Bakaus와 기여자들의 Impeccable](https://github.com/pbakaus/impeccable)이며, 기준 커밋은 [`5bf0a069`](https://github.com/pbakaus/impeccable/tree/5bf0a069dc857e1b5f4b090e004d9d5b231416ca)입니다. Unity 적용 및 독립 배포 구성은 ev3rlit이 관리하며 AI의 도움으로 작성됐습니다.

Apache License 2.0으로 배포합니다. [LICENSE](LICENSE), [NOTICE](NOTICE), [수정 내역과 원본 대응](MODIFICATIONS.md)을 함께 제공합니다. 스킬만 설치해도 이 고지가 전달되도록 설치 폴더 안에도 포함합니다. 원본 프로젝트와 Unity의 이름·로고에 대한 별도의 상표 사용권이나 보증을 주장하지 않습니다.
