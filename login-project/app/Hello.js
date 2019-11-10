import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import UserInfo from './UserInfo';

class Hello extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            mans: []
        };
    }

    componentDidMount() {
        fetch('/man', {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ mans: responseData });
            })
            .catch((error) => {june1209
                console.log('Error fetching man', error);
            });
    }

    render() {
        let mans = this.state.mans.map((man) => {
            return <Guy
                name={man.name}
                age={man.age}
                createDataTime={man.create_datetime}
                {...man} />
        });
        
        let userPanel = {
            return <UserInfo
                userId = {this.props.userId}
                onLogout = {this.props.onLogout}
                {...UserInfo} />
        };

        return (
            <div>
                {userPanel}
                <h1>CalyFactory Developer</h1>
                <ul>
                    {mans}
                </ul>
            </div>
        );
    }
}

class guy  extends Component {
    render () {
        return (
            <li>
                {this.props.name}, age is {this.props.age}. create time : {this.props.createDataTime}
            </li>
        );
    }
}

export default Hello;