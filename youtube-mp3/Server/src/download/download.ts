import { doesNotThrow } from 'assert';
import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

router.get('/', async (ctx: any) => {
  const res = await ytsr(ctx).catch((e: any) => {
    return Error('Error')
  
  const video = res.items.filter(i => i.type === 'video')[0]
  if(!video) return Error('Error')
})

export default router;
