require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const axios = require("axios");
const cheerio = require("cheerio");

const app = new Koa();
const router = new Router();

// const exma_num = 632234576584;

const { URL } = process.env;

async function getHTML(deliver_url) {
  try {
    return await axios.get(deliver_url);
  } catch (error) {
    console.error(error);
  }
}
router.get("/delivery", (ctx, next) => {
  const { number } = ctx.query;
  if (String(number).length >= 11 || String(number).length >= 12) {
    const deliver_url = URL + number.toString();
    console.log(deliver_url);

    getHTML(deliver_url)
      .then(res => {
          console.log(res.data)
        let processing_pos = [];
        const $ = cheerio.load(res.data);
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

app.listen(4000, () => {
  console.log("Koa server is listening to port 4000");
});
