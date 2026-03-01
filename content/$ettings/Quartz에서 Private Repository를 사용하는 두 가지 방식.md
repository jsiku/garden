## Submodule 방식 [참고]([[GitHub Actions에서 Private Logseq를 SSH로 접근하는 구조]])
	- 구조:
	  garden
	  └ content-src (submodule)
	- ### 특징
		- 특정 commit을 가리킴
		  logseq.order-list-type:: number
		- 배포 시점 재현 가능
		  logseq.order-list-type:: number
		- 포인터 갱신 커밋 필요
		  logseq.order-list-type:: number
	- ### 한계
		- logseq에 push해도 자동 반영되지 않음
	- garden repository에서 submodule 업데이트 커밋 필요
- ## CI Clone 방식
	- GitHub Actions에서 Private Repository를 직접 clone
	  ```bash
	  git clone --depth 1 git@github.com:jsiku/logseq_personal_notes.git /tmp/logseq_notes
	  ```
	- Quartz 빌드 시 해당 경로 사용
	  ```
	  npx quartz build -d /tmp/logseq_notes/public/knowledge
	  ```
	-
	- ### 특징
		- 항상 최신 상태 사용
		  logseq.order-list-type:: number
		- submodule 관리 불필요
		  logseq.order-list-type:: number
		- 자동 게시 구현 가능
		  logseq.order-list-type:: number
		- 구조 단순
		  logseq.order-list-type:: number
	- Private Repository는 SSH Deploy Key(read-only)로 접근한다.
- #Quartz #AnotherRepoAsContentSrc