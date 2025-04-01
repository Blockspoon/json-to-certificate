"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconTrophy3 = createIconTrophy3;
function createIconTrophy3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 112 131"
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
        d="M7.5 13H18.5L20.5 12L22.5 4.5C24.6667 4 29.3 3 30.5 3H87L91 10.5L99 12L106.5 14.5C107.167 16.8333 108.5 21.9 108.5 23.5C108.5 25.1 99.8333 39.1667 95.5 46C92.3333 48 85.8 52.2 85 53C84.2 53.8 78 64.6667 75 70L60.5 80L73 99.5L76 112L89 116.5L91 127H22.5V118.5L26 115L35.5 113L37.5 99.5L48.5 84V78L45 76.5L37.5 71L29 56L17 46L3.5 24.5V17L7.5 13Z"
        fill="${mainColor}"
      />
      <path
        d="M97.0132 22H91.3206L88 40C91.2031 36.7372 92.9963 34.5516 96.0644 28.75C98.9107 23.35 98.0628 22.4655 97.0132 22Z"
        fill="${subColor}"
      />
      <path
        d="M13.9868 22H19.6794L23 40C19.7969 36.7372 18.0037 34.5516 14.9356 28.75C12.0893 23.35 12.9372 22.4655 13.9868 22Z"
        fill="${subColor}"
      />
      <path
        d="M78.7197 111.732C80.8704 111.732 82.9086 111.637 84.9366 111.753C89.0181 111.981 92.5779 114.862 93.1252 118.904C93.5574 122.086 93.3477 125.367 93.2709 128.6C93.2402 129.883 91.9974 130.831 90.6394 130.972C90.2175 131.016 89.7878 130.995 89.3633 130.995C67.227 130.995 45.0907 130.995 22.957 130.995C19.8678 130.995 18.9164 130.047 18.9139 126.961C18.9139 124.786 18.8755 122.611 18.9394 120.436C19.0775 115.774 22.6757 112.027 27.3377 111.753C29.3631 111.632 31.4039 111.732 33.5648 111.732V110.157C33.5648 106.276 33.5597 102.398 33.5648 98.5168C33.5674 96.1755 34.24 95.2969 36.4725 94.6667C42.4669 92.9735 46.4282 87.8862 46.6789 81.6282C46.7223 80.5344 46.4513 79.9145 45.349 79.3945C38.5261 76.1746 33.6595 70.8209 29.7851 64.5143C28.1637 61.8758 26.9107 59.012 25.43 56.2839C25.1077 55.6896 24.6295 55.0774 24.0618 54.7367C10.9836 46.8752 2.96888 35.4735 0.166046 20.4447C-0.920822 14.6094 3.45734 9.41192 9.5131 9.28384C12.0244 9.23005 14.5357 9.27359 17.047 9.27359C17.5099 9.27359 17.9728 9.27359 18.6172 9.27359C18.6172 8.3258 18.6019 7.48817 18.6172 6.65053C18.7016 2.66469 21.3612 0.00576358 25.3225 0.00576358C45.7557 -0.00192119 66.1888 -0.00192119 86.6219 0.00576358C90.6752 0.00576358 93.3067 2.63908 93.3835 6.72225C93.3988 7.52147 93.3835 8.32324 93.3835 9.27359C96.24 9.27359 98.9533 9.23773 101.664 9.29152C102.802 9.31458 103.976 9.39143 105.068 9.68601C109.799 10.9668 112.735 15.5828 111.84 20.3935C109.065 35.3224 101.168 46.7189 88.1716 54.542C87.32 55.0543 86.7881 55.6742 86.3917 56.5733C83.3638 63.4717 79.4767 69.8116 73.6715 74.7222C71.5489 76.5179 69.0786 77.9242 66.6849 79.3715C65.9177 79.8351 65.621 80.2732 65.6057 81.1287C65.4932 87.3022 69.5977 92.8864 75.5588 94.6181C78.1673 95.3763 78.712 96.0935 78.7146 98.7755C78.7146 102.569 78.7146 106.366 78.7146 110.159C78.7146 110.62 78.7146 111.079 78.7146 111.735L78.7197 111.732ZM55.9824 6.08698C45.9833 6.08698 35.9841 6.10235 25.9875 6.06648C24.9262 6.06392 24.6091 6.37387 24.6218 7.43693C24.6755 12.0401 24.6091 16.6433 24.6551 21.2439C24.7702 32.4611 26.4913 43.3811 30.9743 53.7428C33.7566 60.1775 37.3395 66.0948 42.8275 70.616C48.7631 75.506 55.3661 77.3401 62.7926 74.4609C68.3625 72.3015 72.3775 68.226 75.6867 63.4153C82.6043 53.3637 85.8777 42.0056 86.8213 30.0097C87.4044 22.5913 87.1717 15.1089 87.3916 7.65979C87.4325 6.28678 86.9569 6.0588 85.7242 6.06392C75.812 6.11003 65.8972 6.08954 55.985 6.08954L55.9824 6.08698ZM25.0591 124.817H87.3584C87.3584 123.759 87.3584 122.785 87.3584 121.814C87.3533 118.779 86.3252 117.739 83.3076 117.739C65.1735 117.739 47.0394 117.739 28.9054 117.747C28.3146 117.747 27.706 117.775 27.1383 117.918C26.013 118.205 25.1921 118.963 25.0898 120.114C24.9543 121.663 25.0566 123.234 25.0566 124.819L25.0591 124.817ZM39.7152 111.586H72.5591V100.871H39.7152V111.586ZM21.8522 45.8787C19.0136 35.6375 18.4024 25.5679 18.6351 15.4803C18.3282 15.4086 18.2438 15.3727 18.162 15.3727C15.5254 15.3651 12.8888 15.3599 10.2522 15.3599C7.0197 15.3599 5.66687 16.9968 6.2704 20.1603C7.19616 25.0094 8.884 29.5767 11.38 33.8341C14.0524 38.3912 17.4306 42.3411 21.8548 45.8813L21.8522 45.8787ZM90.1587 45.8838C94.2785 42.5717 97.4982 38.924 100.086 34.7179C102.996 29.9892 104.966 24.8993 105.83 19.4047C106.15 17.381 105.032 15.5649 103.147 15.4598C99.943 15.2831 96.7208 15.4112 93.3451 15.4112C93.6315 25.6473 92.9513 35.6836 90.1561 45.8838H90.1587ZM64.6186 94.6385C61.3349 90.809 59.6982 86.5337 59.5116 81.7768H52.7576C52.6298 86.6387 50.8831 90.8653 47.735 94.6385H64.6211H64.6186Z"
        fill="${subColor}"
      />
    </svg>
  `;
}
