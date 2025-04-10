import { ISvgProps } from "../../interface"; 

export function createRibbonWing6({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 430 393"
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
        d="M359.701 97.0751C359.701 97.0751 352.706 89.7151 353.01 81.0751C353.314 72.1151 360.309 65.0751 360.309 65.0751C360.309 65.0751 367 72.4351 367 81.3951C366.696 90.0351 359.701 97.0751 359.701 97.0751Z"
        fill="${mainColor}"
      />
      <path
        d="M330.704 72.6571C330.704 72.6571 323.899 66.8282 323.434 59.2541C322.942 51.4004 328.523 44.6494 328.523 44.6494C328.523 44.6494 335.058 50.5044 335.819 58.3319C336.285 65.906 330.704 72.6571 330.704 72.6571Z"
        fill="${mainColor}"
      />
      <path
        d="M329 96.7661C329 96.7661 336.059 90.0751 344.653 90.0751C353.248 90.3792 360 97.3744 360 97.3744C360 97.3744 352.941 104.37 344.347 104.065C335.752 103.761 329 96.7661 329 96.7661Z"
        fill="${mainColor}"
      />
      <path
        d="M303.516 74.7379C303.516 74.7379 309.097 67.9869 316.619 67.2554C324.168 66.8035 330.704 72.6585 330.704 72.6585C330.704 72.6585 325.15 79.6891 317.601 80.141C310.052 80.5929 303.516 74.7379 303.516 74.7379Z"
        fill="${mainColor}"
      />
      <path
        d="M359 98.075L360.241 97.0751L368 105.742L366.759 107.075L359 98.075Z"
        fill="${mainColor}"
      />
      <path
        d="M330.222 73.2701L331.215 72.327L338.638 78.9423L337.672 80.165L330.222 73.2701Z"
        fill="${mainColor}"
      />
      <path
        d="M393.519 132.783L392.093 134.266L383.185 124.626L383.898 123.884C382.829 124.997 374.99 132.042 365.726 131.671C355.749 131.671 347.91 122.772 347.91 122.772C347.91 122.772 356.105 114.615 366.082 114.986C376.059 114.986 383.898 123.884 383.898 123.884C383.898 123.884 376.059 115.356 376.059 104.974C376.415 94.5924 384.611 86.4352 384.611 86.4352C384.611 86.4352 392.806 94.9632 392.45 105.345C392.093 114.985 384.967 122.772 383.898 123.513L384.611 123.143L393.519 132.783Z"
        fill="${mainColor}"
      />
      <path
        d="M394.23 154.659L395.299 154.288L399.931 166.895L398.15 167.636L393.518 155.03L394.23 154.659C394.23 154.659 383.541 159.108 374.633 155.03C365.369 150.951 361.449 139.827 361.449 139.827C361.449 139.827 372.139 135.378 381.047 139.457C390.311 143.535 394.23 154.659 394.23 154.659C394.23 154.659 389.954 143.535 393.874 134.266C397.793 124.625 408.483 120.547 408.483 120.547C408.483 120.547 412.759 131.299 408.839 140.94C404.92 150.209 394.587 154.659 394.23 154.659Z"
        fill="${mainColor}"
      />
      <path
        d="M405.633 184.691L406.702 184.32L411.334 196.927L409.552 197.668L404.92 185.062L405.633 184.691C405.633 184.691 395.3 189.14 386.035 185.062C377.127 180.983 372.852 169.86 372.852 169.86C372.852 169.86 383.541 165.41 392.449 169.489C401.713 173.567 405.633 184.691 405.633 184.691C405.633 184.691 401.357 173.938 405.276 164.298C409.196 155.028 419.885 150.579 419.885 150.579C419.885 150.579 424.161 161.702 420.242 170.972C416.322 180.242 405.989 184.691 405.633 184.691Z"
        fill="${mainColor}"
      />
      <path
        d="M403.496 217.694H404.565L404.209 231.042H402.427V217.694H403.496C402.783 217.694 391.738 217.323 385.324 209.908C378.197 202.492 378.554 190.627 378.554 190.627C378.554 190.627 389.956 190.627 396.726 198.043C403.852 205.458 403.496 217.694 403.496 217.694C403.496 217.694 403.496 205.458 410.622 198.413C417.749 191.368 429.151 191.739 429.151 191.739C429.151 191.739 429.151 203.604 422.024 210.649C415.254 217.694 404.208 217.694 403.496 217.694Z"
        fill="${mainColor}"
      />
      <path
        d="M403.135 249.952H403.847L403.491 263.3H401.709L402.066 249.952H402.778C402.065 249.952 391.02 249.581 384.606 242.536C377.836 235.121 377.836 223.255 377.836 223.255C377.836 223.255 389.594 223.255 396.364 230.671C403.134 238.087 402.778 249.952 402.778 249.952C402.778 249.952 403.135 238.087 410.261 231.042C417.387 223.626 428.789 223.997 428.789 223.997C428.789 223.997 428.789 235.862 421.307 243.278C414.537 249.952 403.847 249.952 403.135 249.952Z"
        fill="${mainColor}"
      />
      <path
        d="M388.884 279.243L389.953 279.614L384.608 292.221L382.827 291.108L388.172 278.872L388.884 279.243C387.815 278.872 378.195 274.052 374.988 264.783C371.425 255.513 376.057 244.39 376.057 244.39C376.057 244.39 386.39 249.21 389.953 258.85C393.516 268.49 388.884 279.243 388.884 279.243C388.884 279.243 393.516 268.49 402.78 264.783C412.045 261.075 422.378 265.895 422.378 265.895C422.378 265.895 417.746 276.648 408.482 280.356C399.93 284.063 389.953 279.614 388.884 279.243Z"
        fill="${mainColor}"
      />
      <path
        d="M377.129 309.275L372.14 321.511L370.359 320.77L375.347 308.534L376.06 308.905C374.991 308.534 365.727 303.714 362.164 294.444C358.6 285.175 363.233 274.051 363.233 274.051C363.233 274.051 373.922 278.871 377.485 288.512C381.048 298.152 376.416 308.905 376.416 308.905C376.416 308.905 381.048 298.152 389.956 294.444C399.22 290.736 409.91 295.556 409.91 295.556C409.91 295.556 405.278 306.309 396.014 310.017C387.462 313.725 377.485 309.646 376.416 308.905L377.129 309.275Z"
        fill="${mainColor}"
      />
      <path
        d="M352.898 330.782C352.898 330.782 361.094 322.254 371.071 322.624C381.048 322.995 388.887 331.523 388.887 331.523C388.887 331.523 380.335 340.051 370.714 339.68C360.737 339.31 352.898 330.782 352.898 330.782Z"
        fill="${mainColor}"
      />
      <path
        d="M353.61 293.332C353.61 293.332 361.805 301.86 361.449 312.242C361.093 322.624 352.897 330.781 352.897 330.781C352.897 330.781 345.059 322.254 345.059 311.872C345.415 301.49 353.61 293.332 353.61 293.332Z"
        fill="${mainColor}"
      />
      <path
        d="M353.611 331.524L343.991 340.793L342.922 339.31L352.186 330.04L353.611 331.524Z"
        fill="${mainColor}"
      />
      <path
        d="M330.449 353.028C330.449 353.028 338.644 344.871 348.265 344.871C358.242 345.241 366.081 354.14 366.081 354.14C366.081 354.14 357.886 362.297 347.909 361.927C338.288 361.556 330.449 353.028 330.449 353.028Z"
        fill="${mainColor}"
      />
      <path
        d="M331.161 315.58C331.161 315.58 339 324.108 339 334.49C338.643 344.872 330.448 353.029 330.448 353.029C330.448 353.029 322.253 344.501 322.609 334.119C322.965 323.737 331.161 315.58 331.161 315.58Z"
        fill="${mainColor}"
      />
      <path
        d="M330.807 353.77L321.542 363.039L320.117 361.556L329.738 352.287L330.807 353.77Z"
        fill="${mainColor}"
      />
      <path
        d="M320.117 363.411C329.381 367.49 333.3 378.613 333.3 378.613C333.3 378.613 322.967 383.062 313.703 378.984C304.795 374.534 300.52 363.411 300.52 363.411C300.52 363.411 311.209 358.962 320.117 363.411Z"
        fill="${mainColor}"
      />
      <path
        d="M300.162 343.017C304.081 333.747 314.771 329.298 314.771 329.298C314.771 329.298 319.047 340.421 315.127 349.691C311.208 359.331 300.518 363.41 300.518 363.41C300.518 363.41 296.242 352.657 300.162 343.017Z"
        fill="${mainColor}"
      />
      <path
        d="M300.874 364.522L288.759 369.342L288.047 367.488L300.161 362.668L300.874 364.522Z"
        fill="${mainColor}"
      />
      <path
        d="M291.258 375.277C300.165 379.356 304.441 390.479 304.441 390.479C304.441 390.479 293.752 394.929 284.844 390.85C275.58 386.771 271.66 375.648 271.66 375.648C271.66 375.648 281.993 371.198 291.258 375.277Z"
        fill="${mainColor}"
      />
      <path
        d="M271.659 375.647C271.659 375.647 267.383 364.523 271.303 354.883C275.222 345.613 285.912 341.164 285.912 341.164C285.912 341.164 290.187 352.288 286.268 361.928C282.348 371.198 271.659 375.647 271.659 375.647Z"
        fill="${mainColor}"
      />
      <path
        d="M271.302 374.533L272.015 376.387L259.9 381.207L259.188 379.354L271.302 374.533Z"
        fill="${mainColor}"
      />
      <path
        d="M69.4517 97.0751C69.4517 97.0751 76.4468 89.7151 76.1427 81.0751C75.8386 72.1151 68.8434 65.0751 68.8434 65.0751C68.8434 65.0751 62.1523 72.4351 62.1523 81.3951C62.4565 90.0351 69.4517 97.0751 69.4517 97.0751Z"
        fill="${mainColor}"
      />
      <path
        d="M98.4487 72.6571C98.4487 72.6571 105.253 66.8282 105.718 59.2541C106.211 51.4004 100.63 44.6494 100.63 44.6494C100.63 44.6494 94.0943 50.5044 93.3331 58.3319C92.8678 65.906 98.4487 72.6571 98.4487 72.6571Z"
        fill="${mainColor}"
      />
      <path
        d="M100.152 96.7661C100.152 96.7661 93.093 90.0751 84.4989 90.0751C75.9048 90.3792 69.1523 97.3744 69.1523 97.3744C69.1523 97.3744 76.2117 104.37 84.8058 104.065C93.3999 103.761 100.152 96.7661 100.152 96.7661Z"
        fill="${mainColor}"
      />
      <path
        d="M125.636 74.7379C125.636 74.7379 120.056 67.9869 112.533 67.2554C104.984 66.8035 98.4486 72.6585 98.4486 72.6585C98.4486 72.6585 104.002 79.6891 111.552 80.141C119.101 80.5929 125.636 74.7379 125.636 74.7379Z"
        fill="${mainColor}"
      />
      <path
        d="M70.1523 98.075L68.9109 97.0751L61.1523 105.742L62.3938 107.075L70.1523 98.075Z"
        fill="${mainColor}"
      />
      <path
        d="M98.9302 73.2701L97.9371 72.327L90.5141 78.9423L91.48 80.165L98.9302 73.2701Z"
        fill="${mainColor}"
      />
      <path
        d="M35.6338 132.783L37.0591 134.266L45.967 124.626L45.2543 123.884C46.3233 124.997 54.1622 132.042 63.4264 131.671C73.4032 131.671 81.2422 122.772 81.2422 122.772C81.2422 122.772 73.047 114.615 63.0701 114.986C53.0933 114.986 45.2543 123.884 45.2543 123.884C45.2543 123.884 53.0933 115.356 53.0933 104.974C52.737 94.5924 44.5417 86.4352 44.5417 86.4352C44.5417 86.4352 36.3463 94.9632 36.7027 105.345C37.059 114.985 44.1854 122.772 45.2543 123.513L44.5417 123.143L35.6338 132.783Z"
        fill="${mainColor}"
      />
      <path
        d="M34.922 154.659L33.8531 154.288L29.221 166.895L31.0026 167.636L35.6347 155.03L34.922 154.659C34.922 154.659 45.6115 159.108 54.5194 155.03C63.7836 150.951 67.7031 139.827 67.7031 139.827C67.7031 139.827 57.0136 135.378 48.1057 139.457C38.8415 143.535 34.922 154.659 34.922 154.659C34.922 154.659 39.1979 143.535 35.2784 134.266C31.359 124.625 20.6693 120.547 20.6693 120.547C20.6693 120.547 16.3936 131.299 20.3131 140.94C24.2326 150.209 34.5657 154.659 34.922 154.659Z"
        fill="${mainColor}"
      />
      <path
        d="M23.5196 184.691L22.4507 184.32L17.8187 196.927L19.6003 197.668L24.2323 185.062L23.5196 184.691C23.5196 184.691 33.8528 189.14 43.117 185.062C52.0249 180.983 56.3008 169.86 56.3008 169.86C56.3008 169.86 45.6113 165.41 36.7034 169.489C27.4392 173.567 23.5196 184.691 23.5196 184.691C23.5196 184.691 27.7956 173.938 23.8761 164.298C19.9566 155.028 9.26699 150.579 9.26699 150.579C9.26699 150.579 4.99129 161.702 8.91077 170.972C12.8302 180.242 23.1633 184.691 23.5196 184.691Z"
        fill="${mainColor}"
      />
      <path
        d="M25.6565 217.694H24.5876L24.9438 231.042H26.7254V217.694H25.6565C26.3691 217.694 37.4148 217.323 43.8285 209.908C50.9548 202.492 50.5986 190.627 50.5986 190.627C50.5986 190.627 39.1964 190.627 32.4264 198.043C25.3 205.458 25.6565 217.694 25.6565 217.694C25.6565 217.694 25.6565 205.458 18.5302 198.413C11.4038 191.368 0.00166702 191.739 0.00166702 191.739C0.00166702 191.739 0.00166702 203.604 7.12799 210.649C13.898 217.694 24.9438 217.694 25.6565 217.694Z"
        fill="${mainColor}"
      />
      <path
        d="M26.0178 249.952H25.3051L25.6616 263.3H27.4432L27.0867 249.952H26.3743C27.0869 249.952 38.1326 249.581 44.5463 242.536C51.3163 235.121 51.3164 223.255 51.3164 223.255C51.3164 223.255 39.5579 223.255 32.7879 230.671C26.0179 238.087 26.3743 249.952 26.3743 249.952C26.3743 249.952 26.0178 238.087 18.8915 231.042C11.7652 223.626 0.363003 223.997 0.363003 223.997C0.363003 223.997 0.363136 235.862 7.84578 243.278C14.6158 249.952 25.3052 249.952 26.0178 249.952Z"
        fill="${mainColor}"
      />
      <path
        d="M40.2681 279.243L39.1992 279.614L44.5439 292.221L46.3255 291.108L40.9808 278.872L40.2681 279.243C41.3371 278.872 50.9577 274.052 54.1645 264.783C57.7277 255.513 53.0956 244.39 53.0956 244.39C53.0956 244.39 42.7624 249.21 39.1992 258.85C35.636 268.49 40.2681 279.243 40.2681 279.243C40.2681 279.243 35.6361 268.49 26.3719 264.783C17.1077 261.075 6.77451 265.895 6.77451 265.895C6.77451 265.895 11.4065 276.648 20.6707 280.356C29.2223 284.063 39.1992 279.614 40.2681 279.243Z"
        fill="${mainColor}"
      />
      <path
        d="M52.0234 309.275L57.0119 321.511L58.7935 320.77L53.805 308.534L53.0925 308.905C54.1615 308.534 63.4256 303.714 66.9887 294.444C70.5519 285.175 65.9198 274.051 65.9198 274.051C65.9198 274.051 55.2304 278.871 51.6672 288.512C48.104 298.152 52.7361 308.905 52.7361 308.905C52.7361 308.905 48.104 298.152 39.1961 294.444C29.9319 290.736 19.2425 295.556 19.2425 295.556C19.2425 295.556 23.8745 306.309 33.1387 310.017C41.6903 313.725 51.6671 309.646 52.7361 308.905L52.0234 309.275Z"
        fill="${mainColor}"
      />
      <path
        d="M76.2539 330.782C76.2539 330.782 68.0585 322.254 58.0817 322.624C48.1048 322.995 40.2658 331.523 40.2658 331.523C40.2658 331.523 48.8176 340.051 58.4381 339.68C68.415 339.31 76.2539 330.782 76.2539 330.782Z"
        fill="${mainColor}"
      />
      <path
        d="M75.5423 293.332C75.5423 293.332 67.347 301.86 67.7033 312.242C68.0596 322.624 76.255 330.781 76.255 330.781C76.255 330.781 84.0938 322.254 84.0938 311.872C83.7374 301.49 75.5423 293.332 75.5423 293.332Z"
        fill="${mainColor}"
      />
      <path
        d="M75.541 331.524L85.1616 340.793L86.2305 339.31L76.9661 330.04L75.541 331.524Z"
        fill="${mainColor}"
      />
      <path
        d="M98.7031 353.028C98.7031 353.028 90.5079 344.871 80.8873 344.871C70.9105 345.241 63.0715 354.14 63.0715 354.14C63.0715 354.14 71.2667 362.297 81.2435 361.927C90.8641 361.556 98.7031 353.028 98.7031 353.028Z"
        fill="${mainColor}"
      />
      <path
        d="M97.9917 315.58C97.9917 315.58 90.1527 324.108 90.1527 334.49C90.509 344.872 98.7044 353.029 98.7044 353.029C98.7044 353.029 106.9 344.501 106.543 334.119C106.187 323.737 97.9917 315.58 97.9917 315.58Z"
        fill="${mainColor}"
      />
      <path
        d="M98.3457 353.77L107.61 363.039L109.035 361.556L99.4148 352.287L98.3457 353.77Z"
        fill="${mainColor}"
      />
      <path
        d="M109.035 363.411C99.7712 367.49 95.8519 378.613 95.8519 378.613C95.8519 378.613 106.185 383.062 115.449 378.984C124.357 374.534 128.633 363.411 128.633 363.411C128.633 363.411 117.943 358.962 109.035 363.411Z"
        fill="${mainColor}"
      />
      <path
        d="M128.99 343.017C125.071 333.747 114.381 329.298 114.381 329.298C114.381 329.298 110.106 340.421 114.025 349.691C117.945 359.331 128.634 363.41 128.634 363.41C128.634 363.41 132.91 352.657 128.99 343.017Z"
        fill="${mainColor}"
      />
      <path
        d="M128.278 364.522L140.393 369.342L141.105 367.488L128.991 362.668L128.278 364.522Z"
        fill="${mainColor}"
      />
      <path
        d="M137.895 375.277C128.987 379.356 124.711 390.479 124.711 390.479C124.711 390.479 135.401 394.929 144.308 390.85C153.573 386.771 157.492 375.648 157.492 375.648C157.492 375.648 147.159 371.198 137.895 375.277Z"
        fill="${mainColor}"
      />
      <path
        d="M157.493 375.647C157.493 375.647 161.769 364.523 157.85 354.883C153.93 345.613 143.241 341.164 143.241 341.164C143.241 341.164 138.965 352.288 142.884 361.928C146.804 371.198 157.493 375.647 157.493 375.647Z"
        fill="${mainColor}"
      />
      <path
        d="M157.85 374.533L157.137 376.387L169.252 381.207L169.965 379.354L157.85 374.533Z"
        fill="${mainColor}"
      />
      <path
        d="M146.694 34.6057L150.097 41.1115L157.631 42.2733L152.284 47.1527L153.499 54.3557L146.694 50.8704L140.132 54.3557L141.347 47.1527L136 42.2733L143.534 41.1115L146.694 34.6057Z"
        fill="${mainColor}"
      />
      <path
        d="M174.243 12.0342L178.227 20.7087L187.727 22.2577L180.985 28.7636L182.517 38.3676L174.243 33.7205L165.663 38.3676L167.501 28.7636L160.453 22.2577L169.953 20.7087L174.243 12.0342Z"
        fill="${mainColor}"
      />
      <path
        d="M215.004 0L220.073 10.1366L231.299 11.9467L222.97 19.5491L225.143 30.7717L215.004 25.3414L205.226 30.7717L207.037 19.5491L199.07 11.9467L209.934 10.1366L215.004 0Z"
        fill="${mainColor}"
      />
      <path
        d="M255.122 12.0342L259.412 20.7087L268.606 22.2577L261.864 28.7636L263.396 38.3676L255.122 33.7205L246.542 38.3676L248.38 28.7636L241.332 22.2577L250.832 20.7087L255.122 12.0342Z"
        fill="${mainColor}"
      />
      <path
        d="M283.538 34.6057L286.792 41.1115L293.999 42.2733L288.885 47.1527L290.047 54.3557L283.538 50.8704L277.261 54.3557L278.423 47.1527L273.309 42.2733L280.515 41.1115L283.538 34.6057Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}