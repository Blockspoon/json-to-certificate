"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType23 = createBadgeType23;
function createBadgeType23({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 513 494"
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
        d="M241.774 489.841C250.639 495.283 262.083 495.391 271.064 490.128C304.456 470.569 341.02 444.245 375.561 408.827C496.838 284.47 511.62 131.691 512.494 62.9683C512.627 52.3568 505.528 42.8212 494.799 39.1835C440.091 20.6386 356.801 -0.328906 253.86 0.00391159C153.557 0.336729 72.2311 20.7702 18.1803 39.0596C7.26028 42.7516 0.135638 52.5581 0.510182 63.363C2.96552 135.066 21.4596 286.436 142.595 410.855C175.33 444.478 209.772 470.182 241.774 489.841Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M268.031 484.95L268.03 484.951C260.956 489.097 251.885 489.007 244.913 484.728C213.261 465.283 179.227 439.879 146.894 406.67C27.2827 283.816 8.941 134.247 6.50667 63.1577L6.50658 63.1552C6.23182 55.2289 11.4668 47.6631 20.102 44.7436L20.1034 44.7431C73.7101 26.6039 154.381 6.33403 253.879 6.00388C355.994 5.67373 438.614 26.4733 492.872 44.8657C501.369 47.7466 506.592 55.1142 506.495 62.893C505.628 131.018 490.954 281.91 371.266 404.638C337.165 439.605 301.049 465.611 268.031 484.95Z"
        stroke="black"
        stroke-opacity="0.4"
        stroke-width="12"
      />
      <path
        d="M243.73 458.38C251.416 463.116 261.341 463.211 269.129 458.629C298.086 441.605 329.794 418.691 359.748 387.862C464.918 279.615 477.737 146.63 478.495 86.8105C478.61 77.5738 472.453 69.2736 463.15 66.1071C415.707 49.9648 343.479 31.7137 254.21 32.0034C167.229 32.2931 96.7038 50.0793 49.8316 65.9993C40.3619 69.2129 34.1835 77.7489 34.5083 87.1541C36.6376 149.567 52.6754 281.327 157.723 389.627C186.11 418.893 215.977 441.268 243.73 458.38Z"
        fill="white"
      />
      <path
        d="M417.495 136.172C416.945 181.107 407.649 225.362 331.377 306.674L184.863 308C108.68 226.647 97.0491 183.314 95.505 136.43C95.2694 129.366 99.7501 122.953 106.618 120.539C140.611 108.581 191.757 95.2202 254.838 95.0026C319.578 94.7849 371.96 108.495 406.366 120.62C413.114 122.999 417.579 129.234 417.495 136.172Z"
        fill="#FA2E43"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="256.496"
          y1="0"
          x2="256.496"
          y2="494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
