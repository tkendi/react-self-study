import { observable, action, computed, configure } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = "";

  @action
  find = async (search_t: any) => {
    if (!search_t) {
    } else {
      const searching = await searched.search(search_t);
    }
  };
}
