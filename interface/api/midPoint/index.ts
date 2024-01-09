import { TransportationType } from "@/interface/view/map";

export type MidPointAPIResponseType = {
  midPointStation: string;
  averageTimeCost: number;
  waysToStation: WayToStationType[];
};

export type WayToStationType = {
  timeCost: number;
  numberOfTransfer: number;
  transportation: TransportationType;
};
