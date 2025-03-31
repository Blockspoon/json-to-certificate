export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType44({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 509 509"
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
        d="M0 254.289C0 247.017 3.94676 240.319 10.3074 236.795L95.511 189.588C101.872 186.064 105.818 179.366 105.818 172.094V99.368C105.818 92.2874 109.562 85.7345 115.662 82.1388L244.519 6.17858C250.957 2.3831 258.975 2.49431 265.306 6.46692L385.775 82.062C391.605 85.7205 395.145 92.1199 395.145 99.0029V171.68C395.145 179.17 399.33 186.033 405.989 189.462L498.156 236.921C504.815 240.35 509 247.212 509 254.702V489C509 500.046 500.046 509 489 509H20C8.95432 509 0 500.046 0 489V254.289Z"
        fill="${mainColor}"
      />
      <path
        d="M24 264.951C24 258.463 27.4912 252.478 33.1382 249.284L117.125 201.779C124.027 197.875 128.294 190.559 128.294 182.63V110.388C128.294 104.059 131.618 98.1955 137.048 94.9445L245.402 30.0773C251.261 26.5695 258.601 26.6796 264.352 30.3614L365.069 94.8358C370.237 98.1445 373.364 103.859 373.364 109.996V182.243C373.364 190.398 377.875 197.884 385.085 201.694L475.41 249.423C481.309 252.541 485 258.666 485 265.338V467C485 476.941 476.941 485 467 485H42C32.0589 485 24 476.941 24 467V264.951Z"
        fill="${subColor}"
        stroke="white"
        stroke-width="4"
      />
      <path
        d="M32 270.501C32 263.562 35.7827 257.175 41.8674 253.84L126.609 207.39C133.335 203.703 137.515 196.644 137.515 188.975V116.395C137.515 109.72 141.018 103.534 146.742 100.101L244.855 41.2512C251.056 37.5318 258.831 37.6545 264.911 41.5678L355.709 100.004C361.143 103.501 364.427 109.52 364.427 115.981V188.61C364.427 196.481 368.829 203.692 375.83 207.289L466.683 253.966C473.017 257.22 477 263.744 477 270.866V458C477 468.493 468.493 477 458 477H51C40.5066 477 32 468.493 32 458V270.501Z"
        fill="${subColor}"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M31 412H478V457C478 468.598 468.598 478 457 478H52C40.402 478 31 468.598 31 457V412Z"
        fill="white"
      />
    </svg>
  `;
}