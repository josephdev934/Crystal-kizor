// Copies every supplied asset into public/assets/<group>/ as a web-sized WebP with a clear name.
import sharp from "sharp";
import fs from "fs";
const root = "assest/";
const groups = {
  people: [root + "Crystal_s pictures/", {
    "Architectural Studio Portrait.png": "portrait-standing",
    "Confident Designer in Studio Workspace.png": "portrait-blazer",
    "Cozy Architecture Podcast Workspace.png": "desk-podcast",
    "Earthy Editorial Portrait by African Architecture.png": "seated-chair",
    "Poised in a Warm Design Studio.png": "desk-brown-shirt",
    "Architectural Designer in Her Studio.png": "desk-white-shirt",
  }],
  "nature-home": [root + "Other assets/Nature Home/", {
    "Shade with Cantilevers.jpeg": "shade-cantilevers",
    "Front View with Tree shade.jpeg": "front-tree-shade",
    "New tree_back garden.jpeg": "back-garden",
    "78FFAF38-4097-40FA-93AB-CE632EFB666E_1_105_c.jpeg": "entrance-hall",
    "Family Sitting Room 2.jpeg": "family-sitting-room",
    "Bedroom 3.jpeg": "bedroom-3",
    "Dividers.jpeg": "timber-dividers",
    "7292B8D4-723A-4F36-AA1C-51F390A3813B_1_105_c 2 2.jpeg": "terrace-exterior",
    "B56D4EDB-41B6-48F7-AF8C-13AFA6AFCC76_1_201_a.jpeg": "stair-void",
    "ED948444-A053-4E8D-87A5-900D66602868_1_201_a.jpeg": "gym",
    "27F5948D-36C1-4A55-84AA-0641349797D2_1_105_c.jpeg": "office",
    "31 2.jpeg": "corridor",
    "25.png": "autumn-tree",
  }],
  "nature-home-concepts": [root + "Other assets/Nature Home 2/", {
    "1.png": "concept-1", "2.jpeg": "concept-2", "3.jpeg": "concept-3", "4.jpeg": "concept-4",
    "6.jpeg": "concept-5", "7.jpeg": "concept-6", "8.jpeg": "concept-7",
  }],
  "community-centre": [root + "Other assets/Community Centre Project/", {
    "IMG_2102 2.PNG": "exterior", "IMG_2041 2.PNG": "gathering-hall", "IMG_2103 2.PNG": "gallery-corridor",
    "IMG_2104 2.PNG": "shaded-walkway", "IMG_2105 2.JPG": "courtyard-tree",
  }],
  logos: [root + "Other assets/", { "Crystal Kizor Logo Collection.png": "logo-collection" }],
};
for (const [group, [dir, files]] of Object.entries(groups)) {
  fs.mkdirSync(`public/assets/${group}`, { recursive: true });
  for (const [file, name] of Object.entries(files)) {
    const info = await sharp(dir + file).resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`public/assets/${group}/${name}.webp`);
    console.log(`${group}/${name}.webp ${info.width}x${info.height}`);
  }
}
