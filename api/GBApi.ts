import {
  ICreateUniqueSessionPayload,
  ICreateUniqueSessionResponse,
  IGetMatchSessionIdResponse,
  IGetMatchSessionPayload,
  IGetUniqueSessionPayload,
  IGetUniqueSessionResponse,
  IUpdateUniqueSessionPayload,
  IUpdateUniqueSessionResponse,
} from "@/interface/api";
import { AxiosResponse } from "axios";

export interface GBApi {
  getRandomStation(): Promise<AxiosResponse>;
  getMatchSessionId(
    payload: IGetMatchSessionPayload
  ): Promise<IGetMatchSessionIdResponse>;

  getUniqueSession(
    payload: IGetUniqueSessionPayload
  ): Promise<IGetUniqueSessionResponse>;

  updateUniqueSession(
    payload: IUpdateUniqueSessionPayload
  ): Promise<IUpdateUniqueSessionResponse>;

  createUniqueSession(
    payload: ICreateUniqueSessionPayload
  ): Promise<ICreateUniqueSessionResponse>;
}
