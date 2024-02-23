export interface IChunkProps {
  level: number;
  hash: string;
  value: number;
}
export interface IPlaceProps {
  title: string;
  category: string;
  roadAddress: string;
}

export interface IGetMatchSessionIdResponse {
  id: string;
  candidateChunks: IChunkProps[];
  stations: string[];
  places: IPlaceProps[];
}

export interface IGetMatchSessionPayload {
  sessionId: string;
}
