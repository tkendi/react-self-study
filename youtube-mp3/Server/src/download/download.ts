import { doesNotThrow } from 'assert';
import Router from 'koa-router';
import ytsr from 'ytsr';

const router = new Router();

let filter;
ytsr
  .getFilters('github')
  .then(async (filters) => {
    filter = filters.get('Type').find((o) => o.name === 'Video');
    let filter2 = await ytsr.getFilters(filter.ref);
    filter2 = filter2.get('Duration').find((o) => o.name.startsWith('Short'));
    const options = {
      limit: 5,
      nextPageRef: filter2.ref,
    };
    const searchResults = await ytsr(null, options);
    doesth(searchResults);
  })
  .catch((err: any) => {
    console.log(err);
  });

export default router;
