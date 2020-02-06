const Router = require('koa-router');
const postCrtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postCrtrl.list);
posts.post('/', postCrtrl.write);
posts.get('/:id', postCrtrl.read);
posts.delete('/:id', postCrtrl.remove);
posts.put('/:id', postCrtrl.replace);
posts.patch('/:id', postCrtrl.update);

module.exports = posts;