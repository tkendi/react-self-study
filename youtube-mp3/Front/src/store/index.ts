import { observable, action, computed, configure, reaction } from "mobx";
import * as searched from "../lib/api/searching";

export default class youtube {
  @observable searching = [];

  @action
  find = async (search_t: any) => {
    if (!search_t) {
    } else {
      (<any>this.searching.push)= await searched.search(search_t)
    }
  };
}
