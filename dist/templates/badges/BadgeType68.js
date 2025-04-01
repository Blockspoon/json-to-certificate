"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType68 = createBadgeType68;
function createBadgeType68({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
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
      <rect width="536" height="536" rx="28" fill="${subColor}" />
      <rect
        x="16"
        y="16"
        width="504"
        height="504"
        rx="24"
        fill="${extraColor2}"
      />
      <mask
        id="mask0_2407_499"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="16"
        y="16"
        width="504"
        height="504"
      >
        <rect
          x="16"
          y="16"
          width="504"
          height="504"
          rx="24"
          fill="${extraColor2}"
        />
      </mask>
      <g mask="url(#mask0_2407_499)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-131 652.225V649.927L386.975 -130.836H388.501L-131 652.225ZM-131 632.526V630.063L373.895 -131H375.421L-131 632.526ZM-131 612.826V610.528L360.706 -130.836H362.341L-131 612.826ZM-131 593.126V590.828L347.626 -131H349.152L-131 593.126ZM-131 573.427V571.128L334.654 -130.836H336.18L-131 573.427ZM-131 553.727V551.429L321.465 -130.836H323.1L-131 553.727ZM-131 534.027V531.565L308.385 -131H309.911L-131 534.027ZM-131 514.328V512.029L295.414 -130.836H296.94L-131 514.328ZM-131 494.628V492.33L282.334 -131H283.86L-131 494.628ZM-131 474.928V472.63L269.145 -130.836H270.671L-131 474.928ZM-131 455.229V452.93L256.173 -131H257.699L-131 455.229ZM-131 435.529V433.231L243.093 -130.836H244.619L-131 435.529ZM-131 415.829V413.531L229.904 -130.836H231.43L-131 415.829ZM-49.3579 666.836H-50.8839L478.536 -131H480.062L-49.3579 666.836ZM-62.4381 666.836H-63.9641L465.456 -131H466.982L-62.4381 666.836ZM-75.5182 666.836H-77.0443L452.485 -131H454.011L-75.5182 666.836ZM-88.5984 666.836H-90.1244L439.296 -131H440.822L-88.5984 666.836ZM-36.2777 666.836H-37.8037L491.617 -131H493.143L-36.2777 666.836ZM-23.1975 666.836H-24.7235L504.697 -131H506.223L-23.1975 666.836ZM-127.839 666.836H-129.365L400.164 -131H401.69L-127.839 666.836ZM-10.1173 666.836H-11.6434L517.777 -131H519.303L-10.1173 666.836ZM-131 396.13V393.667L216.933 -131H218.459L-131 396.13ZM-101.679 667H-103.314L426.216 -130.836H427.742L-101.679 667ZM-131 376.43V374.132L203.853 -130.836H205.379L-131 376.43ZM-114.759 666.836H-116.394L413.135 -131H414.661L-114.759 666.836ZM-131 356.73V354.432L190.772 -131H192.298L-131 356.73ZM-131 337.031V334.733L177.692 -130.836H179.218L-131 337.031ZM-131 317.331V315.033L164.503 -130.836H166.029L-131 317.331ZM-131 297.632V295.169L151.532 -131H153.058L-131 297.632ZM-131 277.932V275.634L138.452 -130.836H139.978L-131 277.932ZM-131 258.232V255.934L125.263 -131H126.789L-131 258.232ZM-131 238.533V236.234L112.291 -130.836H113.817L-131 238.533ZM-131 218.833V216.535L99.2112 -131H100.737L-131 218.833ZM-131 199.133V196.835L86.022 -130.836H87.657L-131 199.133ZM-131 179.434V177.135L72.9418 -130.836H74.4678L-131 179.434ZM-131 159.734V157.272L59.9706 -131H61.4967L-131 159.734ZM-131 140.034V137.736L46.8905 -130.836H48.4165L-131 140.034ZM-131 120.335V118.036L33.7013 -131H35.2273L-131 120.335ZM-131 100.635V98.3367L20.7301 -130.836H22.2561L-131 100.635ZM-131 80.9354V78.6371L7.64992 -130.836H9.17593L-131 80.9354ZM-131 61.2357V58.7733L-5.53928 -131H-4.01326L-131 61.2357ZM-131 41.5361V39.2378L-18.5104 -130.836H-16.9844L-131 41.5361ZM-131 21.8364V19.5381L-31.5906 -131H-30.0646L-131 21.8364ZM-131 2.13678V-0.161499L-44.7798 -130.836H-43.1448L-131 2.13678ZM-131 -17.5628V-19.8612L-57.86 -131H-56.334L-131 -17.5628ZM-131 -37.2625V-39.5608L-70.8312 -130.836H-69.3051L-131 -37.2625ZM-131 -56.9622V-59.2604L-84.0204 -130.836H-82.3853L-131 -56.9622ZM-131 -76.6618V-79.1243L-97.1005 -131H-95.5745L-131 -76.6618ZM-131 -96.3614V-98.6597L-110.072 -130.836H-108.546L-131 -96.3614ZM-123.152 -131H-121.626L-131 -116.061V-118.359L-123.152 -131ZM146.845 666.836H145.319L666.891 -120.001V-117.703L146.845 666.836ZM159.925 666.836H158.399L667 -100.137V-97.8389L159.925 666.836ZM173.005 666.836H171.479L667 -80.6017V-78.3034L173.005 666.836ZM186.085 666.836H184.45L666.891 -60.7379V-58.4396L186.085 666.836ZM199.166 666.836H197.64L667 -41.2024V-38.9041L199.166 666.836ZM212.246 666.836H210.72L666.891 -21.3386V-19.0403L212.246 666.836ZM225.326 666.836H223.8L667 -1.80313V0.495148L225.326 666.836ZM238.406 666.836H236.88L666.891 18.0607V20.359L238.406 666.836ZM251.486 666.836H249.96L667 37.5962V39.8944L251.486 666.836ZM264.566 666.836H263.04L666.891 57.46V59.7583L264.566 666.836ZM277.647 666.836H276.121L667 76.9955V79.2937L277.647 666.836ZM290.727 666.836H289.201L667 96.8593V99.1576L290.727 666.836ZM303.807 666.836H302.172L666.891 116.395V118.693L303.807 666.836ZM316.887 666.836H315.361L667 136.259V138.557L316.887 666.836ZM329.967 666.836H328.332L666.891 155.794V158.092L329.967 666.836ZM343.048 666.836H341.522L667 175.658V177.956L343.048 666.836ZM356.128 666.836H354.602L667 195.193V197.492L356.128 666.836ZM369.208 666.836H367.682L667 215.057V217.355L369.208 666.836ZM382.288 666.836H380.762L666.891 234.593V236.891L382.288 666.836ZM395.368 666.836H393.842L667 254.456V256.755L395.368 666.836ZM408.448 666.836H406.922L666.891 273.992V276.454L408.448 666.836ZM421.529 666.836H420.003L667 293.692V295.99L421.529 666.836ZM434.609 666.836H433.083L667 313.391V315.854L434.609 666.836ZM447.689 666.836H446.054L666.891 333.091V335.389L447.689 666.836ZM460.769 666.836H459.243L667 352.791V355.253L460.769 666.836ZM473.849 666.836H472.323L666.891 372.49V374.789L473.849 666.836ZM68.3638 666.836H66.8377L596.258 -131H597.784L68.3638 666.836ZM120.684 666.836H119.158L648.688 -131H650.214L120.684 666.836ZM107.604 666.836H106.078L635.498 -131H637.025L107.604 666.836ZM94.5241 666.836H92.9981L622.418 -131H623.944L94.5241 666.836ZM486.929 666.836H485.404L667 392.19V394.652L486.929 666.836ZM133.765 666.836H132.239L661.659 -131H663.185L133.765 666.836ZM81.4439 666.836H79.9179L609.338 -131H610.864L81.4439 666.836ZM500.01 666.836H498.484L667 411.89V414.188L500.01 666.836ZM29.1232 666.836H27.5972L557.017 -131H558.543L29.1232 666.836ZM16.043 666.836H14.517L543.937 -131H545.463L16.043 666.836ZM513.09 666.836H511.564L667 431.753V434.052L513.09 666.836ZM42.2034 666.836H40.6774L570.098 -131H571.624L42.2034 666.836ZM2.96284 666.836H1.43683L530.857 -131H532.383L2.96284 666.836ZM55.2836 666.836H53.7576L583.178 -131H584.813L55.2836 666.836ZM526.17 666.836H524.535L666.891 451.289V453.587L526.17 666.836ZM539.25 666.836H537.724L667 471.153V473.451L539.25 666.836ZM552.33 666.836H550.804L666.891 490.688V492.986L552.33 666.836ZM565.411 666.836H563.885L667 510.552V512.85L565.411 666.836ZM578.491 666.836H576.965L666.891 530.087V532.386L578.491 666.836ZM591.571 666.836H590.045L667 549.951V552.25L591.571 666.836ZM604.651 666.836H603.125L666.891 569.487V571.785L604.651 666.836ZM617.731 666.836H616.205L667 589.351V591.649L617.731 666.836ZM630.811 666.836H629.286L667 608.886V611.184L630.811 666.836ZM643.892 666.836H642.257L666.891 628.75V631.048L643.892 666.836ZM656.972 666.836H655.446L667 648.285V650.584L656.972 666.836Z"
          fill="#FCFCFC"
        />
      </g>
      <mask
        id="mask1_2407_499"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="24"
        y="24"
        width="488"
        height="488"
      >
        <rect
          x="24"
          y="24"
          width="488"
          height="488"
          rx="20"
          fill="${extraColor2}"
        />
      </mask>
      <g mask="url(#mask1_2407_499)">
        <rect
          x="488.633"
          y="69.5078"
          width="19.3651"
          height="122"
          fill="${mainColor}"
        />
        <rect
          x="477.016"
          y="105.333"
          width="11.619"
          height="95.8571"
          fill="${extraColor1}"
        />
        <rect
          x="488.633"
          y="191.508"
          width="11.619"
          height="96.8254"
          fill="${subColor}"
        />
        <rect
          x="481.016"
          y="482.857"
          width="7.74604"
          height="126.841"
          transform="rotate(90 481.016 482.857)"
          fill="${subColor}"
        />
        <rect
          x="512"
          y="490.604"
          width="18.3968"
          height="91.0159"
          transform="rotate(90 512 490.604)"
          fill="${mainColor}"
        />
        <rect
          x="481.016"
          y="405.396"
          width="30.9841"
          height="85.2064"
          fill="${extraColor1}"
        />
        <rect
          x="203.16"
          y="24"
          width="15.4921"
          height="105.54"
          transform="rotate(90 203.16 24)"
          fill="${subColor}"
        />
        <rect
          x="39.5234"
          y="54.9844"
          width="30.9841"
          height="85.2064"
          fill="${extraColor1}"
        />
        <rect
          x="25"
          y="24"
          width="14.5238"
          height="79.3968"
          fill="${subColor}"
        />
        <rect x="46" y="298" width="12" height="83" fill="${mainColor}" />
        <rect
          x="103.398"
          y="501"
          width="7.74603"
          height="43.5714"
          transform="rotate(90 103.398 501)"
          fill="${mainColor}"
        />
        <rect x="26" y="358" width="20" height="154" fill="${subColor}" />
      </g>
      <rect
        x="26"
        y="26"
        width="484"
        height="484"
        rx="18"
        stroke="${subColor}"
        stroke-width="4"
      />
      <rect x="204" y="166" width="127" height="2" fill="black" />
    </svg>
  `;
}
