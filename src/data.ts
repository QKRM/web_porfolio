import { Product, Review } from "./types";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "프리미엄 세이지 컬렉션",
    category: "프리미엄 피규어",
    description: "디테일한 마감과 독보적인 디자인.",
    detailedDescription: "은하계의 역사적인 상징물에서 영감을 받아 최고급 레진 아티스트가 장인의 혼을 담아 100% 수작업으로 마감하여 탄생시킨 플래그십 조형물입니다. 함께 제공되는 최고급 박물관 사양의 무반사 아크릴 쇼케이스와 정밀 LED 베이스가 거실이나 오피스 등 당신이 있는 모든 공간을 압도적인 갤러리로 탈바꿈시킵니다.",
    price: 380000,
    rating: 5.0,
    reviewsCount: 324,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG47Jg6r3MfJDgJyL57cUOdIT8cElyRQk8YcTyJVMFtN4E_2avOuZdXnpadI6jQOmLj10646V-vp7XNBtD2j1k7DYnpnrR4eYnzU10jFna27D9d-fBo5FQggW8FOPVI5E_PPJoetbcH0izNCWoiZPanqeHoq_9PtS-YOCADnE3xfvwcCGdqA4yrA-qsX4WdSfjz_piQ7HOUNxkkMZsQTjzLZewX3XEGyes2h5Mf1-kLKSjreeKJFYQsTiAAujR14PPeQwHz-BZbJgy",
    highlights: [
      "은하 전역 500개 한정 수량 생산 및 베이스 고유 시리얼 넘버 각인",
      "자외선 차단 필터가 적용된 고 투과율 아크릴 쇼케이스 구성품 포함",
      "광택과 반무광의 조화로운 질감 대비를 구현한 최고급 우레탄 도장 마감"
    ],
    specs: {
      "재료": "고밀도 친환경 머티리얼 혼합 수지 (Premium Resin)",
      "케이스 크기": "가로 220mm × 세로 220mm × 높이 320mm",
      "전체 무게": "약 4.2kg (케이스 포함)",
      "LED 전원": "USB Type-C 인터페이스 연동 (디밍 터치 컨트롤 내장)"
    }
  },
  {
    id: "p2",
    name: "럭셔리 어패럴 & 액세서리",
    category: "라이프스타일 패션웨어",
    description: "은하계의 감성을 담은 최고급 소재.",
    detailedDescription: "클래식 기어를 모티프로 한 러기드 디자인과 에이징 될수록 깊고 고혹적인 멋을 풍기는 이탈리아 가죽 배색이 만나 완성된 하이엔드 테크니컬 크로스백입니다. 넉넉하고 정교한 수납 체계로 일상 용품뿐만이 아니라, 어떤 험난한 여정에서도 핵심 디바이스와 장비를 포스의 보호 아래 완벽하게 보관합니다.",
    price: 245000,
    rating: 5.0,
    reviewsCount: 189,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJeiR8q9iz1ne_Z2ODJZGY_3IIsGlAqx3AWYXVF8CZojefZSLkaIj9qSfoOuoP03dsmG__YaapKP3ojG24ASyXqCwZwn92DSh9lOzAdLFlTszbGfgWzD91SpeHudQO2ZHfdnF2FFARuMwEaBROc-n19jYUgr_OqDwK6r_RSh-96DO2Oc4UAW139UJMGxfMZs5NEfAu-BmnSf_DR9w9T7evYdbK4dt_ABA5NXOkBP6Txk6z4Dc62s-nkKXYfZoyO594ACAcvJz8eK68",
    highlights: [
      "초고밀도 작조 발수 가공 Cordura 1050D 소재로 타 비할 바 없는 견고함",
      "태양 광선 및 기후 변화에서도 가공 상태를 영구히 유지하는 아닐린 가죽 트림",
      "장시간 착용 시 피로를 최소화하는 인체공학적 마그네틱 원터치 버클 벨트"
    ],
    specs: {
      "외피 소재": "밀리터리 등급 Cordura NYLON + 이탈리아 천연 베지터블 레더",
      "전체 규격": "가로 300mm × 세로 240mm × 폭 110mm",
      "조절 폭": "최소 750mm ~ 최대 1300mm 신체 맞춤형 확장 지원",
      "보안 기술": "후면 밀착형 RFID 전파 차단 차폐 수납 포켓 내장"
    }
  },
  {
    id: "p3",
    name: "미니멀 인테리어 데코",
    category: "모던 데코레이션 오브제",
    description: "공간의 품격을 높여주는 상징적인 오브제.",
    detailedDescription: "포스와 무한 구조의 수학적 조형 대칭에서 아이디어를 빌려 정밀 메탈 레이저 가공으로 완성된 미래지향적 다면체 인테리어 아트 구체입니다. 당신의 데스크, 서재, 혹은 침대 옆 협탁 등 어디에 두어도 빛을 통과시키는 기하학적인 와이어 구조가 조명 아래 아름답고 경건한 그림자 음영을 만들어냅니다.",
    price: 198000,
    rating: 4.9,
    reviewsCount: 412,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtV2ms6R_xBU1a3ifOuJpN98bB4mLj_vWi8lcYL-6K-G_TZSjBFbxg8pJWmb1_Tb1QjSyoFjT8xsbsF5ekm0q8TK97IQgjWVINx5zcczetpJoUDzqqGRgTfH5qWhnDSXBNN7Yp4gBJqyFEIy4Z1UksOckwYL1FDP0fQIU8mk16mbwGNLTFIpI_2TaZIXGdIFy0VBV_XfAP8A9T89lCweDpkS0iR8mFhPTz_Uji2wSfhr8gEZV5Klrgnexe_LrvczOjpVhPJvNrcFFA",
    highlights: [
      "초경량 및 항공우주 내열 등급의 풀 아노다이징 스페이스 실버 알루미늄 배색",
      "어디서 보아도 완벽히 대칭되는 기하학적 구조가 주는 공간 연출 효과",
      "지문 및 부식을 완벽 차단하는 하이퍼 올레포빅 마찰 방지 표면 마감"
    ],
    specs: {
      "메탈 재료": "항공 우주용 알루미늄 6000 계열 (Laser CNC 절삭)",
      "지름 규격": "180mm 완전 대칭 기하 구형 설계",
      "순수 무게": "매우 가벼운 480g 무부하 구조 설계",
      "전용 거치": "미끄럼 방지 방진 실리콘 링 베이스 무상 패키지 증정"
    }
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Buyer Kim*",
    rating: 5,
    title: "기대 이상의 퀄리티입니다",
    comment: "마감이 너무 훌륭해서 거실 한가운데 두어도 전혀 어색하지 않아요. 패키징부터 본품까지 프리미엄 그 자체입니다. 정말 감동받았어요.",
    date: "2026. 05. 15",
    isVerified: true
  },
  {
    id: "r2",
    author: "Buyer Lee*",
    rating: 5,
    title: "선물용으로 최고예요",
    comment: "친구 생일 선물로 샀는데 박스를 여는 순간부터 감동받았다고 하네요. 고급스러운 느낌이 물씬 납니다. 은하수 감성이 잘 드러나요.",
    date: "2026. 05. 21",
    isVerified: true
  },
  {
    id: "r3",
    author: "Buyer Park*",
    rating: 5,
    title: "드디어 찾은 인생 컬렉션",
    comment: "그동안 모았던 다른 굿즈들과는 차원이 다릅니다. 재질감과 디테일이 살아있어서 볼 때마다 기분이 좋아집니다. 추천합니다!",
    date: "2026. 05. 28",
    isVerified: true
  }
];
