import { ISvgProps } from "../../interface"; 

export function createIconEtc1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 117 114"
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
        d="M71.4512 5.21091L74.8105 16.7304L82.2515 23.6902L99.5318 20.5702L113.692 41.2106L105.052 46.2506L99.5318 54.6508L107.692 65.211L115.372 72.1711L105.052 90.4114L94.2517 93.0515L84.6515 88.7314L79.1314 91.6115L71.4512 108.412L54.891 112.252L42.6501 108.412V96.4115L34.7306 88.7314L27.7705 91.6115L18.4103 93.0515L6.65012 79.6112V72.1711L14.5712 63.771L18.4103 54.6508L9.53017 46.2506L5.21094 37.1305L14.5712 19.1302L31.6103 20.5702L42.6501 19.1302L45.2904 5.21091L57.771 2.57007L71.4512 5.21091Z"
        fill="${mainColor}"
      />
      <path
        d="M58.4224 85.8003C50.6173 85.7923 43.3104 82.731 37.8532 77.1783C32.396 71.6296 29.3983 64.2115 29.4063 56.291C29.4142 48.7373 32.4717 41.5703 38.0166 36.1013C43.5576 30.6364 50.8206 27.6268 58.4663 27.6268C66.2395 27.6268 73.5464 30.6563 79.0475 36.1611C84.5645 41.6819 87.5981 49.0243 87.5861 56.8371C87.5702 72.8095 74.4991 85.8043 58.4543 85.8043H58.4224V85.8003ZM33.4563 58.595C33.6835 69.1543 43.4061 81.0449 56.5808 81.8182C56.6047 81.567 56.6206 81.3438 56.6246 81.1326C56.6246 80.1719 56.6246 79.2112 56.6206 78.2466C56.6127 76.3213 56.6047 74.3243 56.6525 72.3631C56.7043 70.2225 57.8444 69.9913 58.3307 69.9913C58.845 69.9913 59.423 70.2146 60.0887 70.669C60.1884 70.7367 60.288 70.8085 60.3837 70.8802C60.5471 70.9998 60.7026 71.1154 60.8581 71.2031C61.3603 71.4782 61.9383 71.6217 62.5323 71.6217C63.5408 71.6217 64.4736 71.2071 65.0197 70.5135C66.0004 69.2778 65.8887 67.2848 64.7726 66.1567C64.2065 65.5827 63.4651 65.2797 62.6319 65.2797C61.9264 65.2797 61.2088 65.503 60.5591 65.9215C60.0608 66.2444 59.5067 66.4397 58.9725 66.631C58.7493 66.7108 58.5221 66.7905 58.3028 66.8782C58.3028 66.8782 58.0836 66.9738 57.8604 66.8981C57.6571 66.8303 57.5375 66.6151 57.5375 66.6151C57.4498 66.3799 57.3103 66.1128 57.1986 65.8577C56.9316 65.2638 56.7123 64.6141 56.6685 63.9364C56.5768 62.4855 56.5927 61.0664 56.6127 59.5636C56.6166 59.1531 56.6206 58.7385 56.6246 58.32C56.1343 58.32 55.656 58.324 55.1896 58.3279C54.5836 58.3279 53.9977 58.3359 53.4236 58.3359C52.3154 58.3359 51.4624 58.32 50.6532 58.2881C50.4658 58.2801 48.7916 58.1844 48.3331 57.2836C47.9584 56.5461 48.4926 55.3822 48.8673 54.8122C49.541 53.7838 50.4299 51.8385 48.7677 50.3437C48.1737 49.8056 47.3844 49.5106 46.5433 49.5106C45.7022 49.5106 44.873 49.8176 44.2631 50.3796C43.0433 51.4957 43.0035 53.138 44.1515 54.876C44.4704 55.3583 44.6339 55.9044 44.7933 56.4306C44.8571 56.6458 44.9249 56.865 45.0006 57.0723L45.0205 57.1201C45.1282 57.4151 45.0205 57.742 44.7654 57.9174C44.5422 57.9891 44.295 58.1286 44.0559 58.2283C43.4938 58.4595 42.8161 58.5392 42.1823 58.5552C40.9426 58.587 39.5833 58.603 37.8971 58.603C37.0599 58.603 36.2228 58.603 35.3857 58.595C34.7399 58.595 34.0941 58.591 33.4523 58.587L33.4563 58.595ZM60.6627 81.7863C71.5971 81.7863 83.1733 70.4577 84.0423 59.3045L83.3726 58.603C82.7228 58.611 82.0691 58.6229 81.4193 58.6229C80.5144 58.6229 79.773 58.603 79.0873 58.5591C78.3778 58.5113 77.6642 58.3798 77.0145 58.1565C76.7434 58.0609 76.5242 57.9572 76.2491 57.8815L76.2132 57.8656C75.8983 57.726 75.7468 57.3633 75.8704 57.0444C75.9661 56.8013 76.0498 56.5541 76.1375 56.303C76.3368 55.725 76.5441 55.1271 76.863 54.573C77.6882 53.146 77.437 51.4678 76.2371 50.3916C75.6272 49.8455 74.8539 49.5425 74.0686 49.5425C73.2833 49.5425 72.5219 49.8375 71.904 50.3756C70.7759 51.3602 70.4929 53.0503 71.2264 54.3897C71.5533 54.9876 71.7845 55.6214 72.0077 56.2352C72.1034 56.5023 72.203 56.7694 72.3067 57.0325V57.0404C72.4382 57.3633 72.2867 57.73 71.9678 57.8656C71.6768 57.9453 71.35 58.0808 71.059 58.1765C70.3733 58.3957 69.6558 58.5033 68.9103 58.5591C68.3004 58.607 67.6427 58.6269 66.8375 58.6269C66.3432 58.6269 65.8489 58.6189 65.3546 58.611C64.8643 58.603 64.3779 58.595 63.8876 58.595H60.5631V61.8796C60.7026 61.8796 60.8421 61.8756 60.9776 61.8756C64.0949 61.8756 66.2874 62.5612 67.6706 63.9723C68.7828 65.1044 69.3249 66.6988 69.289 68.7118C69.2053 73.0367 66.2794 75.5201 61.2686 75.5201C61.0215 75.5201 60.7624 75.5121 60.5033 75.5002V81.7863C60.5591 81.7863 60.6109 81.7863 60.6667 81.7863H60.6627ZM83.8071 55.0075C83.3208 43.2843 72.0476 31.9478 60.6149 31.7764V34.6863C61.3125 34.5388 61.9782 34.467 62.608 34.467C65.0476 34.467 66.9969 35.5592 68.4001 37.7117C69.8033 39.8642 69.8511 42.8458 68.4001 45.0821C66.9491 47.3183 64.9878 48.3746 62.4725 48.3746C61.9025 48.3746 61.2965 48.3188 60.6667 48.2032V54.6248H67.1285C66.4109 51.3084 67.3597 48.7134 69.9587 46.9037C71.1188 46.0945 72.4701 45.668 73.8653 45.668C75.2605 45.668 76.4524 46.0587 77.5167 46.7921C80.3749 48.7692 81.3954 51.5276 80.5583 55.0075H83.8071ZM56.6286 54.565C56.6286 53.8715 56.6286 53.1858 56.6206 52.5042C56.6087 50.0647 56.6007 47.7647 56.6685 45.4209C56.6924 44.6117 57.083 43.5275 57.7886 43.0133C57.9441 42.8977 58.1394 42.8419 58.3706 42.8419C58.9925 42.8419 59.8655 43.2923 60.3 43.5992C61.0693 44.1374 61.8865 44.4204 62.6599 44.4204C63.7641 44.4204 64.7048 43.8384 65.2948 42.7582C65.9605 41.5384 65.7014 40.0117 64.7487 39.0032C64.1148 38.3296 63.3854 37.9907 62.5881 37.9907C61.7908 37.9907 61.0055 38.3017 60.1724 38.9115C59.718 39.2464 58.9406 39.6051 58.3148 39.6051C58.0956 39.6051 57.9002 39.5613 57.7368 39.4776C57.0073 39.0989 56.6964 37.919 56.6605 37.2174C56.5927 35.7864 56.6047 34.3714 56.6166 32.8766C56.6166 32.474 56.6246 32.0674 56.6246 31.6568C56.5409 31.6568 56.4572 31.6568 56.3775 31.6568C50.8884 31.6568 44.8451 34.5587 40.2091 39.4178C35.8959 43.938 33.4922 49.3552 33.552 54.3657H39.9779C39.36 51.2008 40.1971 48.7971 42.5331 47.0353C43.7728 46.0985 45.1122 45.6242 46.5194 45.6242C47.6316 45.6242 48.7597 45.9231 49.8838 46.5131C52.8855 48.0956 54.0694 50.8061 53.4077 54.577H56.6246L56.6286 54.565Z"
        fill="${subColor}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.0724 12.6638C38.0724 3.65961 43.6171 0 52.2497 0H65.5876C74.22 0 78.7651 4.65945 78.7651 13.6638V17.2714C78.7651 18.3306 79.3242 19.3051 80.4729 19.9337C81.6382 20.5713 83.1113 20.6544 84.4419 19.9346L84.4589 19.9254L87.7389 18.164C95.3324 14.0159 103.1 14.2431 107.712 21.7394L107.718 21.7494L114.375 32.6144C119.163 40.3193 116.142 48.035 108.384 52.2924L108.334 52.3198L105.049 54.0837L105.043 54.087C103.795 54.7648 103.343 55.7886 103.343 56.7163C103.343 57.6437 103.794 58.6672 105.042 59.3451L105.049 59.3488L108.334 61.113L108.416 61.1577C116.038 65.3976 119.175 73.0054 114.387 80.799L114.381 80.809L107.692 91.7258C103.105 99.0793 96.3806 99.4429 88.7391 95.2686L85.4589 93.5072L85.4419 93.498C84.1112 92.7782 82.6382 92.8613 81.4729 93.4989C80.3242 94.1274 79.7651 95.102 79.7651 96.1611V99.7688C79.7651 108.773 74.22 113.433 65.5876 113.433H52.2497C43.6171 113.433 38.0724 108.773 38.0724 99.7688V96.1611C38.0724 95.102 37.5133 94.1275 36.3645 93.4989C35.1991 92.8613 33.726 92.7782 32.3954 93.498L32.3785 93.5071L29.0989 95.2683C21.5054 99.4168 13.697 98.1489 9.08442 90.6524L2.41548 79.7682L2.41138 79.7616C-2.349 72.0165 1.67833 65.4068 9.45314 61.1402L9.50325 61.1127L12.7885 59.3488L12.7951 59.3452C14.0431 58.6674 14.4942 57.6437 14.4942 56.7163C14.4942 55.7888 14.0431 54.7651 12.7951 54.0873L12.7885 54.0837L9.50338 52.3196L9.42144 52.2748C1.7982 48.0341 -1.33865 40.4236 3.45272 32.6293L3.45624 32.6235L10.1452 21.7067C14.7318 14.3531 21.4571 12.9897 29.0986 17.1641L32.3785 18.9255L32.3954 18.9346C33.726 19.6544 35.1991 19.5713 36.3645 18.9337C37.5133 18.3051 38.0724 17.3305 38.0724 16.2714V12.6638ZM49.2497 6.41282C46.8752 6.41282 45.5667 8.15072 45.5667 9.5415V13.1491C45.5667 25.781 35.6612 30.4538 25.3393 24.8783L25.3302 24.8734L21.9948 23.0823C20.0643 22.0228 17.6853 22.7518 16.7032 24.306L8.04473 38.1731C7.2774 39.4202 7.54083 41.2466 9.34002 42.2671L12.6092 44.0226C23.6729 50.0077 23.6729 63.4248 12.6092 69.4099L12.5922 69.4191L9.32058 71.1759C7.53259 72.169 7.24556 73.9606 8.04473 75.2595L8.05088 75.2695L16.7137 88.1436C17.6654 89.6849 20.0116 90.439 21.995 89.3505L22.0449 89.3231L25.3302 87.5592L25.3403 87.5537C35.662 81.9793 46.5667 87.6519 46.5667 100.283V103.891C46.5667 105.282 47.8752 107.02 50.2497 107.02H67.5876C69.9621 107.02 71.2707 105.282 71.2707 103.891V100.283C71.2707 87.6517 82.1757 81.979 92.4976 87.5541L92.5071 87.5592L95.8426 89.3503C97.7731 90.4097 100.152 89.6807 101.134 88.1263L109.786 74.2695L109.792 74.2595C110.56 73.0124 110.296 71.1859 108.497 70.1654L105.245 68.419L105.228 68.4099C94.1645 62.4248 94.1645 50.0077 105.228 44.0226L105.245 44.0135L108.517 42.2567C110.315 41.2573 110.57 39.4201 109.813 38.2056L109.786 38.1632L101.124 24.2889C100.172 22.7472 97.8261 21.9934 95.8425 23.082L95.7924 23.1095L92.5071 24.8734L92.4976 24.8785C82.1756 30.4536 71.2707 25.7808 71.2707 13.1491V9.5415C71.2707 8.15088 69.9621 6.41282 67.5876 6.41282H49.2497Z"
        fill="${subColor}"
      />
      <circle
        cx="58.4981"
        cy="56.7148"
        r="28.3536"
        stroke="${subColor}"
        stroke-width="5"
      />
    </svg>
  `;
}