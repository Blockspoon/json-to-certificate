import { ISvgProps } from "../../interface"; 

export function createBadgeType28({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 440 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M411.691 101.782L248.352 7.58226C230.82 -2.52742 209.213 -2.52742 191.682 7.58226L28.3263 101.782C10.795 111.892 0 130.581 0 150.8V339.2C0 359.419 10.795 378.108 28.3263 388.218L191.665 482.418C209.197 492.527 230.803 492.527 248.335 482.418L411.674 388.218C429.205 378.108 440 359.419 440 339.2V150.8C440 130.581 429.205 111.892 411.674 101.782H411.691Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M402.106 108.212L246.934 18.2418C230.279 8.58605 209.753 8.58605 193.098 18.2418L37.9099 108.212C21.2552 117.868 11 135.718 11 155.029V334.971C11 354.282 21.2552 372.132 37.9099 381.787L193.082 471.758C209.737 481.414 230.263 481.414 246.918 471.758L402.09 381.787C418.745 372.132 429 354.282 429 334.971V155.029C429 135.718 418.745 117.868 402.09 108.212H402.106Z"
        fill="white"
      />
      <path
        d="M392.522 115.227L245.516 29.8705C229.738 20.7098 210.292 20.7098 194.514 29.8705L47.4936 115.227C31.7155 124.388 22 141.322 22 159.643V330.357C22 348.678 31.7155 365.612 47.4936 374.773L194.499 460.13C210.277 469.29 229.723 469.29 245.501 460.13L392.506 374.773C408.285 365.612 418 348.678 418 330.357V159.643C418 141.322 408.285 124.388 392.506 115.227H392.522Z"
        fill="${mainColor}"
      />
      <rect x="22" y="189" width="396" height="144" fill="${subColor}" />
      <rect
        x="31.0938"
        y="195.867"
        width="377.816"
        height="130.266"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M243.471 37.4144L380.08 116.735H380.065L386.488 120.464C401.22 129.017 410.297 144.833 410.297 161.95V328.05C410.297 345.167 401.22 360.983 386.488 369.536L243.456 452.586C228.726 461.138 210.572 461.138 195.841 452.586L52.8089 369.536C38.0772 360.983 29 345.167 29 328.05V161.95C29 144.833 38.0772 129.017 52.8088 120.464L195.856 37.4144L194.866 35.7094L195.856 37.4144C210.586 28.8619 228.74 28.8619 243.471 37.4144Z"
        stroke="black"
        stroke-opacity="0.6"
        stroke-width="4"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="220"
          y1="0"
          x2="220"
          y2="490"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 