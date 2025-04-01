"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType2 = createBadgeType2;
function createBadgeType2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 478 489"
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
        d="M444.148 378.396L274.839 479.153C252.771 492.282 225.212 492.282 203.161 479.153L33.8515 378.396C12.8468 365.891 0 343.387 0 319.084V69.1547C0 30.9622 31.202 0 69.6902 0H408.31C446.798 0 478 30.9622 478 69.1547V319.084C478 343.387 465.153 365.891 444.148 378.396Z"
        fill="${mainColor}"
      />
      <path
        d="M432.99 376.182L272.889 470.758C252.022 483.081 225.962 483.081 205.111 470.758L45.0102 376.182C25.1481 364.443 13 343.32 13 320.508V85.9121C13 50.0627 42.5048 21 78.8995 21H399.101C435.495 21 465 50.0627 465 85.9121V320.508C465 343.32 452.852 364.443 432.99 376.182Z"
        fill="#101113"
        fill-opacity="0.4"
      />
      <path
        d="M426.981 366.896L271.84 458.999C251.618 471 226.366 471 206.16 458.999L51.0187 366.896C31.7718 355.464 20 334.893 20 312.678V84.2151C20 49.3029 48.5909 21 83.8584 21H394.142C429.409 21 458 49.3029 458 84.2151V312.678C458 334.893 446.228 355.464 426.981 366.896Z"
        fill="${subColor}"
      />
      <path
        d="M417.539 360.872L270.19 448.442C250.985 459.853 227 459.853 207.81 448.442L60.4607 360.872C42.1805 350.003 31 330.444 31 309.322V92.1038C31 58.9099 58.1548 32 91.6509 32H386.349C419.845 32 447 58.9099 447 92.1038V309.322C447 330.444 435.819 350.003 417.539 360.872Z"
        fill="white"
      />
    </svg>
  `;
}
