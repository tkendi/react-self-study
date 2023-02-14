import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const clickLink = (link: HTMLAnchorElement) => {
  link.click();
};

const accountForBrowser = (
  click: (link: HTMLAnchorElement) => void,
  link: HTMLAnchorElement
) => {
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
};

const simulateDownload = (uri: string, filename: string) => {
  const link = document.createElement("a");
  if (typeof link.download !== "string") {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForBrowser(clickLink, link);
  }
};

export const PngExport = async (id: string) => {
  if (document) {
    html2canvas(document.querySelector(`#${id}`)!).then(canvas => {
      simulateDownload(canvas.toDataURL(), "file-name.png");
    });
  }
};

export const PdfExport = async (id: string) => {
  if (document) {
    html2canvas(document.querySelector(`#${id}`)!).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = imgWidth * 1.414;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      heightLeft -= pageHeight;

      // eslint-disable-next-line new-cap
      const doc = new jsPDF("p", "mm", "A4");
      let position = 0;
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      while (heightLeft >= 20) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("Reports.pdf");
    });
  }
};
