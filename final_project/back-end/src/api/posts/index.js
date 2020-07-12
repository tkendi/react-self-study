import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn'
import { check } from '../auth/auth.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write)

const post = new Router();  //api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/:id', checkLoggedIn, postsCtrl.remove)
post.patch('/:id', checkLoggedIn, postsCtrl.update)

post.use('/:id', postsCtrl.checkObjectId, post.routes())

export default posts
