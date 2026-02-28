import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { getAllSegmentPrefixes } from "../util/path"
// 💡 classNames 유틸리티를 불러옵니다.
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export default (() => {
  // 💡 props에서 allFiles뿐만 아니라 displayClass도 함께 가져옵니다.
  const GlobalTagList: QuartzComponent = ({
    allFiles,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    // 1. 사이트 내 모든 파일(allFiles)에서 태그를 추출하고 중복을 제거 및 정렬합니다.
    const tags = [
      ...new Set(
        allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
      ),
    ].sort((a, b) => a.localeCompare(b))

    // 2. 태그가 하나도 없으면 아무것도 렌더링하지 않습니다.
    if (tags.length === 0) {
      return null
    }

    // 3. 화면에 출력될 HTML(JSX) 구조입니다.
    return (
      // 💡 최상위 div의 class에 displayClass를 결합하여 숨김 처리가 작동하도록 합니다.
      <div class={classNames(displayClass, "global-tag-list section")}>
        <h3>{i18n(cfg.locale).components.taglist.title}</h3>
        <ul class="tags">
          {tags.map((tag) => (
            <li>
              <a href={`/tags/${tag}`} class="internal tag-link">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  //4. 컴포넌트 전용 CSS 스타일 (여백 조정)
  GlobalTagList.css = `.global-tag-list.section h3 {margin-bottom: 1rem !important;}`

  return GlobalTagList
}) satisfies QuartzComponentConstructor
