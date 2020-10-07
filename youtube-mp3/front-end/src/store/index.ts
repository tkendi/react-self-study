import { observable, action, autorun, toJS } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = [];

  @action
  find = async (search_t: any) => {
    if (!search_t) {
    } else {
      (<any>this.searching) = toJS(await searched.search(search_t));
      console.log(this.searching)
      const search = toJS(this.searching);
      console.log(search);
    }
  };
}
