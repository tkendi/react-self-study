require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

// const exma_num = 632234576584;

const {URL} = process.env

router.get('/delivery', (ctx, next) => {
    const {number} = ctx.query;
    if((number.toString()).length >= 11 || (number.toString()).length >= 12) {
        const deliver_url = (URL + (number.toString()))
        console.log(deliver_url)
    } else {
        console.log('failure')
    }
    console.log(number)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
    console.log('Koa server is listening to port 4000')
})
