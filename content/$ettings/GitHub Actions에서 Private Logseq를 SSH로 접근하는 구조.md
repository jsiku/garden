## 문제
	- Private Logseq Repository를 Quartz 배포 과정에서 사용해야 했다.
	- SSH 키를 설정했는데도 Actions에서 HTTPS 접근 시도.
	- `Repository not found` 오류 발생.
- ## 원인
  `actions/checkout@v4`는 submodule을 자동 처리하면서 내부적으로 HTTPS 인증을 설정한다.  
  SSH 설정이 되어 있어도 checkout이 이를 덮어쓸 수 있다.
- ## 해결 방법
	- checkout 단계에서 submodule 자동 처리 비활성화
	  logseq.order-list-type:: number
	  
	  ```yaml
	  uses: actions/checkout@v4
	  with:
	    submodules: false
	  ```
	- 수동으로 submodule 초기화
	  logseq.order-list-type:: number
	  
	  ```bash
	  git submodule sync --recursive
	  git submodule update --init --recursive
	  ```
- ## SSH 인증 구성 절차
	- SSH 키 생성
	  logseq.order-list-type:: number
	- 공개키 → Private Logseq Repository에 Deploy Key(read-only)로 등록
	  logseq.order-list-type:: number
	- 개인키 → Garden Repository Secret (`ACTIONS_DEPLOY_KEY`)로 등록
	  logseq.order-list-type:: number
	- workflow에서 ssh-agent로 키 로드
	  logseq.order-list-type:: number
- ## 참고
  Submodule을 사용하지 않고 CI에서 직접 clone하는 방식이 더 단순하다.
- #Github_Actions #Logseq #SSH