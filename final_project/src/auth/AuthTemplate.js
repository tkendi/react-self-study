import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import palette from '../styles/js/palette'
import Button from '../public_comp/Button'

function AuthTemplate({children}) {
    return (
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    )
}

export default AuthTemplate
