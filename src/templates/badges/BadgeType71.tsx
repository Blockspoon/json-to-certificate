"use client";

import { ISvgProps } from "@/lib/interfaces";
import { CSSProperties, forwardRef, useEffect, useRef } from "react";

const BadgeType71 = forwardRef<SVGSVGElement, ISvgProps>(
  (
    {
      mainColor = "#96A6B4",
      subColor = "#96A6B4",
      extraColor1 = "#96A6B4",
      extraColor2 = "#96A6B4",
    },
    ref
  ) => {
    const svgRef = useRef(null);

    // SVG 요소에 대한 참조를 외부로 전달
    useEffect(() => {
      if (ref && typeof ref === "function") {
        ref(svgRef.current);
      } else if (ref) {
        ref.current = svgRef.current;
      }
    }, [ref]);

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          isolation: "isolate", // 렌더링 컨텍스트 분리
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, contents", // GPU 힌트x
          transform: "translateZ(0)", // GPU 가속
          backfaceVisibility: "hidden", // 렌더링 최적화
        }}
      >
        <svg
          key={`icon-${Date.now()}`} // 리사이징 중 React가 요소를 재사용하지 않도록 함
          width="100%" //  원래 크기에 가깝게 표시
          height="100%" //  원래 크기에 가깝게 표시
          viewBox="0 0 560 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            zIndex: 1, // z-index 지정
            mixBlendMode: "normal", // 🐡 블렌드 모드 설정
            pointerEvents: "none", // 🐡 마우스 이벤트 무시
            display: "block",
          }}
        >
          <rect
            x="280"
            y="0.000488281"
            width="395.98"
            height="395.98"
            rx="12"
            transform="rotate(45 280 0.000488281)"
            fill={mainColor}
          />
          <rect
            x="280"
            y="16.7168"
            width="372.339"
            height="372.339"
            rx="12"
            transform="rotate(45 280 16.7168)"
            fill={extraColor2}
          />
          <mask id="path-3-inside-1_2407_502" fill={extraColor2}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M97.7458 361L25.5147 288.769C20.8284 284.083 20.8284 276.485 25.5147 271.798L96.313 201H464.313L535.111 271.798C539.798 276.485 539.798 284.083 535.111 288.769L462.88 361H97.7458Z"
            />
          </mask>
          <path
            d="M97.7458 361L93.5032 365.243L95.2605 367H97.7458V361ZM25.5147 288.769L21.2721 293.012H21.2721L25.5147 288.769ZM25.5147 271.798L21.2721 267.556H21.2721L25.5147 271.798ZM96.313 201V195H93.8278L92.0704 196.757L96.313 201ZM464.313 201L468.556 196.757L466.798 195H464.313V201ZM535.111 271.798L539.354 267.556L535.111 271.798ZM535.111 288.769L539.354 293.012V293.012L535.111 288.769ZM462.88 361V367H465.366L467.123 365.243L462.88 361ZM101.988 356.757L29.7574 284.526L21.2721 293.012L93.5032 365.243L101.988 356.757ZM29.7574 284.526C27.4142 282.183 27.4142 278.384 29.7574 276.041L21.2721 267.556C14.2426 274.585 14.2427 285.982 21.2721 293.012L29.7574 284.526ZM29.7574 276.041L100.556 205.243L92.0704 196.757L21.2721 267.556L29.7574 276.041ZM96.313 207H464.313V195H96.313V207ZM460.07 205.243L530.869 276.041L539.354 267.556L468.556 196.757L460.07 205.243ZM530.869 276.041C533.212 278.384 533.212 282.183 530.869 284.526L539.354 293.012C546.383 285.982 546.383 274.585 539.354 267.556L530.869 276.041ZM530.869 284.526L458.638 356.757L467.123 365.243L539.354 293.012L530.869 284.526ZM462.88 355H97.7458V367H462.88V355Z"
            fill={mainColor}
            mask="url(#path-3-inside-1_2407_502)"
          />
          <mask
            id="mask0_2407_502"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="98"
            y="361"
            width="364"
            height="177"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M461.134 361L288.053 534.082C283.366 538.768 275.768 538.768 271.082 534.082L98 361H461.134Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_2407_502)">
            <path
              d="M270.943 358L246.989 381.933L223.057 358L204 358L246.989 401L290 358L270.943 358Z"
              fill={mainColor}
            />
            <path d="M187 363L187 393L217 393L187 363Z" fill={subColor} />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M431.5 422C469.332 422 500 391.332 500 353.5C500 315.668 469.332 285 431.5 285C393.668 285 363 315.668 363 353.5C363 391.332 393.668 422 431.5 422ZM431.5 392.773C453.19 392.773 470.773 375.19 470.773 353.5C470.773 331.81 453.19 314.227 431.5 314.227C409.81 314.227 392.227 331.81 392.227 353.5C392.227 375.19 409.81 392.773 431.5 392.773Z"
              fill={subColor}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M190.5 527C220.047 527 244 503.047 244 473.5C244 443.953 220.047 420 190.5 420C160.953 420 137 443.953 137 473.5C137 503.047 160.953 527 190.5 527ZM190.5 504.173C207.44 504.173 221.173 490.44 221.173 473.5C221.173 456.56 207.44 442.827 190.5 442.827C173.56 442.827 159.827 456.56 159.827 473.5C159.827 490.44 173.56 504.173 190.5 504.173Z"
              fill={subColor}
            />
            <circle cx="334" cy="496" r="64" fill={mainColor} />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M330 424.5C330 423.119 328.881 422 327.5 422C326.119 422 325 423.119 325 424.5L325 429H320.5C319.119 429 318 430.119 318 431.5C318 432.881 319.119 434 320.5 434H325L325 438.5C325 439.881 326.119 441 327.5 441C328.881 441 330 439.881 330 438.5V434H334.5C335.881 434 337 432.881 337 431.5C337 430.119 335.881 429 334.5 429H330V424.5Z"
              fill={subColor}
            />
          </g>
          <rect
            x="280"
            y="22.3737"
            width="364.339"
            height="364.339"
            rx="8"
            transform="rotate(45 280 22.3737)"
            stroke={extraColor1}
            stroke-width="8"
          />
        </svg>
      </div>
    );
  }
);

BadgeType71.displayName = "BadgeType71";

export default BadgeType71;
