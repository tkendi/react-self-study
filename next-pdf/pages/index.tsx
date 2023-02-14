import React from "react";

import Report from "./report"

import { componentToPDFBuffer } from "../components/componentToPDFBuffer";
import { PdfExport } from "../utils/generatePDF";

const index = () => {
  return (
    <div id="capture">
      <button onClick={() => PdfExport("capture")}>download PDF</button>
      <p>index</p>
    </div>
  );
};

export default index;

// export const getServerSideProps = async ({ res, req, query }) => {
//   const exportPDF = query.exportPDF === "true";
//   const isServer = !!req;

//   if (isServer && exportPDF) {
//     const buffer = await componentToPDFBuffer(<Report/>);

//     res.setHeader("Content-disposition", 'attachment; filename="article.pdf');
//     res.setHeader("Content-Type", "application/pdf");
//     res.end(buffer);
//   }
//   return {
//     props: {},
//   };
// };
