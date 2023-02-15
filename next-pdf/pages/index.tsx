import React from "react";

import Report from "./report";

import { componentToPDFBuffer } from "../components/componentToPDFBuffer";
import { PdfExport } from "../utils/generatePDF";
import puppeteer from "puppeteer";

const index = () => {
  return (
    <div id="capture">
      <a href="/api/pdf" download="generate_file.pdf">
        download PDF
      </a>
      <p>index</p>
    </div>
  );
};

export default index;
