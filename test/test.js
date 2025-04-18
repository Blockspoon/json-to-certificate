const fs = require("fs");
const {
  generateAchievementHTML,
} = require("../dist/utils/generateAchievementHTML");
const {
  generateAchievementFile,
} = require("../dist/utils/generateAchievementFile");
const fsPromises = require("fs").promises;
const path = require("path");
const { generateDesignHTML } = require("../dist/utils/generateDesignHTML");
const { generateDesignFile } = require("../dist/utils/generateDesignFile");

const test_object = {
  statusCode: 200,
  message: "인증서 양식이 조회되었습니다.",
  achievementForm: {
    id: 551,
    name: "sandbox-achievement",
    description: "sandbox-achievement",
    type: "completion",
    tags: ["sandbox", "test", "api"],
    prefix: "SAND",
    program_type: "community",
    program_name: "kolleges",
    program_url: "https://landing.kolleges.net/",
    course_begin_at: "2025-04-01T00:00:00.000Z",
    course_end_at: "2025-04-07T00:00:00.000Z",
    created_at: "2025-04-06T21:38:26.918Z",
    updated_at: "2025-04-06T21:38:26.918Z",
    club: {
      domain: "sandbox",
      customData: [],
    },
    clubInstitutions: [],
    representativeInstitution: null,
    requirements: [
      {
        type: "read",
        url: "https://landing.kolleges.net/",
        description: "kolleges landing",
      },
      {
        type: "submit_homework",
        url: "https://admin.kolleges.net/ko/onboard/sign_in",
        description: "kolleges main",
      },
    ],
    achievementCertificateDesign: {
      id: 165,
      name: "sandbox-certificate-v1",
      main_color: "#7657FA",
      sub_color: "#CABDFF",
      extra_color_1: null,
      extra_color_2: null,
      layout_json: [
        {
          controlType: "text",
          designType: "text",
          text: "CERTIFICATE of QUALIFICATION",
          fontSize: 20,
          fontWeight: "700",
          textAlign: "left",
          fontFamily: "'BR Firma', sans-serif",
          width: 500,
          height: 50,
          x: 83,
          y: 174,
          order: 0,
          id: "0",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "name",
          text: "[인증서.제목]",
          fontSize: 40,
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 500,
          height: 50,
          x: 87,
          y: 214,
          order: 1,
          id: "1",
        },
        {
          controlType: "text",
          designType: "props",
          type: "user",
          bindingKey: "name",
          text: "[수령자.이름]",
          fontSize: 44,
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 500,
          height: 60,
          x: 87,
          y: 306,
          order: 2,
          id: "2",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "description",
          text: "[인증서.설명]",
          fontSize: 24,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 648,
          height: 68,
          x: 87,
          y: 392,
          order: 3,
          id: "3",
        },
        {
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
          x: 87,
          y: 501,
          order: 4,
          id: "4",
        },
        {
          controlType: "text",
          designType: "text",
          text: "수료기간",
          fontSize: 16,
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 150,
          height: 21,
          x: 87,
          y: 635,
          order: 5,
          id: "5",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "period",
          text: "[인증서.수료기간]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 200,
          height: 21,
          x: 87,
          y: 664,
          order: 6,
          id: "6",
        },
        {
          controlType: "text",
          designType: "text",
          text: "발급일",
          fontSize: 16,
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 150,
          height: 21,
          x: 295,
          y: 635,
          order: 7,
          id: "7",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "created_at",
          text: "[인증서.발급일]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 200,
          height: 21,
          x: 295,
          y: 664,
          order: 8,
          id: "8",
        },
        {
          controlType: "text",
          designType: "text",
          text: "발급기관",
          fontSize: 16,
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 150,
          height: 21,
          x: 487,
          y: 635,
          order: 9,
          id: "9",
        },
        {
          controlType: "text",
          designType: "props",
          type: "club",
          bindingKey: "name",
          text: "[발급기관[1].이름]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 160,
          height: 30,
          x: 487,
          y: 664,
          order: 10,
          id: "10",
        },
        {
          controlType: "text",
          designType: "props",
          type: "club",
          bindingKey: "name_1",
          text: "[발급기관[2].이름]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 160,
          height: 30,
          x: 640,
          y: 664,
          order: 11,
          id: "11",
        },
        {
          controlType: "text",
          designType: "props",
          type: "club",
          bindingKey: "name_2",
          text: "[발급기관[3].이름]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "left",
          fontFamily: "Pretendard, sans-serif",
          width: 160,
          height: 30,
          x: 487,
          y: 690,
          order: 12,
          id: "12",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "certificate_number",
          text: "[인증서.발급코드]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "right",
          fontFamily: "Pretendard, sans-serif",
          width: 200,
          height: 70,
          x: 790,
          y: 701,
          order: 13,
          id: "13",
        },
        {
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
          x: 549,
          y: 583,
          order: 14,
          id: "14",
        },
        {
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
          x: 629,
          y: 583,
          order: 15,
          id: "15",
        },
        {
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
          x: 709,
          y: 583,
          order: 16,
          id: "16",
        },
        {
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
          width: 90,
          height: 90,
          x: 852,
          y: 92,
          order: 17,
          id: "17",
        },
        {
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
          width: 90,
          height: 90,
          x: 974,
          y: 92,
          order: 18,
          id: "18",
        },
        {
          controlType: "image",
          designType: "props",
          type: "achievement",
          bindingKey: "qr_code",
          src: "",
          text: "[인증서.QR코드]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "center",
          fontFamily: "Pretendard, sans-serif",
          width: 90,
          height: 90,
          x: 989,
          y: 639,
          order: 19,
          id: "19",
        },
        {
          controlType: "image",
          designType: "props",
          type: "achievement",
          bindingKey: "badge",
          src: "",
          text: "[인증서.배지]",
          fontSize: 16,
          fontWeight: "400",
          textAlign: "center",
          fontFamily: "Pretendard, sans-serif",
          width: 280,
          height: 280,
          x: 784,
          y: 305.5,
          order: 20,
          id: "20",
        },
      ],
      template_type: "NewCertificateType7Single",
      created_at: "2025-04-09T18:37:39.696Z",
      updated_at: "2025-04-09T18:37:39.696Z",
      image: null,
    },
    achievementBadgeDesign: {
      id: 83,
      name: "sandbox-badge-v1",
      main_color: "#322899",
      sub_color: "#7468E8",
      extra_color_1: null,
      extra_color_2: null,
      layout_json: [
        {
          controlType: "svg",
          designType: "badge",
          componentName: "BadgeType31",
          background: "transparent",
          width: 538,
          height: 594,
          x: 31.00006103515625,
          y: 3,
          text: "BadgeType31",
          mainColor: "#322899",
          subColor: "#7368E8",
          order: 0,
          id: "0",
        },
        {
          controlType: "svg",
          designType: "icon",
          componentName: "IconMortarboard3",
          background: "transparent",
          width: 240,
          height: 222,
          x: 188,
          y: 134,
          text: "IconMortarboard3",
          mainColor: "#322899",
          subColor: "#7468e8",
          extraColor1: "#ffffff",
          order: 1,
          id: "1",
        },
        {
          controlType: "text",
          designType: "text",
          text: "· CERTIFICATE of COMPLETION ·",
          fontSize: 16,
          fontWeight: "600",
          textAlign: "center",
          fontFamily: "Pretendard, sans-serif",
          color: "white",
          width: 332,
          height: 50,
          x: 135,
          y: 122,
          order: 2,
          id: "2",
        },
        {
          controlType: "text",
          designType: "props",
          type: "achievement",
          bindingKey: "name",
          text: "[인증서.제목]",
          fontSize: 40,
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "Pretendard, sans-serif",
          color: "black",
          width: 375,
          height: 108,
          x: 115,
          y: 398,
          order: 3,
          id: "3",
        },
        {
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
          width: 65,
          height: 65,
          x: 415,
          y: 243,
          order: 4,
          id: "4",
        },
      ],
      template_type: "NewBadgeType31",
      created_at: "2025-04-09T18:37:27.940Z",
      updated_at: "2025-04-09T18:37:27.940Z",
      image: null,
    },
  },
};

const testCertificateData = {
  // user: test_object.achievement.user,
  user: {},
  kollegeInfo: test_object.achievementForm.club,
  achievementInfo: test_object.achievementForm,
};
const testOptions = {
  type: "badge",
  size: 300,
  returnType: "base64",
};


const testDesignData = {
  layout_json: test_object.achievementForm.achievementBadgeDesign.layout_json,
  template_type:
    test_object.achievementForm.achievementBadgeDesign.template_type,
  main_color: test_object.achievementForm.achievementBadgeDesign.main_color,
  sub_color: test_object.achievementForm.achievementBadgeDesign.sub_color,
};


async function runTests() {
  try {
    // HTML 변환 테스트
    const htmlOutput = await generateDesignHTML(testDesignData, {
      size: 300,
    });
    fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    console.log("✅ HTML 변환 완료: test/certificate.html");

    // PNG 변환 테스트
    const pngResult = await generateDesignFile(testDesignData, {
      size: 300,
    });
    fs.writeFileSync("test/certificate.png", pngResult.buffer);
    console.log("✅ PNG 변환 완료: test/certificate.png");

    // // HTML 변환 테스트
    // const htmlOutput = await generateAchievementHTML(testCertificateData, {
    //   type: "badge",
    //   size: 300,
    //   noSpace: false,
    //   mainColor: "#322899",
    //   subColor: "#7368E8",
    // });
    // fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    // console.log("✅ HTML 변환 완료: test/certificate.html");

    // // PNG 변환 테스트
    // const pngResult = await generateAchievementFile(
    //   testCertificateData,
    //   testOptions
    // );

    // if (testOptions.returnType === "base64") {
    //   console.log("✅ Base64 변환 완료");
    //   // base64 문자열에서 data:image/png;base64, 부분 제거
    //   const base64Data = pngResult.base64.replace(
    //     /^data:image\/png;base64,/,
    //     ""
    //   );
    //   // base64를 버퍼로 변환
    //   const buffer = Buffer.from(base64Data, "base64");
    //   // 이미지 파일로 저장
    //   await fsPromises.writeFile(
    //     path.join(__dirname, "certificate_base64.png"),
    //     buffer
    //   );
    //   console.log("✅ Base64 이미지 저장 완료: test/certificate_base64.png");
    // } else {
    //   await fsPromises.writeFile(
    //     path.join(__dirname, "certificate.png"),
    //     pngResult.buffer
    //   );
    //   console.log("✅ PNG 변환 완료: test/certificate.png");
    // }
  } catch (error) {
    console.error("❌ 테스트 실행 중 오류 발생:", error);
  }
}

runTests();
