// Usage: node screenshot.mjs http://localhost:3000
// Usage: node screenshot.mjs http://localhost:3000 label
// Saves to ./screenshots/screenshot-N[-label].png (auto-incremented, never overwritten)

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const screenshotsDir = path.join(__dirname, 'screenshots');
fs.mkdirSync(screenshotsDir, { recursive: true });

// Find next available screenshot number
let n = 1;
while (fs.existsSync(path.join(screenshotsDir, filename(n)))) n++;

function filename(num) {
  return label ? `screenshot-${num}-${label}.png` : `screenshot-${num}.png`;
}

const outputPath = path.join(screenshotsDir, filename(n));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outputPath}`);
