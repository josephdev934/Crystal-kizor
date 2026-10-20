// Repairs text that was UTF-8, then wrongly re-saved as Windows-1252 (arrows and dots turned into garbage).
import fs from "fs";
const dec = new TextDecoder("windows-1252");
const back = new Map();
for (let b = 0; b < 256; b++) back.set(dec.decode(Uint8Array.of(b)), b);
for (const f of process.argv.slice(2)) {
  const t = fs.readFileSync(f, "utf8");
  if (!/[âÂÃ]/.test(t)) continue;
  const bytes = Uint8Array.from([...t].map((c) => (c.charCodeAt(0) < 128 ? c.charCodeAt(0) : back.get(c) ?? 63)));
  fs.writeFileSync(f, new TextDecoder("utf-8").decode(bytes));
  console.log("fixed", f);
}
