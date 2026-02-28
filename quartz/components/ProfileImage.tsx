import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfileImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div
      // 💡 displayClass를 통해 DesktopOnly / MobileOnly의 숨김 처리가 정상 작동하게 됩니다.
      class={classNames(displayClass)}
      // 💡 기존에 있던 display: "inline-block"을 삭제하여 CSS 우선순위 충돌을 해결했습니다.
    >
      <svg
        width="100%"
        viewBox="90 30 220 160"
        xmlns="http://www.w3.org/2000/svg"
        style={{ borderRadius: "8px", display: "block" }}
      >
        {/* 1. 컵 윤곽선 */}
        <path
          d="M 120 40 L 140 160 Q 200 180 260 160 L 280 40"
          fill="none"
          stroke="var(--dark)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* 2. 내부에 담긴 추상적 도형들 (얼음) */}
        <g transform="translate(200, 110)">
          <rect
            x="-45"
            y="-35"
            width="48"
            height="48"
            rx="6"
            fill="var(--secondary)"
            opacity="0.85"
            transform="rotate(15)"
          />
          <rect
            x="-40"
            y="-30"
            width="48"
            height="48"
            rx="6"
            fill="none"
            stroke="var(--light)"
            strokeWidth="2.5"
            transform="rotate(15)"
            opacity="0.8"
          />

          <rect
            x="-10"
            y="-70"
            width="55"
            height="55"
            rx="8"
            fill="var(--tertiary)"
            opacity="0.8"
            transform="rotate(-22)"
          />
          <rect
            x="-5"
            y="-65"
            width="55"
            height="55"
            rx="8"
            fill="none"
            stroke="var(--light)"
            strokeWidth="2.5"
            transform="rotate(-22)"
            opacity="0.9"
          />

          <polygon points="10,5 45,-15 55,20 20,35" fill="var(--darkgray)" opacity="0.6" />

          <circle cx="-25" cy="20" r="10" fill="var(--tertiary)" opacity="0.9" />
          <circle cx="30" cy="15" r="6" fill="var(--secondary)" opacity="1" />
          <circle cx="5" cy="-25" r="4" fill="var(--dark)" opacity="0.7" />
        </g>

        {/* 3. 수면의 파동 */}
        <path
          d="M 145 90 Q 200 115 255 90"
          fill="none"
          stroke="var(--tertiary)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          opacity="0.7"
        />
        <path
          d="M 165 55 Q 200 70 235 55"
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

export default (() => ProfileImage) satisfies QuartzComponentConstructor
