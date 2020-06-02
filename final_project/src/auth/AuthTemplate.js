import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`

`

function AuthTemplate({children}) {
    return (
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    )
}

export default AuthTemplate
