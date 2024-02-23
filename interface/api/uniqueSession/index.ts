export interface IGetUniqueSessionPayload {
  sessionId: string;
}

export interface IGetUniqueSessionResponse {
  sessionId: string;
  address: string[];
  randomStation: {
    stationKr: string;
    stationEn: string;
  };
  resultKey: string;
}

export interface IUpdateUniqueSessionPayload {
  sessionId: string;
  address: string[];
  randomStation: {
    stationKr: string;
    stationEn: string;
  };
}

export interface ICreateUniqueSessionPayload {
  address: string[];
  randomStation: {
    stationKr: string;
    stationEn: string;
  };
}

interface IPostUniqueSessionResponse {
  uuid: string;
}

export interface IUpdateUniqueSessionResponse
  extends IPostUniqueSessionResponse {}

export interface ICreateUniqueSessionResponse
  extends IPostUniqueSessionResponse {}
