import axios from "axios";

export const getAddr = async (keyword: string) => {
  if (!keyword) {
    return;
  }

  const response = await axios.post(
    "https://business.juso.go.kr/addrlink/addrLinkApi.do?",
    null,
    {
      params: {
        confmKey: "devU01TX0FVVEgyMDIzMTIxMjE0NTkxNTExNDM1MDI=",
        currentPage: "1",
        countPerPage: "100",
        resultType: "json",
        keyword: keyword,
      },
    }
  );

  return response.data.results.juso;
};
