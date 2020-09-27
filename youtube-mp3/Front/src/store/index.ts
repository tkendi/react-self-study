import {observable, action, computed, configure} from 'mobx'
import * as searched from '../lib/api/searching'

export default class search {
    @observable searching = ""

    @action
    find = () => {
        const data = searched.search(search)
        console.log(data)
    }
}