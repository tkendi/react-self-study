import { doesNotThrow } from 'assert';
import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

router.get('/:context', async (ctx: any) => {
  const { context } = ctx.params;

  if (!context) return Error('Empty value');

  const res: any = await ytsr(context).catch((e: any) => {
    return Error('Error');
  });

  const video = res.items.filter((i: any) => i.type === 'video')[0]
  console.log(video)
  if (!video) return Error('Error');

  console.log(video);
});

export default router;
