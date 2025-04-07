export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundEmptyHatch({
  mainColor = "#96A6B4",
}: ISvgProps): string {
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
        viewBox="0 0 1152 815"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1152"
          height="814"
          transform="translate(0 0.210938)"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 799.14V796.796L747.754 0.378397H749.957L0 799.14ZM0 779.045V776.534L728.871 0.210938H731.074L0 779.045ZM0 758.951V756.606L709.831 0.378397H712.191L0 758.951ZM0 738.856V736.512L690.948 0.210938H693.151L0 738.856ZM0 718.761V716.417L672.223 0.378397H674.426L0 718.761ZM0 698.667V696.322L653.183 0.378397H655.543L0 698.667ZM0 678.572V676.06L634.3 0.210938H636.503L0 678.572ZM0 658.478V656.133L615.575 0.378397H617.778L0 658.478ZM0 638.383V636.039L596.692 0.210938H598.895L0 638.383ZM0 618.288V615.944L577.652 0.378397H579.855L0 618.288ZM0 598.194V595.849L558.927 0.210938H561.13L0 598.194ZM0 578.099V575.755L540.044 0.378397H542.247L0 578.099ZM0 558.004V555.66L521.004 0.378397H523.207L0 558.004ZM117.859 814.043H115.656L879.932 0.210938H882.135L117.859 814.043ZM98.9766 814.043H96.7737L861.05 0.210938H863.253L98.9766 814.043ZM80.094 814.043H77.891L842.324 0.210938H844.527L80.094 814.043ZM61.2113 814.043H59.0083L823.284 0.210938H825.487L61.2113 814.043ZM136.742 814.043H134.539L898.815 0.210938H901.018L136.742 814.043ZM155.625 814.043H153.422L917.698 0.210938H919.901L155.625 814.043ZM4.56331 814.043H2.36033L766.794 0.210938H768.997L4.56331 814.043ZM174.507 814.043H172.304L936.58 0.210938H938.783L174.507 814.043ZM0 537.91V535.398L502.279 0.210938H504.482L0 537.91ZM42.3286 814.211H39.9683L804.402 0.378397H806.605L42.3286 814.211ZM0 517.815V515.471L483.396 0.378397H485.599L0 517.815ZM23.446 814.043H21.0856L785.519 0.210938H787.722L23.446 814.043ZM0 497.72V495.376L464.514 0.210938H466.717L0 497.72ZM0 477.626V475.281L445.631 0.378397H447.834L0 477.626ZM0 457.531V455.187L426.591 0.378397H428.794L0 457.531ZM0 437.437V434.925L407.866 0.210938H410.069L0 437.437ZM0 417.342V414.998L388.983 0.378397H391.186L0 417.342ZM0 397.247V394.903L369.943 0.210938H372.146L0 397.247ZM0 377.153V374.808L351.218 0.378397H353.421L0 377.153ZM0 357.058V354.714L332.335 0.210938H334.538L0 357.058ZM0 336.963V334.619L313.295 0.378397H315.655L0 336.963ZM0 316.869V314.524L294.412 0.378397H296.615L0 316.869ZM0 296.774V294.262L275.687 0.210938H277.89L0 296.774ZM0 276.68V274.335L256.804 0.378397H259.007L0 276.68ZM0 256.585V254.241L237.764 0.210938H239.967L0 256.585ZM0 236.49V234.146L219.039 0.378397H221.242L0 236.49ZM0 216.396V214.051L200.156 0.378397H202.359L0 216.396ZM0 196.301V193.789L181.116 0.210938H183.319L0 196.301ZM0 176.206V173.862L162.391 0.378397H164.594L0 176.206ZM0 156.112V153.767L143.508 0.210938H145.711L0 156.112ZM0 136.017V133.673L124.468 0.378397H126.829L0 136.017ZM0 115.923V113.578L105.586 0.210938H107.789L0 115.923ZM0 95.8279V93.4835L86.8603 0.378397H89.0632L0 95.8279ZM0 75.7333V73.3889L67.8202 0.378397H70.1806L0 75.7333ZM0 55.6386V53.1268L48.9376 0.210938H51.1406L0 55.6386ZM0 35.544V33.1996L30.2123 0.378397H32.4152L0 35.544ZM11.3296 0.210938H13.5326L0 15.4494V13.105L11.3296 0.210938ZM401.099 814.043H398.896L1151.84 11.4304V13.7748L401.099 814.043ZM419.982 814.043H417.779L1152 31.6925V34.0369L419.982 814.043ZM438.865 814.043H436.662L1152 51.6197V53.9641L438.865 814.043ZM457.747 814.043H455.387L1151.84 71.8818V74.2262L457.747 814.043ZM476.63 814.043H474.427L1152 91.809V94.1533L476.63 814.043ZM495.513 814.043H493.31L1151.84 112.071V114.415L495.513 814.043ZM514.395 814.043H512.192L1152 131.998V134.343L514.395 814.043ZM533.278 814.043H531.075L1151.84 152.26V154.605L533.278 814.043ZM552.161 814.043H549.958L1152 172.187V174.532L552.161 814.043ZM571.043 814.043H568.84L1151.84 192.45V194.794L571.043 814.043ZM589.926 814.043H587.723L1152 212.377V214.721L589.926 814.043ZM608.809 814.043H606.606L1152 232.639V234.983L608.809 814.043ZM627.691 814.043H625.331L1151.84 252.566V254.91L627.691 814.043ZM646.574 814.043H644.371L1152 272.828V275.172L646.574 814.043ZM665.457 814.043H663.096L1151.84 292.755V295.1L665.457 814.043ZM684.339 814.043H682.136L1152 313.017V315.362L684.339 814.043ZM703.222 814.043H701.019L1151.84 332.944V335.289L703.222 814.043ZM722.105 814.043H719.902L1152 353.207V355.551L722.105 814.043ZM740.987 814.043H738.784L1151.84 373.134V375.478L740.987 814.043ZM759.87 814.043H757.667L1152 393.396V395.74L759.87 814.043ZM778.753 814.043H776.55L1151.84 413.323V415.835L778.753 814.043ZM797.635 814.043H795.432L1152 433.418V435.762L797.635 814.043ZM816.518 814.043H814.315L1152 453.512V456.024L816.518 814.043ZM835.401 814.043H833.04L1151.84 473.607V475.951L835.401 814.043ZM854.283 814.043H852.08L1152 493.702V496.213L854.283 814.043ZM873.166 814.043H870.963L1151.84 513.796V516.141L873.166 814.043ZM287.803 814.043H285.6L1049.88 0.210938H1052.08L287.803 814.043ZM363.334 814.043H361.131L1125.56 0.210938H1127.77L363.334 814.043ZM344.451 814.043H342.248L1106.52 0.210938H1108.73L344.451 814.043ZM325.569 814.043H323.366L1087.64 0.210938H1089.84L325.569 814.043ZM892.049 814.043H889.846L1152 533.891V536.403L892.049 814.043ZM382.217 814.043H380.014L1144.29 0.210938H1146.49L382.217 814.043ZM306.686 814.043H304.483L1068.76 0.210938H1070.96L306.686 814.043ZM910.931 814.043H908.728L1152 553.985V556.33L910.931 814.043ZM231.155 814.043H228.952L993.228 0.210938H995.431L231.155 814.043ZM212.273 814.043H210.07L974.346 0.210938H976.549L212.273 814.043ZM929.814 814.043H927.611L1152 574.248V576.592L929.814 814.043ZM250.038 814.043H247.835L1012.11 0.210938H1014.31L250.038 814.043ZM193.39 814.043H191.187L955.463 0.210938H957.666L193.39 814.043ZM268.921 814.043H266.718L1030.99 0.210938H1033.35L268.921 814.043ZM948.697 814.043H946.336L1151.84 594.175V596.519L948.697 814.043ZM967.579 814.043H965.376L1152 614.437V616.781L967.579 814.043ZM986.462 814.043H984.259L1151.84 634.364V636.708L986.462 814.043ZM1005.34 814.043H1003.14L1152 654.626V656.97L1005.34 814.043ZM1024.23 814.043H1022.02L1151.84 674.553V676.898L1024.23 814.043ZM1043.11 814.043H1040.91L1152 694.815V697.16L1043.11 814.043ZM1061.99 814.043H1059.79L1151.84 714.742V717.087L1061.99 814.043ZM1080.88 814.043H1078.67L1152 735.005V737.349L1080.88 814.043ZM1099.76 814.043H1097.56L1152 754.932V757.276L1099.76 814.043ZM1118.64 814.043H1116.28L1151.84 775.194V777.538L1118.64 814.043ZM1137.52 814.043H1135.32L1152 795.121V797.465L1137.52 814.043Z"
          fill="#FCFCFC"
        />
      </svg>
    </div>
  `;
} 