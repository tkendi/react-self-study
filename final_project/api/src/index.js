const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const weather_api = require('./weather_req')

router.get('/', async(ctx, next) => {
    ctx.body = await req.fetch_data()
})

app.listen(4000, () => {
    console.log('listening port 4000')
})
