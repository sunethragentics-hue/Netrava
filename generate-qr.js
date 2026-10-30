import QRCode from 'qrcode';
import fs from 'fs';

async function generate() {
  const url = "https://netravapublication.com";
  
  // High resolution PNG
  await QRCode.toFile("public/assets/images/netrava-qr.png", url, {
    errorCorrectionLevel: "H",
    type: "png",
    margin: 2,
    width: 800,
    color: {
      dark: "#0B2545", // Netrava navy
      light: "#FFFFFF"
    }
  });

  // SVG
  const svgString = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: {
      dark: "#0B2545",
      light: "#FFFFFF"
    }
  });
  fs.writeFileSync("public/assets/images/netrava-qr.svg", svgString);

  console.log("QR generated successfully!");
}

generate();

