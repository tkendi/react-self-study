import { observable, action, autorun } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = [];

  @action
  find = async (search_t: any) => {
    if (!search_t) {
    } else {
      (<any>this.searching) = await searched.search(search_t)
      const search = this.searching
      autorun(() => console.log(search.length, "search result"))
    }
  };
}
