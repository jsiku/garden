import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { jsx } from "preact/jsx-runtime"

export default (() => {
  function ProfileImage(props: QuartzComponentProps) {
    return (
      // style 속성을 TypeScript/JSX 표준인 객체(Object) 형태로 수정했습니다.
      <div
        class="profile-image-container"
        style={{ marginBottom: "0.5rem", display: "inline-block", width: "100%" }}
      >
        <svg
          width="100%"
          viewBox="90 30 220 160"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            borderRadius: "8px",
            display: "block",
          }}
        >
          {/* 1. 컵 윤곽선 (stroke-width를 strokeWidth로, stroke-linecap을 strokeLinecap으로 수정) */}
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

          {/* 3. 수면의 파동 (stroke-dasharray를 strokeDasharray로 수정) */}
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
  return ProfileImage
}) satisfies QuartzComponentConstructor
