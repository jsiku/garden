import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { jsx } from "preact/jsx-runtime"

export default (() => {
  function ProfileImage(props: QuartzComponentProps) {
    return (
      <div
        class="profile-image-container"
        style="margin-bottom: 1.5rem; display: flex; justify-content: center;"
      >
        <img
          src="/static/profile.svg"
          alt="홈페이지 대표 이미지"
          style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);"
        />
      </div>
    )
  }
  return ProfileImage
}) satisfies QuartzComponentConstructor
