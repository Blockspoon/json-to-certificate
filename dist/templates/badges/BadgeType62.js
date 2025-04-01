"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType62 = createBadgeType62;
function createBadgeType62({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 536"
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
        d="M536 268C536 302.553 505.766 331.145 493.241 361.293C480.284 392.606 481.061 433.94 457.522 457.522C433.983 481.104 392.52 480.284 361.293 493.241C331.059 505.766 302.682 536 268 536C233.318 536 204.855 505.766 174.708 493.241C143.394 480.284 102.06 481.061 78.5212 457.522C54.9821 433.983 55.7164 392.52 42.7591 361.293C30.2337 331.145 0 302.639 0 268C0 233.361 30.2337 204.855 42.7591 174.708C55.7164 143.394 54.9821 102.06 78.5212 78.478C102.06 54.8957 143.308 55.7164 174.708 42.7591C204.941 30.2337 233.361 0 268 0C302.639 0 331.188 30.2337 361.293 42.7591C392.606 55.7164 433.983 54.9389 457.522 78.478C481.061 102.017 480.284 143.48 493.241 174.708C505.68 204.855 536 233.318 536 268Z"
        fill="#002333"
      />
      <path
        d="M462.819 348.689L462.818 348.692C458.665 358.727 456.086 369.99 453.551 381.057C452.588 385.261 451.632 389.437 450.598 393.507C446.797 408.472 441.931 422.178 432.063 432.065C422.196 441.95 408.474 446.815 393.493 450.612C389.43 451.642 385.26 452.595 381.063 453.554C369.98 456.086 358.707 458.662 348.69 462.818C339.135 466.777 329.72 472.768 320.364 478.723C316.62 481.105 312.886 483.481 309.156 485.719C295.935 493.65 282.568 500 268 500C253.432 500 240.045 493.65 226.815 485.719C223.058 483.466 219.297 481.073 215.528 478.675C206.195 472.737 196.812 466.766 187.31 462.819L187.308 462.818C177.276 458.666 166.015 456.087 154.952 453.553C150.746 452.589 146.569 451.632 142.498 450.598C127.537 446.797 113.841 441.931 103.974 432.064C94.1063 422.197 89.2316 408.473 85.4205 393.492C84.3852 389.422 83.427 385.246 82.4626 381.044C79.9207 369.967 77.3356 358.701 73.1817 348.69L73.1813 348.689C69.2333 339.187 63.2624 329.798 57.3235 320.46C54.9259 316.69 52.5335 312.929 50.2816 309.171C42.3497 295.936 36 282.549 36 268C36 253.451 42.3497 240.064 50.2816 226.829C52.5335 223.071 54.9259 219.309 57.3235 215.54C63.2624 206.201 69.2333 196.813 73.1813 187.31L73.1824 187.308C77.3313 177.281 79.9151 166.028 82.4542 154.969C83.4214 150.756 84.3821 146.572 85.4204 142.495C89.2311 127.529 94.1059 113.822 103.975 103.935C113.843 94.0491 127.519 89.1841 142.47 85.3877C146.552 84.3512 150.742 83.3929 154.962 82.4278C166.009 79.9015 177.261 77.3284 187.306 73.1832L187.309 73.1821C196.865 69.223 206.286 63.2307 215.648 57.2758C219.392 54.8941 223.127 52.5185 226.858 50.2813C240.084 42.3493 253.451 36 268 36C282.549 36 295.945 42.3499 309.186 50.2818C312.957 52.5411 316.732 54.9418 320.515 57.3474C329.841 63.2783 339.213 69.2384 348.689 73.181L348.692 73.1824C358.726 77.3345 369.994 79.914 381.065 82.4486C385.271 83.4116 389.45 84.3681 393.521 85.4019C408.492 89.2034 422.197 94.0687 432.064 103.936C441.931 113.803 446.796 127.526 450.598 142.507C451.629 146.569 452.583 150.736 453.543 154.931C456.08 166.014 458.66 177.288 462.817 187.306C466.755 196.851 472.752 206.274 478.717 215.646C481.091 219.376 483.459 223.098 485.691 226.816C493.632 240.047 500 253.433 500 268C500 282.511 493.651 295.897 485.718 309.143C483.467 312.902 481.076 316.665 478.68 320.437C472.74 329.786 466.767 339.185 462.819 348.689Z"
        fill="${extraColor1}"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <rect
        x="107"
        y="199.398"
        width="322"
        height="3.20398"
        fill="${mainColor}"
      />
      <rect x="70" y="343" width="396" height="4" fill="${mainColor}" />
      <path
        d="M473.578 353.144L473.576 353.149C469.093 363.983 466.293 376.209 463.584 388.038C462.568 392.476 461.564 396.859 460.489 401.091C456.455 416.971 451.374 431.122 441.255 441.26C431.139 451.394 416.975 456.474 401.078 460.504C396.852 461.575 392.477 462.574 388.046 463.587C376.201 466.293 363.964 469.089 353.148 473.577C342.819 477.856 332.577 484.373 322.566 490.744C318.616 493.258 314.701 495.749 310.831 498.07C296.818 506.477 282.965 513 268 513C253.034 513 239.161 506.477 225.137 498.069C221.24 495.733 217.297 493.224 213.32 490.694C203.333 484.34 193.126 477.845 182.856 473.578L182.851 473.576C172.02 469.094 159.797 466.295 147.972 463.586C143.532 462.569 139.148 461.565 134.914 460.489C119.039 456.455 104.9 451.375 94.7828 441.257C84.6656 431.14 79.5749 416.972 75.5307 401.075C74.454 396.842 73.4485 392.46 72.4304 388.023C69.7135 376.184 66.9074 363.955 62.4222 353.145L62.4215 353.144C58.1543 342.873 51.6597 332.661 45.3051 322.668C42.775 318.69 40.2671 314.746 37.9308 310.848C29.5229 296.818 23 282.945 23 268C23 253.055 29.5229 239.182 37.9308 225.152C40.2671 221.253 42.775 217.31 45.3051 213.332C51.6597 203.339 58.1543 193.127 62.4215 182.856L62.4237 182.851C66.9029 172.026 69.7074 159.811 72.4214 147.99C73.4424 143.543 74.4507 139.152 75.5305 134.911C79.574 119.031 84.6647 104.879 94.7854 94.7401C104.903 84.6041 119.021 79.524 134.884 75.496C139.128 74.4181 143.526 73.4124 147.981 72.3936C159.79 69.6932 172.003 66.9003 182.847 62.4252L182.852 62.4231C193.182 58.1437 203.429 51.6261 213.446 45.255C217.397 42.7418 221.313 40.2514 225.183 37.9302C239.203 29.5221 253.056 23 268 23C282.946 23 296.829 29.5234 310.864 37.9312C314.776 40.2751 318.734 42.7918 322.726 45.3304C332.706 51.6767 342.901 58.1596 353.142 62.4207L353.149 62.4237C363.983 66.9065 376.213 69.7065 388.047 72.4156C392.488 73.4321 396.872 74.4359 401.106 75.5111C416.993 79.545 431.14 84.6257 441.257 94.7427C451.373 104.859 456.454 119.025 460.489 134.923C461.561 139.147 462.562 143.521 463.575 147.949C466.287 159.797 469.089 172.036 473.578 182.855C477.836 193.171 484.358 203.42 490.738 213.445C493.242 217.381 495.725 221.282 498.04 225.139C506.459 239.165 513 253.037 513 268C513 282.905 506.478 296.777 498.068 310.819C495.733 314.719 493.226 318.664 490.697 322.645C484.342 332.648 477.846 342.872 473.578 353.144Z"
        stroke="${extraColor1}"
        stroke-width="8"
      />
      <mask
        id="mask0_2407_493"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="69"
        y="347"
        width="397"
        height="156"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M465.991 347C465.455 348.15 464.945 349.302 464.466 350.457C460.382 360.325 457.861 371.333 455.34 382.341C450.876 401.831 446.413 421.319 433.278 434.478C420.15 447.631 400.636 452.089 381.145 456.543C370.122 459.062 359.106 461.579 349.257 465.666C339.873 469.553 330.693 475.395 321.398 481.311C304.547 492.035 287.317 503 267.8 503C248.254 503 230.97 492.002 214.093 481.262C204.823 475.364 195.676 469.543 186.343 465.666C176.477 461.583 165.472 459.062 154.469 456.542C134.979 452.077 115.496 447.614 102.36 434.478C89.2276 421.346 84.7479 401.825 80.2739 382.328C77.7457 371.31 75.2193 360.301 71.1346 350.457C70.6547 349.302 70.1452 348.15 69.6094 347H465.991Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_2407_493)">
        <path
          d="M507.25 504L507.25 312L29.25 312L29.25 504L507.25 504Z"
          fill="${mainColor}"
        />
        <rect
          x="261.5"
          y="312.25"
          width="192"
          height="74"
          transform="rotate(90 261.5 312.25)"
          fill="${subColor}"
        />
        <rect
          x="335.5"
          y="365.25"
          width="32"
          height="74"
          transform="rotate(90 335.5 365.25)"
          fill="#FEFEFE"
        />
        <rect
          x="335.5"
          y="419.25"
          width="32"
          height="74"
          transform="rotate(90 335.5 419.25)"
          fill="#FEFEFE"
        />
        <rect
          x="335.5"
          y="472.25"
          width="32"
          height="74"
          transform="rotate(90 335.5 472.25)"
          fill="#FEFEFE"
        />
        <rect
          x="188.5"
          y="312.25"
          width="192"
          height="98"
          transform="rotate(90 188.5 312.25)"
          fill="#002333"
        />
        <rect
          x="381.5"
          y="312.25"
          width="192"
          height="46"
          transform="rotate(90 381.5 312.25)"
          fill="#002333"
        />
        <path
          d="M186.5 408.25L89.2206 504.25L29 504.25L29 312.25L89.2206 312.25L186.5 408.25Z"
          fill="${extraColor1}"
        />
        <path d="M143 408L44 504L44 312L143 408Z" fill="${mainColor}" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M481.5 408.25C481.5 355.231 438.519 312.25 385.5 312.25C384.16 312.25 382.827 312.277 381.5 312.332L381.5 504.168C382.827 504.223 384.16 504.25 385.5 504.25C438.519 504.25 481.5 461.269 481.5 408.25Z"
          fill="${subColor}"
        />
      </g>
    </svg>
  `;
}
