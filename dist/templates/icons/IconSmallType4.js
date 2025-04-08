"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSmallType4 = createIconSmallType4;
function createIconSmallType4({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 57 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <path
          d="M56.789 16.4329C54.8171 16.3224 51.8411 16.5188 50.22 15.5364C48.49 14.4804 48.2843 12.4173 48.0787 10.87C48.0303 10.5016 48.0182 10.0104 48.0061 9.65433L47.6795 0.935547L47.2318 10.4034C47.2318 10.4034 47.1472 13.8295 46.0584 14.8733C44.3526 16.7522 40.7717 16.2978 38.1465 16.4329V16.6539C40.9531 16.8381 44.8123 16.396 46.264 18.7292C47.8488 21.2712 47.4012 27.4726 47.5585 30.4566C47.5827 30.911 47.4859 31.4636 47.5585 31.8934C47.5827 32.0407 47.6069 32.1758 47.8609 32.1512C47.8972 30.5057 47.8125 28.8602 47.8609 27.2147C47.9214 25.1025 47.9456 22.8553 48.3811 20.7677C49.2764 16.4574 52.083 16.9118 56.8253 16.6416C57.0068 16.6416 57.0189 16.4206 56.8253 16.4083L56.789 16.4329Z"
          fill="black"
        />
        <path
          d="M36.0143 31.8961C36.1262 32.4029 35.7346 32.3845 35.4735 32.449C31.8273 33.3704 24.0501 34.2826 21.9333 39.0004C19.7885 43.755 19.4341 51.4489 18.6694 56.913C18.3244 57.0605 18.4829 56.4523 18.4549 56.1851C18.1192 51.5687 16.8603 40.2074 14.2773 37.3141C11.172 33.8311 4.96137 33.3335 1.16602 32.2923C1.22197 31.8961 1.4551 31.933 1.66958 31.8869C4.95205 31.1313 12.2071 29.9335 14.5663 26.6624C17.1401 23.0964 17.8861 12.9422 18.4456 7.99411C18.4829 7.69004 18.4456 7.35832 18.7347 7.27539C19.0238 11.2283 19.4621 15.1905 20.2174 19.0052C21.5136 25.5474 22.2596 27.5009 26.9409 29.5188C29.8224 30.7627 33.0116 31.4907 36.0143 31.8777V31.8961Z"
          fill="${mainColor}"
          stroke="black"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  `;
}
