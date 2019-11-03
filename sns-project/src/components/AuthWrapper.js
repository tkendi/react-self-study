import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from './lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div   //화면 중앙 위치
    `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

const ShadowBox = styled.div       //너비, 그림자 설정
    `
        width: 500px;
        ${shadow(2)}
    `;

const LogoWrapper = styled.div      //로고
    `
        background: ${oc.teal[7]};
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

const Logo = styled.div
    `
        color: white;
        font-family: 'Rajdhani';
        font-size: 2.4rem;
        letter-spacing: 5px;
        text-decoration: none;
    `;

const Contents = styled.div     //Children이 들어 가는곳
    `
        background: 2rem;
        padding: 2rem;
        height: auto;
    `;

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowBox>
            <LogoWrapper>
                <Logo to = "/">HEURM</Logo>
            </LogoWrapper>
        </ShadowBox>
    </Positioner>
);

export default AuthWrapper;
