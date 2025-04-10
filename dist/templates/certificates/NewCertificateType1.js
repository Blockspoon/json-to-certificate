"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType1 = createNewCertificateType1;
function createNewCertificateType1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "100%",
        maxHeight: "100%",
        zIndex: 1,
        mixBlendMode: "normal",
        pointerEvents: "none",
        display: "block",
      }}
    >
      <rect width="1152" height="810" fill="white" />
      <rect x="50" y="50" width="1052" height="710" rx="18" fill="#FDFDFF" />
      <rect
        x="50"
        y="50"
        width="1052"
        height="710"
        rx="18"
        stroke="url(#${paintId0})"
        stroke-width="12"
      />
      <path
        d="M88 123L387 123"
        stroke="${mainColor}"
        stroke-width="3"
      />
      <path d="M88 676.102H268" stroke="black" />
      <path d="M300 676.102H460" stroke="black" />
      <path d="M492 676H652" stroke="black" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="576"
          y1="56"
          x2="576"
          y2="754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
