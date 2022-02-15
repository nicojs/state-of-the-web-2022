import fs from "fs";
import path from "path";

/**
 * 
 * @param {string} chapter 
 */
async function listSlides(chapter) {
  const entries = await fs.promises.readdir(chapter, { withFileTypes: true });
  entries.forEach((entry) => {
    if (entry.isFile()) {
      console.log(`## ${entry.name}`);
    }
  });
}

async function listChapters(root) {
  const entries = await fs.promises.readdir(root);
  for (const entry of entries) {
    if (entry.isDirectory()) {
      console.log(`# ${entry.name}`);
      await listSlides(path.resolve(root, entry));
    }
  }
}

async function main() {
  listChapters("../../slides");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
