type PathLinkType = {
  name: string;
};

type SecondPathLinkType = {
  [key in string]: PathLinkType;
};

type HeaderConfigType = {
  [key in string]: PathLinkType | SecondPathLinkType;
};

export const HEADER_CONFIG: HeaderConfigType = {
  "/": { name: "강남은 지루해" },
  "/searchAddress": { name: "출발지 검색" },
  "/midPoint": { name: "중간장소" },
  "/policy": {
    "/term": { name: "이용약관" },
    "/privacy": { name: "개인정보 처리방침" },
  },
};

export const handleHeaderConfig = (pathname: string) => {
  const basicPath = "/" + pathname.split("/")[1];
  const secondPath = "/" + pathname.split("/")[2];

  let headerConfig: PathLinkType | undefined;

  if (HEADER_CONFIG[basicPath]?.name) {
    headerConfig = HEADER_CONFIG[basicPath] as PathLinkType;
  } else if (
    (HEADER_CONFIG[basicPath] as SecondPathLinkType)[secondPath]?.name
  ) {
    headerConfig = (HEADER_CONFIG[basicPath] as SecondPathLinkType)[secondPath];
  } else {
    headerConfig = undefined;
  }

  return headerConfig;
};

export const MAP_COLOR_CONFIG = [
  // index별 주요 색상 (0~9)
  "#FFD600",
  "#FF9100",
  "#FF3D00",
  "#F50057",
  "#D500F9",
  "#651FFF",
  "#2979FF",
  "#00B0FF",
  "#00E5FF",
  "#00E676",
];

export const TERM_POLICY = [
  {
    title: "1조",
    content: `제1조(목적) 이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.`,
  },
  {
    title: "1조",
    content: `제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.
  
2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다.
  
3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.
  
4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.
  
5. "콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는 처리된 것을 말합니다.`,
  },
  {
    title: "1조",
    content: `제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.
  
2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다.
  
3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.
  
4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.
  
5. "콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는 처리된 것을 말합니다.`,
  },
  {
    title: "1조",
    content: `제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

  1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.
  
  2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다.
  
  3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.
  
  4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.
  
  5. "콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는 처리된 것을 말합니다.
  `,
  },
];
