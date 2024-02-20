import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useRecoilState } from "recoil";
import { PageDataProps, PageDataState } from "@/store/atoms";

export default function usePageState() {
  const pathname = usePathname();
  const [pageData, setPageData] = useRecoilState(PageDataState);
  const pathName = "/" + pathname.split("/")[1];

  const currentPageIndex = pageData.findIndex(
    (item) => item.pathName === pathName
  );
  const hasData = currentPageIndex >= 0;

  const getPageState: () => PageDataProps | undefined = () => {
    if (hasData) return pageData[currentPageIndex];
    else return undefined;
  };

  const setPageState = (currentPageData: PageDataProps) => {
    if (hasData)
      setPageData((prev) => [
        ...prev.slice(0, currentPageIndex),
        currentPageData,
        ...prev.slice(currentPageIndex + 1),
      ]);
    else setPageData((prev) => [...prev, currentPageData]);
  };

  return { getPageState, setPageState };
}
