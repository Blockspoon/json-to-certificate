import { ISvgProps } from "../../interface"; 

export function createRibbonWing1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 285 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M184.111 51.6348C184.997 52.5183 184.374 65.0022 201.198 66.9274C201.529 62.2216 196.937 56.2001 192.898 53.9362L192.996 53.5039L200.18 54.2409C202.305 60.6423 208.587 64.932 215.187 65.4604C221.073 65.9338 220.84 64.9587 219.82 62.9142C218.168 59.6014 213.337 55.2942 209.597 54.4373L209.695 54.0049L217.204 53.3127C221.358 60.7628 231.754 62.761 239.093 59.3458C231.317 47.3834 218.685 53.9653 232.687 48.5792C239.507 54.6398 248.436 55.0094 255.857 49.6488C252.935 45.7251 246.145 43.7829 241.342 44.8506L241.119 44.4968L247.598 40.4187C252.377 43.3182 258.926 43.8477 263.939 41.1351C265.154 40.4831 270.779 36.3874 269.812 35.1128C268.508 33.4015 259.027 32.6284 254.723 34.8328C259.994 28.5724 263.504 29.3266 267.15 26.4041C270.418 23.7811 273.424 16.7024 272.219 12.6958C264.552 14.5268 259.767 19.3501 258.574 27.1505C239.374 46.8916 213.641 55.5656 187.496 49.2782C185.885 48.8927 184.307 49.9991 184.124 51.6375L184.111 51.6348Z"
        fill="${mainColor}"
      />
      <path
        d="M216.506 49.1001C225.754 48.9803 231.228 41.4904 229.859 32.6272C222.177 34.4361 216.492 41.1327 216.506 49.1001Z"
        fill="${mainColor}"
      />
      <path
        d="M254.387 14.5078C247.645 18.7409 244.469 27.3471 248.003 34.6626C255.811 30.9625 258.808 22.0061 254.387 14.5078Z"
        fill="${mainColor}"
      />
      <path
        d="M242.795 25.2131C235.342 28.3812 231.361 36.0528 232.828 43.9592C233.884 44.7868 247.451 38.7586 242.795 25.2131Z"
        fill="${mainColor}"
      />
      <path
        d="M199.416 50.3179C213.351 52.5274 216.69 38.1792 215.607 37.1938C208.223 37.2828 200.265 42.8058 199.416 50.3179Z"
        fill="${mainColor}"
      />
      <path
        d="M100.148 51.6348C99.2629 52.5183 99.8853 65.0022 83.0618 66.9274C82.7305 62.2216 87.3232 56.2001 91.3621 53.9362L91.2637 53.5039L84.0797 54.2409C81.9544 60.6423 75.6731 64.932 69.0732 65.4604C63.1871 65.9338 63.42 64.9587 64.4393 62.9142C66.0922 59.6014 70.9232 55.2942 74.6631 54.4373L74.5648 54.0049L67.0557 53.3127C62.9016 60.7628 52.5053 62.761 45.1664 59.3458C52.9427 47.3834 65.5746 53.9653 51.5725 48.5792C44.7529 54.6398 35.8242 55.0094 28.4028 49.6488C31.3252 45.7251 38.1152 43.7829 42.9181 44.8506L43.1408 44.4968L36.6616 40.4187C31.883 43.3182 25.3339 43.8477 20.3211 41.1351C19.1054 40.4831 13.4812 36.3874 14.4482 35.1128C15.7516 33.4015 25.2328 32.6284 29.5363 34.8328C24.2661 28.5724 20.7555 29.3266 17.1097 26.4041C13.8415 23.7811 10.8358 16.7024 12.0403 12.6958C19.7074 14.5268 24.4929 19.3501 25.6859 27.1505C44.8855 46.8916 70.6186 55.5656 96.7638 49.2782C98.3751 48.8927 99.9531 49.9991 100.136 51.6375L100.148 51.6348Z"
        fill="${mainColor}"
      />
      <path
        d="M67.7542 49.1001C58.5058 48.9803 53.0317 41.4904 54.4013 32.6272C62.0823 34.4361 67.7675 41.1327 67.7542 49.1001Z"
        fill="${mainColor}"
      />
      <path
        d="M29.873 14.5078C36.6148 18.7409 39.7912 27.3471 36.257 34.6626C28.449 30.9625 25.452 22.0061 29.873 14.5078Z"
        fill="${mainColor}"
      />
      <path
        d="M41.4646 25.2131C48.9179 28.3812 52.8985 36.0528 51.4314 43.9592C50.3754 44.7868 36.8084 38.7586 41.4646 25.2131Z"
        fill="${mainColor}"
      />
      <path
        d="M84.846 50.3179C70.9103 52.5274 67.5713 38.1792 68.6546 37.1938C76.0391 37.2828 83.9964 42.8058 84.846 50.3179Z"
        fill="${mainColor}"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="142.5"
          y1="0"
          x2="142.5"
          y2="84"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="142.5"
          y1="0"
          x2="142.5"
          y2="84"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 