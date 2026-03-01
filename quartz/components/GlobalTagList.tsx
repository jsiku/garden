import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/globaltaglist.scss"

import { getAllSegmentPrefixes } from "../util/path"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export default (() => {
  const GlobalTagList: QuartzComponent = ({
    allFiles,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const tags = [
      ...new Set(
        allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
      ),
    ].sort((a, b) => a.localeCompare(b))

    if (tags.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "global-tag-list section", "flex-component")}>
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

  GlobalTagList.css = style

  return GlobalTagList
}) satisfies QuartzComponentConstructor
