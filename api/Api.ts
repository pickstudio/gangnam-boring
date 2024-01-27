import getConfig from "next/config";

import { GBApi } from "./GBApi";
import ApiService from "./ApiService";

export default class Api {
  private static instance: GBApi;

  private constructor() {
    Api.instance = ApiService.shared;
  }

  static get shared(): GBApi {
    if (!Api.instance) new Api();
    return Api.instance;
  }
}
