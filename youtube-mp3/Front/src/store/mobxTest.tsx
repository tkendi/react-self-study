import React from 'react'
import {InputBase} from '@material-ui/core'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

@observer
class mobxTest extends React.Component {
    @observable email = ''
    @observable passwords = ''

    constructor(props: any) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    render() {
        return (
            <div>
                <header>
                    Testing
                </header>
                <input name = "email" placeholder = "Email" onChange = {this.onChange
            </div>
        )
    }
    @action.bound
    onChange(event: any) {
        const {name, value} = event?.target
        this[name] = value
    }
    
    onSubmit() {
        const {email, password} = this
        console.log('결과 확인: ', email, password)
    }    

}


export default mobxTest