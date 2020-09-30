import { observable, action, computed, configure } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = "";

  @action
  find = async (searching: any) => {
    if (!searching) {
    } else {
      const data = await searched.search(searching);
    }
  };
}
