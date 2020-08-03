require("dotenv").config();
const express = require("express");
const router = express.Router();
const fs = require("fs");
const axios = require("axios");

const url = process.env.URL;
const date = new Date();

const saveFile = (info) => {
  fs.writeFileSync("../src/data/data.json", JSON.stringify(info));
};

date.setMinutes(date.getMinutes() - 40);

const base_Date = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(
  -2
)}${("0" + date.getDate()).slice(-2)}`;
const base_Time = `${("0" + date.getHours()).slice(-2)}00`;

router.get("/", async (req, res) => {
  const nx = req.query.nx
  const ny = req.query.ny
  console.log(nx, ny)
  const info = {};
  const data = await axios.get(
    `${url}?serviceKey=${process.env.serviceKey}&numOfRows=10&pageNo=1&dataType=json&base_date=${base_Date}&base_time=${base_Time}&nx=${nx}&ny=${ny}`
  );
  const items = data.data.response.body.items.item

  info.baseDate = items[0].baseDate;
  info.baseTime = items[0].baseTime;

  for (const keys in items) {
    info[items[keys].category] = items[keys].obsrValue;
  }

  saveFile(info);
  console.log(info)
  res.json(info);
});

module.exports = router;
