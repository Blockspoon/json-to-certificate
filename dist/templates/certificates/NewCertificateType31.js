"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType31 = createNewCertificateType31;
function createNewCertificateType31({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1152 815"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2086_1137)">
          <rect
            width="1152"
            height="814"
            transform="translate(0 0.499512)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 799.429V797.084L747.754 0.666971H749.957L0 799.429ZM0 779.334V776.822L728.871 0.499512H731.074L0 779.334ZM0 759.239V756.895L709.831 0.666971H712.191L0 759.239ZM0 739.145V736.8L690.948 0.499512H693.151L0 739.145ZM0 719.05V716.706L672.223 0.666971H674.426L0 719.05ZM0 698.955V696.611L653.183 0.666971H655.543L0 698.955ZM0 678.861V676.349L634.3 0.499512H636.503L0 678.861ZM0 658.766V656.422L615.575 0.666971H617.778L0 658.766ZM0 638.671V636.327L596.692 0.499512H598.895L0 638.671ZM0 618.577V616.232L577.652 0.666971H579.855L0 618.577ZM0 598.482V596.138L558.927 0.499512H561.13L0 598.482ZM0 578.388V576.043L540.044 0.666971H542.247L0 578.388ZM0 558.293V555.949L521.004 0.666971H523.207L0 558.293ZM117.859 814.332H115.656L879.932 0.499512H882.135L117.859 814.332ZM98.9766 814.332H96.7737L861.05 0.499512H863.253L98.9766 814.332ZM80.094 814.332H77.891L842.324 0.499512H844.527L80.094 814.332ZM61.2113 814.332H59.0083L823.284 0.499512H825.487L61.2113 814.332ZM136.742 814.332H134.539L898.815 0.499512H901.018L136.742 814.332ZM155.625 814.332H153.422L917.698 0.499512H919.901L155.625 814.332ZM4.56331 814.332H2.36033L766.794 0.499512H768.997L4.56331 814.332ZM174.507 814.332H172.304L936.58 0.499512H938.783L174.507 814.332ZM0 538.198V535.686L502.279 0.499512H504.482L0 538.198ZM42.3286 814.5H39.9683L804.402 0.666971H806.605L42.3286 814.5ZM0 518.104V515.759L483.396 0.666971H485.599L0 518.104ZM23.446 814.332H21.0856L785.519 0.499512H787.722L23.446 814.332ZM0 498.009V495.665L464.514 0.499512H466.717L0 498.009ZM0 477.914V475.57L445.631 0.666971H447.834L0 477.914ZM0 457.82V455.475L426.591 0.666971H428.794L0 457.82ZM0 437.725V435.213L407.866 0.499512H410.069L0 437.725ZM0 417.631V415.286L388.983 0.666971H391.186L0 417.631ZM0 397.536V395.192L369.943 0.499512H372.146L0 397.536ZM0 377.441V375.097L351.218 0.666971H353.421L0 377.441ZM0 357.347V355.002L332.335 0.499512H334.538L0 357.347ZM0 337.252V334.908L313.295 0.666971H315.655L0 337.252ZM0 317.157V314.813L294.412 0.666971H296.615L0 317.157ZM0 297.063V294.551L275.687 0.499512H277.89L0 297.063ZM0 276.968V274.624L256.804 0.666971H259.007L0 276.968ZM0 256.873V254.529L237.764 0.499512H239.967L0 256.873ZM0 236.779V234.434L219.039 0.666971H221.242L0 236.779ZM0 216.684V214.34L200.156 0.666971H202.359L0 216.684ZM0 196.59V194.078L181.116 0.499512H183.319L0 196.59ZM0 176.495V174.151L162.391 0.666971H164.594L0 176.495ZM0 156.4V154.056L143.508 0.499512H145.711L0 156.4ZM0 136.306V133.961L124.468 0.666971H126.829L0 136.306ZM0 116.211V113.867L105.586 0.499512H107.789L0 116.211ZM0 96.1165V93.7721L86.8603 0.666971H89.0632L0 96.1165ZM0 76.0218V73.6775L67.8202 0.666971H70.1806L0 76.0218ZM0 55.9272V53.4154L48.9376 0.499512H51.1406L0 55.9272ZM0 35.8326V33.4882L30.2123 0.666971H32.4152L0 35.8326ZM11.3296 0.499512H13.5326L0 15.7379V13.3936L11.3296 0.499512ZM401.099 814.332H398.896L1151.84 11.719V14.0634L401.099 814.332ZM419.982 814.332H417.779L1152 31.9811V34.3255L419.982 814.332ZM438.865 814.332H436.662L1152 51.9083V54.2526L438.865 814.332ZM457.747 814.332H455.387L1151.84 72.1704V74.5147L457.747 814.332ZM476.63 814.332H474.427L1152 92.0975V94.4419L476.63 814.332ZM495.513 814.332H493.31L1151.84 112.36V114.704L495.513 814.332ZM514.395 814.332H512.192L1152 132.287V134.631L514.395 814.332ZM533.278 814.332H531.075L1151.84 152.549V154.893L533.278 814.332ZM552.161 814.332H549.958L1152 172.476V174.82L552.161 814.332ZM571.043 814.332H568.84L1151.84 192.738V195.083L571.043 814.332ZM589.926 814.332H587.723L1152 212.665V215.01L589.926 814.332ZM608.809 814.332H606.606L1152 232.927V235.272L608.809 814.332ZM627.691 814.332H625.331L1151.84 252.855V255.199L627.691 814.332ZM646.574 814.332H644.371L1152 273.117V275.461L646.574 814.332ZM665.457 814.332H663.096L1151.84 293.044V295.388L665.457 814.332ZM684.339 814.332H682.136L1152 313.306V315.65L684.339 814.332ZM703.222 814.332H701.019L1151.84 333.233V335.577L703.222 814.332ZM722.105 814.332H719.902L1152 353.495V355.84L722.105 814.332ZM740.987 814.332H738.784L1151.84 373.422V375.767L740.987 814.332ZM759.87 814.332H757.667L1152 393.684V396.029L759.87 814.332ZM778.753 814.332H776.55L1151.84 413.612V416.123L778.753 814.332ZM797.635 814.332H795.432L1152 433.706V436.051L797.635 814.332ZM816.518 814.332H814.315L1152 453.801V456.313L816.518 814.332ZM835.401 814.332H833.04L1151.84 473.896V476.24L835.401 814.332ZM854.283 814.332H852.08L1152 493.99V496.502L854.283 814.332ZM873.166 814.332H870.963L1151.84 514.085V516.429L873.166 814.332ZM287.803 814.332H285.6L1049.88 0.499512H1052.08L287.803 814.332ZM363.334 814.332H361.131L1125.56 0.499512H1127.77L363.334 814.332ZM344.451 814.332H342.248L1106.52 0.499512H1108.73L344.451 814.332ZM325.569 814.332H323.366L1087.64 0.499512H1089.84L325.569 814.332ZM892.049 814.332H889.846L1152 534.179V536.691L892.049 814.332ZM382.217 814.332H380.014L1144.29 0.499512H1146.49L382.217 814.332ZM306.686 814.332H304.483L1068.76 0.499512H1070.96L306.686 814.332ZM910.931 814.332H908.728L1152 554.274V556.618L910.931 814.332ZM231.155 814.332H228.952L993.228 0.499512H995.431L231.155 814.332ZM212.273 814.332H210.07L974.346 0.499512H976.549L212.273 814.332ZM929.814 814.332H927.611L1152 574.536V576.88L929.814 814.332ZM250.038 814.332H247.835L1012.11 0.499512H1014.31L250.038 814.332ZM193.39 814.332H191.187L955.463 0.499512H957.666L193.39 814.332ZM268.921 814.332H266.718L1030.99 0.499512H1033.35L268.921 814.332ZM948.697 814.332H946.336L1151.84 594.463V596.808L948.697 814.332ZM967.579 814.332H965.376L1152 614.725V617.07L967.579 814.332ZM986.462 814.332H984.259L1151.84 634.653V636.997L986.462 814.332ZM1005.34 814.332H1003.14L1152 654.915V657.259L1005.34 814.332ZM1024.23 814.332H1022.02L1151.84 674.842V677.186L1024.23 814.332ZM1043.11 814.332H1040.91L1152 695.104V697.448L1043.11 814.332ZM1061.99 814.332H1059.79L1151.84 715.031V717.375L1061.99 814.332ZM1080.88 814.332H1078.67L1152 735.293V737.638L1080.88 814.332ZM1099.76 814.332H1097.56L1152 755.22V757.565L1099.76 814.332ZM1118.64 814.332H1116.28L1151.84 775.482V777.827L1118.64 814.332ZM1137.52 814.332H1135.32L1152 795.41V797.754L1137.52 814.332Z"
            fill="#FCFCFC"
          />
          <rect
            x="40"
            y="41.4995"
            width="1071"
            height="732"
            stroke="black"
            strokeWidth="2"
          />

          <rect x="703" y="620.5" width="80" height="80" />

          <rect x="812" y="620.5" width="80" height="80" />

          <rect x="921" y="620.5" width="80" height="80" />

          <rect
            x="1090"
            y="42.4995"
            width="20"
            height="200"
            fill="${mainColor}"
          />
          <rect
            x="225"
            y="42.4995"
            width="16"
            height="109"
            transform="rotate(90 225 42.4995)"
            fill="#31384B"
          />
          <rect
            x="967"
            y="42.4995"
            width="16"
            height="109"
            transform="rotate(90 967 42.4995)"
            fill="${mainColor}"
          />
          <rect
            x="61"
            y="451.5"
            width="13"
            height="124"
            fill="${mainColor}"
          />
          <rect
            x="411"
            y="764.5"
            width="8.00001"
            height="124"
            transform="rotate(90 411 764.5)"
            fill="${mainColor}"
          />
          <rect
            x="959"
            y="764.5"
            width="8.00001"
            height="192"
            transform="rotate(90 959 764.5)"
            fill="#31384B"
          />
          <rect
            x="1078"
            y="745.5"
            width="8.00001"
            height="131"
            transform="rotate(90 1078 745.5)"
            fill="#31384B"
          />
          <rect
            x="1110"
            y="753.5"
            width="19"
            height="94"
            transform="rotate(90 1110 753.5)"
            fill="${mainColor}"
          />
          <rect x="56" y="74.4995" width="32" height="88" fill="#D0D0D2" />
          <rect x="1078" y="665.5" width="32" height="88" fill="#D0D0D2" />
          <rect x="41" y="541.5" width="20" height="231" fill="#31384B" />
          <rect x="41" y="42.4995" width="15" height="82" fill="#31384B" />
          <rect x="1078" y="100.5" width="12" height="159" fill="#D0D0D2" />
          <rect x="1090" y="242.5" width="12" height="159" fill="#31384B" />
          <rect x="943" y="58.4995" width="12" height="54" fill="#31384B" />
          <rect x="955" y="85.4995" width="12" height="78" fill="#D0D0D2" />
          <rect
            x="156"
            y="66.4995"
            width="60"
            height="60"
            transform="rotate(90 156 66.4995)"
            fill="url(#pattern0_2086_1137)"
          />

          <rect
            x="525.6"
            y="609.1"
            width="100.8"
            height="100.8"
            rx="4.8"
            fill="white"
          />
          <mask
            id="mask0_2086_1137"
            maskUnits="userSpaceOnUse"
            x="525"
            y="609"
            width="102"
            height="101"
          >
            <rect
              x="525.6"
              y="609.1"
              width="100.8"
              height="100.8"
              rx="4.8"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2086_1137)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M496.199 736.345V735.885L599.794 579.733H600.099L496.199 736.345ZM496.199 732.405V731.913L597.178 579.7H597.483L496.199 732.405ZM496.199 728.465V728.005L594.54 579.733H594.867L496.199 728.465ZM496.199 724.525V724.066L591.924 579.7H592.23L496.199 724.525ZM496.199 720.585V720.126L589.33 579.733H589.635L496.199 720.585ZM496.199 716.645V716.186L586.692 579.733H587.019L496.199 716.645ZM496.199 712.705V712.213L584.076 579.7H584.381L496.199 712.705ZM496.199 708.766V708.306L581.482 579.733H581.787L496.199 708.766ZM496.199 704.826V704.366L578.866 579.7H579.171L496.199 704.826ZM496.199 700.886V700.426L576.228 579.733H576.533L496.199 700.886ZM496.199 696.946V696.486L573.634 579.7H573.939L496.199 696.946ZM496.199 693.006V692.546L571.018 579.733H571.323L496.199 693.006ZM496.199 689.066V688.606L568.38 579.733H568.685L496.199 689.066ZM512.528 739.267H512.222L618.106 579.7H618.412L512.528 739.267ZM509.912 739.267H509.606L615.49 579.7H615.796L509.912 739.267ZM507.296 739.267H506.99L612.896 579.7H613.201L507.296 739.267ZM504.68 739.267H504.374L610.258 579.7H610.564L504.68 739.267ZM515.144 739.267H514.838L620.723 579.7H621.028L515.144 739.267ZM517.76 739.267H517.455L623.339 579.7H623.644L517.76 739.267ZM496.831 739.267H496.526L602.432 579.7H602.737L496.831 739.267ZM520.376 739.267H520.071L625.955 579.7H626.26L520.376 739.267ZM496.199 685.126V684.633L565.786 579.7H566.091L496.199 685.126ZM502.064 739.3H501.736L607.642 579.733H607.948L502.064 739.3ZM496.199 681.186V680.726L563.17 579.733H563.475L496.199 681.186ZM499.447 739.267H499.12L605.026 579.7H605.332L499.447 739.267ZM496.199 677.246V676.786L560.554 579.7H560.859L496.199 677.246ZM496.199 673.306V672.846L557.938 579.733H558.243L496.199 673.306ZM496.199 669.366V668.907L555.3 579.733H555.605L496.199 669.366ZM496.199 665.426V664.934L552.706 579.7H553.011L496.199 665.426ZM496.199 661.486V661.027L550.09 579.733H550.395L496.199 661.486ZM496.199 657.546V657.087L547.452 579.7H547.757L496.199 657.546ZM496.199 653.606V653.147L544.857 579.733H545.163L496.199 653.606ZM496.199 649.667V649.207L542.241 579.7H542.547L496.199 649.667ZM496.199 645.727V645.267L539.604 579.733H539.931L496.199 645.727ZM496.199 641.787V641.327L536.988 579.733H537.293L496.199 641.787ZM496.199 637.847V637.354L534.393 579.7H534.699L496.199 637.847ZM496.199 633.907V633.447L531.777 579.733H532.083L496.199 633.907ZM496.199 629.967V629.507L529.139 579.7H529.445L496.199 629.967ZM496.199 626.027V625.567L526.545 579.733H526.85L496.199 626.027ZM496.199 622.087V621.627L523.929 579.733H524.234L496.199 622.087ZM496.199 618.147V617.655L521.291 579.7H521.597L496.199 618.147ZM496.199 614.207V613.748L518.697 579.733H519.002L496.199 614.207ZM496.199 610.267V609.808L516.081 579.7H516.386L496.199 610.267ZM496.199 606.327V605.868L513.443 579.733H513.77L496.199 606.327ZM496.199 602.387V601.928L510.827 579.7H511.132L496.199 602.387ZM496.199 598.447V597.988L508.233 579.733H508.538L496.199 598.447ZM496.199 594.508V594.048L505.595 579.733H505.922L496.199 594.508ZM496.199 590.568V590.075L502.979 579.7H503.284L496.199 590.568ZM496.199 586.628V586.168L500.385 579.733H500.69L496.199 586.628ZM497.769 579.7H498.074L496.199 582.688V582.228L497.769 579.7ZM551.768 739.267H551.463L655.777 581.9V582.359L551.768 739.267ZM554.384 739.267H554.079L655.799 585.873V586.332L554.384 739.267ZM557 739.267H556.695L655.799 589.78V590.239L557 739.267ZM559.616 739.267H559.289L655.777 593.752V594.212L559.616 739.267ZM562.232 739.267H561.927L655.799 597.659V598.119L562.232 739.267ZM564.848 739.267H564.543L655.777 601.632V602.092L564.848 739.267ZM567.464 739.267H567.159L655.799 605.539V605.999L567.464 739.267ZM570.08 739.267H569.775L655.777 609.512V609.972L570.08 739.267ZM572.696 739.267H572.391L655.799 613.419V613.879L572.696 739.267ZM575.313 739.267H575.007L655.777 617.392V617.852L575.313 739.267ZM577.929 739.267H577.623L655.799 621.299V621.759L577.929 739.267ZM580.545 739.267H580.239L655.799 625.272V625.731L580.545 739.267ZM583.161 739.267H582.834L655.777 629.179V629.639L583.161 739.267ZM585.777 739.267H585.471L655.799 633.152V633.611L585.777 739.267ZM588.393 739.267H588.066L655.777 637.059V637.518L588.393 739.267ZM591.009 739.267H590.704L655.799 641.032V641.491L591.009 739.267ZM593.625 739.267H593.32L655.777 644.939V645.398L593.625 739.267ZM596.241 739.267H595.936L655.799 648.911V649.371L596.241 739.267ZM598.857 739.267H598.552L655.777 652.818V653.278L598.857 739.267ZM601.473 739.267H601.168L655.799 656.791V657.251L601.473 739.267ZM604.089 739.267H603.784L655.777 660.698V661.191L604.089 739.267ZM606.705 739.267H606.4L655.799 664.638V665.098L606.705 739.267ZM609.321 739.267H609.016L655.799 668.578V669.071L609.321 739.267ZM611.937 739.267H611.61L655.777 672.518V672.978L611.937 739.267ZM614.553 739.267H614.248L655.799 676.458V676.951L614.553 739.267ZM617.169 739.267H616.864L655.777 680.398V680.858L617.169 739.267ZM536.072 739.267H535.767L641.651 579.7H641.956L536.072 739.267ZM546.536 739.267H546.231L652.137 579.7H652.442L546.536 739.267ZM543.92 739.267H543.615L649.499 579.7H649.804L543.92 739.267ZM541.304 739.267H540.999L646.883 579.7H647.188L541.304 739.267ZM619.785 739.267H619.48L655.799 684.338V684.83L619.785 739.267ZM549.152 739.267H548.847L654.731 579.7H655.036L549.152 739.267ZM538.688 739.267H538.383L644.267 579.7H644.572L538.688 739.267ZM622.401 739.267H622.096L655.799 688.278V688.738L622.401 739.267ZM528.224 739.267H527.919L633.803 579.7H634.108L528.224 739.267ZM525.608 739.267H525.303L631.187 579.7H631.492L525.608 739.267ZM625.017 739.267H624.712L655.799 692.251V692.71L625.017 739.267ZM530.84 739.267H530.535L636.419 579.7H636.724L530.84 739.267ZM522.992 739.267H522.687L628.571 579.7H628.876L522.992 739.267ZM533.456 739.267H533.151L639.035 579.7H639.362L533.456 739.267ZM627.633 739.267H627.306L655.777 696.158V696.617L627.633 739.267ZM630.249 739.267H629.944L655.799 700.13V700.59L630.249 739.267ZM632.865 739.267H632.56L655.777 704.038V704.497L632.865 739.267ZM635.481 739.267H635.176L655.799 708.01V708.47L635.481 739.267ZM638.097 739.267H637.792L655.777 711.917V712.377L638.097 739.267ZM640.713 739.267H640.408L655.799 715.89V716.35L640.713 739.267ZM643.329 739.267H643.024L655.777 719.797V720.257L643.329 739.267ZM645.945 739.267H645.64L655.799 723.77V724.23L645.945 739.267ZM648.562 739.267H648.256L655.799 727.677V728.137L648.562 739.267ZM651.178 739.267H650.851L655.777 731.65V732.11L651.178 739.267ZM653.794 739.267H653.488L655.799 735.557V736.017L653.794 739.267Z"
              fill="#FCFCFC"
            />
          </g>
          <mask
            id="mask1_2086_1137"
            maskUnits="userSpaceOnUse"
            x="527"
            y="610"
            width="98"
            height="99"
          >
            <rect
              x="527.199"
              y="610.699"
              width="97.6"
              height="97.6"
              rx="4"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_2086_1137)"></g>

          <rect
            x="568"
            y="679.899"
            width="16"
            height="16"
            fill="url(#pattern1_2086_1137)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_2086_1137"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_2086_1137"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_2086_1137">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0 0.499512)"
            />
          </clipPath>
          <image id="image0_2086_1137" width="357" height="357" />
          <image id="image1_2086_1137" width="360" height="360" />
        </defs>
      </svg>
  `;
}
