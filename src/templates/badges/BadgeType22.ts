import { ISvgProps } from "../../interface"; 

export function createBadgeType22({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 475 528"
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
        d="M443.999 109.676L268.038 8.17027C249.152 -2.72343 225.876 -2.72343 206.99 8.17027L31.0112 109.676C12.1252 120.569 0.496094 140.707 0.496094 162.495V365.505C0.496094 387.293 12.1252 407.431 31.0112 418.324L206.972 519.83C225.858 530.723 249.134 530.723 268.02 519.83L443.981 418.324C462.867 407.431 474.496 387.293 474.496 365.505V162.495C474.496 140.707 462.867 120.569 443.981 109.676H443.999Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M427.444 120.782L265.59 26.5823C248.218 16.4726 226.808 16.4726 209.436 26.5823L47.5648 120.782C30.1929 130.892 19.4961 149.581 19.4961 169.8V358.2C19.4961 378.419 30.1929 397.108 47.5648 407.218L209.419 501.418C226.791 511.527 248.201 511.527 265.573 501.418L427.427 407.218C444.799 397.108 455.496 378.419 455.496 358.2V169.8C455.496 149.581 444.799 130.892 427.427 120.782H427.444Z"
        fill="${mainColor}"
      />
      <path
        d="M264.081 29.1752L416.325 117.782H416.308L425.918 123.375C442.36 132.943 452.496 150.64 452.496 169.8V358.2C452.496 377.36 442.36 395.057 425.918 404.625L427.427 407.218L425.918 404.625L264.064 498.825C247.625 508.392 227.367 508.392 210.928 498.825L49.0739 404.625L47.5648 407.218L49.0738 404.625C32.6325 395.057 22.4961 377.36 22.4961 358.2V169.8C22.4961 150.64 32.6325 132.943 49.0738 123.375L210.945 29.1752C227.384 19.6083 247.642 19.6083 264.081 29.1751C264.081 29.1751 264.081 29.1751 264.081 29.1752Z"
        stroke="black"
        stroke-opacity="0.4"
        stroke-width="6"
      />
      <path
        d="M263.141 45.1034L410.889 133.354H410.874C426.732 142.825 436.496 160.334 436.496 179.276L436.496 233H38.4961L38.4961 179.276C38.4961 160.334 48.2606 142.825 64.1185 133.354L211.881 45.1034C227.739 35.6322 247.283 35.6322 263.141 45.1034Z"
        fill="white"
      />
      <rect x="0.496094" y="192" width="455" height="150" fill="white" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="52.2609"
          y1="99.025"
          x2="333.374"
          y2="485.163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="0.4" stop-color="${subColor}" stop-opacity="0" />
          <stop offset="0.695" stop-color="${subColor}" stop-opacity="0" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 