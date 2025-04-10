"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType16 = createNewCertificateType16;
function createNewCertificateType16({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
     <svg
        width="100%"
        height="100%"
        viewBox="0 0 1153 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1917_1784)">
          <rect
            width="1152"
            height="814"
            transform="translate(0.847656)"
            fill="white"
          />
          <rect x="0.847656" width="1153" height="814" fill="#002333" />
          <rect x="40.8477" y="40" width="1070" height="735" fill="white" />
          <mask
            id="mask0_1917_1784"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1151"
            height="815"
          >
            <rect x="0.847656" width="1150" height="815" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1917_1784)">
            <path
              d="M1505.08 924.355C1533.18 1009.08 1561.43 1100.61 1586.1 1195.43C1610.22 1289.57 1630.76 1386.99 1630.2 1467.63C1629.9 1548.2 1608.53 1612 1555.26 1637.8C1503.11 1664.21 1419.13 1652.62 1319.91 1595.97C1221.15 1540.99 1118.78 1447.57 1039.16 1348.24C958.473 1248.58 900.523 1142.99 865.439 1055.52C829.895 967.434 817.22 897.495 816.245 854.619C815.418 810.856 826.291 794.156 841.296 791.655C857.21 788.867 877.051 800.352 900.358 802.603C923.488 805.55 950.083 799.263 975.49 777.342C1000.99 756.056 1025.31 719.158 1046.48 675.245C1068.05 631.878 1086.46 581.5 1109.34 545.551C1131.8 508.108 1158.93 489.888 1192.53 492.83C1225.75 495.416 1265.46 519.139 1304.55 557.013C1343.75 594.98 1382.33 647.097 1415.13 707.932C1448.45 769.25 1475.97 839.263 1505.08 924.355Z"
              stroke="${mainColor}"
              strokeWidth="6.3"
              strokeMiterlimit="10"
            />
            <path
              d="M1518.55 126.813C1437.02 163.158 1348.73 200.317 1256.81 234.245C1165.53 267.553 1070.61 297.652 990.326 305.075C910.104 312.755 844.515 297.78 813.561 247.337C782.135 198.071 785.344 113.335 831.894 9.00493C876.839 -94.7052 959.649 -205.817 1050.61 -294.874C1141.83 -385.042 1241.17 -453.156 1324.71 -496.71C1408.85 -540.8 1477.19 -560.331 1519.74 -565.551C1563.23 -570.707 1580.93 -561.551 1584.88 -546.854C1589.25 -531.302 1579.77 -510.423 1579.86 -486.998C1579.21 -463.702 1588.11 -437.839 1612.42 -414.735C1636.12 -391.46 1675.24 -370.902 1721.02 -354.195C1766.33 -337.016 1818.3 -323.689 1856.31 -304.479C1895.8 -285.825 1916.61 -260.646 1917 -226.931C1917.75 -193.602 1898.07 -151.737 1864.23 -109.081C1830.34 -66.339 1782.29 -22.7841 1725 15.8719C1667.29 55.1055 1600.33 89.4188 1518.55 126.813Z"
              stroke="${mainColor}"
              strokeWidth="6.3"
              strokeMiterlimit="10"
            />
            <path
              d="M-313.539 471.208C-395.065 507.554 -483.352 544.712 -575.275 578.662C-666.556 611.97 -761.474 642.069 -841.759 649.492C-921.959 657.172 -987.569 642.197 -1018.52 591.733C-1049.95 542.487 -1046.72 457.752 -1000.19 353.422C-955.246 249.69 -872.414 138.578 -781.454 49.5433C-690.258 -40.6255 -590.912 -108.739 -507.354 -152.294C-423.239 -196.383 -354.89 -215.936 -312.32 -221.156C-268.85 -226.311 -251.137 -217.134 -247.18 -202.437C-242.837 -186.885 -252.293 -166.006 -252.228 -142.603C-252.87 -119.285 -243.971 -93.4432 -219.669 -70.3395C-195.967 -47.0432 -156.84 -26.5065 -111.039 -9.77772C-65.7513 7.37895 -13.7892 20.7278 24.2464 39.9381C63.7367 58.5922 84.53 83.7711 84.9365 117.485C85.6638 150.793 65.9829 192.658 32.1402 235.315C-1.74531 278.078 -49.7926 321.633 -107.081 360.289C-164.798 399.501 -231.735 433.814 -313.539 471.208Z"
              stroke="${mainColor}"
              strokeWidth="6.3"
              strokeMiterlimit="10"
            />
            <path
              d="M-84.8983 1207.68C-166.425 1244.03 -254.711 1281.19 -346.634 1315.14C-437.915 1348.44 -532.833 1378.54 -613.118 1385.95C-693.318 1393.65 -758.929 1378.65 -789.884 1328.21C-821.309 1278.94 -818.079 1194.23 -771.55 1089.9C-726.605 986.165 -643.774 875.053 -552.813 785.997C-461.618 695.828 -362.272 627.736 -278.735 584.181C-194.598 540.07 -126.25 520.539 -83.679 515.319C-40.2097 510.163 -22.5182 519.341 -18.5606 534.016C-14.1966 549.568 -23.652 570.447 -23.5878 593.872C-24.2296 617.189 -15.3304 643.031 8.97132 666.135C32.6741 689.41 71.8007 709.968 117.602 726.676C162.889 743.854 214.851 757.181 252.866 776.413C292.377 795.046 313.171 820.224 313.577 853.96C314.304 887.268 294.624 929.133 260.781 971.789C226.895 1014.53 178.848 1058.11 121.559 1096.74C63.8428 1135.98 -3.09393 1170.29 -84.8983 1207.68Z"
              stroke="${mainColor}"
              strokeWidth="6.3"
              strokeMiterlimit="10"
            />
            <path
              d="M245.506 783.901C236.842 786.489 231.494 782.039 233.356 773.483C235.217 764.926 240.65 759.043 245.399 760.626C250.106 762.187 255.497 767.236 257.593 771.643C259.668 776.05 254.17 781.334 245.506 783.901Z"
              fill="${extraColor1}"
            />
            <path
              d="M69.8546 68.5198C67.8651 77.3335 61.3619 79.815 54.8158 73.9962C48.2697 68.1989 45.8096 60.5832 49.4891 57.2246C53.1472 53.866 60.2067 51.6198 65.0628 51.9621C69.9188 52.3044 71.8441 59.6848 69.8546 68.5198Z"
              fill="${subColor}"
            />
            <path
              d="M807.656 67.7269C816.598 66.4647 821.219 71.6631 818.117 79.8563C814.994 88.0282 808.747 93.034 804.298 90.7664C799.869 88.5202 795.27 82.7229 793.88 78.0594C792.468 73.3958 798.693 68.989 807.656 67.7269Z"
              fill="${extraColor1}"
            />
            <path
              d="M1086.48 602.63C1092.34 609.521 1090.41 616.21 1081.83 617.968C1073.26 619.702 1065.7 617.112 1065.24 612.141C1064.74 607.198 1067.17 600.215 1070.37 596.537C1073.56 592.859 1080.61 595.742 1086.48 602.63Z"
              fill="${subColor}"
            />
          </g>
          <rect
            x="193.848"
            y="66"
            width="60"
            height="60"
            transform="rotate(90 193.848 66)"
            fill="url(#pattern0_1917_1784)"
          />
          <mask
            id="mask1_1917_1784"
            maskUnits="userSpaceOnUse"
            x="897"
            y="192"
            width="128"
            height="46"
          ></mask>
          <g mask="url(#mask1_1917_1784)">
            <path
              d="M1106.15 210.927C1094.4 216.167 1081.68 221.524 1068.43 226.415C1055.28 231.217 1041.6 235.557 1030.03 236.627C1018.47 237.734 1009.01 235.575 1004.55 228.303C1000.03 221.2 1000.49 208.984 1007.2 193.942C1013.67 178.991 1025.61 162.972 1038.72 150.132C1051.86 137.133 1066.18 127.313 1078.22 121.034C1090.34 114.677 1100.19 111.861 1106.33 111.109C1112.59 110.366 1115.14 111.686 1115.71 113.804C1116.34 116.046 1114.98 119.057 1114.99 122.434C1114.9 125.792 1116.18 129.521 1119.68 132.852C1123.1 136.207 1128.74 139.171 1135.33 141.58C1141.86 144.057 1149.35 145.978 1154.83 148.748C1160.52 151.437 1163.52 155.067 1163.58 159.928C1163.69 164.733 1160.85 170.768 1155.97 176.918C1151.09 183.08 1144.16 189.359 1135.91 194.932C1127.59 200.589 1117.94 205.536 1106.15 210.927Z"
              stroke="${mainColor}"
              strokeWidth="2.4"
              strokeMiterlimit="10"
            />
            <path
              d="M915.977 287.526C905.117 294.422 893.31 301.576 880.917 308.348C868.602 315.016 855.701 321.302 844.41 324.043C833.137 326.826 823.467 326.065 817.994 319.52C812.479 313.153 811.16 301.002 815.602 285.145C819.831 269.406 829.307 251.818 840.405 237.206C851.513 222.43 864.247 210.632 875.243 202.666C886.312 194.608 895.647 190.387 901.607 188.748C907.696 187.1 910.411 188.038 911.284 190.048C912.233 192.174 911.323 195.351 911.824 198.691C912.223 202.03 914.034 205.529 917.985 208.314C921.853 211.136 927.863 213.246 934.744 214.668C941.562 216.167 949.251 216.977 955.075 218.921C961.099 220.749 964.593 223.904 965.36 228.707C966.163 233.443 964.236 239.827 960.307 246.622C956.374 253.43 950.439 260.654 943.082 267.367C935.677 274.175 926.855 280.475 915.977 287.526Z"
              stroke="${mainColor}"
              strokeWidth="2.4"
              strokeMiterlimit="10"
            />
          </g>
        </g>
        <defs>
          <pattern
            id="pattern0_1917_1784"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_1917_1784"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <linearGradient
            id="${paintId0}"
            x1="977.274"
            y1="195.2"
            x2="977.274"
            y2="200.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0.5" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="944.57"
            y1="149.9"
            x2="944.57"
            y2="144.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0.5" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1917_1784">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0.847656)"
            />
          </clipPath>
          <image id="image0_1917_1784" width="357" height="357" />
          <image id="image1_1917_1784" width="360" height="360" />
        </defs>
      </svg>
  `;
}
