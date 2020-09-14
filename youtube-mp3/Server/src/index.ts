import Koa from 'koa';
import Router from 'koa-router';
import download from './download/download'

const app = new Koa();
const router = new Router();

router.get('/', (ctx: any) => {
  ctx.body = '홈';
});

router.use('/download', download.routes())

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
