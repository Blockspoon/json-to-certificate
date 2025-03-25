"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType5 = createRibbonType5;
function createRibbonType5({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
    const container = document.createElement('div');
    container.style.cssText = `
    width: 100%;
    height: 100%;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform, contents;
    transform: translateZ(0);
    backface-visibility: hidden;
  `;
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const svgContent = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 371 251"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M370.097 61.4513C370.097 166.121 287.45 250.973 185.5 250.973C83.5508 250.973 0.904297 61.4513C0.904297 -43.2188 83.5508 17.5327 185.5 17.5327C287.45 17.5327 370.097 -43.2188 370.097 61.4513Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M355.074 50.1775C355.074 118.254 294.267 174.426 184.851 174.426C75.4358 174.426 14.6289 118.254 14.6289 50.1775C14.6289 -17.8989 90.8401 27.9991 184.851 27.9991C278.863 27.9991 355.074 -17.8989 355.074 50.1775Z"
        fill="white"
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="82.7979"
          y1="-16.0445"
          x2="335.435"
          y2="193.158"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
    container.innerHTML = svgContent;
    return container;
}
