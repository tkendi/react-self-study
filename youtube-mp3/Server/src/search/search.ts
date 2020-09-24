import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

router.get('/:context', async (ctx: any) => {
  const { context } = ctx.params;
  const result = {
    data: {
      title: [],
      link: [],
    },
  };

  if (!context) return Error('Empty value');

  ytsr.getFilters(context).then(async (filters: any) => {
    const options = {
      limit: 5,
      nextpageRef: filters.get('Type').find((o: any) => o.name === 'Video').ref,
    };
    const res: any = await ytsr(null, options);
    for (const keys in res.items) {
      (<any>result.data.title)[keys] = res.items[keys].title;
      (<any>result.data.link)[keys] = res.items[keys].link;
    }

    console.log(result);
    ctx.body = result

    return result;
  });
});

export default router;
