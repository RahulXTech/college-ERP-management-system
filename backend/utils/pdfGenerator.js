const PDFDocument = require("pdfkit");

const generateReceipt = (res, data) => {
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=receipt_${data.roll}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(20).text("College Fee Receipt", { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text(`Name: ${data.name}`);
  doc.text(`Roll Number: ${data.roll}`);
  doc.text(`Amount Paid: ₹${data.amount}`);
  doc.text(`Date: ${new Date().toLocaleDateString()}`);

  doc.end();
};

module.exports = generateReceipt;