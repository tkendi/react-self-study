import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'redux/modules/base';
import {AuthWrapper} from 'components/Auth';

class Auth extensd Component {
    //페이지 진입할 때 헤더를 비활성화
    componentWillMount() {
        this.props.baseActions.setHeaderVisibility(false);
    }

    //페이지 벗어날 때 다시 활성화
    compoenntWillUnmount() {
        this.props.baseActions.setHeaderVisibility(true);
    }

    render() {
        return (
            <AuthWrapper>

            </AuthWrapper>
        );
    }
}]

export default connect (
    (state) => ({

    }),
    (dispath) => ({
        baseActions: bindActionCreators(baseActions, dispath)
    })
)(Auth);
