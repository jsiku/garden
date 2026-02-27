import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ProfileImage from "./quartz/components/ProfileImage" // 커스텀 이미지 컴포넌트 불러오기

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [], // 💡 이 부분이 누락되어 발생한 에러입니다. 복구 완료!
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jsiku",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index", // 대문에서는 Breadcrumbs 숨김
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  // 왼쪽 사이드: 타이틀, 모바일 여백, 검색, 그래프 뷰, 폴더 탐색기 순서
  left: [Component.MobileOnly(Component.Spacer()), Component.Graph(), Component.Explorer()],
  right: [
    ProfileImage(),
    Component.PageTitle(),
    Component.Darkmode(),
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  // 대문/리스트 페이지의 왼쪽 사이드
  left: [Component.MobileOnly(Component.Spacer()), Component.Graph(), Component.Explorer()],
  // 대문/리스트 페이지의 오른쪽 사이드
  right: [ProfileImage(), Component.PageTitle(), Component.Darkmode(), Component.Search()],
}
