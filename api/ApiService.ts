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
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { GBApi } from "./GBApi";

export default class ApiService implements GBApi {
  static instance: GBApi;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://nomoregangnam-api.pickstudio.io",
    });
  }

  static get shared() {
    if (!ApiService.instance) ApiService.instance = new ApiService();
    return ApiService.instance;
  }

  public getRandomStation = async () => {
    const data = await this.axiosInstance.get("api/random-station");
    return data;
  };

  public getMatchSessionId = async (
    payload: IGetMatchSessionPayload
  ): Promise<IGetMatchSessionIdResponse> => {
    const data = await this.axiosInstance.get(`api/match/${payload.sessionId}`);

    return data.data;
  };

  public getUniqueSession = async (
    payload: IGetUniqueSessionPayload
  ): Promise<IGetUniqueSessionResponse> => {
    const data = await this.axiosInstance.post(`api/unique`, payload);

    return data.data;
  };

  public updateUniqueSession = async (
    payload: IUpdateUniqueSessionPayload
  ): Promise<IUpdateUniqueSessionResponse> => {
    const data = await this.axiosInstance.post(`api/unique`, payload);

    return data.data;
  };

  public createUniqueSession = async (
    payload: ICreateUniqueSessionPayload
  ): Promise<ICreateUniqueSessionResponse> => {
    const data = await this.axiosInstance.post(`api/unique`, payload);

    return data.data;
  };

  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url);
    return response.data;
  }

  async post<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
    return response.data;
  }

  async put<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url);
    return response.data;
  }
}
