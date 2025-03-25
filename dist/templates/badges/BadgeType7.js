"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType7 = createBadgeType7;
function createBadgeType7({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
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
      viewBox="0 0 488 488"
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
        d="M244 0C109.25 0 0 109.25 0 244C0 378.75 109.25 488 244 488C378.75 488 488 378.75 488 244V0H244Z"
        fill="${mainColor}"
      />
      <path
        d="M244 17C118.638 17 17 118.638 17 244C17 369.362 118.638 471 244 471C369.362 471 471 369.362 471 244V17H244Z"
        fill="white"
      />
      <mask
        id="mask0_2384_132"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="17"
        y="17"
        width="454"
        height="454"
      >
        <path
          d="M244 17C118.638 17 17 118.638 17 244C17 369.362 118.638 471 244 471C369.362 471 471 369.362 471 244V17H244Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2384_132)">
        <path
          d="M164.381 401.876C164.381 418.822 154.551 423.091 142.425 423.091C130.299 423.091 120.469 415.773 120.469 401.876C120.469 385.888 142.425 362.712 142.425 362.712C142.425 362.712 164.381 385.888 164.381 401.876Z"
          fill="${mainColor}"
        />
        <path
          d="M103.843 420.723C103.843 440.847 92.3193 445.917 78.1041 445.917C63.8889 445.917 52.3652 437.226 52.3652 420.723C52.3652 401.737 78.1041 374.216 78.1041 374.216C78.1041 374.216 103.843 401.737 103.843 420.723Z"
          fill="${mainColor}"
        />
        <path
          d="M207.237 448.787C207.237 456.661 202.868 458.644 197.479 458.644C192.09 458.644 187.721 455.244 187.721 448.787C187.721 441.358 197.479 430.589 197.479 430.589C197.479 430.589 207.237 441.358 207.237 448.787Z"
          fill="${mainColor}"
        />
        <path
          d="M328.494 405.693C328.494 417.675 321.668 420.694 313.247 420.694C304.826 420.694 298 415.519 298 405.693C298 394.388 313.247 378.001 313.247 378.001C313.247 378.001 328.494 394.388 328.494 405.693Z"
          fill="${subColor}"
        />
        <path
          d="M421.717 420.263C421.717 447.705 406.083 454.619 386.798 454.619C367.513 454.619 351.879 442.767 351.879 420.263C351.879 394.374 386.798 356.845 386.798 356.845C386.798 356.845 421.717 394.374 421.717 420.263Z"
          fill="${subColor}"
        />
        <path
          d="M175.799 439.905C175.799 455.311 167.061 459.192 156.282 459.192C145.503 459.192 136.766 452.539 136.766 439.905C136.766 425.371 156.282 404.302 156.282 404.302C156.282 404.302 175.799 425.371 175.799 439.905Z"
          fill="${subColor}"
        />
        <path
          d="M311.06 467.351C311.06 482.757 302.322 486.638 291.544 486.638C280.765 486.638 272.027 479.985 272.027 467.351C272.027 452.817 291.544 431.748 291.544 431.748C291.544 431.748 311.06 452.817 311.06 467.351Z"
          fill="${subColor}"
        />
        <path
          d="M368.894 440.725C368.894 457.671 359.064 461.941 346.938 461.941C334.812 461.941 324.982 454.622 324.982 440.725C324.982 424.737 346.938 401.562 346.938 401.562C346.938 401.562 368.894 424.737 368.894 440.725Z"
          fill="${mainColor}"
        />
        <path
          d="M420.401 394.96C420.401 402.629 416.146 404.561 410.897 404.561C405.648 404.561 401.393 401.249 401.393 394.96C401.393 387.725 410.897 377.237 410.897 377.237C410.897 377.237 420.401 387.725 420.401 394.96Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M23 244C23 121.952 121.952 23 244 23H465V244C465 366.048 366.048 465 244 465C121.952 465 23 366.048 23 244Z"
        stroke="${mainColor}"
        stroke-width="2"
      />
      <path
        d="M244 471C118.638 471 51.249 381.296 26.7227 314H460.311C443.193 374.213 369.361 471 244 471Z"
        fill="url(#paint0_linear_2384_132)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2384_132"
          x1="244"
          y1="244"
          x2="244"
          y2="471"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
    container.innerHTML = svgContent;
    return container;
}
