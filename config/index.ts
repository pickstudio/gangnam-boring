type PathLinkType = {
  name: string;
};

type HeaderConfigType = {
  [key in string]: PathLinkType;
};

export const HEADER_CONFIG: HeaderConfigType = {
  "/": { name: "강남은 지루해" },
};
