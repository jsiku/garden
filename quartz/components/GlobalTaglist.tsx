import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import style from "./styles/GlobalTaglist.scss"

const GlobalTagList: QuartzComponent = ({
  allFiles,
  fileData,
  displayClass,
  cfg,
}: QuartzComponentProps) => {
  const tags = Array.from(new Set(allFiles.flatMap((file) => file.frontmatter?.tags ?? []))).sort()

  if (tags.length === 0) {
    return null
  }
  return (
    <div class={classNames(displayClass, "GlobalTags")}>
      <h3>{i18n(cfg.locale).components.GlobalTagList.title}</h3>
      <ul>
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

GlobalTagList.css = style
export default (() => GlobalTagList) satisfies QuartzComponentConstructor
