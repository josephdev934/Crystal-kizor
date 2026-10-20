import sharp from "sharp";
import fs from "fs";
import path from "path";
const [,, dir, out] = process.argv;
const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g)$/i.test(f));
const W = 300, H = 380;
const tiles = await Promise.all(files.map(async (f, i) => ({
  input: await sharp(path.join(dir, f)).resize(W, H, { fit: "contain", background: "#888" }).toBuffer(),
  left: (i % 5) * W, top: Math.floor(i / 5) * H,
})));
await sharp({ create: { width: W * 5, height: H * Math.ceil(files.length / 5), channels: 3, background: "#fff" } })
  .composite(tiles).jpeg({ quality: 70 }).toFile(out);
console.log(files.map((f, i) => `${i}: ${f}`).join("\n"));
