export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconTrophy4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 136 139"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.4819 138.683H67.4127H67.7037H108.635C108.761 138.683 108.889 138.684 109.016 138.686C109.415 138.69 109.816 138.694 110.211 138.659C111.889 138.509 112.538 137.506 112.576 136.147C112.582 135.925 112.589 135.685 112.596 135.43C112.701 131.763 112.895 124.977 112.395 121.828C111.719 117.548 107.938 112.311 102.895 112.07C102.433 112.047 101.98 112.024 101.532 112.001L101.532 112.001C99.5467 111.899 97.6514 111.801 95.4837 111.801L95.4774 111.804V110.136V104.572C95.4742 101.733 94.8012 96.9185 91.5783 96.1158C84.213 94.2825 82.9359 92.0532 81.9418 88.3231L81.9432 88.2589C81.9609 87.383 81.9753 86.6775 82.9359 85.9704C84.131 85.0908 85.0729 84.4468 86.0632 83.7696L86.0638 83.7692C86.9974 83.1308 87.974 82.463 89.2464 81.5406C96.419 76.3418 99.5973 72.5921 103.338 65.2888C103.828 64.337 108.052 61.3705 109.104 60.8281C125.162 52.5459 131.401 38.2957 134.829 22.4907C135.935 17.3977 133.884 11.6104 128.038 10.2545C126.689 9.94259 125.239 9.86123 123.833 9.83682C121.451 9.79632 119.067 9.80383 116.619 9.81154H116.619H116.619C115.625 9.81467 114.621 9.81784 113.602 9.81784C113.602 9.46981 113.604 9.1406 113.606 8.82381C113.61 8.2248 113.614 7.6702 113.602 7.11676C113.507 2.79396 110.255 0.00610197 105.247 0.00610197C92.7328 0.00206908 80.2182 3.48417e-05 67.7037 3.16722e-08C67.6552 -1.03201e-07 67.6067 2.40982e-07 67.5582 1.66126e-07C67.6067 9.12935e-08 67.6552 3.16722e-08 67.7037 3.16722e-08M67.4127 3.16722e-08C54.8982 3.48417e-05 42.3837 0.00206908 29.8691 0.00610197C24.861 0.00610197 21.6096 2.79396 21.5148 7.11676C21.5024 7.67017 21.5062 8.22474 21.5104 8.82372V8.82381L21.5104 8.82467C21.5126 9.14119 21.5148 9.47012 21.5148 9.81784C20.4958 9.81784 19.4916 9.81467 18.4979 9.81154H18.4979H18.4977C16.0497 9.80383 13.6659 9.79632 11.2836 9.83682C9.87753 9.86123 8.42723 9.94259 7.07802 10.2545C1.23252 11.6104 -0.818701 17.3977 0.287203 22.4907C3.71551 38.2957 9.95435 52.5459 26.0121 60.8281C27.0643 61.3705 31.2883 64.337 31.778 65.2888C35.5191 72.5921 38.6974 76.3418 45.87 81.5406C47.1425 82.463 48.1192 83.1309 49.0528 83.7692L49.0532 83.7696C50.0435 84.4468 50.9854 85.0908 52.1805 85.9704C53.1412 86.6775 53.1555 87.383 53.1733 88.2589L53.1746 88.3231C52.1805 92.0532 50.9035 94.2825 43.5381 96.1158C40.3152 96.9185 39.6422 101.733 39.639 104.572V110.136V111.804L39.6327 111.801C37.4651 111.801 35.5697 111.899 33.5847 112.001L33.5844 112.001C33.1361 112.024 32.6832 112.047 32.2215 112.07C27.1786 112.311 23.3972 117.548 22.721 121.828C22.2218 124.977 22.4158 131.763 22.5206 135.43C22.5279 135.685 22.5348 135.925 22.5409 136.147C22.5788 137.506 23.2274 138.509 24.9052 138.659C25.3004 138.694 25.7009 138.69 26.1001 138.686C26.2276 138.684 26.3549 138.683 26.4819 138.683"
        fill="white"
      />
      <path
        d="M14.3429 18.1088H26.2857L28.4571 17.1208L30.6286 9.71056C32.981 9.21655 38.0114 8.22852 39.3143 8.22852H100.657L105 15.6388L113.686 17.1208L121.829 19.5909C122.552 21.8963 124 26.9023 124 28.4832C124 30.064 114.59 43.9623 109.886 50.7139C106.448 52.6899 99.3543 56.8397 98.4857 57.6301C97.6171 58.4205 90.8857 69.1571 87.6286 74.4266L71.8857 84.3069L85.4571 103.574L88.7143 115.924L102.829 120.37L105 130.744H30.6286V122.346L34.4286 118.888L44.7429 116.912L46.9143 103.574L58.8571 88.2591V82.3309L55.0571 80.8488L46.9143 75.4147L37.6857 60.5942L24.6571 50.7139L10 29.4712V22.061L14.3429 18.1088Z"
        fill="${mainColor}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M93.7974 115.527C93.0839 115.536 92.3617 115.545 91.6274 115.545L91.6218 115.548V113.987V102.711C91.619 100.054 91.028 99.3436 88.1976 98.5925C81.7293 96.8772 77.2757 91.3455 77.3977 85.2301C77.4144 84.3826 77.7363 83.9487 78.5687 83.4894C78.8986 83.3074 79.2299 83.1259 79.5615 82.9443C81.8409 81.6957 84.1391 80.4368 86.1497 78.8839C92.4487 74.0196 96.6666 67.7394 99.952 60.9059C100.382 60.0153 100.959 59.4012 101.883 58.8937C115.985 51.1443 124.554 39.8551 127.565 25.0667C128.536 20.3013 125.351 15.7288 120.217 14.4601C119.032 14.1682 117.758 14.0921 116.524 14.0693C114.432 14.0314 112.338 14.0384 110.188 14.0456C109.315 14.0486 108.433 14.0515 107.539 14.0515C107.539 13.7259 107.541 13.4178 107.542 13.1214C107.546 12.561 107.549 12.042 107.539 11.5242C107.455 7.47947 104.6 4.87094 100.202 4.87094C78.0304 4.86333 55.8591 4.86333 33.6877 4.87094C29.3894 4.87094 26.5035 7.50484 26.4119 11.4531C26.401 11.9988 26.4044 12.5444 26.4081 13.1211C26.41 13.4213 26.4119 13.73 26.4119 14.0515H24.7082C23.8659 14.0515 23.0236 14.0474 22.1814 14.0433C20.2987 14.0341 18.416 14.0249 16.5333 14.0617C9.96239 14.1885 5.21178 19.3371 6.39111 25.1174C9.43239 40.0048 18.1289 51.2991 32.3197 59.0866C32.9357 59.4241 33.4546 60.0305 33.8042 60.6192C34.4157 61.6476 34.9913 62.6955 35.5668 63.7432C36.5036 65.4485 37.4401 67.1531 38.5299 68.7721C42.7338 75.0194 48.0144 80.3227 55.4178 83.5123C56.6138 84.0274 56.908 84.6415 56.8608 85.725C56.5888 91.924 52.2905 96.9634 45.7862 98.6407C43.3637 99.2649 42.6339 100.135 42.6312 102.455C42.6275 105.017 42.6287 107.579 42.6299 110.141C42.6305 111.422 42.6312 112.703 42.6312 113.985V115.545C41.8901 115.545 41.162 115.535 40.4434 115.526C38.8883 115.505 37.3774 115.484 35.8743 115.566C30.8157 115.837 26.9114 119.549 26.7616 124.168C26.7111 125.734 26.7194 127.301 26.7276 128.868C26.7307 129.456 26.7338 130.043 26.7338 130.631C26.7366 133.688 27.7689 134.627 31.1209 134.627H103.176C103.288 134.627 103.4 134.628 103.512 134.63C103.862 134.633 104.214 134.637 104.561 134.604C106.035 134.465 107.383 133.526 107.416 132.255C107.431 131.708 107.449 131.16 107.468 130.611C107.557 127.945 107.647 125.264 107.258 122.65C106.664 118.646 102.802 115.791 98.3731 115.566C96.865 115.487 95.3517 115.507 93.7974 115.527ZM59.4444 10.8965C61.9482 10.8957 64.452 10.8949 66.9558 10.8949L66.9586 10.8974C69.4892 10.8974 72.02 10.8986 74.5508 10.8997C82.7765 10.9033 91.0029 10.907 99.2278 10.8721C100.565 10.867 101.081 11.0928 101.037 12.4529C100.952 15.0861 100.929 17.7234 100.907 20.3606C100.866 25.1136 100.825 29.8661 100.418 34.5924C99.3943 46.4753 95.8424 57.7265 88.3363 67.6835C84.7456 72.4489 80.3891 76.486 74.3454 78.6251C66.2871 81.4772 59.1223 79.6604 52.6818 74.8164C46.7269 70.3377 42.8393 64.4762 39.8202 58.102C34.9558 47.838 33.0883 37.0207 32.9634 25.9091C32.9393 23.7057 32.9437 21.5016 32.9481 19.2972C32.9528 16.9424 32.9575 14.5873 32.9274 12.2322C32.9135 11.1791 33.2576 10.8721 34.4092 10.8746C42.753 10.9019 51.0985 10.8992 59.4444 10.8965ZM101.001 128.507H33.4019L33.3991 128.509C33.3991 128.035 33.389 127.563 33.3789 127.092C33.3556 126.002 33.3325 124.92 33.4352 123.848C33.5462 122.709 34.4369 121.958 35.6579 121.673C36.2739 121.531 36.9343 121.503 37.5753 121.503C57.252 121.496 76.9288 121.496 96.6055 121.496C99.8799 121.496 100.995 122.526 101.001 125.533V128.507ZM84.9427 115.401H49.3048V104.786H84.9427V115.401ZM27.7677 41.2542C28.2966 44.2616 29.0014 47.2792 29.9222 50.312L29.9249 50.3145C25.1244 46.8077 21.4588 42.895 18.559 38.3808C15.8507 34.1635 14.0193 29.6392 13.0148 24.8358C12.3599 21.702 13.8278 20.0806 17.3353 20.0806C20.1962 20.0806 23.0571 20.0856 25.918 20.0932C25.9722 20.0932 26.0274 20.1065 26.1378 20.1329C26.2083 20.1498 26.3015 20.1721 26.4314 20.1998C26.3761 22.3874 26.3647 24.5741 26.4129 26.762H21.4545C20.3372 27.2234 19.4347 28.1002 22.4644 33.453C24.5349 37.0989 26.0599 39.3042 27.7677 41.2542ZM114.812 39.2562C112.003 43.4228 108.51 47.0361 104.039 50.3171H104.037C105.082 46.8351 105.854 43.3725 106.406 39.9144C107.702 38.2617 108.984 36.295 110.598 33.453C113.628 28.1002 112.725 27.2234 111.608 26.762H107.537C107.583 24.5587 107.565 22.3497 107.497 20.1313C108.592 20.1313 109.671 20.12 110.74 20.1088C113.248 20.0824 115.695 20.0568 118.133 20.1795C120.178 20.2836 121.391 22.0826 121.044 24.0872C120.106 29.5301 117.969 34.5721 114.812 39.2562ZM70.7852 85.8721C70.9877 90.5842 72.7637 94.8193 76.3266 98.6128H58.0068C61.4227 94.8751 63.318 90.6883 63.4567 85.8721H70.7852Z"
        fill="${subColor}"
      />
    </svg>
  `;
}