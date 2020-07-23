require("dotenv").config();
const Koa = require("koa");
const Router = require('koa-router')
const axios = require("axios");
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();


// const exma_num = 632234576584;

const { URL, PORT } = process.env;

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(cors());

app.use('/api', (ctx, next) => ctx.json({username: 'ddd'}))

app.listen(PORT, () => {
  console.log("Koa server is listening to port 4000");
});
