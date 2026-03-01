---
title: Welcome to My Digital Garden
tags: [intro]
date: 2026-03-01
---

이곳은 저의 파편화된 생각, 매일의 학습 기록, 그리고 지극히 개인적인 메모들이 모여 자라나는 **디지털 정원(Digital Garden)**입니다. 

머릿속에 떠오르는 불완전한 아이디어들을 그냥 적어내는 거대한 개인 저장소에 가까우며, [Quartz 4](https://quartz.jzhao.xyz/)를 기반으로 퍼블리싱되고 있습니다. 

이곳의 글들을 읽으실 때는 다음의 요소들을 활용하시면 좋습니다:

기본적인 Quartz 4의 기능들([[Obsidian compatibility|옵시디언 호환성]], [[syntax highlighting|구문 강조]], [[darkmode|다크모드]], [[popover previews|미리보기 팝업]] 등)을  사용하고 있지만, 제 입맛에 맞게 내부 구조를 뜯어고쳐서 사용하고 있습니다. 

예를 들어, 기본 탐색 경로(Breadcrumbs)의 흐름이 맘에 들지 않아서, `quartz/components/Breadcrumbs.tsx` 파일에서 `reverse()`를 이용하여 순서를 역방향으로 뒤집었습니다.

```tsx
// quartz/components/Breadcrumbs.tsx
return (
  <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
    {[...crumbs].reverse().map((crumb, index) => (
      /* ... 중략 ...*/
  </nav>
)
```
이외에도 태그 모음을 컴포넌트로 만들거나 되도록이면 원본을 건드리지 않고 제공된 변수를 활용하면서 scss를 직접 다듬어 직접 다듬어 쓰고 있습니다.
🚧 이곳의 글들은 언제든 예고 없이 수정되거나 삭제될 수 있으며, 제 생각의 변화에 따라 내용이 완전히 뒤바뀔 수도 있습니다.
