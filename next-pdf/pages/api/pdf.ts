import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (req, res) => {
  console.log("income", req);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:6006/?path=/story/templates-examinationreport--template");
  await page.emulateMediaType("screen");

  const pdfBuffer = await page.pdf({ format: "A4" });

  res.send(pdfBuffer);

  await browser.close();
};

export default Handler;
