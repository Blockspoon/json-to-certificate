import { ISvgProps } from "../../interface"; 

export function createIconStar3({
  mainColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 46 54"
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
        d="M32.265 26.8006C28.8644 26.603 23.7121 26.9401 20.9184 25.2432C17.9415 23.4302 17.5637 19.8622 17.2087 17.1775C17.1286 16.5383 17.0942 15.7015 17.0713 15.0739L16.5103 0L15.7317 16.3756C15.7317 16.3756 15.5943 22.2912 13.6937 24.1043C10.7397 27.3468 4.54549 26.5682 0 26.8006V27.1841C4.85463 27.5096 11.5183 26.7425 14.0372 30.7754C16.7622 35.1685 15.9951 45.8841 16.2699 51.056C16.3157 51.8463 16.1439 52.7993 16.2584 53.5431C16.3042 53.8104 16.3386 54.0312 16.7737 53.9964C16.8424 51.1606 16.6935 48.3131 16.7737 45.4657C16.8767 41.8164 16.9225 37.9346 17.6782 34.3201C19.2239 26.8587 24.067 27.6606 32.265 27.1958C32.5855 27.1725 32.597 26.8122 32.2764 26.789L32.265 26.8006Z"
        fill="${mainColor}"
      />
      <path
        d="M45.8313 18.548C43.965 18.4434 41.1484 18.6293 39.6142 17.6996C37.9769 16.7001 37.7823 14.7475 37.5876 13.2832C37.5418 12.9345 37.5304 12.4696 37.5189 12.1326L37.2098 3.88086L36.7861 12.8415C36.7861 12.8415 36.706 16.0841 35.6755 17.072C34.0611 18.8501 30.6721 18.4201 28.1875 18.548V18.7572C30.8438 18.9315 34.4962 18.5131 35.8702 20.7213C37.3701 23.1271 36.9464 28.9963 37.0953 31.8204C37.1182 32.2504 37.0266 32.7734 37.0953 33.1802C37.1182 33.3197 37.1411 33.4475 37.3815 33.4243C37.4159 31.8669 37.3357 30.3096 37.3815 28.7522C37.4388 26.7532 37.4617 24.6263 37.8739 22.6506C38.7211 18.5712 41.3774 19.0012 45.8657 18.7455C46.0374 18.7455 46.0489 18.5363 45.8657 18.5247L45.8313 18.548Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}