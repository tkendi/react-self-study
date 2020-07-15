const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();



router.get('/delivery', (ctx, next) => {
    const {number} = ctx.query;
    //number유무에 따라 출력결과가 다르다
    if(length(number.toString()) > )
    console.log(number)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
    console.log('Koa server is listening to port 4000')
})
