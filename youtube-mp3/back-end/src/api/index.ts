import Router from 'koa-router';
import ytsr from 'ytsr';

const api = new Router();

api.get('/search/:context', async (ctx: any) => {
  const result = {
    title: [],
    link: [],
  };

  const { context } = ctx.params;

  if (!context) return (ctx.body = 'Empty Value');

  const data = await ytsr
    .getFilters(context)
    .then(async (filters: any) => {
      const options = {
        limit: 5,
        nextpageRef: filters.get('Type').find((o: any) => o.name === 'Video')
          .ref,
      };
      const res: any = await ytsr(null, options);
      console.log(res)
      for (const keys in res.items) {
        (<any>result.title)[keys] = res.items[keys].title;
        (<any>result.link)[keys] = res.items[keys].link;
      }
    })
    .catch((err: any) => {
      console.error(err);
    });

  // console.log(result);

  ctx.body = result;
  return result;
});

api.get('/download/:contenet', async (ctx: any) => {
  ctx.body = 'Testing Download';
});

export default api;
