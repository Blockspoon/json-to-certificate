"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSmallType8 = createIconSmallType8;
function createIconSmallType8({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M35.3636 14.4066L39.5617 15.7433L39.5623 15.7427C39.7459 16.4587 39.8896 17.1904 39.9941 17.9345L36.6303 20.7731L39.9941 23.6117C39.8896 24.3558 39.7459 25.0875 39.5623 25.8036L35.3642 27.1402L37.3862 31.0503C37.0053 31.6931 36.5905 32.3138 36.143 32.9083L31.758 32.5372L32.1291 36.9222C31.5346 37.3697 30.914 37.7846 30.2711 38.1654L26.3612 36.1435L25.0245 40.3416C24.3085 40.5252 23.5768 40.6689 22.8327 40.7734L19.9941 37.4096L17.1556 40.7734C16.4115 40.6689 15.6798 40.5252 14.9638 40.3416L13.6271 36.1435L9.71714 38.1654C9.0743 37.7846 8.45367 37.3697 7.85917 36.9222L8.23024 32.5372L3.84532 32.9083C3.39781 32.3138 2.98297 31.6931 2.6021 31.0503L4.62405 27.1402L0.425969 25.8036C0.242393 25.0875 0.098668 24.3558 -0.00585938 23.6117L3.35796 20.7738L-0.00585938 17.9351C0.098668 17.191 0.242393 16.4593 0.425969 15.7433L4.62405 14.4066L2.6021 10.4966C2.98297 9.85375 3.39781 9.2331 3.84532 8.6386L8.23024 9.00967L7.85917 4.62468C8.45367 4.17716 9.0743 3.76231 9.71714 3.38144L13.6271 5.40342L14.9638 1.20527C15.6798 1.02169 16.4115 0.877967 17.1556 0.773438L19.9935 4.13666L22.8321 0.773438C23.5762 0.877967 24.3079 1.02169 25.0239 1.20527L26.3605 5.40342L30.2705 3.38144C30.9133 3.76231 31.534 4.17716 32.1285 4.62468L31.7574 9.00967L36.1423 8.6386C36.5898 9.2331 37.0047 9.85375 37.3855 10.4966L35.3636 14.4066Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}
