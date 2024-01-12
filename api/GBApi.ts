import { AxiosResponse } from "axios";

export interface GBApi {
  getRandomStation(): Promise<AxiosResponse>;
}
