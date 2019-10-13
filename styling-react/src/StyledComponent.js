import React from 'react';
import styled, {css} from 'styled-components';

const size = {
    desktop: 1024,
    tablet: 768
};

//size 객체에 따라 자동으로 media 쿼리 함수 생성
const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css `
        @media (max-width: ${size[label] / 16}em) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});

const Box = styled.div `
    /*props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    /*기본적으로 가로크기 1024px 가운데정렬 가로 크기가 작아짐에 따라 크기를 줄이인다. 768px 미만이면 꽉 채운다. */

    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
`;

const Button = styled.button `
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: 1rem;
    font-weight: 600;

    /* &문자를 Sass처럼 자기 자신 선택 가능
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /*inverted 값이 true일 때 특정 스타일을 부여해 줍니다 */
    ${props =>
        props.inverted && 
        css `
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color = "black">
            <Button>안녕하세요</Button>
            <Button inverted = {true}>테두리만</Button>
    </Box>
);

export default StyledComponent;
