import { ISvgProps } from "../../interface"; 

export function createIconPhrase4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 88 758"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <g opacity="0.4">
          <path
            d="M51.3741 679.661L51.3741 678.573L69.8747 680.096C73.212 682.273 76.2592 684.957 79.0161 688.149C81.4829 691.196 83.5143 694.969 85.1104 699.467C86.7066 703.675 87.5047 708.536 87.5047 714.05C87.3595 722.466 85.5458 729.939 82.0633 736.468C78.4357 742.998 73.5023 748.149 67.2628 751.922C60.7332 755.549 53.1153 757.363 44.4092 757.363C35.9932 757.363 28.593 755.549 22.2085 751.922C15.824 748.294 10.818 743.216 7.19039 736.686C3.56283 730.011 1.74905 722.248 1.74905 713.397C1.74905 707.448 2.54711 702.079 4.14324 697.291C5.59426 692.502 7.48059 688.294 9.80223 684.667L26.3439 682.273L26.3439 683.361C19.5241 685.102 14.3004 688.73 10.6728 694.244C7.19039 699.758 5.44916 706.142 5.44916 713.397C5.44916 720.507 7.04529 726.674 10.2376 731.898C13.4298 737.121 18.0005 741.184 23.9497 744.086C29.7538 746.843 36.5737 748.222 44.4092 748.222C52.2447 748.222 59.0645 746.843 64.8686 744.086C70.8178 741.184 75.4611 737.194 78.7985 732.115C81.9908 726.892 83.6594 720.87 83.8045 714.05C83.8045 708.391 82.7888 703.095 80.7574 698.161C78.7259 693.373 75.316 689.31 70.5277 685.973C65.7393 682.635 59.3547 680.531 51.3741 679.661ZM3.49027 655.937L3.49027 648.101L85.7634 648.101L85.7634 655.937L3.49027 655.937ZM82.0633 648.536L82.0633 615.453L85.7634 615.453L85.7634 648.536L82.0633 648.536ZM43.3209 648.536L43.3209 620.677L47.021 620.677L47.021 648.536L43.3209 648.536ZM2.83731 656.753L3.27261 615.453L6.97274 615.453L6.97274 654.57L2.83731 656.753ZM66.3922 609.359L66.3922 608.053L85.5457 615.018L85.5457 635.259L81.8456 630.906C81.8456 626.553 81.1927 623.071 79.8868 620.459C78.5808 617.702 76.7671 615.453 74.4454 613.712C72.1238 612.116 69.4394 610.665 66.3922 609.359ZM46.3681 627.642L46.3681 620.677L54.2036 620.677L54.2036 621.983L52.4624 621.983C50.8662 621.983 49.5603 622.49 48.5446 623.506C47.3838 624.667 46.8034 626.045 46.8034 627.642L46.3681 627.642ZM36.3447 621.983L36.3447 620.677L43.9626 620.677L43.9626 627.642L43.745 627.642C43.745 626.045 43.1645 624.667 42.0037 623.506C40.8429 622.49 39.4644 621.983 37.8683 621.983L36.3447 621.983ZM6.31977 623.724L6.31977 615.453L15.8965 615.453L15.8965 616.759L13.72 616.759C11.8337 616.759 10.2375 617.412 8.93161 618.718C7.48058 620.169 6.75507 621.838 6.75507 623.724L6.31977 623.724ZM0.878425 615.453L4.14323 615.453L3.5106 630.253C3.5106 628.512 3.43805 626.626 3.29295 624.594C3.00274 622.563 2.03925 620.749 1.74904 619.153C1.45884 617.412 1.16863 616.178 0.878425 615.453ZM76.622 655.937L76.622 655.719L85.1104 655.719L85.1104 665.296L84.0222 665.296C84.0222 665.296 84.0222 665.078 84.0222 664.643C84.0222 664.062 84.0222 663.772 84.0222 663.772C84.0222 661.741 83.2967 659.999 81.8456 658.548C80.3946 656.952 78.6534 656.082 76.622 655.937ZM2.83731 655.719L11.5435 655.719L11.5435 655.937C9.51203 655.937 7.7708 656.735 6.31977 658.331C4.86875 659.927 4.14323 661.741 4.14323 663.772C4.14323 663.772 4.14323 663.99 4.14323 664.425C4.14323 665.005 4.14323 665.296 4.14323 665.296L2.83731 665.296L2.83731 655.719ZM2.83731 581.281L2.83731 564.087C2.83731 560.459 3.34516 557.194 4.36088 554.292C5.3766 551.39 6.90017 548.923 8.93161 546.892C10.8179 544.861 13.1396 543.337 15.8965 542.321C18.5084 541.16 21.5555 540.58 25.038 540.58C28.8107 540.58 32.4382 541.523 35.9207 543.41C39.258 545.151 42.0875 547.618 44.4092 550.81C46.4406 553.857 47.4563 557.267 47.4563 561.04C48.0367 559.734 49.1976 558.283 50.9388 556.686C52.5349 555.09 54.131 553.639 55.7272 552.333C55.7272 552.333 56.5253 551.826 58.1214 550.81C59.5724 549.649 61.3862 548.27 63.5627 546.674C65.7393 545.078 67.9158 543.41 70.0923 541.668C72.1238 539.927 73.7925 538.476 75.0984 537.315C76.8396 535.719 78.3632 534.123 79.6691 532.527C80.975 530.786 82.0633 529.044 82.9339 527.303C83.6594 525.272 84.0222 523.095 84.0222 520.774L85.1104 520.774L85.1104 527.521C85.1104 531.148 84.6026 534.341 83.5869 537.098C82.4261 539.855 81.1201 542.104 79.6691 543.845C77.9279 545.731 76.3317 547.327 74.8807 548.633C74.5905 548.923 73.7199 549.649 72.2689 550.81C70.6728 551.826 68.859 553.059 66.8275 554.51C64.7961 555.961 62.7647 557.412 60.7332 558.863C58.7018 560.314 56.9606 561.62 55.5095 562.781C54.0585 563.796 53.1879 564.377 52.8977 564.522C50.8663 565.973 49.0525 567.642 47.4563 569.528C45.8602 571.414 45.0622 573.446 45.0622 575.622L43.7562 575.622C43.7562 575.622 43.8288 575.042 43.9739 573.881C43.9739 572.575 43.9013 571.052 43.7562 569.31C43.7562 567.134 43.466 564.812 42.8856 562.345C42.3052 559.879 41.1444 557.557 39.4031 555.38C37.807 553.204 35.1952 551.535 31.5676 550.374C30.697 550.084 29.6813 549.867 28.5204 549.722C27.0694 549.576 25.7635 549.576 24.6027 549.722C19.2339 549.722 14.9534 551.1 11.7611 553.857C8.56886 556.469 6.90017 560.024 6.75507 564.522C6.60997 566.844 6.53742 569.238 6.53742 571.705C6.53742 574.026 6.53742 575.985 6.53742 577.581C6.53742 579.177 6.53742 579.975 6.53742 579.975C6.53742 579.975 6.24721 580.12 5.6668 580.411C5.08639 580.556 4.50599 580.773 3.92558 581.064C3.20007 581.209 2.83731 581.281 2.83731 581.281ZM2.83731 587.593L2.83731 579.54L85.1104 579.54L85.1104 587.593L2.83731 587.593ZM76.622 587.593L76.622 587.158L85.3281 587.158L85.3281 596.735L84.0222 596.735C84.0222 596.735 84.0222 596.517 84.0222 596.082C84.0222 595.501 84.0222 595.211 84.0222 595.211C84.0222 593.18 83.2967 591.439 81.8456 589.987C80.3946 588.391 78.6534 587.593 76.622 587.593ZM2.83731 587.158L11.5435 587.158L11.5435 587.593C9.51203 587.593 7.77079 588.391 6.31977 589.988C4.86874 591.439 4.14323 593.18 4.14323 595.211C4.14323 595.211 4.14323 595.501 4.14323 596.082C4.14323 596.517 4.14323 596.735 4.14323 596.735L2.83731 596.735L2.83731 587.158ZM85.3281 580.193L76.622 580.193L76.622 579.758C78.6534 579.758 80.3946 578.96 81.8456 577.364C83.2967 575.913 84.0222 574.099 84.0222 571.922C84.0222 571.922 84.0222 571.705 84.0222 571.269C84.0222 570.834 84.0222 570.616 84.0222 570.616L85.3281 570.616L85.3281 580.193ZM3.27261 495.308L3.27261 487.473L85.3281 487.473L85.3281 495.308L3.27261 495.308ZM2.61966 526.433L2.61966 456.348L6.31976 456.348L6.31977 526.433L2.61966 526.433ZM5.6668 464.837L5.66679 456.348L15.2436 456.348L15.0259 457.654L13.067 457.654C11.1807 457.654 9.58457 458.379 8.27865 459.83C6.82763 461.136 6.10211 462.805 6.10211 464.837L5.6668 464.837ZM0.443117 456.348L3.70792 456.348L2.40199 471.148C2.40199 469.407 2.32944 467.593 2.18434 465.707C1.89413 463.676 1.60392 461.789 1.31372 460.048C1.02351 458.307 0.733322 457.074 0.443117 456.348ZM76.1866 495.308L76.1866 495.09L84.8928 495.09L84.8928 504.667L83.5869 504.667C83.5869 504.667 83.5869 504.45 83.5869 504.014C83.5869 503.434 83.5869 503.144 83.5869 503.144C83.5869 501.112 82.9339 499.371 81.628 497.92C80.0319 496.324 78.2181 495.453 76.1866 495.308ZM84.8928 487.908L76.1866 487.908L76.1866 487.473C78.2181 487.473 80.0319 486.747 81.628 485.296C82.9339 483.7 83.5869 481.886 83.5869 479.855C83.5869 479.855 83.5869 479.564 83.5869 478.984C83.5869 478.404 83.5869 478.113 83.5869 478.113L84.8928 478.113L84.8928 487.908ZM5.6668 526.65L5.6668 518.162L5.88446 518.162C6.02957 520.193 6.75508 521.934 8.061 523.385C9.36693 524.691 11.0356 525.344 13.067 525.344L15.0259 525.344L15.2436 526.65L5.6668 526.65ZM3.70793 526.65L0.225453 526.65C0.515658 525.78 0.878414 524.546 1.31372 522.95C1.60393 521.209 1.82159 519.395 1.96669 517.509C2.25689 515.477 2.40199 513.591 2.40199 511.85L3.70793 526.65ZM2.61965 437.63L2.61965 429.794L84.8928 429.794L84.8928 437.63L2.61965 437.63ZM76.1866 437.63L76.1866 437.412L84.8928 437.412L84.8928 446.989L83.5869 446.989C83.5869 446.989 83.5869 446.771 83.5869 446.336C83.5869 445.756 83.5869 445.465 83.5869 445.465C83.5869 443.289 82.9339 441.475 81.628 440.024C80.0319 438.573 78.2181 437.775 76.1866 437.63ZM2.61965 437.412L11.1081 437.412L11.1081 437.63C9.0767 437.775 7.33549 438.573 5.88446 440.024C4.43344 441.475 3.70792 443.289 3.70792 445.465C3.70792 445.465 3.70792 445.756 3.70792 446.336C3.70792 446.771 3.70792 446.989 3.70792 446.989L2.61965 446.989L2.61965 437.412ZM84.8928 430.23L76.1866 430.23L76.1866 430.012C78.2181 429.867 80.0319 429.069 81.628 427.618C82.9339 426.022 83.5869 424.208 83.5869 422.176C83.5869 422.176 83.5869 421.959 83.5869 421.523C83.5869 420.943 83.5869 420.653 83.5869 420.653L84.8928 420.653L84.8928 430.23ZM11.1081 429.794L11.1081 430.23L2.61965 430.23L2.61965 420.435L3.70792 420.435C3.70792 420.58 3.70792 420.87 3.70792 421.306C3.70792 421.741 3.70792 421.959 3.70792 421.959C3.70792 424.135 4.43344 426.022 5.88446 427.618C7.33549 429.069 9.0767 429.794 11.1081 429.794ZM2.61965 396.711L2.61965 388.875L84.8928 388.875L84.8928 396.711L2.61965 396.711ZM42.4503 389.311L42.4503 361.451L46.1504 361.451L46.1504 389.311L42.4503 389.311ZM2.18433 398.234L2.40198 356.227L6.10211 356.227L6.10211 389.311L2.18433 398.234ZM45.4974 368.416L45.4974 361.451L53.333 361.451L53.333 362.539L51.5918 362.539C49.9956 362.539 48.6897 363.12 47.674 364.28C46.5132 365.441 45.9327 366.82 45.9327 368.416L45.4974 368.416ZM34.6148 362.539L34.6148 361.451L42.4503 361.451L42.4503 368.416C42.4503 366.82 41.4346 365.441 40.2738 364.28C39.1129 363.12 37.7345 362.539 36.1383 362.539L34.6148 362.539ZM5.44914 363.41L5.44914 356.227L13.5023 356.227L13.5023 357.533L11.7611 357.533C10.165 357.533 8.7865 358.114 7.62568 359.274C6.46486 360.435 5.88446 361.814 5.88446 363.41L5.44914 363.41ZM0.00779497 356.227L3.49025 356.227L2.40198 371.165C2.40198 369.424 2.25689 367.537 1.96668 365.506C1.82158 363.474 1.38627 361.524 1.09606 359.927C0.660756 358.186 0.298 356.953 0.00779497 356.227ZM75.969 396.711L75.969 396.493L84.4575 396.493L84.4575 406.07L83.3692 406.07C83.3692 406.07 83.3692 405.852 83.3692 405.417C83.3692 404.837 83.3692 404.546 83.3692 404.546C83.3692 402.37 82.6437 400.556 81.1927 399.105C79.7416 397.654 78.0004 396.856 75.969 396.711ZM2.18433 396.493L10.6728 396.493L10.6728 396.711C8.6414 396.711 6.97272 397.509 5.66679 399.105C4.07066 400.556 3.2726 402.37 3.2726 404.546C3.2726 404.546 3.2726 404.764 3.2726 405.199C3.2726 405.78 3.2726 406.07 3.2726 406.07L2.18434 406.07L2.18433 396.493ZM84.4575 389.311L75.969 389.311L75.969 389.093C78.0004 388.948 79.7416 388.15 81.1927 386.699C82.6437 385.103 83.3692 383.289 83.3692 381.257C83.3692 381.257 83.3692 381.04 83.3692 380.604C83.3692 380.024 83.3692 379.734 83.3692 379.734L84.4575 379.734L84.4575 389.311ZM2.18433 331.197L2.18433 323.362L84.4575 323.362L84.4575 331.197L2.18433 331.197ZM75.969 331.197L75.969 330.979L84.4575 330.979L84.4575 340.556L83.3692 340.556C83.3692 340.556 83.3692 340.338 83.3692 339.903C83.3692 339.323 83.3692 339.033 83.3692 339.033C83.3692 337.001 82.6437 335.26 81.1927 333.809C79.7416 332.213 78.0004 331.342 75.969 331.197ZM2.18433 330.979L10.6728 330.979L10.6728 331.197C8.6414 331.342 6.97271 332.213 5.66679 333.809C4.07066 335.26 3.2726 337.001 3.2726 339.033C3.2726 339.033 3.2726 339.323 3.2726 339.903C3.2726 340.339 3.2726 340.556 3.2726 340.556L2.18433 340.556L2.18433 330.979ZM84.4575 323.797L75.969 323.797L75.969 323.579C78.0004 323.434 79.7416 322.636 81.1927 321.185C82.6437 319.734 83.3692 317.92 83.3692 315.744C83.3692 315.744 83.3692 315.526 83.3692 315.091C83.3692 314.51 83.3692 314.22 83.3692 314.22L84.4575 314.22L84.4575 323.797ZM10.6728 323.362L10.6728 323.797L2.18433 323.797L2.18433 314.002L3.2726 314.002C3.2726 314.147 3.2726 314.438 3.2726 314.873C3.2726 315.453 3.2726 315.744 3.2726 315.744C3.2726 317.775 4.07066 319.589 5.66679 321.185C6.97271 322.636 8.6414 323.362 10.6728 323.362ZM50.0682 224.329L50.0682 223.458L68.5688 224.982C71.9061 227.013 74.9533 229.625 77.7102 232.818C80.3221 236.01 82.3535 239.782 83.8045 244.135C85.4007 248.343 86.1987 253.277 86.1987 258.936C86.0536 267.352 84.2398 274.825 80.7573 281.354C77.2749 287.884 72.3414 292.963 65.9569 296.59C59.5724 300.218 52.0271 302.031 43.3209 302.031C34.7599 302.031 27.2871 300.218 20.9026 296.59C14.518 292.963 9.51202 287.884 5.88445 281.354C2.25689 274.825 0.443109 267.134 0.443108 258.283C0.443108 252.189 1.24117 246.82 2.8373 242.177C4.43342 237.243 6.31975 233.035 8.49629 229.553L25.038 227.159L25.038 228.247C18.2182 229.988 13.067 233.616 9.58456 239.13C5.957 244.498 4.14322 250.883 4.14322 258.283C4.14322 265.248 5.73934 271.415 8.93159 276.784C12.269 281.862 16.8397 285.852 22.6438 288.755C28.4479 291.657 35.2677 293.108 43.1033 293.108C50.9388 293.108 57.8311 291.657 63.7804 288.755C69.5845 285.852 74.1552 281.862 77.4925 276.784C80.6848 271.705 82.426 265.756 82.7163 258.936C82.7163 253.132 81.628 247.836 79.4514 243.047C77.42 238.114 74.0101 233.978 69.2217 230.641C64.5784 227.304 58.1939 225.2 50.0682 224.329ZM11.7611 176.445L0.443105 173.833L83.8045 138.138L83.8045 148.368L11.7611 176.445ZM75.969 206.917L75.969 200.169C77.5651 200.605 78.871 200.677 79.8867 200.387C81.0476 199.952 81.9182 199.299 82.4986 198.428C83.079 197.412 83.3692 196.397 83.3692 195.381L83.3692 194.293L84.4575 194.293L84.4575 218.67L83.3692 218.67C83.3692 218.67 83.3692 218.525 83.3692 218.235C83.3692 217.799 83.3692 217.582 83.3692 217.582C83.3692 215.695 82.7888 213.809 81.628 211.923C80.4672 209.891 78.5808 208.223 75.969 206.917ZM0.660755 175.139L0.660755 174.051L8.71394 172.963L84.2398 203.434L84.2398 210.617L12.6317 179.71C12.6317 179.71 12.1964 179.492 11.3258 179.057C10.3101 178.477 9.0767 177.969 7.62567 177.534C6.17465 176.808 4.79617 176.228 3.49024 175.792C2.18432 175.357 1.24117 175.139 0.660755 175.139ZM52.4624 194.946L52.4623 157.074L55.9448 157.074L55.9448 194.946L52.4624 194.946ZM75.969 151.633L75.969 141.621C78.5808 140.46 80.4672 138.864 81.628 136.832C82.7888 134.801 83.3692 132.842 83.3692 130.956C83.3692 130.956 83.3692 130.81 83.3692 130.52C83.3692 130.23 83.3692 130.085 83.3692 130.085L84.4575 130.085L84.4575 157.292L83.3692 157.292L83.3692 156.203C83.3692 154.607 82.7162 153.229 81.4103 152.068C80.1044 150.762 78.2906 150.617 75.969 151.633ZM2.61964 106.361L2.61964 98.3074L84.4575 98.3074L84.4575 106.361L2.61964 106.361ZM2.18432 137.485L2.18432 67.4006L5.66678 67.4006L5.66678 137.485L2.18432 137.485ZM5.44913 75.6716L5.44913 67.4006L15.0259 67.4006L14.8082 68.4889L12.8494 68.4889C10.963 68.4889 9.29434 69.2144 7.84332 70.6654C6.53739 72.1165 5.88445 73.7852 5.88445 75.6716L5.44913 75.6716ZM0.00778234 67.4006L3.49024 67.4006L2.18432 81.9835C2.18432 80.2422 2.03922 78.4284 1.74902 76.5421C1.60392 74.5106 1.38626 72.6244 1.09605 70.8831C0.805846 69.287 0.44309 68.1261 0.00778234 67.4006ZM75.969 106.361L75.969 105.925L84.6751 105.925L84.6751 115.502L83.3692 115.502C83.3692 115.502 83.3692 115.285 83.3692 114.849C83.3692 114.269 83.3692 113.979 83.3692 113.979C83.3692 111.947 82.7162 110.206 81.4103 108.755C79.8142 107.159 78.0004 106.361 75.969 106.361ZM84.6751 98.7428L75.969 98.7428L75.969 98.3074C78.0004 98.3074 79.8142 97.582 81.4103 96.1309C82.7162 94.5348 83.3692 92.721 83.3692 90.6896C83.3692 90.6896 83.3692 90.4719 83.3692 90.0366C83.3692 89.4562 83.3692 89.166 83.3692 89.166L84.6751 89.166L84.6751 98.7428ZM5.44913 137.268L5.44913 128.997L5.66678 128.997C5.81188 131.028 6.5374 132.697 7.84332 134.003C9.14924 135.309 10.8179 135.962 12.8494 135.962L14.8083 135.962L14.8083 137.268L5.44913 137.268ZM3.70791 137.268L0.225436 137.268C0.515641 136.397 0.805849 135.164 1.09605 133.567C1.53136 131.971 1.82157 130.157 1.96667 128.126C2.25688 126.095 2.40197 124.208 2.40197 122.467L3.70791 137.268ZM2.40197 48.2471L2.40197 40.4116L84.8928 40.4116L84.8928 48.2471L2.40197 48.2471ZM80.975 40.8469L80.975 7.76349L84.6751 7.76349L84.6751 40.8469L80.975 40.8469ZM42.2326 40.8469L42.2326 12.9872L45.7151 12.9872L45.7151 40.8469L42.2326 40.8469ZM2.18432 51.4933L2.18432 7.76349L5.88444 7.76349L5.88444 40.8469L2.18432 51.4933ZM65.5216 1.66925L65.5216 0.363278L84.4574 7.32818L84.4574 27.5699L80.975 23.2169C80.975 18.8638 80.322 15.3814 79.0161 12.7695C77.7102 10.0126 75.8964 7.76355 73.5748 6.02234C71.108 4.42621 68.4236 2.97516 65.5216 1.66925ZM45.4974 19.9521L45.4974 12.9872L53.333 12.9872L53.333 14.2931L51.5917 14.2931C49.9956 14.2931 48.6171 14.801 47.4563 15.8168C46.2955 16.9776 45.7151 18.356 45.7151 19.9521L45.4974 19.9521ZM34.6147 14.2932L34.6147 12.9872L42.4503 12.9872L42.4503 19.9521L42.2326 19.9521C42.0875 18.356 41.5071 16.9776 40.4914 15.8168C39.3306 14.801 37.9521 14.2932 36.356 14.2932L34.6147 14.2932ZM5.44913 16.252L5.44912 7.76349L14.8082 7.76349L14.8082 9.0694L12.6317 9.0694C10.8905 9.0694 9.29434 9.72241 7.84331 11.0283C6.53739 12.4794 5.81188 14.2205 5.66678 16.252L5.44913 16.252ZM0.00777973 7.76349L3.49024 7.76349L2.18432 22.564C2.18432 20.8228 2.03922 18.9365 1.74902 16.905C1.60391 15.0187 1.38625 13.2049 1.09605 11.4637C0.660741 9.72241 0.297985 8.48901 0.00777973 7.76349ZM75.969 48.2471L75.969 48.0295L84.4575 48.0295L84.4575 57.6062L83.3692 57.6062C83.3692 57.6062 83.3692 57.3885 83.3692 56.9532C83.3692 56.3728 83.3692 56.0827 83.3692 56.0827C83.3692 54.0513 82.6437 52.31 81.1926 50.8589C79.7416 49.2629 78.0004 48.3922 75.969 48.2471ZM2.18432 48.0295L10.6728 48.0295L10.6728 48.2471C8.64139 48.2471 6.9727 49.0452 5.66678 50.6414C4.07065 52.2375 3.27259 54.0513 3.27259 56.0827C3.27259 56.0827 3.27259 56.3003 3.27259 56.7356C3.27259 57.316 3.27259 57.6062 3.27259 57.6062L2.18432 57.6062L2.18432 48.0295Z"
            fill="${mainColor}"
          />
        </g>
      </svg>
    </div>
  `;
} 