import pdf, { CreateOptions } from "html-pdf";
import { renderToStaticMarkup } from "react-dom/server";

export const componentToPDFBuffer = component => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const options = {
      format: "A4",
      orientation: "portrait",
      border: "10mm",
      footer: {
        height: "10mm",
      },
      type: "pdf",
      timeout: 30000,
    };

    pdf.create(html, options as CreateOptions).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
      }

      return resolve(buffer);
    });
  });
};
