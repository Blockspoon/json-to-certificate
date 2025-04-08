export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconPhrase3({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 47 402"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M17.0703 370.863C12.4453 371.488 9.50781 374.801 9.50781 379.863C9.50781 386.551 14.5703 390.613 23.3828 390.613C32.5078 390.613 37.2578 386.426 37.2578 379.926C37.2578 375.051 34.6328 371.676 30.1953 370.863L30.2578 360.113C38.3203 360.988 46.6328 367.863 46.6328 380.113C46.6328 392.363 38.2578 401.488 23.3828 401.488C8.44531 401.488 0.132812 392.176 0.132811 380.113C0.132811 369.238 6.25781 361.238 17.0703 360.113L17.0703 370.863ZM46.0078 353.926L0.75781 353.926L0.757809 322.613L9.44531 322.613L9.44531 343.301L19.0078 343.301L19.0078 324.238L27.6953 324.238L27.6953 343.301L37.3203 343.301L37.3203 322.551L46.0078 322.551L46.0078 353.926ZM46.0078 315.801L0.757809 315.801L0.757808 297.301C0.757807 287.113 6.50781 280.863 15.7578 280.863C21.9766 280.863 26.4453 283.707 28.6953 288.676L46.0078 279.238L46.0078 290.926L30.4453 299.238L30.4453 305.176L46.0078 305.176L46.0078 315.801ZM21.9453 305.176L21.9453 299.551C21.9453 294.551 20.0078 291.863 15.7578 291.863C11.5078 291.863 9.38281 294.551 9.38281 299.551L9.38281 305.176L21.9453 305.176ZM9.44531 276.426L0.757807 276.426L0.757805 238.363L9.44531 238.363L9.44531 252.113L46.0078 252.113L46.0078 262.676L9.44531 262.676L9.44531 276.426ZM0.757805 222.426L46.0078 222.426L46.0078 233.051L0.757805 233.051L0.757805 222.426ZM46.0078 215.551L0.757804 215.551L0.757803 184.863L9.4453 184.863L9.4453 204.926L19.0078 204.926L19.0078 186.863L27.6953 186.863L27.6953 204.926L46.0078 204.926L46.0078 215.551ZM0.757802 168.738L46.0078 168.738L46.0078 179.363L0.757803 179.363L0.757802 168.738ZM17.0703 131.801C12.4453 132.426 9.5078 135.738 9.5078 140.801C9.5078 147.488 14.5703 151.551 23.3828 151.551C32.5078 151.551 37.2578 147.363 37.2578 140.863C37.2578 135.988 34.6328 132.613 30.1953 131.801L30.2578 121.051C38.3203 121.926 46.6328 128.801 46.6328 141.051C46.6328 153.301 38.2578 162.426 23.3828 162.426C8.4453 162.426 0.132802 153.113 0.132801 141.051C0.132801 130.176 6.2578 122.176 17.0703 121.051L17.0703 131.801ZM46.0078 106.613L46.0078 118.113L0.757799 102.738L0.757799 88.6133L46.0078 73.3008L46.0078 84.7383L36.3203 87.8008L36.3203 103.551L46.0078 106.613ZM28.1953 100.988L28.1953 90.3633L11.9453 95.4883L11.9453 95.8633L28.1953 100.988ZM9.4453 75.6758L0.757798 75.6758L0.757796 37.6133L9.4453 37.6133L9.4453 51.3633L46.0078 51.3633L46.0078 61.9258L9.4453 61.9258L9.4453 75.6758ZM46.0078 32.3008L0.757796 32.3008L0.757795 0.988281L9.44529 0.98828L9.4453 21.6758L19.0078 21.6758L19.0078 2.61328L27.6953 2.61328L27.6953 21.6758L37.3203 21.6758L37.3203 0.925779L46.0078 0.925779L46.0078 32.3008Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 