const fs = require("fs");
const { renderCertificate } = require("../dist/renderCertificate");
const {
  generateAchievementFile,
} = require("../dist/utils/generateAchievementFile");
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
        main_color: "#1C2A54",
        sub_color: "#09B3EA",
        extra_color_1: null,
        extra_color_2: null,
        layout_json: [
          {
            controlType: "line",
            designType: "element",
            verticalAlign: "middle",
            textAlign: "center",
            color: "#09B3EA",
            width: 265,
            height: 10,
            x: 272.5,
            y: 244,
            lineWidth: 2,
            isVertical: false,
            order: 0,
            id: "0",
          },
          {
            controlType: "line",
            designType: "element",
            verticalAlign: "middle",
            textAlign: "center",
            color: "#1C2A54",
            width: 265,
            height: 10,
            x: 272.5,
            y: 243,
            lineWidth: 1,
            isVertical: false,
            order: 1,
            id: "1",
          },
          {
            controlType: "line",
            designType: "element",
            verticalAlign: "middle",
            textAlign: "center",
            color: "#000000",
            width: 160,
            height: 10,
            x: 105,
            y: 952,
            lineWidth: 1,
            isVertical: false,
            order: 2,
            id: "2",
          },
          {
            controlType: "line",
            designType: "element",
            verticalAlign: "middle",
            textAlign: "center",
            color: "#000000",
            width: 160,
            height: 10,
            x: 546,
            y: 951,
            lineWidth: 1,
            isVertical: false,
            order: 3,
            id: "3",
          },
          {
            controlType: "text",
            designType: "text",
            text: "CERTIFICATE of QUALIFICATION",
            fontSize: 24,
            fontWeight: "700",
            textAlign: "left",
            fontFamily: "'BR Firma', sans-serif",
            width: 400,
            height: 50,
            x: 205,
            y: 200,
            order: 4,
            id: "4",
          },
          {
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "name",
            text: "[인증서.제목]",
            fontSize: 48,
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 666,
            height: 60,
            x: 71,
            y: 274,
            order: 5,
            id: "5",
          },
          {
            controlType: "text",
            designType: "props",
            type: "user",
            bindingKey: "name",
            text: "[수령자.이름]",
            fontSize: 40,
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 235,
            height: 60,
            x: 280,
            y: 384,
            order: 6,
            id: "6",
          },
          {
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "description",
            text: "[인증서.설명]",
            fontSize: 24,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 666,
            height: 70,
            x: 71,
            y: 611,
            order: 7,
            id: "7",
          },
          {
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "tags",
            text: "[인증서.스킬태그]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            color: "#6B7684",
            fontFamily: "Pretendard, sans-serif",
            width: 666,
            height: 21,
            x: 71,
            y: 713,
            order: 8,
            id: "8",
          },
          {
            controlType: "text",
            designType: "text",
            text: "수료기간",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            color: "#6B7684",
            width: 150,
            height: 21,
            x: 330,
            y: 518,
            order: 9,
            id: "9",
          },
          {
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "period",
            text: "[인증서.수료기간]",
            fontSize: 24,
            fontWeight: "500",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 335,
            height: 50,
            x: 243,
            y: 551,
            order: 10,
            id: "10",
          },
          {
            controlType: "text",
            designType: "text",
            text: "발급일",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 150,
            height: 21,
            x: 110,
            y: 929,
            order: 11,
            id: "11",
          },
          {
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "created_at",
            text: "[인증서.발급일]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 200,
            height: 21,
            x: 84,
            y: 956,
            order: 12,
            id: "12",
          },
          {
            controlType: "text",
            designType: "text",
            text: "발급기관",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 150,
            height: 21,
            x: 551,
            y: 927,
            order: 13,
            id: "13",
          },
          {
            controlType: "text",
            designType: "props",
            type: "club",
            bindingKey: "name",
            text: "[발급기관[1].이름]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 200,
            height: 70,
            x: 526,
            y: 956,
            order: 14,
            id: "14",
          },
        ],
        template_type: "NewCertificateType2",
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
    const htmlOutput = await renderCertificate(testCertificateData, testOptions);
    fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    console.log("✅ HTML 변환 완료: test/certificate.html");

    // PNG 변환 테스트
    const pngResult = await generateAchievementFile(
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
