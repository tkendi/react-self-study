import { doesNotThrow } from 'assert';
import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

router.get('/:context', async (ctx: any) => {
  const { context } = ctx.params;

  if (!context) return Error('Empty value');

  ytsr.getFilters(context).then(async (filters: any) => {
    const options = {
      nextpageRef: filters.get('Type').find((o: any) => o.name === 'Video')
        .ref,
    };
    const res = await ytsr(null, options);
    console.log((await res).items);
  });
});

export default router;