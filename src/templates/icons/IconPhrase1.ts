export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconPhrase1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 450 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M16.0421 91.1392C16.0421 92.051 16.1791 92.5526 16.4532 92.6438C16.5446 92.7349 16.7273 92.7805 17.0014 92.7805V86.7622H16.3162C15.2198 90.3185 13.0271 92.0966 9.73801 92.0966C6.90575 92.0966 4.9871 90.6832 3.98211 87.8564C3.52529 86.4886 3.29688 84.8928 3.29688 83.0691C3.29688 79.0568 4.39323 76.3212 6.58595 74.8622C7.59095 74.3151 8.68734 74.0415 9.87507 74.0415C12.5246 74.0415 14.4432 75.2725 15.6309 77.7346C15.8137 78.1905 15.9964 78.6465 16.1791 79.1024H17.0014L16.8643 73.2208C16.4075 73.2208 16.1335 73.3576 16.0421 73.6312C15.9507 73.9047 15.905 74.3607 15.905 74.999C15.2655 74.3607 14.2148 73.8591 12.753 73.4944C11.748 73.2208 10.743 73.084 9.73801 73.084C6.35757 73.084 3.7537 74.3151 1.92643 76.7771C0.647347 78.6009 0.0078125 80.6526 0.0078125 82.9323C0.0078125 85.7591 0.875756 88.13 2.61166 90.0449C4.43892 91.9598 6.86008 92.9173 9.87507 92.9173C11.9764 92.9173 14.0321 92.3246 16.0421 91.1392ZM60.4446 79.2392H60.9928L60.8558 73.3576H46.0549V74.1783H48.6588V91.8231H46.0549V92.6438H60.8558L60.9928 86.899H60.4446L59.8965 88.4035C59.4397 90.2273 58.6631 91.3215 57.5667 91.6863C57.2926 91.7775 56.9728 91.8231 56.6074 91.8231H51.3997V83.2059H57.9778V82.2484H51.3997V74.1783H56.6074C58.0692 74.1783 59.1656 75.227 59.8965 77.3243C59.8965 77.5066 59.8965 77.6434 59.8965 77.7346L60.4446 79.2392ZM90.3204 92.6438H98.2691V91.8231H95.6652V83.8898H98.6802L103.888 92.6438H108.684C108.684 92.1878 108.547 91.9143 108.273 91.8231C108.182 91.8231 108.091 91.8231 107.999 91.8231H106.766L101.558 83.4794C103.568 83.0235 104.939 81.9748 105.669 80.3335C106.035 79.6951 106.218 79.0568 106.218 78.4185C106.218 76.7771 105.487 75.5005 104.025 74.5886C102.929 73.768 101.558 73.3576 99.9136 73.3576H90.3204V74.1783H92.9243V91.8231H90.3204V92.6438ZM95.6652 74.1783H98.9543C100.782 74.1783 102.015 74.9534 102.654 76.5036C103.02 77.1419 103.203 77.7802 103.203 78.4185C103.203 79.9687 102.654 81.1541 101.558 81.9748C100.827 82.6131 99.9593 82.9323 98.9543 82.9323H95.6652V74.1783ZM139.794 92.507H148.565C148.565 92.051 148.382 91.7775 148.016 91.6863C147.925 91.6863 147.834 91.6863 147.742 91.6863H145.55V74.1783H147.468C149.204 74.1783 150.346 75.227 150.894 77.3243C150.894 77.4155 150.894 77.461 150.894 77.461L151.442 79.6495H152.402L152.128 73.3576H136.368L136.093 79.6495H137.053L137.601 77.461C138.24 75.3637 139.383 74.2695 141.027 74.1783H142.809V91.6863H139.794V92.507ZM181.044 92.507H188.993C188.993 92.051 188.81 91.7775 188.445 91.6863C188.353 91.6863 188.262 91.6863 188.171 91.6863H186.389V74.1783H188.993V73.2208H181.044V74.1783H183.648V91.6863H181.044V92.507ZM217.772 92.507H226.954V91.6863H223.117V83.0691H229.832V82.1116H223.117V74.0415H228.325C229.878 74.0415 230.974 75.0902 231.614 77.1875C231.614 77.3699 231.659 77.5066 231.751 77.5978L232.162 79.1024H232.847L232.573 73.2208H217.772V74.0415H220.376V91.6863H217.772V92.507ZM260.667 92.507H268.616C268.616 92.051 268.433 91.7775 268.068 91.6863C267.976 91.6863 267.885 91.6863 267.794 91.6863H266.012V74.0415H268.616V73.2208H260.667V74.0415H263.271V91.6863H260.667V92.507ZM313.841 91.0024C313.841 91.9143 313.932 92.4158 314.115 92.507C314.298 92.5982 314.526 92.6438 314.8 92.6438V86.6254H313.978C312.881 90.0905 310.689 91.8687 307.4 91.9599C304.659 91.9599 302.786 90.5464 301.781 87.7196C301.233 86.3518 300.959 84.7105 300.959 82.7955C300.959 78.8745 302.101 76.1844 304.385 74.7254C305.298 74.0871 306.349 73.768 307.537 73.768C310.186 73.768 312.105 75.0446 313.293 77.5978C313.567 78.0538 313.749 78.5097 313.841 78.9656H314.663L314.526 73.084C314.069 73.084 313.795 73.2208 313.704 73.4944C313.612 73.768 313.567 74.1783 313.567 74.7254C313.018 74.1783 311.968 73.6768 310.415 73.2208C309.41 73.0385 308.405 72.9473 307.4 72.9473C304.019 72.9473 301.415 74.1783 299.588 76.6404C298.4 78.4641 297.806 80.5158 297.806 82.7955C297.806 85.6223 298.674 87.9932 300.41 89.9081C302.238 91.8231 304.613 92.7805 307.537 92.7805C309.729 92.7805 311.831 92.1878 313.841 91.0024ZM355.228 92.507H362.218C362.218 92.051 362.035 91.7775 361.669 91.6863C361.578 91.6863 361.487 91.6863 361.395 91.6863H360.299L352.899 73.2208H351.802L344.539 91.6863H342.483V92.507H348.239C348.239 92.051 348.056 91.7775 347.691 91.6863C347.6 91.6863 347.508 91.6863 347.417 91.6863H345.772L348.239 85.3944H354.954L357.421 91.6863H355.228V92.507ZM351.528 76.7771L354.543 84.4369H348.65L351.528 76.7771ZM393.19 92.507H401.961C401.961 92.051 401.778 91.8231 401.413 91.8231C401.321 91.7319 401.23 91.6863 401.138 91.6863H398.946V74.1783H400.864C402.6 74.1783 403.742 75.227 404.29 77.3243C404.29 77.4155 404.29 77.461 404.29 77.461L404.839 79.6495H405.798L405.524 73.3576H389.764L389.49 79.6495H390.449L390.997 77.461C391.637 75.3637 392.779 74.2695 394.423 74.1783H396.205V91.6863H393.19V92.507ZM448.83 79.1024H449.378L449.241 73.3576H434.44V74.1783H437.044V91.6863H434.44V92.507H449.241L449.378 86.7622H448.83L448.282 88.2668C447.825 90.0905 447.048 91.1848 445.952 91.5495C445.678 91.6407 445.358 91.6863 444.993 91.6863H439.785V83.0691H446.363V82.1116H439.785V74.1783H444.993C446.455 74.1783 447.551 75.227 448.282 77.3243C448.282 77.4155 448.282 77.5066 448.282 77.5978L448.83 79.1024Z"
          fill="${mainColor}"
        />
        <path
          d="M392.916 44.9071H235.863C235.589 44.9071 235.314 44.6337 235.314 44.3603C235.314 44.0869 235.589 43.9502 235.863 43.9502H392.916C393.19 43.9502 393.327 44.0869 393.327 44.3603C393.327 44.6337 393.19 44.9071 392.916 44.9071Z"
          fill="${mainColor}"
        />
        <path
          d="M235.863 52.1571C235.589 52.1571 235.314 51.8835 235.314 51.6099C235.314 51.3364 235.589 51.1996 235.863 51.1996C237.645 51.1996 239.015 49.695 239.015 48.0536C239.015 46.2755 237.645 44.9077 235.863 44.9077C235.589 44.9077 235.314 44.6341 235.314 44.3605C235.314 44.087 235.589 43.9502 235.863 43.9502C238.193 43.9502 239.975 45.7284 239.975 48.0536C239.975 50.3789 238.193 52.1571 235.863 52.1571Z"
          fill="${mainColor}"
        />
        <path
          d="M219.006 44.9071H62.0892C61.6781 44.9071 61.541 44.6337 61.541 44.3603C61.541 44.0869 61.6781 43.9502 62.0892 43.9502H219.006C219.28 43.9502 219.554 44.0869 219.554 44.3603C219.554 44.6337 219.28 44.9071 219.006 44.9071Z"
          fill="${mainColor}"
        />
        <path
          d="M219.007 52.1571C216.676 52.1571 214.895 50.3789 214.895 48.0536C214.895 45.7284 216.676 43.9502 219.007 43.9502C219.281 43.9502 219.555 44.087 219.555 44.3605C219.555 44.6341 219.281 44.9077 219.007 44.9077C217.225 44.9077 215.854 46.2755 215.854 48.0536C215.854 49.695 217.225 51.1996 219.007 51.1996C219.281 51.1996 219.555 51.3364 219.555 51.6099C219.555 51.8835 219.281 52.1571 219.007 52.1571Z"
          fill="${mainColor}"
        />
        <path
          d="M422.381 38.6141H235.863C235.589 38.6141 235.314 38.3407 235.314 38.0673C235.314 37.7939 235.589 37.5205 235.863 37.5205H422.381C422.655 37.5205 422.929 37.7939 422.929 38.0673C422.929 38.3407 422.655 38.6141 422.381 38.6141Z"
          fill="${mainColor}"
        />
        <path
          d="M235.863 38.6151C235.589 38.6151 235.314 38.3415 235.314 38.0679C235.314 37.7944 235.589 37.5208 235.863 37.5208C248.334 37.5208 258.338 27.5358 258.338 15.0887C258.338 10.0278 256.693 5.10369 253.541 1.13703C253.404 1.00025 253.404 0.589908 253.678 0.453126C253.816 0.316345 254.227 0.316346 254.364 0.589908C257.653 4.69334 259.434 9.75424 259.434 15.0887C259.434 28.0829 248.882 38.6151 235.863 38.6151Z"
          fill="${mainColor}"
        />
        <path
          d="M241.481 38.6153C241.024 38.6153 240.522 38.6153 239.974 38.6153C239.7 38.6153 239.562 38.3417 239.562 38.0681C239.562 37.7946 239.837 37.521 240.111 37.521C252.445 38.3417 263.271 28.9038 263.957 16.4567C264.231 13.3107 263.682 10.1648 262.586 7.15559C262.449 6.88202 262.586 6.60846 262.86 6.47168C263.134 6.47168 263.408 6.60846 263.545 6.88202C264.779 9.89121 265.19 13.174 265.053 16.5935C264.642 22.8854 261.764 28.6302 257.104 32.7337C252.719 36.5635 247.237 38.6153 241.481 38.6153Z"
          fill="${mainColor}"
        />
        <path
          d="M251.487 38.4787C251.35 38.4787 251.076 38.3419 251.076 38.0683C250.938 37.7947 251.213 37.5212 251.487 37.5212C259.846 35.8798 266.562 29.7247 268.891 21.381C269.622 18.6454 269.851 15.8642 269.577 13.0374C269.577 12.7638 269.714 12.4902 269.988 12.4902C270.262 12.4902 270.536 12.627 270.536 12.9006C270.901 15.9098 270.673 18.8278 269.851 21.6546C267.521 30.4086 260.532 36.8373 251.624 38.4787C251.624 38.4787 251.578 38.4787 251.487 38.4787Z"
          fill="${mainColor}"
        />
        <path
          d="M270.124 38.478C269.85 38.478 269.576 38.3412 269.576 38.0676C269.576 37.794 269.713 37.5205 269.987 37.5205C278.484 35.8791 285.062 29.724 287.392 21.3803C287.849 19.8301 288.123 18.2343 288.214 16.593C288.214 16.3194 288.488 16.1826 288.762 16.1826C289.037 16.1826 289.174 16.4562 289.174 16.7297C289.082 18.3711 288.808 20.0125 288.351 21.6539C286.022 30.4079 279.032 36.8366 270.124 38.478Z"
          fill="${mainColor}"
        />
        <path
          d="M275.332 38.4777C275.195 38.4777 274.921 38.341 274.921 38.0674C274.784 37.7938 275.058 37.5203 275.332 37.5203C282.185 36.1525 288.215 31.6387 291.23 25.3468C291.367 25.0732 291.641 24.9364 291.915 25.0732C292.189 25.21 292.326 25.4835 292.189 25.7571C288.9 32.3226 282.733 37.1099 275.469 38.4777C275.469 38.4777 275.424 38.4777 275.332 38.4777Z"
          fill="${mainColor}"
        />
        <path
          d="M269.575 38.6149C269.392 38.6149 269.209 38.6149 269.027 38.6149C268.753 38.6149 268.616 38.3413 268.616 38.0678C268.616 37.7942 268.89 37.5206 269.164 37.5206C271.356 37.6574 273.275 36.9735 274.92 35.3321C276.016 34.2379 276.701 32.7333 276.701 31.0919C276.701 29.4506 276.016 27.946 274.92 26.7149C273.001 24.9368 269.849 24.9368 268.067 26.7149C267.382 27.5356 266.971 28.3563 266.971 29.4506C266.971 30.408 267.382 31.3655 268.067 32.0494C269.164 33.1436 271.082 33.1436 272.179 32.0494C272.316 31.7758 272.727 31.7758 272.864 32.0494C273.138 32.1862 273.138 32.5965 272.864 32.7333C271.356 34.2379 268.89 34.2379 267.382 32.7333C266.423 31.9126 266.012 30.6816 266.012 29.4506C266.012 28.0827 266.423 26.9885 267.382 26.031C268.479 24.9368 269.986 24.3896 271.494 24.3896C273.001 24.3896 274.509 24.9368 275.605 26.031C276.975 27.3988 277.661 29.177 277.661 31.0919C277.661 33.0069 276.975 34.785 275.605 36.1528C273.96 37.7942 271.905 38.6149 269.575 38.6149Z"
          fill="${mainColor}"
        />
        <path
          d="M314.116 38.6153C313.842 38.6153 313.568 38.6153 313.294 38.6153C313.02 38.6153 312.746 38.3418 312.883 38.0682C312.883 37.7946 313.02 37.5211 313.294 37.5211C317.679 37.7946 321.517 36.29 324.395 33.4176C326.724 31.0924 327.958 28.0832 327.958 24.9372C327.958 21.7912 326.724 18.782 324.395 16.5935C322.613 14.8154 320.283 13.8579 317.816 13.8579C315.213 13.8579 312.883 14.8154 311.101 16.5935C308.223 19.466 308.223 24.1165 311.101 26.9889C311.375 27.2625 311.375 27.536 311.101 27.8096C310.964 27.9464 310.553 27.9464 310.416 27.8096C307.127 24.5269 307.127 19.0556 310.416 15.7729C312.335 13.8579 314.939 12.7637 317.816 12.7637C320.557 12.7637 323.161 13.8579 325.217 15.7729C327.684 18.2349 328.917 21.5177 328.917 24.9372C328.917 28.3567 327.684 31.6395 325.217 34.1015C322.202 37.1107 318.365 38.6153 314.116 38.6153Z"
          fill="${mainColor}"
        />
        <path
          d="M323.023 35.7428C322.841 35.7428 322.704 35.6972 322.612 35.606C322.475 35.3324 322.475 35.0588 322.749 34.7853C323.846 34.1014 324.668 33.0071 324.805 31.6393C325.079 30.6819 324.805 29.5876 324.12 28.7669C323.572 27.9462 322.749 27.3991 321.653 27.2623C320.146 26.9888 318.638 28.083 318.364 29.7244C318.227 29.9979 317.953 30.1347 317.679 30.1347C317.405 30.1347 317.268 29.8612 317.268 29.5876C317.679 27.3991 319.734 25.8945 321.927 26.3049C323.161 26.4416 324.257 27.1255 325.079 28.2198C325.764 29.1773 326.038 30.5451 325.901 31.7761C325.627 33.4175 324.668 34.7853 323.298 35.7428C323.206 35.7428 323.115 35.7428 323.023 35.7428Z"
          fill="${mainColor}"
        />
        <path
          d="M397.028 38.6149C396.937 38.6149 396.8 38.6149 396.617 38.6149C396.343 38.6149 396.069 38.3413 396.069 38.0678C396.206 37.7942 396.343 37.5206 396.617 37.5206C398.947 37.6574 400.865 36.9735 402.373 35.3321C403.606 34.2379 404.154 32.7333 404.154 31.0919C404.154 29.4506 403.606 27.946 402.373 26.7149C400.591 24.9368 397.439 24.9368 395.658 26.7149C394.972 27.5356 394.561 28.3563 394.561 29.4506C394.561 30.408 394.972 31.3655 395.658 32.0494C396.754 33.1436 398.673 33.1436 399.769 32.0494C399.906 31.7758 400.18 31.7758 400.454 32.0494C400.591 32.1862 400.591 32.5965 400.454 32.7333C398.947 34.2379 396.343 34.2379 394.972 32.7333C394.013 31.9126 393.465 30.6816 393.465 29.4506C393.465 28.0827 394.013 26.9885 394.972 26.031C396.069 24.9368 397.439 24.3896 399.084 24.3896C400.591 24.3896 402.099 24.9368 403.195 26.031C404.428 27.3988 405.251 29.177 405.251 31.0919C405.251 33.0069 404.428 34.785 403.195 36.1528C401.551 37.7942 399.358 38.6149 397.028 38.6149Z"
          fill="${mainColor}"
        />
        <path
          d="M422.245 38.6148C422.153 38.6148 422.062 38.6148 421.971 38.6148C421.696 38.6148 421.422 38.3412 421.422 38.0676C421.559 37.7941 421.696 37.5205 421.971 37.5205C423.067 37.6117 423.981 37.2925 424.712 36.563C425.808 35.6056 425.808 33.8274 424.712 32.7332C424.301 32.3228 423.752 32.0493 423.204 32.0493C422.656 32.0493 422.153 32.2772 421.696 32.7332C421.559 32.87 421.148 32.87 421.011 32.7332C420.874 32.4596 420.874 32.186 421.011 31.9125C421.559 31.3654 422.382 31.0918 423.204 31.0918C424.026 31.0918 424.849 31.3654 425.397 32.0493C426.905 33.5539 426.905 35.8791 425.397 37.3837C424.575 38.2044 423.478 38.6148 422.245 38.6148Z"
          fill="${mainColor}"
        />
        <path
          d="M213.249 38.6153C207.493 38.6153 202.012 36.5635 197.626 32.7337C192.967 28.6302 190.089 22.8854 189.678 16.5935C189.54 13.174 189.952 9.89121 191.185 6.88202C191.322 6.60846 191.596 6.47168 191.87 6.47168C192.144 6.60846 192.281 6.88202 192.144 7.15559C191.048 10.1648 190.5 13.3107 190.774 16.4567C191.596 28.9038 202.286 38.3417 214.62 37.521C214.894 37.521 215.168 37.7946 215.168 38.0681C215.168 38.3417 215.031 38.6153 214.757 38.6153C214.209 38.6153 213.706 38.6153 213.249 38.6153Z"
          fill="${mainColor}"
        />
        <path
          d="M203.247 38.4787C203.247 38.4787 203.202 38.4787 203.11 38.4787C194.339 36.8373 187.35 30.4086 184.883 21.6546C184.061 18.8278 183.833 15.9098 184.198 12.9006C184.198 12.627 184.472 12.4902 184.746 12.4902C185.02 12.4902 185.157 12.7638 185.157 13.0374C184.883 15.8642 185.112 18.6454 185.843 21.381C188.172 29.7247 194.887 35.8798 203.384 37.5212C203.658 37.5212 203.795 37.7947 203.795 38.0683C203.658 38.3419 203.521 38.4787 203.247 38.4787Z"
          fill="${mainColor}"
        />
        <path
          d="M219.005 38.6151C205.986 38.6151 195.434 28.0829 195.434 15.0887C195.434 9.75424 197.215 4.69334 200.504 0.589908C200.641 0.316346 201.052 0.316345 201.189 0.453126C201.464 0.589908 201.464 1.00025 201.327 1.13703C198.174 5.10369 196.53 10.0278 196.53 15.0887C196.53 27.5358 206.534 37.5208 219.005 37.5208C219.279 37.5208 219.554 37.7944 219.554 38.0679C219.554 38.3415 219.279 38.6151 219.005 38.6151Z"
          fill="${mainColor}"
        />
        <path
          d="M184.608 38.478C175.7 36.8366 168.711 30.4079 166.381 21.6539C165.924 20.0125 165.65 18.3711 165.559 16.7297C165.559 16.4562 165.696 16.1826 165.97 16.1826C166.244 16.1826 166.518 16.3194 166.518 16.593C166.609 18.2343 166.883 19.8301 167.34 21.3803C169.67 29.724 176.248 35.8791 184.745 37.5205C185.019 37.5205 185.156 37.794 185.156 38.0676C185.156 38.3412 184.882 38.478 184.608 38.478Z"
          fill="${mainColor}"
        />
        <path
          d="M179.401 38.4777C179.309 38.4777 179.263 38.4777 179.263 38.4777C172 37.1099 165.833 32.3226 162.544 25.7571C162.407 25.4835 162.544 25.21 162.818 25.0732C163.092 24.9364 163.366 25.0732 163.503 25.3468C166.518 31.6387 172.548 36.1525 179.401 37.5203C179.675 37.5203 179.949 37.7938 179.812 38.0674C179.812 38.341 179.538 38.4777 179.401 38.4777Z"
          fill="${mainColor}"
        />
        <path
          d="M185.156 38.6149C182.826 38.6149 180.771 37.7942 179.126 36.1528C177.756 34.785 177.07 33.0069 177.07 31.0919C177.07 29.177 177.756 27.3988 179.126 26.031C181.456 23.8425 185.156 23.8425 187.349 26.031C189.267 27.946 189.267 30.9551 187.349 32.7333C185.841 34.2379 183.374 34.2379 181.867 32.7333C181.593 32.5965 181.593 32.1862 181.867 32.0494C182.004 31.7758 182.415 31.7758 182.552 32.0494C183.648 33.1436 185.567 33.1436 186.663 32.0494C188.034 30.5448 188.034 28.2195 186.663 26.7149C184.745 24.9368 181.73 24.9368 179.811 26.7149C178.715 27.946 178.03 29.4506 178.03 31.0919C178.03 32.7333 178.715 34.2379 179.811 35.3321C181.456 36.9735 183.374 37.6574 185.567 37.5206C185.841 37.5206 186.115 37.7942 186.115 38.0678C186.115 38.3413 185.978 38.6149 185.704 38.6149C185.521 38.6149 185.339 38.6149 185.156 38.6149Z"
          fill="${mainColor}"
        />
        <path
          d="M140.616 38.6153C136.368 38.6153 132.531 37.1107 129.653 34.1015C124.582 29.0406 124.582 20.8337 129.653 15.7728C133.627 11.8062 140.342 11.8062 144.316 15.7728C147.605 19.0556 147.605 24.5268 144.316 27.8096C144.179 27.9464 143.905 27.9464 143.631 27.8096C143.494 27.536 143.494 27.2625 143.631 26.9889C146.509 24.1165 146.509 19.4659 143.631 16.5935C139.931 12.9004 134.038 12.9004 130.338 16.5935C125.678 21.2441 125.678 28.7671 130.338 33.4176C133.353 36.29 137.19 37.7946 141.438 37.5211C141.713 37.5211 141.987 37.7946 141.987 38.0682C141.987 38.3417 141.713 38.6153 141.438 38.6153C141.164 38.6153 140.89 38.6153 140.616 38.6153Z"
          fill="${mainColor}"
        />
        <path
          d="M131.709 35.7429C131.618 35.7429 131.526 35.7429 131.435 35.7429C130.064 34.7855 129.242 33.4176 128.968 31.7763C128.694 30.5452 128.968 29.1774 129.79 28.22C130.476 27.1257 131.572 26.4418 132.942 26.305C133.902 26.0315 134.998 26.305 135.82 26.9889C136.78 27.5361 137.328 28.4935 137.465 29.5878C137.465 29.8613 137.328 30.1349 137.054 30.1349C136.78 30.1349 136.505 29.9981 136.505 29.7246C136.368 28.9039 135.957 28.22 135.272 27.8096C134.587 27.2625 133.902 27.1257 133.079 27.2625C132.12 27.3993 131.161 27.9464 130.613 28.7671C130.064 29.5878 129.79 30.682 129.927 31.6395C130.201 33.0073 130.887 34.1016 131.983 34.7855C132.257 35.059 132.394 35.3326 132.257 35.6061C132.074 35.6973 131.892 35.7429 131.709 35.7429Z"
          fill="${mainColor}"
        />
        <path
          d="M219.006 38.6141H32.4877C32.2136 38.6141 31.9395 38.3407 31.9395 38.0673C31.9395 37.7939 32.2136 37.5205 32.4877 37.5205H219.006C219.28 37.5205 219.554 37.7939 219.554 38.0673C219.554 38.3407 219.28 38.6141 219.006 38.6141Z"
          fill="${mainColor}"
        />
        <path
          d="M32.6261 38.6148C31.3924 38.6148 30.2959 38.2044 29.4735 37.3837C28.7881 36.6998 28.377 35.7424 28.377 34.6481C28.377 33.6906 28.6511 32.7332 29.4735 32.0493C30.0218 31.3654 30.7071 31.0918 31.6666 31.0918C32.3519 31.0918 33.1744 31.3654 33.8597 31.9125C33.9968 32.186 33.9968 32.4596 33.8597 32.7332C33.5856 32.87 33.3114 32.87 33.1744 32.7332C32.7175 32.2772 32.2149 32.0493 31.6666 32.0493C31.1183 32.0493 30.57 32.3228 30.1588 32.7332C29.6106 33.2803 29.3364 33.9642 29.3364 34.6481C29.3364 35.4688 29.6106 36.1527 30.1588 36.563C30.8899 37.2925 31.8037 37.6117 32.9002 37.5205C33.1744 37.5205 33.3114 37.7941 33.4485 38.0676C33.4485 38.3412 33.1744 38.6148 32.9002 38.6148C32.8088 38.6148 32.7174 38.6148 32.6261 38.6148Z"
          fill="${mainColor}"
        />
        <path
          d="M57.8408 38.6149C55.511 38.6149 53.4553 37.7942 51.8108 36.1528C48.9329 33.2804 48.9329 28.7666 51.8108 26.031C54.0035 23.8425 57.7037 23.8425 60.0335 26.031C61.8151 27.946 61.8151 30.9551 60.0335 32.7333C58.526 34.2379 56.0592 34.2379 54.5517 32.7333C54.2776 32.5965 54.2776 32.1862 54.5517 32.0494C54.6887 31.7758 54.9628 31.7758 55.2369 32.0494C56.3333 33.1436 58.2519 33.1436 59.3483 32.0494C60.7187 30.5448 60.7187 28.2195 59.3483 26.7149C57.4296 24.9368 54.4147 24.9368 52.496 26.7149C50.1663 29.177 50.1663 33.0069 52.496 35.3321C54.0035 36.9735 56.0592 37.6574 58.2519 37.5206C58.526 37.5206 58.8001 37.7942 58.8001 38.0678C58.8001 38.3413 58.526 38.6149 58.2519 38.6149C58.1606 38.6149 58.0235 38.6149 57.8408 38.6149Z"
          fill="${mainColor}"
        />
        <path
          d="M392.916 120.409H235.863C235.589 120.409 235.314 120.136 235.314 119.862C235.314 119.589 235.589 119.315 235.863 119.315H392.916C393.19 119.315 393.327 119.589 393.327 119.862C393.327 120.136 393.19 120.409 392.916 120.409Z"
          fill="${mainColor}"
        />
        <path
          d="M235.863 120.41C235.589 120.41 235.314 120.137 235.314 119.863C235.314 119.589 235.589 119.316 235.863 119.316C237.645 119.316 239.015 117.948 239.015 116.17C239.015 114.528 237.645 113.161 235.863 113.161C235.589 113.161 235.314 112.887 235.314 112.614C235.314 112.34 235.589 112.066 235.863 112.066C238.193 112.066 239.975 113.981 239.975 116.17C239.975 118.495 238.193 120.41 235.863 120.41Z"
          fill="${mainColor}"
        />
        <path
          d="M219.006 120.409H62.0892C61.6781 120.409 61.541 120.136 61.541 119.862C61.541 119.589 61.6781 119.315 62.0892 119.315H219.006C219.28 119.315 219.554 119.589 219.554 119.862C219.554 120.136 219.28 120.409 219.006 120.409Z"
          fill="${mainColor}"
        />
        <path
          d="M219.007 120.41C216.676 120.41 214.895 118.495 214.895 116.17C214.895 113.981 216.676 112.066 219.007 112.066C219.281 112.066 219.555 112.34 219.555 112.614C219.555 112.887 219.281 113.161 219.007 113.161C217.225 113.161 215.854 114.528 215.854 116.17C215.854 117.948 217.225 119.316 219.007 119.316C219.281 119.316 219.555 119.589 219.555 119.863C219.555 120.137 219.281 120.41 219.007 120.41Z"
          fill="${mainColor}"
        />
        <path
          d="M422.381 126.701H235.863C235.589 126.701 235.314 126.428 235.314 126.154C235.314 125.881 235.589 125.607 235.863 125.607H422.381C422.655 125.607 422.929 125.881 422.929 126.154C422.929 126.428 422.655 126.701 422.381 126.701Z"
          fill="${mainColor}"
        />
        <path
          d="M253.953 163.906C253.861 163.906 253.77 163.861 253.678 163.769C253.404 163.633 253.404 163.359 253.541 163.085C256.693 159.119 258.338 154.331 258.338 149.134C258.338 136.823 248.334 126.702 235.863 126.702C235.589 126.702 235.314 126.428 235.314 126.155C235.314 125.881 235.589 125.607 235.863 125.607C248.882 125.607 259.434 136.14 259.434 149.134C259.434 154.468 257.653 159.529 254.364 163.769C254.272 163.861 254.135 163.906 253.953 163.906Z"
          fill="${mainColor}"
        />
        <path
          d="M263.134 157.751C263.043 157.751 262.952 157.751 262.86 157.751C262.586 157.614 262.449 157.341 262.586 157.067C263.682 154.058 264.231 150.912 263.957 147.766C263.271 135.319 252.445 125.881 240.111 126.702C239.837 126.702 239.562 126.565 239.562 126.291C239.562 126.018 239.7 125.744 239.974 125.744C252.993 124.923 264.231 134.772 265.053 147.629C265.19 151.049 264.779 154.331 263.545 157.477C263.545 157.614 263.271 157.751 263.134 157.751Z"
          fill="${mainColor}"
        />
        <path
          d="M270.125 151.733C270.033 151.733 269.988 151.733 269.988 151.733C269.714 151.733 269.577 151.459 269.577 151.185C269.851 148.359 269.622 145.577 268.891 142.842C266.562 134.498 259.846 128.343 251.487 126.702C251.213 126.702 250.938 126.428 251.076 126.154C251.076 125.881 251.35 125.744 251.624 125.744C260.532 127.386 267.521 133.951 269.851 142.568C270.673 145.395 270.901 148.313 270.536 151.322C270.536 151.596 270.399 151.733 270.125 151.733Z"
          fill="${mainColor}"
        />
        <path
          d="M288.762 148.176C288.488 148.176 288.214 147.903 288.214 147.629C288.123 145.988 287.849 144.392 287.392 142.842C285.062 134.498 278.484 128.343 269.987 126.702C269.713 126.702 269.576 126.428 269.576 126.154C269.576 125.881 269.85 125.744 270.124 125.744C279.032 127.386 286.022 133.951 288.351 142.568C288.808 144.21 289.082 145.897 289.174 147.629C289.174 147.903 289.037 148.039 288.762 148.176Z"
          fill="${mainColor}"
        />
        <path
          d="M291.778 139.285C291.504 139.285 291.367 139.149 291.23 139.012C288.215 132.72 282.185 128.069 275.332 126.702C275.058 126.702 274.784 126.428 274.921 126.154C274.921 125.881 275.195 125.744 275.469 125.744C282.733 127.112 288.9 131.899 292.189 138.465C292.326 138.738 292.189 139.012 291.915 139.149C291.823 139.24 291.778 139.285 291.778 139.285Z"
          fill="${mainColor}"
        />
        <path
          d="M271.494 139.97C269.986 139.97 268.479 139.286 267.382 138.192C266.423 137.371 266.012 136.14 266.012 134.909C266.012 133.541 266.423 132.447 267.382 131.489C268.89 129.985 271.356 129.985 272.864 131.489C273.138 131.763 273.138 132.036 272.864 132.173C272.727 132.447 272.316 132.447 272.179 132.173C271.082 131.079 269.164 131.079 268.067 132.173C267.382 132.994 266.971 133.815 266.971 134.909C266.971 135.866 267.382 136.824 268.067 137.508C269.986 139.286 273.001 139.286 274.92 137.508C276.016 136.277 276.701 134.772 276.701 133.131C276.701 131.489 276.016 129.985 274.92 128.89C273.275 127.386 271.356 126.565 269.164 126.702C268.89 126.702 268.616 126.428 268.616 126.155C268.616 125.881 268.753 125.608 269.027 125.608C271.631 125.471 273.823 126.428 275.605 128.07C276.975 129.438 277.661 131.216 277.661 133.131C277.661 135.046 276.975 136.824 275.605 138.192C274.509 139.286 273.001 139.97 271.494 139.97Z"
          fill="${mainColor}"
        />
        <path
          d="M317.816 151.46C314.939 151.46 312.335 150.366 310.416 148.451C307.127 145.168 307.127 139.833 310.416 136.551C310.553 136.277 310.964 136.277 311.101 136.551C311.375 136.687 311.375 136.961 311.101 137.235C308.223 140.107 308.223 144.758 311.101 147.767C312.883 149.545 315.213 150.502 317.816 150.502C320.283 150.502 322.613 149.545 324.395 147.767C326.724 145.441 327.958 142.432 327.958 139.286C327.958 136.14 326.724 133.131 324.395 130.943C321.517 127.933 317.679 126.429 313.294 126.702C313.02 126.702 312.883 126.429 312.883 126.155C312.746 125.882 313.02 125.608 313.294 125.608C317.954 125.471 322.065 126.976 325.217 130.122C327.684 132.584 328.917 135.867 328.917 139.286C328.917 142.706 327.684 145.989 325.217 148.451C323.161 150.366 320.557 151.46 317.816 151.46Z"
          fill="${mainColor}"
        />
        <path
          d="M321.242 138.055C319.323 138.055 317.679 136.687 317.268 134.772C317.268 134.498 317.405 134.225 317.679 134.088C317.953 134.088 318.227 134.225 318.364 134.498C318.638 136.14 320.146 137.234 321.653 136.961C323.846 136.687 325.216 134.635 324.805 132.584C324.668 131.353 323.846 130.121 322.749 129.438C322.475 129.301 322.475 128.89 322.612 128.754C322.749 128.48 323.023 128.343 323.298 128.617C324.668 129.438 325.627 130.805 325.901 132.447C326.313 135.046 324.531 137.508 321.927 138.055C321.653 138.055 321.425 138.055 321.242 138.055Z"
          fill="${mainColor}"
        />
        <path
          d="M399.084 139.97C397.576 139.97 396.069 139.286 394.972 138.192C394.013 137.371 393.465 136.14 393.465 134.909C393.465 133.541 394.013 132.447 394.972 131.489C396.343 129.985 398.947 129.985 400.454 131.489C400.591 131.763 400.591 132.036 400.454 132.173C400.18 132.447 399.906 132.447 399.769 132.173C398.673 131.079 396.754 131.079 395.658 132.173C394.972 132.994 394.561 133.815 394.561 134.909C394.561 135.866 394.972 136.824 395.658 137.508C397.576 139.286 400.591 139.286 402.373 137.508C403.606 136.277 404.154 134.772 404.154 133.131C404.154 131.489 403.606 129.985 402.373 128.89C400.865 127.386 398.947 126.565 396.617 126.702C396.343 126.702 396.206 126.428 396.069 126.155C396.069 125.881 396.343 125.608 396.617 125.608C399.084 125.471 401.414 126.428 403.195 128.07C404.428 129.438 405.251 131.216 405.251 133.131C405.251 135.046 404.428 136.824 403.195 138.192C401.962 139.286 400.454 139.97 399.084 139.97Z"
          fill="${mainColor}"
        />
        <path
          d="M423.204 133.13C422.382 133.13 421.559 132.857 421.011 132.31C420.874 132.173 420.874 131.763 421.011 131.626C421.148 131.352 421.559 131.352 421.696 131.626C422.153 131.991 422.656 132.173 423.204 132.173C423.752 132.173 424.301 131.899 424.712 131.489C425.808 130.395 425.808 128.753 424.712 127.659C423.981 126.93 423.067 126.61 421.971 126.702C421.696 126.702 421.559 126.428 421.422 126.155C421.422 125.881 421.696 125.607 421.971 125.607C423.204 125.607 424.438 126.018 425.397 126.975C426.905 128.343 426.905 130.805 425.397 132.31C424.849 132.857 424.026 133.13 423.204 133.13Z"
          fill="${mainColor}"
        />
        <path
          d="M191.733 157.751C191.459 157.751 191.322 157.614 191.185 157.477C189.952 154.331 189.54 151.049 189.678 147.629C190.5 134.772 201.738 124.923 214.757 125.744C215.031 125.744 215.168 126.018 215.168 126.291C215.168 126.565 214.894 126.702 214.62 126.702C202.286 125.881 191.596 135.319 190.774 147.766C190.5 150.912 191.048 154.058 192.144 157.067C192.281 157.341 192.144 157.614 191.87 157.751C191.779 157.751 191.733 157.751 191.733 157.751Z"
          fill="${mainColor}"
        />
        <path
          d="M184.746 151.733C184.472 151.733 184.198 151.596 184.198 151.322C183.833 148.313 184.061 145.395 184.883 142.568C187.35 133.951 194.339 127.386 203.11 125.744C203.384 125.744 203.658 125.881 203.795 126.154C203.795 126.428 203.658 126.702 203.384 126.702C194.887 128.343 188.172 134.498 185.843 142.842C185.112 145.577 184.883 148.359 185.157 151.185C185.157 151.459 185.02 151.733 184.746 151.733Z"
          fill="${mainColor}"
        />
        <path
          d="M200.915 163.906C200.733 163.906 200.596 163.861 200.504 163.769C197.215 159.529 195.434 154.468 195.434 149.134C195.434 136.14 205.986 125.607 219.005 125.607C219.279 125.607 219.554 125.881 219.554 126.155C219.554 126.428 219.279 126.702 219.005 126.702C206.534 126.702 196.53 136.823 196.53 149.134C196.53 154.331 198.174 159.119 201.327 163.085C201.464 163.359 201.464 163.633 201.189 163.769C201.098 163.861 201.007 163.906 200.915 163.906Z"
          fill="${mainColor}"
        />
        <path
          d="M165.97 148.176C165.696 148.039 165.559 147.903 165.559 147.629C165.65 145.897 165.924 144.21 166.381 142.568C168.711 133.951 175.7 127.386 184.608 125.744C184.882 125.744 185.156 125.881 185.156 126.154C185.156 126.428 185.019 126.702 184.745 126.702C176.248 128.343 169.67 134.498 167.34 142.842C166.883 144.392 166.609 145.988 166.518 147.629C166.518 147.903 166.244 148.176 165.97 148.176Z"
          fill="${mainColor}"
        />
        <path
          d="M162.955 139.285C162.955 139.285 162.909 139.24 162.818 139.149C162.544 139.012 162.407 138.738 162.544 138.465C165.833 131.899 172 127.112 179.263 125.744C179.538 125.744 179.812 125.881 179.812 126.154C179.949 126.428 179.675 126.702 179.401 126.702C172.548 128.069 166.518 132.72 163.503 139.012C163.366 139.149 163.229 139.285 162.955 139.285Z"
          fill="${mainColor}"
        />
        <path
          d="M183.237 139.97C181.73 139.97 180.222 139.286 179.126 138.192C177.756 136.824 177.07 135.046 177.07 133.131C177.07 131.216 177.756 129.438 179.126 128.07C180.908 126.428 183.1 125.471 185.704 125.608C185.978 125.608 186.115 125.881 186.115 126.155C186.115 126.428 185.841 126.702 185.567 126.702C183.374 126.565 181.456 127.386 179.811 128.89C178.715 129.985 178.03 131.489 178.03 133.131C178.03 134.772 178.715 136.277 179.811 137.508C181.73 139.286 184.745 139.286 186.663 137.508C188.034 136.003 188.034 133.678 186.663 132.173C185.567 131.079 183.648 131.079 182.552 132.173C182.415 132.447 182.004 132.447 181.867 132.173C181.593 132.036 181.593 131.763 181.867 131.489C183.374 129.985 185.841 129.985 187.349 131.489C189.267 133.404 189.267 136.413 187.349 138.192C186.252 139.286 184.745 139.97 183.237 139.97Z"
          fill="${mainColor}"
        />
        <path
          d="M136.916 151.46C134.312 151.46 131.571 150.502 129.653 148.451C124.582 143.39 124.582 135.183 129.653 130.122C132.805 126.976 136.916 125.471 141.438 125.608C141.713 125.608 141.987 125.882 141.987 126.155C141.987 126.429 141.713 126.702 141.438 126.702C137.19 126.429 133.353 127.933 130.338 130.943C125.678 135.593 125.678 143.116 130.338 147.767C134.038 151.323 139.931 151.323 143.631 147.767C146.509 144.758 146.509 140.107 143.631 137.235C143.494 136.961 143.494 136.687 143.631 136.551C143.905 136.277 144.179 136.277 144.316 136.551C147.605 139.833 147.605 145.168 144.316 148.451C142.398 150.502 139.657 151.46 136.916 151.46Z"
          fill="${mainColor}"
        />
        <path
          d="M133.491 138.055C133.309 138.055 133.126 138.055 132.943 138.055C130.339 137.508 128.421 135.046 128.969 132.447C129.243 130.805 130.065 129.438 131.436 128.617C131.71 128.343 131.984 128.48 132.258 128.754C132.395 128.89 132.258 129.301 131.984 129.438C130.888 130.121 130.202 131.353 129.928 132.584C129.654 134.635 131.025 136.687 133.08 136.961C133.903 137.097 134.588 136.961 135.273 136.413C135.958 136.003 136.369 135.319 136.506 134.498C136.506 134.225 136.781 134.088 137.055 134.088C137.329 134.225 137.466 134.498 137.466 134.772C137.329 135.73 136.781 136.687 135.821 137.371C135.136 137.781 134.314 138.055 133.491 138.055Z"
          fill="${mainColor}"
        />
        <path
          d="M219.006 126.701H32.4877C32.2136 126.701 31.9395 126.428 31.9395 126.154C31.9395 125.881 32.2136 125.607 32.4877 125.607H219.006C219.28 125.607 219.554 125.881 219.554 126.154C219.554 126.428 219.28 126.701 219.006 126.701Z"
          fill="${mainColor}"
        />
        <path
          d="M31.6666 133.13C30.7071 133.13 30.0218 132.857 29.4735 132.31C28.6511 131.489 28.377 130.532 28.377 129.574C28.377 128.617 28.7881 127.659 29.4735 126.975C30.433 126.018 31.5295 125.607 32.9002 125.607C33.1744 125.607 33.4485 125.881 33.4485 126.155C33.3114 126.428 33.1744 126.702 32.9002 126.702C31.8037 126.61 30.8899 126.93 30.1588 127.659C29.6106 128.206 29.3364 128.89 29.3364 129.574C29.3364 130.258 29.6106 130.942 30.1588 131.489C30.57 131.899 31.1183 132.173 31.6666 132.173C32.2149 132.173 32.7632 131.899 33.1744 131.626C33.3114 131.352 33.5856 131.352 33.8597 131.626C33.9968 131.763 33.9968 132.173 33.8597 132.31C33.3114 132.857 32.489 133.13 31.6666 133.13Z"
          fill="${mainColor}"
        />
        <path
          d="M55.9222 139.97C54.4147 139.97 52.9072 139.286 51.8108 138.192C48.9329 135.456 48.9329 130.942 51.8108 128.07C53.5924 126.428 55.7851 125.471 58.2519 125.608C58.526 125.608 58.8001 125.881 58.8001 126.155C58.8001 126.428 58.526 126.702 58.2519 126.702C56.0592 126.565 54.0035 127.386 52.496 128.89C50.1663 131.216 50.1663 135.046 52.496 137.508C54.4147 139.286 57.4296 139.286 59.3483 137.508C60.7187 136.003 60.7187 133.678 59.3483 132.173C58.2519 131.079 56.3333 131.079 55.2369 132.173C54.9628 132.447 54.6887 132.447 54.5517 132.173C54.2776 132.036 54.2776 131.763 54.5517 131.489C56.0592 129.985 58.526 129.985 60.0335 131.489C61.8151 133.404 61.8151 136.413 60.0335 138.192C58.9371 139.286 57.4296 139.97 55.9222 139.97Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 