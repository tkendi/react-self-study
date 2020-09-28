import { observable, action, computed, configure } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = "";

  @action
  find = async (search_t: any) => {
    if (!search_t) {
    } else {
      const data = await searched.search(search_t);
      console.log(data);
    }
  };
}
