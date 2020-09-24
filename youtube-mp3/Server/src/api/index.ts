import Router from 'koa-router';
import ytsr from 'ytsr';

const api = new Router();

api.get('/search/:context', async (ctx: any) => {
  const { context } = ctx.params;

  if (!context) return (ctx.body = 'Empty Value');

  ytsr
    .getFilters(context)
    .then(async (filters: any) => {
      const result = {
        data: {
          title: [],
          link: [],
        },
      };

      const options = {
        limit: 5,
        nextpageRef: filters.get('Type').find((o: any) => o.name === 'Video')
          .ref,
      };
      const res: any = await ytsr(null, options);
      for (const keys in res.items) {
        (<any>result.data.title)[keys] = res.items[keys].title;
        (<any>result.data.link)[keys] = res.items[keys].link;
      }

      ctx.body = result;
      return result;
    })
    .catch((err: any) => {
      console.error(err);
    });
});

export default api;
