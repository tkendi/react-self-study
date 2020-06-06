import jwt from 'jsonwebtoken'

const jwtMiddleware = (ctx, next) => {
    const token = ctx.cookies.get('access-token');
    if(!token) return next();
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)
        return next()
    } catch(e) {
        return next
    }
}

export default jwtMiddleware