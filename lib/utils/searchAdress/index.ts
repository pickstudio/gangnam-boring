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
        confmKey: "devU01TX0FVVEgyMDIzMDkxMDA5NDE0NDExNDA4OTQ=",
        currentPage: "1",
        countPerPage: "100",
        resultType: "json",
        keyword: keyword,
      },
    }
  );

  console.log(response.data.results.juso);

  return response.data.results.juso;
};
