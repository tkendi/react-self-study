const Koa = require('koa');
const app = Koa();

app.use(ctx => {
    ctx.body = 'hello world';
});

app.use(4000, () => {
    console.log('Listening to port 4000');
});