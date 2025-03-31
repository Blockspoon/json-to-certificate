export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType67({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_radial_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_radial_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 536"
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
        d="M472.174 181.766L471.085 183.872L473.344 184.591L528.552 202.169C530.773 210.992 532.542 219.995 533.864 229.144L489.635 266.467L487.824 267.996L489.635 269.524L533.864 306.847C532.541 316 530.771 325.007 528.549 333.835L473.352 351.409L471.094 352.128L472.183 354.234L498.767 405.641C494.045 413.537 488.938 421.178 483.458 428.521L425.805 423.642L423.444 423.442L423.643 425.803L428.522 483.458C421.179 488.937 413.539 494.045 405.644 498.766L354.237 472.182L352.131 471.093L351.412 473.351L333.838 528.548C325.011 530.771 316.004 532.541 306.851 533.864L269.529 489.634L268 487.823L266.471 489.634L229.149 533.864C219.996 532.541 210.989 530.771 202.162 528.548L184.588 473.351L183.869 471.093L181.763 472.182L130.356 498.766C122.461 494.045 114.821 488.937 107.478 483.458L112.357 425.803L112.556 423.442L110.195 423.642L52.5415 428.521C47.0621 421.178 41.9547 413.537 37.2335 405.641L63.8173 354.234L64.906 352.128L62.6476 351.409L7.45143 333.835C5.22868 325.007 3.45909 316 2.13625 306.848L46.3649 269.533L48.1765 268.005L46.365 266.476L2.13623 229.153C3.45907 220 5.22867 210.993 7.45143 202.165L62.6476 184.591L64.906 183.872L63.8173 181.766L37.2335 130.359C41.9548 122.463 47.0621 114.822 52.5415 107.479L110.195 112.358L112.556 112.558L112.357 110.197L107.478 52.5423C114.821 47.0628 122.461 41.9554 130.356 37.2341L181.763 63.8183L183.869 64.907L184.588 62.6485L202.162 7.45152C210.989 5.22872 219.996 3.4591 229.149 2.13624L266.463 46.357L267.991 48.1682L269.52 46.3571L306.842 2.13622C315.995 3.45908 325.002 5.22871 333.829 7.45151L351.404 62.6485L352.123 64.907L354.228 63.8183L405.635 37.2341C413.531 41.9554 421.171 47.0628 428.514 52.5423L423.635 110.197L423.435 112.558L425.796 112.358L483.45 107.479C488.929 114.822 494.036 122.463 498.758 130.359L472.174 181.766Z"
        fill="${subColor}"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M464.713 192.758L464.136 193.793L465.254 194.187L517.5 212.627C519.439 221.396 520.909 230.335 521.916 239.406L478.535 273.767L477.606 274.503L478.488 275.295L519.654 312.281C518.085 321.276 516.063 330.11 513.582 338.747L460.304 353.907L459.164 354.231L459.675 355.3L483.56 405.225C478.674 412.881 473.4 420.264 467.755 427.33L412.794 420.957L411.617 420.82L411.68 422.003L414.633 477.254C407.23 482.451 399.535 487.256 391.59 491.658L343.244 464.723L342.208 464.146L341.814 465.264L323.379 517.5C314.605 519.441 305.663 520.911 296.587 521.919L262.227 478.538L261.491 477.609L260.699 478.49L223.714 519.657C214.719 518.088 205.885 516.066 197.249 513.585L182.089 460.306L181.765 459.166L180.696 459.677L130.771 483.562C123.115 478.676 115.733 473.402 108.667 467.757L115.04 412.795L115.177 411.618L113.994 411.681L58.7436 414.634C53.5473 407.231 48.7416 399.536 44.3401 391.591L71.2746 343.244L71.8514 342.208L70.7338 341.814L18.4984 323.379C16.5579 314.605 15.0877 305.662 14.0796 296.587L57.4601 262.234L58.3893 261.498L57.5077 260.706L16.3415 223.721C17.9105 214.725 19.9325 205.891 22.4135 197.255L75.6918 182.095L76.8316 181.77L76.3202 180.701L52.4361 130.776C57.322 123.12 62.5957 115.737 68.2411 108.671L123.202 115.045L124.379 115.181L124.315 113.998L121.363 58.7473C128.766 53.5509 136.461 48.7451 144.405 44.3435L192.752 71.2784L193.787 71.8552L194.182 70.7376L212.617 18.5013C221.39 16.5607 230.333 15.0905 239.408 14.0825L273.761 57.4554L274.496 58.3843L275.288 57.5029L312.273 16.3443C321.268 17.9133 330.102 19.9353 338.739 22.4163L353.898 75.6955L354.223 76.8353L355.292 76.3239L405.216 52.4394C412.872 57.3253 420.255 62.5991 427.321 68.2447L420.947 123.206L420.811 124.383L421.994 124.32L477.244 121.367C482.44 128.77 487.246 136.466 491.647 144.41L464.713 192.758Z"
        stroke="black"
        stroke-width="2"
      />
      <path
        d="M473.951 182.685L530.205 200.596L530.214 200.587C532.673 210.182 534.599 219.987 536 229.958L490.925 267.996L536 306.033C534.599 316.004 532.673 325.809 530.214 335.404L473.959 353.315L501.053 405.71C495.95 414.324 490.391 422.64 484.394 430.607L425.636 425.634L430.609 484.393C422.642 490.39 414.326 495.949 405.712 501.053L353.318 473.958L335.407 530.213C325.812 532.673 316.008 534.599 306.037 536L268 490.924L229.963 536C219.992 534.599 210.187 532.673 200.593 530.213L182.682 473.958L130.288 501.053C121.674 495.949 113.358 490.39 105.391 484.393L110.364 425.634L51.6058 430.607C45.6092 422.64 40.0503 414.324 34.9466 405.71L62.0408 353.315L5.7865 335.404C3.32658 325.809 1.40067 316.004 0 306.033L45.0752 268.004L0 229.967C1.40067 219.996 3.32658 210.191 5.7865 200.596L62.0408 182.685L34.9466 130.29C40.0503 121.676 45.6092 113.36 51.6058 105.393L110.364 110.366L105.391 51.6066C113.358 45.6099 121.674 40.051 130.288 34.9472L182.682 62.0418L200.593 5.7866C210.187 3.32664 219.992 1.40069 229.963 0L267.991 45.0672L306.028 0C315.999 1.40069 325.804 3.32664 335.398 5.7866L353.309 62.0418L405.703 34.9472C414.317 40.051 422.634 45.6099 430.6 51.6066L425.628 110.366L484.385 105.393C490.382 113.36 495.941 121.676 501.045 130.29L473.951 182.685Z"
        fill="${mainColor}"
        fill-opacity="0.05"
      />
      <mask
        id="mask0_2407_498"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="536"
        height="536"
      >
        <path
          d="M473.951 182.685L530.205 200.596L530.214 200.587C532.673 210.182 534.599 219.987 536 229.958L490.925 267.996L536 306.033C534.599 316.004 532.673 325.809 530.214 335.404L473.959 353.315L501.053 405.71C495.95 414.324 490.391 422.64 484.394 430.607L425.636 425.634L430.609 484.393C422.642 490.39 414.326 495.949 405.712 501.053L353.318 473.958L335.407 530.213C325.812 532.673 316.008 534.599 306.037 536L268 490.924L229.963 536C219.992 534.599 210.187 532.673 200.593 530.213L182.682 473.958L130.288 501.053C121.674 495.949 113.358 490.39 105.391 484.393L110.364 425.634L51.6058 430.607C45.6092 422.64 40.0503 414.324 34.9466 405.71L62.0408 353.315L5.7865 335.404C3.32658 325.809 1.40067 316.004 0 306.033L45.0752 268.004L0 229.967C1.40067 219.996 3.32658 210.191 5.7865 200.596L62.0408 182.685L34.9466 130.29C40.0503 121.676 45.6092 113.36 51.6058 105.393L110.364 110.366L105.391 51.6066C113.358 45.6099 121.674 40.051 130.288 34.9472L182.682 62.0418L200.593 5.7866C210.187 3.32664 219.992 1.40069 229.963 0L267.991 45.0672L306.028 0C315.999 1.40069 325.804 3.32664 335.398 5.7866L353.309 62.0418L405.703 34.9472C414.317 40.051 422.634 45.6099 430.6 51.6066L425.628 110.366L484.385 105.393C490.382 113.36 495.941 121.676 501.045 130.29L473.951 182.685Z"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask0_2407_498)">
        <circle
          cx="142.103"
          cy="185.103"
          r="174.103"
          fill="url(#${paintId0})"
        />
        <ellipse
          cx="403.534"
          cy="363.103"
          rx="219.534"
          ry="174.103"
          fill="url(#${paintId1})"
        />
      </g>
      <path d="M98 367L438 367" stroke="black" stroke-width="2" />
      <path d="M98 216L438 216" stroke="black" stroke-width="2" />
      <path d="M99 359L437 359" stroke="black" stroke-width="2" />
      <defs>
        <radialGradient
          id="${paintId0}"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(142.103 185.103) rotate(90) scale(174.103)"
        >
          <stop stop-color="${mainColor}" stop-opacity="0.4" />
          <stop offset="1" stop-color="${subColor}" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="${paintId1}"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(403.534 363.103) rotate(90) scale(174.103 219.534)"
        >
          <stop stop-color="${mainColor}" stop-opacity="0.2" />
          <stop offset="1" stop-color="${subColor}" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  `;
} 