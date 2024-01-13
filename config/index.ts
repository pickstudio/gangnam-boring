type PathLinkType = {
  name: string;
};

type HeaderConfigType = {
  [key in string]: PathLinkType;
};

export const HEADER_CONFIG: HeaderConfigType = {
  "/": { name: "강남은 지루해" },
  "/searchAddress": { name: "출발지 검색" },
  "/midPoint": { name: "중간장소" },
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
