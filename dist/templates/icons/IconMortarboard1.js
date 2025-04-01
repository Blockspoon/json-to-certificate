"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconMortarboard1 = createIconMortarboard1;
function createIconMortarboard1({ mainColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 72 72"
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
        d="M63.7398 27.8841L37.1928 42.3738C36.386 42.8141 35.4109 42.8141 34.6041 42.3738L12.2846 30.1915V41.738C12.2846 43.2318 11.1093 44.4428 9.65958 44.4428C8.20983 44.4428 7.03458 43.2318 7.03458 41.738V26.9118C6.28547 25.6682 6.62631 23.9161 8.05708 23.1351L34.6041 8.64545C35.4109 8.2051 36.386 8.2051 37.1928 8.64545L63.7398 23.1351C65.618 24.1603 65.618 26.8589 63.7398 27.8841Z"
        fill="${mainColor}"
      />
      <path
        d="M55.495 52.1566C55.495 53.553 54.653 54.9265 53.3996 55.5536L37.7085 63.4043C36.6151 63.9514 35.1849 63.9529 34.0884 63.4043L18.3973 55.5536C17.1476 54.9284 16.3019 53.5552 16.3019 52.1566V39.9863C16.3019 38.8488 17.5184 38.1252 18.5179 38.6682L33.0337 46.5534C34.5252 47.3636 37.2708 47.364 38.7631 46.5534L53.279 38.6682C54.2785 38.1252 55.495 38.8488 55.495 39.9863V52.1566Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}
