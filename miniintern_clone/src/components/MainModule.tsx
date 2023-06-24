import { Url } from "url";

export class company {
  constructor(
    public section: string,
    public title: string,
    public tag: string,
    public img: string,
    public day?: string,
    public sub?: string | string[],
    public coast?: string,
    public payment?: string
  ) {}
}

export let internArray: company[] = [];

const I1 = new company(
  "intership",
  "동남아시아 시장에 마이크로니들패치 판매를 위한 '활용 가능한' 온라인 마케팅 전략 제안",
  "마케팅",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35850/c01b2e9e-7d99-4ae4-8b20-33999cd81216/%EC%A0%9C%EB%8B%88%EB%9F%AD%EC%8A%A4%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "D-16"
);
const I2 = new company(
  "intership",
  "온라인 투자연계 금융업 사용자(투자 및 대출) 활성화 방안",
  "영업",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35830/be758802-e5dc-471c-a36b-ec0103a5d6d7/%EB%82%98%EB%AA%A8%ED%8E%80%EB%94%A9%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "D-2"
);
const I3 = new company(
  "intership",
  "중장년의 재취업 교육에 필요한 프로그램 기획 및 개발",
  "기획·비즈니스",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35816/5a7d299e-bec6-4e1b-ac84-05938869937a/%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4-%EC%BB%A4%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0.png",
  "D-16"
);

const I4 = new company(
  "intership",
  "엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안",
  "디자인",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35583/810d17c1-60a9-4f46-9d12-6b365fbb6ac6/%EC%97%94%EB%8B%B7%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.png",
  "D-3"
);
const I5 = new company(
  "intership",
  "과학 및 공학 분야 VR 콘텐츠 기획",
  "기획·비즈니스",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35463/92596434-cbe7-4b45-bae1-45b73e65caa3/%EB%93%80%EC%BD%94%EC%A0%A0%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4-%EB%9E%9C%EB%94%A9%EC%BB%A4%EB%B2%84.jpg",
  "D-1"
);
const I6 = new company(
  "intership",
  "대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지 이벤트 기획",
  "마케팅",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35462/25e36151-1419-4219-ac24-67e4bca3ec5a/%EC%95%8C%EB%B0%94%EC%9E%84%EB%B0%B0%EB%84%88-2.png",
  "D-1"
);
const I7 = new company(
  "intership",
  "오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업 마케팅 기획",
  "마케팅",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35403/2b6b96f0-8c67-4853-91d6-8755ab86196f/%EC%98%A4%EB%A1%AC%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.png",
  "진행 중"
);
const I8 = new company(
  "intership",
  "구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문 개선",
  "회계·인사·총무",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35168/2a6d49a0-161f-4ad6-920f-f364bdb0babb/%EC%BD%94%EC%8A%A4%EC%95%8C%EC%97%91%EC%8A%A4%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.jpg",
  "진행 중"
);
internArray.push(I1, I2, I3, I4, I5, I6, I7, I8);

export let companyArray: company[] = [];

const C1 = new company(
  "company",
  "Product Designer (UI/UX디자이너)",
  "디자인",
  "https://i.imgur.com/vOrYdoh.png",
  "",
  ["(주)더스윙", "정규직"]
);
const C2 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C3 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C4 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C5 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C6 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C7 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);
const C8 = new company(
  "company",
  "HR 담당자 (People Operation 담당자)",
  "회계·인사·총무",
  "https://i.imgur.com/Z91XQvc.png",
  "",
  ["(주)딜리셔스", "정규직"]
);

companyArray.push(C1, C2, C3, C4, C5, C6, C7, C8);

export let mClassArray: company[] = [];

const M1 = new company(
  "m_class",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/36013/b5ee4196-b8c8-4bbe-a580-ff02830d3b61/7%EC%9B%94%EC%9B%94%EA%B0%84%ED%8A%B9%EA%B0%95%EB%B0%B0%EC%9B%802%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  "D-22",
  ["비대면(Zoom", "0/60명 모집", "선착순 선발 모집중"],
  "",
  "무료"
);
const M2 = new company(
  "m_class",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/36013/b5ee4196-b8c8-4bbe-a580-ff02830d3b61/7%EC%9B%94%EC%9B%94%EA%B0%84%ED%8A%B9%EA%B0%95%EB%B0%B0%EC%9B%802%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  "D-22",
  ["비대면(Zoom", "0/60명 모집", "선착순 선발 모집중"],
  "",
  "무료"
);
const M3 = new company(
  "m_class",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/36013/b5ee4196-b8c8-4bbe-a580-ff02830d3b61/7%EC%9B%94%EC%9B%94%EA%B0%84%ED%8A%B9%EA%B0%95%EB%B0%B0%EC%9B%802%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  "D-22",
  ["비대면(Zoom", "0/60명 모집", "선착순 선발 모집중"],
  "",
  "유료"
);
const M4 = new company(
  "m_class",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/36013/b5ee4196-b8c8-4bbe-a580-ff02830d3b61/7%EC%9B%94%EC%9B%94%EA%B0%84%ED%8A%B9%EA%B0%95%EB%B0%B0%EC%9B%802%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  "D-22",
  ["비대면(Zoom", "0/60명 모집", "선착순 선발 모집중"],
  "",
  "유료"
);

mClassArray.push(M1, M2, M3, M4);

export let hFolioArray: company[] = [];

const H1 = new company(
  "happy_folio",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업스토리",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "",
  "뚜루리",
  "5,000원"
);
const H2 = new company(
  "happy_folio",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업스토리",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "",
  "뚜루리",
  "5,000원"
);
const H3 = new company(
  "happy_folio",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업스토리",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "",
  "뚜루리",
  "5,000원"
);
const H4 = new company(
  "happy_folio",
  "[직무설정] 7월 월간특강(배움) #청년 #광고기획",
  "취업스토리",
  "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
  "",
  "뚜루리",
  "5,000원"
);
hFolioArray.push(H1, H2, H3, H4);
