// 대학 및 전공 데이터
export const COLLEGES = [
  "통번역대학",
  "인문대학",
  "국제지역대학",
  "경상대학",
  "국가전략언어대학",
  "글로벌스포츠산업학부",
  "AI융합대학",
  "기후변화융합학부",
  "Culture_Technology융합대학",
  "자연과학대학",
  "공과대학",
  "바이오메디컬공학부",
  "자유전공학부",
  "융합인재대학",
];

export const DOUBLE_MAJOR_TYPES = [
  { value: "DOUBLE_MAJOR", label: "이중전공" },
  { value: "MINOR", label: "부전공" },
  { value: "INTENSIVE", label: "전공심화" },
  { value: "INTENSIVE_MINOR", label: "전공심화+부전공" },
  { value: "NONE", label: "없음" },
];

// 대학별 전공 매핑
export const MAJORS_BY_COLLEGE = {
  통번역대학: [
    "영어통번역학부",
    "독일어통번역학과",
    "스페인어통번역학과",
    "이탈리아어통번역학과",
    "중국어통번역학과",
    "일본어통번역학과",
    "아랍어통번역학과",
    "말레이_인도네시아어통번역학과",
    "태국어통번역학과",
  ],
  인문대학: ["철학과", "사학과", "언어인지과학과", "지식컨텐츠학부"],
  국제지역대학: ["프랑스학과", "브라질학과", "인도학과", "러시아학과"],
  경상대학: [
    "경제학과",
    "국제경영학과",
    "경영정보학과",
    "Global_Business_Technology학부",
    "국제금융학과",
  ],
  공과대학: [
    "컴퓨터공학부",
    "정보통신공학과",
    "반도체전자공학부_반도체공학전공",
    "반도체전자공학부_전자공학전공",
    "산업경영공학과",
  ],
  국가전략언어대학: [
    "폴란드학과",
    "체코_슬로바키아학과",
    "헝가리학과",
    "루마니아학과",
    "그리스_불가리학과",
    "세르비아_크로아티아학과",
    "중앙아시아학과",
    "아프리카학부",
    "한국학과",
    "우크라이나학과",
  ],

  AI융합대학: ["AI데이터융합학부", "Finance_AI융합학부"],
  기후변화융합학부: ["기후변화융합학부"],
  Culture_Technology융합대학: [
    "글로벌스포츠산업학부",
    "디지털콘텐츠학부",
    "투어리즘_웰니스학부",
  ],
  자연과학대학: [
    "수학과",
    "통계학과",
    "전자물리학과",
    "환경학과",
    "생명공학과",
    "화학과",
  ],
  바이오메디컬공학부: ["바이오메디컬공학부"],
  자유전공학부: ["자유전공학부"],
  융합인재대학: ["융합인재학부"],
  융합전공: [
    "Brics(브릭스)전공",
    "EU(유럽연합)전공",
    "동북아외교통상전공",
    "문화콘텐츠학전공",
    "국가리더전공",
    "세계문화예술전공",
    "디지털인문한국학전공",
    "AI융합전공",
    "데이터사이언스전공",
    "바이오데이터사이언스전공",
    "상담,UX심리전공",
    "Business&AI전공",
    "융복합소프트웨어전공",
  ],
};

// 융합인재대학 모듈
export const FUSION_MODULES = [
  "통번역모듈",
  "국제전략모듈",
  "문화산업콘텐츠모듈",
  "융합비즈니스모듈",
  "ICT_AI모듈",
];
