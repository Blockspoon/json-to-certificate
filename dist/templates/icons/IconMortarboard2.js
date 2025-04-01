"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconMortarboard2 = createIconMortarboard2;
function createIconMortarboard2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 60 60"
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
        d="M31.7113 36.6285L53.8338 24.5537C56.4408 23.1308 56.4408 19.3859 53.8338 17.963L31.7113 5.88826L30.9927 7.2049L31.7113 5.88826C30.5911 5.27683 29.237 5.27683 28.1168 5.88826L28.8355 7.2049L28.1168 5.88826L5.99429 17.963C4.15254 18.9682 3.62577 21.1164 4.36084 22.7859V34.7821C4.36084 36.8127 5.9698 38.536 8.04834 38.536C10.1269 38.536 11.7358 36.8127 11.7358 34.7821V27.6876L28.1168 36.6285C29.237 37.2399 30.5911 37.2399 31.7113 36.6285ZM45.1695 47.6365C46.7253 46.8581 47.7445 45.1922 47.7445 43.4642V33.3222C47.7445 31.2369 45.5143 29.9104 43.6818 30.9058L31.5853 37.4767C31.2579 37.6546 30.648 37.8014 29.9139 37.8013C29.1798 37.8013 28.57 37.6545 28.2428 37.4767L16.1463 30.9058C14.3139 29.9104 12.0836 31.2369 12.0836 33.3222V43.4642C12.0836 45.1955 13.1073 46.8603 14.6586 47.6365L27.7345 54.1788C29.0714 54.8476 30.7606 54.8457 32.0936 54.1788L45.1695 47.6365Z"
        fill="${subColor}"
        stroke="${mainColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  `;
}
