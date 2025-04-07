export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType5({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div
      style="
        width: 100%;
        height: 100%;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform, contents;
        transform: translateZ(0);
        backface-visibility: hidden;
        position: relative;
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 779 1120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M737.45 1116.21L40.5501 1116.21C38.6882 1116.21 37.1204 1114.63 37.1204 1112.76C37.1204 1096.21 23.7939 1082.81 7.33168 1082.81C5.46986 1082.81 4.00001 1081.23 4.00001 1079.36L4.00006 41.0608C4.00006 39.1888 5.46991 37.6123 7.33172 37.6123C23.7939 37.6123 37.1205 24.2123 37.1205 7.65943C37.1205 5.78737 38.6883 4.21091 40.5501 4.21091L737.45 4.21094C739.312 4.21094 740.88 5.7874 740.88 7.65946C740.88 24.2124 754.206 37.6123 770.668 37.6123C772.53 37.6123 774 39.1888 774 41.0608L774 1079.36C774 1081.23 772.53 1082.81 770.668 1082.81C754.206 1082.81 740.88 1096.21 740.88 1112.76C740.88 1114.63 739.312 1116.21 737.45 1116.21ZM734.216 1109.31C735.784 1091.78 749.797 1077.69 767.239 1076.11L767.239 44.3123C749.797 42.7358 735.784 28.6462 734.216 11.108L43.7838 11.1079C42.2159 28.6461 28.2034 42.7358 10.7614 44.3123L10.7613 1076.11C28.2034 1077.69 42.2159 1091.78 43.7837 1109.31L734.216 1109.31Z"
          fill="url(#${paintId0})"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M770.863 40.7071C770.79 40.6299 770.724 40.6123 770.668 40.6123C752.534 40.6123 737.88 25.8536 737.88 7.65946C737.88 7.57318 737.843 7.45637 737.736 7.34866C737.629 7.241 737.52 7.21094 737.45 7.21094L40.5501 7.21091C40.48 7.21091 40.3713 7.24097 40.2643 7.34863C40.1572 7.45634 40.1205 7.57315 40.1205 7.65942C40.1205 25.8536 25.4663 40.6123 7.33172 40.6123C7.27576 40.6123 7.21051 40.6299 7.13672 40.7071C7.05688 40.7906 7.00006 40.9154 7.00006 41.0608L7.00001 1079.36C7.00001 1079.51 7.05684 1079.63 7.13673 1079.71C7.21052 1079.79 7.27577 1079.81 7.33168 1079.81C25.4663 1079.81 40.1204 1094.57 40.1204 1112.76C40.1204 1112.85 40.1571 1112.97 40.2642 1113.07C40.3713 1113.18 40.4799 1113.21 40.5501 1113.21L737.45 1113.21C737.52 1113.21 737.629 1113.18 737.736 1113.07C737.843 1112.97 737.88 1112.85 737.88 1112.76C737.88 1094.57 752.534 1079.81 770.668 1079.81C770.724 1079.81 770.789 1079.79 770.863 1079.71C770.943 1079.63 771 1079.51 771 1079.36L771 41.0608C771 40.9155 770.943 40.7906 770.863 40.7071ZM770.668 34.6123C774.314 34.6123 777 37.662 777 41.0608L777 1079.36C777 1082.76 774.314 1085.81 770.668 1085.81C755.878 1085.81 743.88 1097.85 743.88 1112.76C743.88 1116.28 740.984 1119.21 737.45 1119.21L40.5501 1119.21C37.0159 1119.21 34.1204 1116.28 34.1204 1112.76C34.1204 1097.85 22.1215 1085.81 7.33168 1085.81C3.6858 1085.81 1.00001 1082.76 1.00001 1079.36L1.00006 41.0608C1.00006 37.662 3.68591 34.6123 7.33172 34.6123C22.1216 34.6123 34.1205 22.571 34.1205 7.65942C34.1205 4.14608 37.0159 1.21091 40.5501 1.21091L737.45 1.21094C740.984 1.21094 743.88 4.14611 743.88 7.65946C743.88 22.5711 755.879 34.6123 770.668 34.6123ZM770.239 41.5712L770.239 1078.85L767.509 1079.1C751.523 1080.54 738.644 1093.48 737.204 1109.58L736.96 1112.31L41.0399 1112.31L40.7956 1109.58C39.3559 1093.48 26.4771 1080.54 10.4913 1079.1L7.76131 1078.85L7.76135 41.5712L10.4913 41.3244C26.4771 39.8796 39.356 26.946 40.7957 10.8408L41.04 8.10795L736.96 8.10798L737.204 10.8409C738.644 26.946 751.523 39.8796 767.509 41.3245L770.239 41.5712ZM764.239 46.9559C747.526 44.2457 734.257 30.8892 731.569 14.108L46.4313 14.1079C43.7427 30.8892 30.4737 44.2456 13.7614 46.9559L13.7613 1073.47C30.4736 1076.18 43.7427 1089.53 46.4312 1106.31L731.569 1106.31C734.257 1089.53 747.526 1076.18 764.239 1073.47L764.239 46.9559Z"
          fill="url(#${paintId1})"
        />
        <rect
          x="11.3145"
          y="0.210938"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 0.210938)"
          fill="${mainColor}"
        />
        <rect
          x="11.3145"
          y="1097.21"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 1097.21)"
          fill="${subColor}"
        />
        <rect
          x="767"
          y="0.210938"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 767 0.210938)"
          fill="${mainColor}"
        />
        <rect
          x="767"
          y="1097.21"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 767 1097.21)"
          fill="${subColor}"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="389"
            y1="4.21092"
            x2="389"
            y2="1116.21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="389"
            y1="1.21092"
            x2="389"
            y2="1119.21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
} 