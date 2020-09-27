import {observable, action, computed, configure} from 'mobx'
import * as searched from '../lib/api/searching'

export default class youtube {
    @observable searching = ""

    @action
    find = (search_t: any) => {
        const data = searched.search(search_t)
        console.log(data)
    }
}