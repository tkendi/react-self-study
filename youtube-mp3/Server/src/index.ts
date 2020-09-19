import Koa from 'koa';
import Router from 'koa-router';
import search from './search/search'

const app = new Koa();
const router = new Router();

router.get('/', (ctx: any) => {
  ctx.body = '홈';
});

router.use('/search', search.routes())

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
