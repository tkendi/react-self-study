const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

const weather_api = require('./weather_req');

router.get('/fetch', async(ctx, next) => {
    ctx.body = await weather_api.fetch_data()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
    console.log('listening port 4000')
})
