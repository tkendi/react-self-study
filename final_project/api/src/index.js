const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = "Hello Koa"
});

app.listen(4000, () => {
    console.log('listening port 4000')
})
