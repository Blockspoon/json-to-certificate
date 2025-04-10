"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType30 = createNewCertificateType30;
function createNewCertificateType30({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
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
        <g clipPath="url(#clip0_2086_1019)">
          <rect
            width="1152"
            height="814"
            transform="translate(0 0.499512)"
            fill="white"
          />
          <rect
            width="1152"
            height="814"
            transform="translate(0 0.499512)"
            fill="${mainColor}"
            fillOpacity="0.05"
          />
          <circle cx="233" cy="222.5" r="297" fill="url(#${paintId0})" />
          <ellipse
            cx="959.5"
            cy="640.5"
            rx="374.5"
            ry="297"
            fill="url(#${paintId1})"
          />
          <rect x="24.5" y="24.9995" width="1103" height="765" stroke="black" />

          <mask id="path-17-inside-1_2086_1019" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1162 148.755L1157.69 143.648C1146.3 145.248 1135.1 147.448 1124.14 150.258L1103.68 214.518L1043.83 183.568C1033.99 189.398 1024.49 195.748 1015.39 202.598L1021.07 269.718L953.95 264.038C947.1 273.138 940.75 282.638 934.92 292.478L965.87 352.328L901.61 372.788C898.8 383.748 896.6 394.948 895 406.338L946.49 449.788L895 493.228C896.6 504.618 898.8 515.818 901.61 526.778L965.87 547.238L934.92 607.088C940.75 616.928 947.1 626.428 953.95 635.528L1021.07 629.848L1015.39 696.968C1024.49 703.818 1033.99 710.168 1043.83 715.998L1103.68 685.048L1124.14 749.308C1135.1 752.118 1146.3 754.318 1157.69 755.918L1162 750.81V148.755Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1162 148.755L1157.69 143.648C1146.3 145.248 1135.1 147.448 1124.14 150.258L1103.68 214.518L1043.83 183.568C1033.99 189.398 1024.49 195.748 1015.39 202.598L1021.07 269.718L953.95 264.038C947.1 273.138 940.75 282.638 934.92 292.478L965.87 352.328L901.61 372.788C898.8 383.748 896.6 394.948 895 406.338L946.49 449.788L895 493.228C896.6 504.618 898.8 515.818 901.61 526.778L965.87 547.238L934.92 607.088C940.75 616.928 947.1 626.428 953.95 635.528L1021.07 629.848L1015.39 696.968C1024.49 703.818 1033.99 710.168 1043.83 715.998L1103.68 685.048L1124.14 749.308C1135.1 752.118 1146.3 754.318 1157.69 755.918L1162 750.81V148.755Z"
            fill="white"
          />
          <path
            d="M1157.69 143.648L1158.45 143.003L1158.1 142.581L1157.55 142.657L1157.69 143.648ZM1162 148.755H1163V148.39L1162.76 148.111L1162 148.755ZM1124.14 150.258L1123.89 149.289L1123.36 149.427L1123.19 149.954L1124.14 150.258ZM1103.68 214.518L1103.22 215.406L1104.27 215.95L1104.63 214.821L1103.68 214.518ZM1043.83 183.568L1044.29 182.679L1043.8 182.425L1043.32 182.707L1043.83 183.568ZM1015.39 202.598L1014.79 201.799L1014.35 202.131L1014.39 202.682L1015.39 202.598ZM1021.07 269.718L1020.99 270.714L1022.17 270.814L1022.07 269.633L1021.07 269.718ZM953.95 264.038L954.034 263.041L953.484 262.995L953.151 263.436L953.95 264.038ZM934.92 292.478L934.06 291.968L933.777 292.445L934.032 292.937L934.92 292.478ZM965.87 352.328L966.173 353.281L967.303 352.921L966.758 351.868L965.87 352.328ZM901.61 372.788L901.307 371.835L900.779 372.003L900.641 372.539L901.61 372.788ZM895 406.338L894.01 406.199L893.933 406.746L894.355 407.102L895 406.338ZM946.49 449.788L947.135 450.552L948.041 449.788L947.135 449.023L946.49 449.788ZM895 493.228L894.355 492.463L893.933 492.82L894.01 493.367L895 493.228ZM901.61 526.778L900.641 527.026L900.779 527.563L901.307 527.731L901.61 526.778ZM965.87 547.238L966.758 547.697L967.303 546.644L966.173 546.285L965.87 547.238ZM934.92 607.088L934.032 606.628L933.777 607.121L934.06 607.597L934.92 607.088ZM953.95 635.528L953.151 636.129L953.484 636.571L954.034 636.524L953.95 635.528ZM1021.07 629.848L1022.07 629.932L1022.17 628.751L1020.99 628.851L1021.07 629.848ZM1015.39 696.968L1014.39 696.883L1014.35 697.434L1014.79 697.767L1015.39 696.968ZM1043.83 715.998L1043.32 716.858L1043.8 717.141L1044.29 716.886L1043.83 715.998ZM1103.68 685.048L1104.63 684.744L1104.27 683.615L1103.22 684.159L1103.68 685.048ZM1124.14 749.308L1123.19 749.611L1123.36 750.139L1123.89 750.276L1124.14 749.308ZM1157.69 755.918L1157.55 756.908L1158.1 756.985L1158.45 756.563L1157.69 755.918ZM1162 750.81L1162.76 751.455L1163 751.176V750.81H1162ZM1156.93 144.293L1161.24 149.4L1162.76 148.111L1158.45 143.003L1156.93 144.293ZM1124.39 151.226C1135.31 148.426 1146.47 146.233 1157.83 144.638L1157.55 142.657C1146.13 144.262 1134.89 146.47 1123.89 149.289L1124.39 151.226ZM1104.63 214.821L1125.09 150.561L1123.19 149.954L1102.73 214.214L1104.63 214.821ZM1043.37 184.456L1103.22 215.406L1104.14 213.629L1044.29 182.679L1043.37 184.456ZM1015.99 203.397C1025.06 196.569 1034.53 190.24 1044.34 184.428L1043.32 182.707C1033.45 188.556 1023.92 194.926 1014.79 201.799L1015.99 203.397ZM1022.07 269.633L1016.39 202.513L1014.39 202.682L1020.07 269.802L1022.07 269.633ZM953.866 265.034L1020.99 270.714L1021.15 268.721L954.034 263.041L953.866 265.034ZM935.78 292.987C941.592 283.179 947.921 273.709 954.749 264.639L953.151 263.436C946.279 272.566 939.908 282.097 934.06 291.968L935.78 292.987ZM966.758 351.868L935.808 292.018L934.032 292.937L964.982 352.787L966.758 351.868ZM901.913 373.741L966.173 353.281L965.567 351.375L901.307 371.835L901.913 373.741ZM895.99 406.477C897.585 395.122 899.778 383.959 902.579 373.036L900.641 372.539C897.822 383.536 895.615 394.773 894.01 406.199L895.99 406.477ZM947.135 449.023L895.645 405.573L894.355 407.102L945.845 450.552L947.135 449.023ZM895.645 493.992L947.135 450.552L945.845 449.023L894.355 492.463L895.645 493.992ZM902.579 526.529C899.778 515.606 897.585 504.443 895.99 493.089L894.01 493.367C895.615 504.792 897.822 516.029 900.641 527.026L902.579 526.529ZM966.173 546.285L901.913 525.825L901.307 527.731L965.567 548.191L966.173 546.285ZM935.808 607.547L966.758 547.697L964.982 546.778L934.032 606.628L935.808 607.547ZM954.749 634.926C947.921 625.856 941.592 616.387 935.78 606.578L934.06 607.597C939.908 617.469 946.279 626.999 953.151 636.129L954.749 634.926ZM1020.99 628.851L953.866 634.531L954.034 636.524L1021.15 630.844L1020.99 628.851ZM1016.39 697.052L1022.07 629.932L1020.07 629.763L1014.39 696.883L1016.39 697.052ZM1044.34 715.137C1034.53 709.326 1025.06 702.996 1015.99 696.169L1014.79 697.767C1023.92 704.639 1033.45 711.01 1043.32 716.858L1044.34 715.137ZM1103.22 684.159L1043.37 715.109L1044.29 716.886L1104.14 685.936L1103.22 684.159ZM1125.09 749.004L1104.63 684.744L1102.73 685.351L1123.19 749.611L1125.09 749.004ZM1157.83 754.927C1146.47 753.332 1135.31 751.139 1124.39 748.339L1123.89 750.276C1134.89 753.096 1146.13 755.303 1157.55 756.908L1157.83 754.927ZM1161.24 750.165L1156.93 755.273L1158.45 756.563L1162.76 751.455L1161.24 750.165ZM1163 750.81V148.755H1161V750.81H1163Z"
            fill="black"
            mask="url(#path-17-inside-1_2086_1019)"
          />
          <mask id="path-19-inside-2_2086_1019" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1162 148.756L1157.69 143.648C1146.3 145.248 1135.1 147.448 1124.14 150.258L1103.68 214.518L1043.83 183.568C1033.99 189.398 1024.49 195.748 1015.39 202.598L1021.07 269.718L953.95 264.038C947.1 273.138 940.75 282.638 934.92 292.478L965.87 352.328L901.61 372.788C898.8 383.748 896.6 394.948 895 406.338L946.49 449.788L895 493.228C896.6 504.618 898.8 515.818 901.61 526.778L965.87 547.238L934.92 607.088C940.75 616.928 947.1 626.428 953.95 635.528L1021.07 629.848L1015.39 696.968C1024.49 703.818 1033.99 710.168 1043.83 715.998L1103.68 685.048L1124.14 749.308C1135.1 752.118 1146.3 754.318 1157.69 755.918L1162 750.81V148.756Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1162 148.756L1157.69 143.648C1146.3 145.248 1135.1 147.448 1124.14 150.258L1103.68 214.518L1043.83 183.568C1033.99 189.398 1024.49 195.748 1015.39 202.598L1021.07 269.718L953.95 264.038C947.1 273.138 940.75 282.638 934.92 292.478L965.87 352.328L901.61 372.788C898.8 383.748 896.6 394.948 895 406.338L946.49 449.788L895 493.228C896.6 504.618 898.8 515.818 901.61 526.778L965.87 547.238L934.92 607.088C940.75 616.928 947.1 626.428 953.95 635.528L1021.07 629.848L1015.39 696.968C1024.49 703.818 1033.99 710.168 1043.83 715.998L1103.68 685.048L1124.14 749.308C1135.1 752.118 1146.3 754.318 1157.69 755.918L1162 750.81V148.756Z"
            fill="${mainColor}"
            fillOpacity="0.05"
          />
          <path
            d="M1157.69 143.648L1158.45 143.003L1158.1 142.581L1157.55 142.658L1157.69 143.648ZM1162 148.756H1163V148.39L1162.76 148.111L1162 148.756ZM1124.14 150.258L1123.89 149.289L1123.36 149.427L1123.19 149.955L1124.14 150.258ZM1103.68 214.518L1103.22 215.406L1104.27 215.951L1104.63 214.821L1103.68 214.518ZM1043.83 183.568L1044.29 182.68L1043.8 182.425L1043.32 182.708L1043.83 183.568ZM1015.39 202.598L1014.79 201.799L1014.35 202.131L1014.39 202.682L1015.39 202.598ZM1021.07 269.718L1020.99 270.714L1022.17 270.814L1022.07 269.634L1021.07 269.718ZM953.95 264.038L954.034 263.042L953.484 262.995L953.151 263.437L953.95 264.038ZM934.92 292.478L934.06 291.968L933.777 292.445L934.032 292.937L934.92 292.478ZM965.87 352.328L966.173 353.281L967.303 352.921L966.758 351.869L965.87 352.328ZM901.61 372.788L901.307 371.835L900.779 372.003L900.641 372.54L901.61 372.788ZM895 406.338L894.01 406.199L893.933 406.746L894.355 407.102L895 406.338ZM946.49 449.788L947.135 450.552L948.041 449.788L947.135 449.024L946.49 449.788ZM895 493.228L894.355 492.464L893.933 492.82L894.01 493.367L895 493.228ZM901.61 526.778L900.641 527.026L900.779 527.563L901.307 527.731L901.61 526.778ZM965.87 547.238L966.758 547.697L967.303 546.645L966.173 546.285L965.87 547.238ZM934.92 607.088L934.032 606.629L933.777 607.121L934.06 607.598L934.92 607.088ZM953.95 635.528L953.151 636.129L953.484 636.571L954.034 636.524L953.95 635.528ZM1021.07 629.848L1022.07 629.932L1022.17 628.752L1020.99 628.852L1021.07 629.848ZM1015.39 696.968L1014.39 696.884L1014.35 697.434L1014.79 697.767L1015.39 696.968ZM1043.83 715.998L1043.32 716.858L1043.8 717.141L1044.29 716.886L1043.83 715.998ZM1103.68 685.048L1104.63 684.745L1104.27 683.615L1103.22 684.16L1103.68 685.048ZM1124.14 749.308L1123.19 749.611L1123.36 750.139L1123.89 750.277L1124.14 749.308ZM1157.69 755.918L1157.55 756.908L1158.1 756.985L1158.45 756.563L1157.69 755.918ZM1162 750.81L1162.76 751.455L1163 751.176V750.81H1162ZM1156.93 144.293L1161.24 149.401L1162.76 148.111L1158.45 143.003L1156.93 144.293ZM1124.39 151.227C1135.31 148.426 1146.47 146.233 1157.83 144.638L1157.55 142.658C1146.13 144.263 1134.89 146.47 1123.89 149.289L1124.39 151.227ZM1104.63 214.821L1125.09 150.561L1123.19 149.955L1102.73 214.215L1104.63 214.821ZM1043.37 184.456L1103.22 215.406L1104.14 213.63L1044.29 182.68L1043.37 184.456ZM1015.99 203.397C1025.06 196.569 1034.53 190.24 1044.34 184.428L1043.32 182.708C1033.45 188.556 1023.92 194.926 1014.79 201.799L1015.99 203.397ZM1022.07 269.634L1016.39 202.514L1014.39 202.682L1020.07 269.802L1022.07 269.634ZM953.866 265.034L1020.99 270.714L1021.15 268.722L954.034 263.042L953.866 265.034ZM935.78 292.988C941.592 283.179 947.921 273.709 954.749 264.639L953.151 263.437C946.279 272.566 939.908 282.097 934.06 291.968L935.78 292.988ZM966.758 351.869L935.808 292.019L934.032 292.937L964.982 352.787L966.758 351.869ZM901.913 373.741L966.173 353.281L965.567 351.375L901.307 371.835L901.913 373.741ZM895.99 406.477C897.585 395.123 899.778 383.959 902.579 373.036L900.641 372.54C897.822 383.537 895.615 394.773 894.01 406.199L895.99 406.477ZM947.135 449.024L895.645 405.574L894.355 407.102L945.845 450.552L947.135 449.024ZM895.645 493.992L947.135 450.552L945.845 449.024L894.355 492.464L895.645 493.992ZM902.579 526.53C899.778 515.607 897.585 504.443 895.99 493.089L894.01 493.367C895.615 504.793 897.822 516.029 900.641 527.026L902.579 526.53ZM966.173 546.285L901.913 525.825L901.307 527.731L965.567 548.191L966.173 546.285ZM935.808 607.547L966.758 547.697L964.982 546.779L934.032 606.629L935.808 607.547ZM954.749 634.927C947.921 625.856 941.592 616.387 935.78 606.578L934.06 607.598C939.908 617.469 946.279 626.999 953.151 636.129L954.749 634.927ZM1020.99 628.852L953.866 634.532L954.034 636.524L1021.15 630.844L1020.99 628.852ZM1016.39 697.052L1022.07 629.932L1020.07 629.764L1014.39 696.884L1016.39 697.052ZM1044.34 715.138C1034.53 709.326 1025.06 702.996 1015.99 696.169L1014.79 697.767C1023.92 704.639 1033.45 711.01 1043.32 716.858L1044.34 715.138ZM1103.22 684.16L1043.37 715.11L1044.29 716.886L1104.14 685.936L1103.22 684.16ZM1125.09 749.005L1104.63 684.745L1102.73 685.351L1123.19 749.611L1125.09 749.005ZM1157.83 754.928C1146.47 753.333 1135.31 751.14 1124.39 748.339L1123.89 750.277C1134.89 753.096 1146.13 755.303 1157.55 756.908L1157.83 754.928ZM1161.24 750.166L1156.93 755.273L1158.45 756.563L1162.76 751.455L1161.24 750.166ZM1163 750.81V148.756H1161V750.81H1163Z"
            fill="black"
            mask="url(#path-19-inside-2_2086_1019)"
          />
          <mask id="path-21-inside-3_2086_1019" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1180 163.607L1175.69 158.5C1164.3 160.1 1153.1 162.3 1142.14 165.11L1121.68 229.37L1061.83 198.42C1051.99 204.25 1042.49 210.6 1033.39 217.45L1039.07 284.57L971.95 278.89C965.1 287.99 958.75 297.49 952.92 307.33L983.87 367.18L919.61 387.64C916.8 398.6 914.6 409.8 913 421.19L964.49 464.64L913 508.079C914.6 519.47 916.8 530.67 919.61 541.63L983.87 562.09L952.92 621.94C958.75 631.78 965.1 641.28 971.95 650.38L1039.07 644.7L1033.39 711.82C1042.49 718.669 1051.99 725.019 1061.83 730.849L1121.68 699.9L1142.14 764.159C1153.1 766.969 1164.3 769.17 1175.69 770.77L1180 765.662V163.607Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1180 163.607L1175.69 158.5C1164.3 160.1 1153.1 162.3 1142.14 165.11L1121.68 229.37L1061.83 198.42C1051.99 204.25 1042.49 210.6 1033.39 217.45L1039.07 284.57L971.95 278.89C965.1 287.99 958.75 297.49 952.92 307.33L983.87 367.18L919.61 387.64C916.8 398.6 914.6 409.8 913 421.19L964.49 464.64L913 508.079C914.6 519.47 916.8 530.67 919.61 541.63L983.87 562.09L952.92 621.94C958.75 631.78 965.1 641.28 971.95 650.38L1039.07 644.7L1033.39 711.82C1042.49 718.669 1051.99 725.019 1061.83 730.849L1121.68 699.9L1142.14 764.159C1153.1 766.969 1164.3 769.17 1175.69 770.77L1180 765.662V163.607Z"
            fill="${mainColor}"
            fillOpacity="0.05"
          />
          <path
            d="M1175.69 158.5L1176.45 157.855L1176.1 157.432L1175.55 157.509L1175.69 158.5ZM1180 163.607H1181V163.242L1180.76 162.962L1180 163.607ZM1142.14 165.11L1141.89 164.141L1141.36 164.278L1141.19 164.806L1142.14 165.11ZM1121.68 229.37L1121.22 230.258L1122.27 230.802L1122.63 229.673L1121.68 229.37ZM1061.83 198.42L1062.29 197.531L1061.8 197.277L1061.32 197.559L1061.83 198.42ZM1033.39 217.45L1032.79 216.651L1032.35 216.983L1032.39 217.534L1033.39 217.45ZM1039.07 284.57L1038.99 285.566L1040.17 285.666L1040.07 284.485L1039.07 284.57ZM971.95 278.89L972.034 277.893L971.484 277.846L971.151 278.288L971.95 278.89ZM952.92 307.33L952.06 306.82L951.777 307.297L952.032 307.789L952.92 307.33ZM983.87 367.18L984.173 368.132L985.303 367.773L984.758 366.72L983.87 367.18ZM919.61 387.64L919.307 386.687L918.779 386.855L918.641 387.391L919.61 387.64ZM913 421.19L912.01 421.05L911.933 421.597L912.355 421.954L913 421.19ZM964.49 464.64L965.135 465.404L966.041 464.64L965.135 463.875L964.49 464.64ZM913 508.079L912.355 507.315L911.933 507.671L912.01 508.219L913 508.079ZM919.61 541.63L918.641 541.878L918.779 542.414L919.307 542.582L919.61 541.63ZM983.87 562.09L984.758 562.549L985.303 561.496L984.173 561.137L983.87 562.09ZM952.92 621.94L952.032 621.48L951.777 621.972L952.06 622.449L952.92 621.94ZM971.95 650.38L971.151 650.981L971.484 651.423L972.034 651.376L971.95 650.38ZM1039.07 644.7L1040.07 644.784L1040.17 643.603L1038.99 643.703L1039.07 644.7ZM1033.39 711.82L1032.39 711.735L1032.35 712.286L1032.79 712.618L1033.39 711.82ZM1061.83 730.849L1061.32 731.71L1061.8 731.992L1062.29 731.738L1061.83 730.849ZM1121.68 699.9L1122.63 699.596L1122.27 698.467L1121.22 699.011L1121.68 699.9ZM1142.14 764.159L1141.19 764.463L1141.36 764.991L1141.89 765.128L1142.14 764.159ZM1175.69 770.77L1175.55 771.76L1176.1 771.837L1176.45 771.414L1175.69 770.77ZM1180 765.662L1180.76 766.307L1181 766.028V765.662H1180ZM1174.93 159.144L1179.24 164.252L1180.76 162.962L1176.45 157.855L1174.93 159.144ZM1142.39 166.078C1153.31 163.278 1164.47 161.085 1175.83 159.49L1175.55 157.509C1164.13 159.114 1152.89 161.321 1141.89 164.141L1142.39 166.078ZM1122.63 229.673L1143.09 165.413L1141.19 164.806L1120.73 229.066L1122.63 229.673ZM1061.37 199.308L1121.22 230.258L1122.14 228.481L1062.29 197.531L1061.37 199.308ZM1033.99 218.248C1043.06 211.421 1052.53 205.091 1062.34 199.28L1061.32 197.559C1051.45 203.408 1041.92 209.778 1032.79 216.651L1033.99 218.248ZM1040.07 284.485L1034.39 217.365L1032.39 217.534L1038.07 284.654L1040.07 284.485ZM971.866 279.886L1038.99 285.566L1039.15 283.573L972.034 277.893L971.866 279.886ZM953.78 307.839C959.592 298.03 965.921 288.561 972.749 279.491L971.151 278.288C964.279 287.418 957.908 296.949 952.06 306.82L953.78 307.839ZM984.758 366.72L953.808 306.87L952.032 307.789L982.982 367.639L984.758 366.72ZM919.913 388.592L984.173 368.132L983.567 366.227L919.307 386.687L919.913 388.592ZM913.99 421.329C915.585 409.974 917.778 398.811 920.579 387.888L918.641 387.391C915.822 398.388 913.615 409.625 912.01 421.05L913.99 421.329ZM965.135 463.875L913.645 420.425L912.355 421.954L963.845 465.404L965.135 463.875ZM913.645 508.844L965.135 465.404L963.845 463.875L912.355 507.315L913.645 508.844ZM920.579 541.381C917.778 530.458 915.585 519.295 913.99 507.94L912.01 508.219C913.615 519.644 915.822 530.881 918.641 541.878L920.579 541.381ZM984.173 561.137L919.913 540.677L919.307 542.582L983.567 563.042L984.173 561.137ZM953.808 622.399L984.758 562.549L982.982 561.63L952.032 621.48L953.808 622.399ZM972.749 649.778C965.921 640.708 959.592 631.239 953.78 621.43L952.06 622.449C957.908 632.32 964.279 641.851 971.151 650.981L972.749 649.778ZM1038.99 643.703L971.866 649.383L972.034 651.376L1039.15 645.696L1038.99 643.703ZM1034.39 711.904L1040.07 644.784L1038.07 644.615L1032.39 711.735L1034.39 711.904ZM1062.34 729.989C1052.53 724.178 1043.06 717.848 1033.99 711.021L1032.79 712.618C1041.92 719.491 1051.45 725.861 1061.32 731.71L1062.34 729.989ZM1121.22 699.011L1061.37 729.961L1062.29 731.738L1122.14 700.788L1121.22 699.011ZM1143.09 763.856L1122.63 699.596L1120.73 700.203L1141.19 764.463L1143.09 763.856ZM1175.83 769.779C1164.47 768.184 1153.31 765.991 1142.39 763.191L1141.89 765.128C1152.89 767.948 1164.13 770.155 1175.55 771.76L1175.83 769.779ZM1179.24 765.017L1174.93 770.125L1176.45 771.414L1180.76 766.307L1179.24 765.017ZM1181 765.662V163.607H1179V765.662H1181Z"
            fill="black"
            mask="url(#path-21-inside-3_2086_1019)"
          />
          <path
            d="M106.445 359.863C104.079 359.728 100.495 359.958 98.5518 358.796C96.481 357.554 96.2181 355.109 95.9712 353.269C95.9155 352.831 95.8916 352.258 95.8756 351.828L95.4853 341.5L94.9437 352.72C94.9437 352.72 94.8482 356.773 93.526 358.015C91.4711 360.237 87.1621 359.704 84 359.863V360.126C87.3771 360.349 92.0127 359.823 93.7649 362.586C95.6606 365.596 95.1269 372.939 95.3181 376.482C95.3499 377.024 95.2305 377.677 95.3101 378.186C95.342 378.37 95.3659 378.521 95.6685 378.497C95.7163 376.554 95.6128 374.603 95.6685 372.652C95.7402 370.151 95.7721 367.492 96.2978 365.015C97.373 359.903 100.742 360.452 106.445 360.134C106.668 360.118 106.676 359.871 106.453 359.855L106.445 359.863Z"
            fill="black"
          />
          <path
            d="M115.883 354.209C114.585 354.137 112.626 354.265 111.558 353.628C110.419 352.943 110.284 351.605 110.149 350.601C110.117 350.363 110.109 350.044 110.101 349.813L109.886 344.159L109.591 350.299C109.591 350.299 109.535 352.521 108.818 353.198C107.695 354.416 105.338 354.121 103.609 354.209V354.352C105.457 354.472 107.998 354.185 108.954 355.698C109.997 357.346 109.703 361.368 109.806 363.303C109.822 363.598 109.758 363.956 109.806 364.235C109.822 364.33 109.838 364.418 110.005 364.402C110.029 363.335 109.973 362.268 110.005 361.201C110.045 359.831 110.061 358.374 110.348 357.02C110.937 354.225 112.785 354.519 115.907 354.344C116.027 354.344 116.035 354.201 115.907 354.193L115.883 354.209Z"
            fill="black"
          />

          <path
            d="M865.265 195.3C861.864 195.103 856.712 195.44 853.918 193.743C850.942 191.93 850.564 188.362 850.209 185.677C850.129 185.038 850.094 184.201 850.071 183.573L849.51 168.5L848.732 184.875C848.732 184.875 848.594 190.791 846.694 192.604C843.74 195.846 837.545 195.068 833 195.3V195.684C837.855 196.009 844.518 195.242 847.037 199.275C849.762 203.668 848.995 214.384 849.27 219.555C849.316 220.346 849.144 221.299 849.258 222.043C849.304 222.31 849.339 222.531 849.774 222.496C849.842 219.66 849.694 216.813 849.774 213.965C849.877 210.316 849.923 206.434 850.678 202.82C852.224 195.358 857.067 196.16 865.265 195.695C865.586 195.672 865.597 195.312 865.276 195.288L865.265 195.3Z"
            fill="black"
          />
          <path
            d="M878.831 187.047C876.965 186.943 874.148 187.129 872.614 186.199C870.977 185.2 870.782 183.247 870.588 181.783C870.542 181.434 870.53 180.969 870.519 180.632L870.21 172.38L869.786 181.341C869.786 181.341 869.706 184.584 868.676 185.571C867.061 187.35 863.672 186.92 861.188 187.047V187.257C863.844 187.431 867.496 187.013 868.87 189.221C870.37 191.627 869.946 197.496 870.095 200.32C870.118 200.75 870.027 201.273 870.095 201.68C870.118 201.819 870.141 201.947 870.382 201.924C870.416 200.366 870.336 198.809 870.382 197.252C870.439 195.253 870.462 193.126 870.874 191.15C871.721 187.071 874.377 187.501 878.866 187.245C879.037 187.245 879.049 187.036 878.866 187.024L878.831 187.047Z"
            fill="black"
          />
          <path
            d="M136.369 419.133L140.568 420.469L140.568 420.469C140.752 421.185 140.895 421.916 141 422.661L137.636 425.499L141 428.338C140.895 429.082 140.752 429.814 140.568 430.53L136.37 431.866L138.392 435.776C138.011 436.419 137.596 437.04 137.149 437.634L132.764 437.263L133.135 441.648C132.54 442.096 131.92 442.511 131.277 442.892L127.367 440.87L126.03 445.068C125.314 445.251 124.583 445.395 123.839 445.5L121 442.136L118.161 445.5C117.417 445.395 116.686 445.251 115.97 445.068L114.633 440.87L110.723 442.892C110.08 442.511 109.46 442.096 108.865 441.648L109.236 437.263L104.851 437.634C104.404 437.04 103.989 436.419 103.608 435.776L105.63 431.866L101.432 430.53C101.248 429.814 101.105 429.082 101 428.338L104.364 425.5L101 422.661C101.105 421.917 101.248 421.185 101.432 420.469L105.63 419.133L103.608 415.223C103.989 414.58 104.404 413.959 104.851 413.365L109.236 413.736L108.865 409.351C109.46 408.903 110.08 408.488 110.723 408.108L114.633 410.129L115.97 405.931C116.686 405.748 117.417 405.604 118.161 405.5L120.999 408.863L123.838 405.5C124.582 405.604 125.314 405.748 126.03 405.931L127.366 410.129L131.276 408.108C131.919 408.488 132.54 408.903 133.134 409.351L132.763 413.736L137.148 413.365C137.596 413.959 138.011 414.58 138.391 415.223L136.369 419.133Z"
            fill="${mainColor}"
          />

          <rect x="614" y="648.5" width="80" height="80" />

          <rect x="723" y="648.5" width="80" height="80" />

          <rect x="832" y="648.5" width="80" height="80" />

          <rect
            x="966"
            y="44.4995"
            width="60"
            height="60"
            transform="rotate(90 966 44.4995)"
            fill="url(#pattern0_2086_1019)"
          />

          <mask
            id="mask0_2086_1019"
            maskUnits="userSpaceOnUse"
            x="980"
            y="393"
            width="144"
            height="143"
          ></mask>
          <g mask="url(#mask0_2086_1019)">
            <circle
              cx="1018.43"
              cy="442.394"
              r="46.4276"
              fill="url(#${paintId2})"
            />
            <ellipse
              cx="1088.14"
              cy="489.86"
              rx="58.5425"
              ry="46.4276"
              fill="url(#${paintId3})"
            />
          </g>

          <rect
            x="1041.33"
            y="492.766"
            width="21.3333"
            height="21.3333"
            fill="url(#pattern1_2086_1019)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_2086_1019"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_2086_1019"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <radialGradient
            id="${paintId0}"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(233 222.5) rotate(90) scale(297)"
          >
            <stop stopColor="${mainColor}" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="${paintId1}"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(959.5 640.5) rotate(90) scale(297 374.5)"
          >
            <stop stopColor="${mainColor}" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="${paintId2}"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1018.43 442.394) rotate(90) scale(46.4276)"
          >
            <stop stopColor="${mainColor}" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="${paintId3}"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1088.14 489.86) rotate(90) scale(46.4276 58.5425)"
          >
            <stop stopColor="${mainColor}" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_2086_1019">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0 0.499512)"
            />
          </clipPath>
          <image id="image0_2086_1019" width="357" height="357" />
          <image id="image1_2086_1019" width="360" height="360" />
        </defs>
      </svg>
  `;
}
