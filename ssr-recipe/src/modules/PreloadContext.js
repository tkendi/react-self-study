import {createContext, useContext} from 'react';

//클라이언트 환경: null
//서버 환경: {done: false, promises: []}
const PreloaderContext = createContext(null);

//resolve는 함수타입
export const Preloader = ({resolve}) => {
    const preloaderContext = useContext(PreloaderContext);
    if(!preloaderContext) return null;  //context 값이 유효하지 않다면 아무것도 하지않음
    if(preloaderContext.done)   return null;    //이미 작업이 끝났다면 아무것도 하지 않음

    //promises 배열이 프로미스 등록
    //설령 resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기위해
    //Promise.resolve 함수 사용
    preloaderContext.promises.push(Promise.resolve(resolve()));
    return null;
};