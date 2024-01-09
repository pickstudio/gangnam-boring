import { MidPointAPIResponseType } from "@/interface/api/midPoint";
import { TransportationType } from "@/interface/view/map";

export const MidPointDummyResponse: MidPointAPIResponseType[] = [
  {
    midPointStation: "강남역",
    averageTimeCost: 100,
    waysToStation: [
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
    ],
  },
  {
    midPointStation: "강남역",
    averageTimeCost: 100,
    waysToStation: [
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
    ],
  },
  {
    midPointStation: "강남역",
    averageTimeCost: 100,
    waysToStation: [
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
      { timeCost: 20, numberOfTransfer: 2, transportation: "BUS" },
    ],
  },
];
