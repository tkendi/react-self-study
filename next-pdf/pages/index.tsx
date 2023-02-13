import React from "react";
import { componentToPDFBuffer } from "../components/componentToPDFBuffer";

const index = () => {
  fetch("/api/pdf");
  return <div>index</div>;
};

export default index;

export const getServerSideProps = async ({ res, req, query }) => {
  const isServer = !!req;

  if (isServer && exportPDF) {
    const buffer = await componentToPDFBuffer(<Reports />);

    res.setHeader("Content-disposition", 'attachment; filename="article.pdf');
    res.setHeader("Content-Type", "application/pdf");
    res.end(buffer);
  }

  return {};
};