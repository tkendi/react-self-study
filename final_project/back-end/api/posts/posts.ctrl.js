import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; //Bad Request 잘못된 요청을 보냈음
    return;
  }
  return next();
};

export const write = async (ctx) => {
  const shema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  //검증하고 나서 실패인 경우
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; //Bad Request
    ctx.body = result.error;
    return;
  }
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; //특정 포스트 없을 시 404에러
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;

  try {
    await (await Post.findByIdAndRemove(id)).execPopulate();
    ctx.status = 204; //No Content
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await (
      await Post.findByIdAndUpdate(id, ctx.request.body, {
        new: true, //이 값을 설정시 업데이트된 데이터 반환
        //false일 때면 업데이트되기 전의 데이터를 반환
      })
    ).execPopulate();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
