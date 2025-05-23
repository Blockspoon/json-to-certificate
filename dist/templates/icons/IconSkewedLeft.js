"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSkewedLeft = createIconSkewedLeft;
function createIconSkewedLeft({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 412 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path d="M412 0L0 124V0H412Z" fill="${subColor}" />
        <path d="M0 291V0H103L0 291Z" fill="${mainColor}" />
      </svg>
    </div>
  `;
}
