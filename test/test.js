const fs = require("fs");
const { renderCertificate } = require("../dist/renderCertificate");
const {
  generateCertificateFile,
} = require("../dist/utils/generateCertificateFile");
const fsPromises = require("fs").promises;
const path = require("path");

const testCertificateData = {
  user: {
    name: "테스트 사용자",
  },
  kollegeInfo: {
    domain: "2fasdfsdfasdf",
    name: "ㅁㄴㅇㄹㅁㄴㄷㄹㅁㅈㄷ",
    color_main: "#e83b3b",
    color_sub: "#fffb80",
    plan: "starter",
    updated_at: "2025-02-26T17:14:02.126Z",
    images: {
      club_symbol: [
        {
          id: 3504,
          path: "uploads/club/symbol/f277bcc0-3194-473f-98f5-32ded1ee2c07",
          order: 1,
        },
      ],
      club_logo: [
        {
          id: 3505,
          path: "uploads/club/logo/fd2c4f5c-48dc-4f9f-a72a-3f50608cc80f",
          order: 0,
        },
      ],
    },
  },
  achievementInfo: {
    id: 1450,
    admin_comment: "Node HTTPS patch test",
    level: 2,
    nft_token: null,
    issuance_route: "automatic",
    certificate_number: "CERT-202504-123456",
    cid: null,
    course_begin_at: "2025-04-02T00:00:00.000Z",
    course_end_at: "2025-07-02T00:00:00.000Z",
    expiration_date: "2025-12-02T00:00:00.000Z",
    is_received: false,
    status: "ISSUED",
    issuance_method: "EMAIL",
    created_at: "2025-04-19T12:00:00.000Z",
    updated_at: "2025-03-18T23:07:05.247Z",
    user: {
      id: 2156,
      email: "eogks999@naver.com",
      name: "김천재",
      avatar: [
        "uploads/user/avatar/background.webp",
        "uploads/user/avatar/clothes.webp",
        "uploads/user/avatar/face.webp",
        "uploads/user/avatar/eye.webp",
        "uploads/user/avatar/hair.webp",
        "uploads/user/avatar/mouth.webp",
        "uploads/user/avatar/accessory.webp",
      ],
      deleted_at: null,
      image: null,
      profileImageType: "avatar",
      memberships: [{ id: 2301 }],
    },
    customAttributes: [],
    achievementForm: {
      id: 496,
      name: "OpenApi 테스트 인증서",
      description: "OpenApi 테스트 인증서",
      type: "completion",
      tags: [],
      club_name: null,
      prefix: "OPEN",
      program_type: "degree_course",
      program_name: "프로프로그램",
      program_url: "https://프로프로그램.com",
      course_begin_at: "2025-03-11T00:00:00.000Z",
      course_end_at: "2025-03-14T00:00:00.000Z",
      created_at: "2025-03-11T20:37:47.814Z",
      updated_at: "2025-03-13T21:39:08.750Z",
      avatar_type: null,
      sort_order: 1,
      achievementCertificateDesign: {
        id: 139,
        name: "OpenApi1",
        main_color: "#FA5C36",
        sub_color: null,
        extra_color_1: null,
        extra_color_2: null,
        layout_json: [
          {
            id: "bg-1743997208225",
            controlType: "svg",
            designType: "background",
            componentName: "BackgroundEmptyHatch",
            background: "transparent",
            width: 1130,
            height: 770,
            x: 11,
            y: 20,
            order: 1,
            text: "BackgroundEmptyHatch",
            mainColor: "#FFF",
            subColor: "#FFF",
          },
          {
            id: "0",
            order: 13,
            controlType: "text",
            designType: "text",
            text: "CERTIFICATE",
            fontSize: 96,
            fontWeight: "700",
            textAlign: "left",
            color: "#002333",
            fontFamily: "'Pretendard', sans-serif",
            width: 745,
            height: 115,
            x: 86,
            y: 178,
          },
          {
            id: "1",
            order: 12,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "name",
            text: "[인증서.제목]",
            fontSize: 24,
            fontWeight: "600",
            textAlign: "left",
            color: "#101113",
            fontFamily: "Pretendard, sans-serif",
            width: 500,
            height: 50,
            x: 136,
            y: 338,
          },
          {
            id: "2",
            order: 11,
            controlType: "text",
            designType: "props",
            type: "user",
            bindingKey: "name",
            text: "[유저.이름]",
            fontSize: 40,
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 500,
            height: 60,
            x: 212,
            y: 392,
          },
          {
            id: "3",
            order: 10,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "description",
            text: "[인증서.설명]",
            fontSize: 20,
            fontWeight: "400",
            color: "#101113",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 648,
            height: 68,
            x: 86,
            y: 472,
          },
          {
            id: "5",
            order: 8,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "tags",
            text: "[인증서.스킬태그]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            color: "#6B7684",
            fontFamily: "Pretendard, sans-serif",
            width: 648,
            height: 68,
            x: 86,
            y: 551,
          },
          {
            id: "7",
            order: 6,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "period",
            text: "[인증서.수료기간]",
            color: "#000000",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 240,
            height: 21,
            x: 140,
            y: 655,
          },
          {
            id: "9",
            order: 4,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "created_at",
            text: "[인증서.발급일]",
            color: "#000000",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 200,
            height: 21,
            x: 140,
            y: 705,
          },
          {
            id: "19",
            order: 4,
            controlType: "text",
            designType: "text",
            type: "achievement",
            text: "TERM",
            color: "#000000",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 82,
            height: 26,
            x: 86,
            y: 655,
          },
          {
            id: "29",
            order: 4,
            controlType: "text",
            designType: "text",
            type: "achievement",
            text: "DATE",
            color: "#000000",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 82,
            height: 26,
            x: 86,
            y: 705,
          },
          {
            id: "11",
            order: 2,
            controlType: "text",
            designType: "props",
            type: "club",
            bindingKey: "name",
            text: "[발급기관[1].이름]",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 110,
            height: 60,
            x: 619,
            y: 732,
          },
          {
            id: "12",
            order: 2,
            controlType: "text",
            designType: "props",
            type: "club",
            bindingKey: "name_1",
            text: "[발급기관[2].이름]",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 110,
            height: 60,
            x: 729,
            y: 732,
          },
          {
            id: "13",
            order: 2,
            controlType: "text",
            designType: "props",
            type: "club",
            bindingKey: "name_2",
            text: "[발급기관[3].이름]",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 110,
            height: 60,
            x: 836,
            y: 732,
          },
          {
            id: "16",
            order: 1,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "certificate_number",
            text: "[인증서.발급코드]",
            fontSize: 14,
            fontWeight: "400",
            color: "#101113",
            textAlign: "left",
            fontFamily: "Pretendard, sans-serif",
            width: 123,
            height: 30,
            x: 943,
            y: 50,
          },
          {
            id: "club-sign",
            order: 14,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "sign_image",
            src: "",
            text: "[발급기관[1].직인]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 630,
            y: 650,
          },
          {
            id: "institutions-sign-1",
            order: 15,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "sign_image_1",
            src: "",
            text: "[발급기관[2].직인]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 740,
            y: 650,
          },
          {
            id: "institutions-sign-2",
            order: 16,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "sign_image_2",
            src: "",
            text: "[발급기관[3].직인]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 850,
            y: 650,
          },
          {
            id: "club_symbol",
            order: 17,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "club_symbol",
            src: "",
            text: "[발급기관[1].심볼]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 86,
            y: 41,
          },
          {
            id: "club_symbol_1",
            order: 18,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "club_symbol_1",
            src: "",
            text: "[발급기관[2].심볼]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 182,
            y: 41,
          },
          {
            id: "club_symbol_2",
            order: 19,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "club_symbol_2",
            src: "",
            text: "[발급기관[3].심볼]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 80,
            height: 80,
            x: 278,
            y: 41,
          },
          {
            id: "achievement-qr",
            order: 20,
            controlType: "image",
            designType: "props",
            type: "achievement",
            bindingKey: "qr_code",
            src: "",
            text: "[인증서.QR]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 60,
            height: 60,
            x: 880,
            y: 40,
          },
          {
            id: "achievement-badge",
            order: 21,
            controlType: "image",
            designType: "props",
            type: "achievement",
            bindingKey: "badge",
            src: "",
            text: "[인증서.뱃지]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 160,
            height: 160,
            x: 980,
            y: 380,
          },
        ],
        template_type: "NewCertificateType30",
      },
      achievementBadgeDesign: {
        id: 63,
        name: "OpenApi1",
        main_color: "#94896B",
        sub_color: null,
        extra_color_1: null,
        extra_color_2: null,
        layout_json: [
          {
            id: "badge-1742881999662",
            controlType: "svg",
            designType: "badge",
            componentName: "BadgeType5",
            background: "transparent",
            width: 500,
            height: 530,
            x: 48,
            y: 44,
            order: 1,
            text: "BadgeType2",
            mainColor: "#FF1B64",
            subColor: "#FF91B2",
          },
          {
            id: "ribbon-1742881765599",
            controlType: "svg",
            designType: "ribbon",
            componentName: "RibbonWing12",
            background: "transparent",
            width: 510,
            height: 210,
            x: 45,
            y: 195,
            order: 2,
            text: "RibbonWing12",
            mainColor: "#FF1B64",
            subColor: "#FF91B2",
          },
          {
            id: "0",
            order: 3,
            controlType: "text",
            designType: "text",
            text: "· CERTIFICATE of COMPLETION ·",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            color: "black",
            width: 515,
            height: 32,
            x: 42,
            y: 385,
          },
          {
            id: "1",
            order: 4,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "name",
            text: "[인증서.제목]",
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            color: "black",
            width: 340,
            height: 100,
            x: 130,
            y: 270,
          },
          {
            id: "club-symbol",
            order: 5,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "club_symbol",
            src: "",
            text: "[발급기관[1].심볼]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 77,
            height: 77,
            x: 266,
            y: 172,
          },
        ],
        template_type: "NewBadgeType48",
      },
      club: { domain: "ddenzu2", name: "미세먼지 그만" },
      clubInstitutions: [
        {
          id: 23,
          type: "공공기관",
          name: "주승이 코퍼레이션",
          website_url: "https://test.kolleges.net/ko/ddenzu",
          images: [
            {
              id: 3514,
              path: "uploads/achievement/form/sign/5c9a7fdc-a07f-45e7-b807-8cee06339abf",
              file_name: "pngwing.com.webp",
              type: "sign_image",
              order: 0,
            },
            {
              id: 3513,
              path: "uploads/club/symbol/befa306c-1fef-4f4f-a4e1-41ca3d015193",
              file_name: "pngegg.webp",
              type: "club_symbol",
              order: 0,
            },
          ],
        },
      ],
      representativeInstitution: {
        id: 39,
        type: "민간기관",
        name: "ddd",
        website_url: "https://www.naver.com",
        images: [
          {
            id: 4213,
            path: "uploads/club/symbol/51580395-7523-4e15-a475-b6e1e2403091",
            file_name: "face.webp",
            type: "club_symbol",
            order: 0,
          },
          {
            id: 4226,
            path: "uploads/achievement/form/sign/8ee38af0-7336-41dc-ae44-e4b3a5194af9",
            file_name: "áá³áá³ááµá«áá£áº 2025-03-11 áá©áá® 12.21.17.webp",
            type: "sign_image",
            order: 0,
          },
        ],
      },
      requirements: [
        {
          id: 207,
          type: "project",
          url: "https://",
          description: "헤응",
          order: 1,
        },
        {
          id: 206,
          type: "submit_homework",
          url: "https://",
          description: "으어엉",
          order: 0,
        },
      ],
    },
    achievementFormId: 496,
  },
};
const testOptions = {
  type: "certificate",
  size: 300,
  returnType: "base64",
};

async function runTests() {
  try {
    // HTML 변환 테스트
    // const htmlOutput = await renderCertificate(testCertificateData);
    // fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    // console.log("✅ HTML 변환 완료: test/certificate.html");

    // PNG 변환 테스트
    const pngResult = await generateCertificateFile(
      {
        user: testCertificateData.user,
        kollegeInfo: testCertificateData.kollegeInfo,
        achievementInfo: testCertificateData.achievementInfo,
      },
      {
        type: testOptions.type,
        size: testOptions.size,
        returnType: testOptions.returnType,
      }
    );

    if (testOptions.returnType === "base64") {
      console.log("✅ Base64 변환 완료");
      // base64 문자열에서 data:image/png;base64, 부분 제거
      const base64Data = pngResult.base64.replace(
        /^data:image\/png;base64,/,
        ""
      );
      // base64를 버퍼로 변환
      const buffer = Buffer.from(base64Data, "base64");
      // 이미지 파일로 저장
      await fsPromises.writeFile(
        path.join(__dirname, "certificate_base64.png"),
        buffer
      );
      console.log("✅ Base64 이미지 저장 완료: test/certificate_base64.png");
    } else {
      await fsPromises.writeFile(
        path.join(__dirname, "certificate.png"),
        pngResult.buffer
      );
      console.log("✅ PNG 변환 완료: test/certificate.png");
    }
  } catch (error) {
    console.error("❌ 테스트 실행 중 오류 발생:", error);
  }
}

runTests();
