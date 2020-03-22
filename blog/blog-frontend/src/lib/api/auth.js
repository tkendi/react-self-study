import client from './client';

//로그인
export const login = ({username, password}) => 
    client.post("/api/auth/login", {username, passowrd});

//회원가입
export const register = ({username, password}) => 
    client.post("api/auth/register", {username, password});

//로그인 상태확인
export default check = () => client.get('/api/auth/check');
