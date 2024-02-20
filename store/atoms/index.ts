import { atom, RecoilState } from "recoil";
import { AddressType } from "@/interface/api/address";

interface IDepartureListStateProps {
  id: number;
  address: AddressType;
}

export const DepartureListState: RecoilState<IDepartureListStateProps[]> = atom(
  {
    key: "DepartureList",
    default: [
      { id: 0, address: {} as AddressType },
    ] as IDepartureListStateProps[],
  }
);

type ScrollPositionProps = {
  scrollX: number;
  scrollY: number;
};

export type PageDataProps = {
  pathName: string;
  scrollPosition: ScrollPositionProps;
  state: {
    [key in string]: any;
  };
};

export const PageDataState: RecoilState<PageDataProps[]> = atom({
  key: "PageData",
  default: [] as PageDataProps[],
});
