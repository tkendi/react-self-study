import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Alertcontainer from 'react-alert';

class LoginPanel extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            requestID: '',
            requsetPW: ''
        };
        this.alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        };

        this.requestIDChange = this.requestIDChange.bind(this);
        this.requsetPWChange = this.requsetPWChange.bind(this);
    }

    onSubmit() {
        let userInfo = {
            'user_id': this.state.requestID,
            'user_pw': this.state.requsetPW
        };

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then((response) => response.json())
            .then((responseData) => {
                if (responseData.loginresult) {
                    this.props.onSuccess(this.state.requestID);
                } else {
                    msg.show(`일치하는 Id와 Pw가 없습니다`
                        , {
                            time: 2000,
                            type: 'error'
                        });
                    this.setState({
                        requestID,
                        requsetPW
                });
            }
        });
    }

    requestIDChange(event) {
        this.setState({requestID: event.target.value});
    }

    requsetPWChange(event) {
        this.setState({requsetPW: event.target.value});
    }

    render() {
        return(
            <div className = "loginpanel">
                <div className = "loginwindow">
                    <Alertcontainer ref = { (a) => global.msg = a} {...this.alertOptions} />
                    <ul>
                        <li className = "title">Login Template</li>
                        <li><input type = "text" name = "requestID" placeholder = "Admin Id" value = {this.state.requestID} onChange = {this.requestIDChange}/> </li>
                        <li><input type = "text" name = "requestPW" placeholder = "Password" value = {this.state.requsetPW} onChange = {this.requsetPWChange}/> </li>
                        <li><button className = "loginwindowbutton" onClick = {this.onClick = {this.onSubmit(this)}}>로그인</button> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

LoginPanel.propTypes = {
    onSuccess: PropTypes.function
};
export default LoginPanel;