import { doesNotThrow } from 'assert';
import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

router.get('/:context', async (ctx: any) => {
  const { context } = ctx.params;

  if (!context) return Error('Empty value');

  const options = {
    limit: 999,
  };  

  const res: any = await ytsr(context, options).catch((e: any) => {
    return Error('Error');
  });

  const video = res.items.filter((i: any) => i.type === 'video')[0];
  console.log(video);
  if (!video) return Error('Error');
});

export default router;
