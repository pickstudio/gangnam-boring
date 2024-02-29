interface IShareData {
  url: string;
  title: string;
  text: string;
}

export const useShare = () => {
  const shareURI = async ({ url, title, text }: IShareData) => {
    try {
      if (navigator.share && navigator.canShare())
        navigator.share({ url: url, title: title, text: text });
      else {
        navigator.clipboard.writeText(url);
        alert("복사가 완료되었습니다");
      }
      console.log("공유 성공");
    } catch (e) {
      console.log("공유 실패", e);
    }
  };

  return { shareURI };
};
