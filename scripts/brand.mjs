// Favicon (monogram) and social share image, both cut from Crystal's supplied logo collection.
import sharp from "sharp";
const logo = "assest/Other assets/Crystal Kizor Logo Collection.png";
await sharp(logo).extract({ left: 1070, top: 40, width: 280, height: 280 }).resize(256, 256).png().toFile("src/app/icon.png");
const primary = await sharp(logo).extract({ left: 60, top: 150, width: 840, height: 420 }).resize(900).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#f3eee5" } })
  .composite([{ input: primary, gravity: "centre" }]).png().toFile("src/app/opengraph-image.png");
