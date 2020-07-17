require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const axios = require("axios")
const cheerio = require("cheerio");
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();

// const exma_num = 632234576584;

const { URL, PORT } = process.env;

async function getHTML(deliver_url) {
  try{
    return await axios.get(deliver_url)
  } catch(e) {
    console.error(e)
  }
}
router.get("/delivery", (ctx, next) => {
  const { number } = ctx.query;
  if (String(number).length >= 11 || String(number).length >= 12) {
    const deliver_url = URL + number.toString();
    console.log(deliver_url);

    getHTML(deliver_url)
      .then(res => {
        let processing_pos = [];
        const $ = cheerio.load(res.data);
        console.log($);
        const bodyList = $("div.wrap-bwTable").children(
          "div.common-hrTable-1 table tbody"
        );

        console.log($);

        bodyList.each(function(i, elem) {
          processing_pos[i] = {
            pos: $(this)
              .find("tbody td span")
              .text()
          };
        });
        return processing_pos;
      })
      .then(res => console.log(res));
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
