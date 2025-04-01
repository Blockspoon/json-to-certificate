"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType3 = createBadgeType3;
function createBadgeType3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 482 536"
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
        d="M450.988 111.337L272.058 8.29407C252.853 -2.76469 229.184 -2.76469 209.979 8.29407L31.0301 111.337C11.8254 122.396 0 142.839 0 164.957V371.043C0 393.161 11.8254 413.604 31.0301 424.663L209.961 527.706C229.165 538.765 252.835 538.765 272.039 527.706L450.97 424.663C470.175 413.604 482 393.161 482 371.043V164.957C482 142.839 470.175 122.396 450.97 111.337H450.988Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M268.021 26.1964L268.021 26.1964C251.315 16.6012 230.72 16.6012 214.014 26.1965L43.9753 123.857C27.2729 133.45 17 151.175 17 170.34V365.66C17 384.825 27.2729 402.55 43.9753 412.143L213.997 509.804C230.703 519.399 251.297 519.399 268.004 509.803L438.025 412.143C454.727 402.55 465 384.825 465 365.66V170.34C465 151.175 454.727 133.45 438.025 123.857L268.021 26.1964Z"
        stroke="${mainColor}"
        stroke-width="10"
      />
      <path
        d="M268.021 26.1964L268.021 26.1964C251.315 16.6012 230.72 16.6012 214.014 26.1965L43.9753 123.857C27.2729 133.45 17 151.175 17 170.34V365.66C17 384.825 27.2729 402.55 43.9753 412.143L213.997 509.804C230.703 519.399 251.297 519.399 268.004 509.803L438.025 412.143C454.727 402.55 465 384.825 465 365.66V170.34C465 151.175 454.727 133.45 438.025 123.857L268.021 26.1964Z"
        stroke="black"
        stroke-opacity="0.3"
        stroke-width="10"
      />
      <path
        d="M431.819 125.951L269.223 32.5204C251.771 22.4932 230.262 22.4932 212.811 32.5204L50.1975 125.951C32.7459 135.979 22 150 22 170.054V361.431C22 387.5 32.7459 400.021 50.1975 410.049L212.794 503.48C230.246 513.507 251.754 513.507 269.206 503.48L431.803 410.049C449.254 400.021 460 388 460 361.431V174.569C460 148.5 449.254 135.979 431.803 125.951H431.819Z"
        fill="${mainColor}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 349V361.431C22 387.5 32.7459 400.021 50.1975 410.049L212.794 503.48C231.5 515.5 252 514 269.206 503.48L431.803 410.049C449.254 400.021 460.5 387 460 361.431V349H22Z"
        fill="${subColor}"
      />
      <path
        d="M267.728 35.1216L267.728 35.1215C251.202 25.6261 230.832 25.6262 214.305 35.1216L51.6921 128.553C34.8939 138.204 25 151.36 25 170.054V361.431C25 374.039 27.5927 383.092 32.0847 390.144C36.5931 397.222 43.19 402.562 51.6921 407.447L214.289 500.879C230.815 510.374 251.185 510.374 267.711 500.878L430.308 407.447C438.833 402.549 445.421 397.329 449.921 390.322C454.403 383.343 457 374.299 457 361.431V174.569C457 161.961 454.407 152.908 449.915 145.856C445.407 138.778 438.81 133.438 430.308 128.553L267.728 35.1216Z"
        stroke="white"
        stroke-width="6"
      />
      <rect x="22" y="187" width="438" height="162" fill="white" />
      <path
        d="M126 168.364C126 169.192 219.764 169.864 222.338 169.864C224.913 169.864 227 169.192 227 168.364C227 167.536 224.913 166.864 222.338 166.864C219.764 166.864 126 167.536 126 168.364Z"
        fill="black"
        fill-opacity="0.3"
      />
      <path
        d="M239.791 164.002C240.591 162.982 242.135 162.982 242.936 164.002L245.392 167.128C245.962 167.854 245.962 168.874 245.392 169.6L242.936 172.726C242.135 173.745 240.591 173.745 239.791 172.726L237.334 169.6C236.764 168.874 236.764 167.854 237.334 167.128L239.791 164.002Z"
        fill="black"
        fill-opacity="0.3"
      />
      <path
        d="M356.729 168.364C356.729 169.192 262.965 169.864 260.39 169.864C257.816 169.864 255.729 169.192 255.729 168.364C255.729 167.536 257.816 166.864 260.39 166.864C262.965 166.864 356.729 167.536 356.729 168.364Z"
        fill="black"
        fill-opacity="0.3"
      />
      <path d="M28.5 361H454" stroke="white" stroke-width="3" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="241"
          y1="0"
          x2="241"
          y2="536"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
