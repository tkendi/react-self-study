import React, { Component } from 'react';
import AllForm from './AllForm';

class LoginForm extends Component {

    state = {
        validatedId: '',
        validatedPassword: ''
    }


    render() {
        return (
            <div>
                <AllForm type = "login" />
            </div>
        );
    }
}

export default LoginForm;