"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconBg8 = createIconBg8;
function createIconBg8({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 111 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M111 85.419C111 89.9351 108.465 94.0687 104.439 96.1156L60.939 118.234C57.5212 119.972 53.4788 119.972 50.061 118.234L6.56102 96.1156C2.53547 94.0687 0 89.9351 0 85.419V26.6582C0 22.4061 2.20676 18.4104 5.8114 16.155C15.8619 9.86649 33.7768 -0.303463 57.0175 0.00694252C78.7379 0.300688 95.4757 10.0053 105.198 16.1449C108.792 18.4151 111 22.4056 111 26.6572V85.419Z"
        fill="${mainColor}"
      />
      <path
        d="M104 81.7238C104 86.2191 101.488 90.3374 97.4903 92.3942L60.9904 111.175C57.5448 112.948 53.4552 112.948 50.0097 111.175L13.5097 92.3942C9.51245 90.3374 7 86.2191 7 81.7238V31.3265C7 27.0967 9.17488 23.1051 12.7581 20.8574C21.6563 15.2759 37.0304 6.73859 56.8261 7.00614C75.3093 7.25909 89.6637 15.4033 98.2486 20.8436C101.821 23.1074 104 27.0962 104 31.3255V81.7238Z"
        fill="${subColor}"
      />
    </svg>
  `;
}
