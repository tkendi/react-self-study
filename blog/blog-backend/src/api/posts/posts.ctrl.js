import Post from '../../models/post'
import mongoose from 'mongoose'

/**
 * POST /api/posts
 * {
 *    title: '제목',
 *    body: '내용',
 *    tags: ['태그1', '태그2']
 * }
 */
export const write = async ctx => {
    const {title, body, tags} = ctx.request.body;
    const post = new Post({
        title, 
        body,
        tags,
    });
    try {
        await post.save()
        ctx.body = post
    } catch(e) {
        ctx.throw(e)
    }
}

export const list = ctx => {
    try{
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch(e) {
        ctx.throw(500, e)
    } 
}

export const read = ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e)
    }
}

export const remove = ctx => {
    const { id } = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(500, e)
    }
}

export const update = ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdUpdate(id, ctx.request.body, {
            new: true,      //이 값을 설정하면 업데이트된 데이터를 반환합니다
            //false일 때 업데이트되기 전의 데이터를 반환한다
        }).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e)
    }
}
