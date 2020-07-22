require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser')
const cheerio = require("cheerio");
const axios = require("axios")

const app = new Koa();
const router = new Router();

// const exma_num = 632234576584;

const { URL, PORT } = process.env;

router.get("/delivery", (ctx, next) => {
  const { number } = ctx.query;
  if (String(number).length >= 11 || String(number).length >= 12) {
    axios.get(`${URL}/${number}`)
    .then(function(res) {
      const progresses = res.data.progresses
      let number = {}
      let time = {}
      let description = {}

      console.log(res.data.progresses)
      for(const keys in progresses) {
        console.log(progresses[keys].time)
        console.log(progresses[keys].location)
        console.log(progresses[keys].description)
      }
    })
    console.log( time, location, description )
  } else {
    console.log("failure");
  }
  console.log(number);
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(bodyParser())

app.listen(PORT, () => {
  console.log("Koa server is listening to port 4000");
});
