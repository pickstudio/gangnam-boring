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
