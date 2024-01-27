import { TransportationType } from "@/interface/view/map";

export type MidPointAPIResponseType = {
  midPointStation: string;
  midPointLatLng: LatLng;
  averageTimeCost: number;
  waysToStation: WayToStationType[];
};

export type WayToStationType = {
  timeCost: number;
  numberOfTransfer: number;
  transportation: TransportationType;
  startPointLatLng: LatLng;
  WayArrayLatLng: LatLng[];
};

export type LatLng = {
  latitude: number;
  longitude: number;
};
