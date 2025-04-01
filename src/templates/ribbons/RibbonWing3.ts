export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonWing3({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 302 128"
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
        d="M105.168 97.4654C103.766 98.0627 98.8037 112.464 78.9028 107.006C80.6639 101.534 88.5911 96.8078 94.1865 96.0805L94.2716 95.5469L85.812 93.1199C80.503 99.3952 71.452 101.396 63.7477 98.998C56.8757 96.8619 57.5818 95.8648 59.6624 94.0152C63.0354 91.0186 70.4541 88.3398 75.0729 89.0681L75.1579 88.5345L66.9793 84.3435C58.8997 90.8841 46.2348 88.4255 39.4846 81.2321C53.7089 71.2321 65.008 84.4094 51.6165 71.9627C41.1529 75.7219 30.8869 72.0875 24.9264 62.6564C30.0124 59.5452 38.5733 60.4303 43.5207 63.8177L43.9331 63.5186L38.4562 55.9657C31.7358 57.0762 24.0884 54.7026 19.6502 49.3595C18.5712 48.0704 14.0692 40.8856 15.7413 39.8828C17.9922 38.5391 29.0662 41.9678 32.9329 46.4142C29.8137 36.9418 25.5009 36.2015 22.704 31.2415C20.1983 26.7915 20.0115 17.4215 23.1924 13.4367C31.0327 18.9874 34.2559 26.6145 32.0648 35.9781C44.8194 67.019 69.9865 88.5085 102.41 93.264C104.407 93.5594 105.69 95.5269 105.153 97.463L105.168 97.4654Z"
        fill="${mainColor}"
      />
      <path
        d="M69.6778 79.9012C59.2723 75.5682 56.4806 64.6127 62.0522 55.2102C69.9183 60.7422 73.3089 70.8963 69.6778 79.9012Z"
        fill="${mainColor}"
      />
      <path
        d="M42.543 23.5746C48.2466 31.422 47.9329 42.5971 40.6155 49.2668C33.4642 41.5382 34.1396 30.0484 42.543 23.5746Z"
        fill="${mainColor}"
      />
      <path
        d="M50.7887 40.9527C57.7804 47.9186 58.8005 58.4018 53.5528 66.678C51.9828 67.1346 39.3747 54.1592 50.7887 40.9527Z"
        fill="${mainColor}"
      />
      <path
        d="M88.4609 89.0288C71.6971 85.2027 74.4328 67.4596 76.1052 66.8369C84.4167 70.2891 90.9096 80.147 88.4609 89.0288Z"
        fill="${mainColor}"
      />
      <ellipse
        cx="2.50028"
        cy="2.50028"
        rx="2.50028"
        ry="2.50028"
        transform="matrix(0.92806 0.372431 0.372431 -0.92806 112.18 95.4478)"
        fill="${mainColor}"
      />
      <path
        d="M196.355 97.4654C197.758 98.0627 202.72 112.464 222.621 107.006C220.86 101.534 212.932 96.8078 207.337 96.0805L207.252 95.5469L215.711 93.1199C221.02 99.3951 230.071 101.396 237.776 98.998C244.648 96.8619 243.942 95.8648 241.861 94.0152C238.488 91.0186 231.069 88.3398 226.451 89.0681L226.366 88.5345L234.544 84.3435C242.624 90.8841 255.289 88.4254 262.039 81.232C247.815 71.2321 236.515 84.4094 249.907 71.9627C260.371 75.7219 270.637 72.0875 276.597 62.6564C271.511 59.5452 262.95 60.4303 258.003 63.8177L257.59 63.5186L263.067 55.9657C269.788 57.0762 277.435 54.7026 281.873 49.3595C282.952 48.0704 287.454 40.8856 285.782 39.8828C283.531 38.5391 272.457 41.9678 268.591 46.4142C271.71 36.9418 276.023 36.2014 278.819 31.2415C281.325 26.7915 281.512 17.4215 278.331 13.4367C270.491 18.9874 267.268 26.6145 269.459 35.9781C256.704 67.019 231.537 88.5085 199.113 93.264C197.116 93.5594 195.834 95.5269 196.37 97.463L196.355 97.4654Z"
        fill="${mainColor}"
      />
      <path
        d="M231.846 79.9012C242.251 75.5682 245.043 64.6127 239.471 55.2102C231.605 60.7422 228.215 70.8963 231.846 79.9012Z"
        fill="${mainColor}"
      />
      <path
        d="M258.979 23.5746C253.275 31.422 253.589 42.5971 260.906 49.2667C268.057 41.5382 267.382 30.0484 258.979 23.5746Z"
        fill="${mainColor}"
      />
      <path
        d="M250.735 40.9527C243.743 47.9186 242.723 58.4018 247.971 66.678C249.541 67.1346 262.149 54.1592 250.735 40.9527Z"
        fill="${mainColor}"
      />
      <path
        d="M213.063 89.0288C229.826 85.2027 227.091 67.4596 225.418 66.8369C217.107 70.2891 210.614 80.147 213.063 89.0288Z"
        fill="${mainColor}"
      />
      <ellipse
        cx="186.094"
        cy="94.055"
        rx="2.50028"
        ry="2.50028"
        transform="rotate(158.134 186.094 94.055)"
        fill="${mainColor}"
      />
    </svg>
  `;
}