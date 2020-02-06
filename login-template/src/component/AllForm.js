import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AllFormBlock = styled.div`
    h3 { 
        margin: 0;
        color: #495057;
        margin-bottom: 1rem;
    }
`

const textMap = {
    login: "로그인",
    register: "회원가입",
};

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: #adb5bd;
        text-decoration: underline;
        &:hover{
            color: #4dffcf
        }
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border:none;
    width:100%;
    outline: none;
    
`;

const ButtonWithMarginTop = styled.div`
    margin-top: 1rem;
`;

const AllForm = ({ type }) => {
    const text = textMap[type];
    return (
        <AllFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="아이디" />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete = 'new-password'
                        name = "passwordConfirm"
                        placeholder = "비밀번호 확인"
                        type = "password"
                    />
                )}
                <ButtonWithMarginTop cyan fullWidth>
                    {text}
                </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to = "/register">회원가입</Link>
                ) : (
                    <Link to = "/login">로그인</Link>
                )}
            </Footer>
        </AllFormBlock>
    );
}


export default AllForm;