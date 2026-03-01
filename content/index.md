---
title: Welcome to My Garden
date: 2026-03-01
tags: [intro]
---

여기는 저의 파편화된 생각, 개인적인 메모들을 모은 Digital Garden입니다.

정제되고 완벽한 글을 쓰는 곳이 아니며, 머릿속에 떠오르는 불완전한 아이디어들을 덤담기 위한 저장소에 가깝습니다.

[Quartz 4](https://quartz.jzhao.xyz/)를 기반으로 만들었으며, 기본적인 Quartz 4의 기능들 사용하고 있지만, 일부는 제 입맛에 맞게 고쳐서 사용하고 있습니다.

예를 들어, 기본 탐색 경로(Breadcrumbs)의 시선 흐름이 맘에 들지 않아서, 순서를 역방향으로 뒤집었습니다.

```tsx
// quartz/components/Breadcrumbs.tsx

return (
  <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
    {/* 원본 crumbs 배열을 reverse()로 뒤집어서 우측 정렬된 형태와 어울리게 렌더링 */}
    {[...crumbs].reverse().map((crumb, index) => (
      <div class="breadcrumb-element">
        <a href={crumb.path}>{crumb.displayName}</a>
        {index !== crumbs.length - 1 && <p>{` ${options.spacerSymbol} `}</p>}
      </div>
    ))}
  </nav>
)
```

이외에도 글로벌 태그 리스트) 컴포넌트를 직접 만들어 화면 크기에 따라 반응형으로 배치가 바뀌게 하는 등 필요한 부분들을 직접 다듬었습니다.
🚧 이곳의 글들은 언제든 수정되거나 삭제될 수 있으며, 제 생각의 변화에 따라 내용이 완전히 뒤바뀔 수도 있습니다.
