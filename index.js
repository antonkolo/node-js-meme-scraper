import * as cheerio from 'cheerio';
import fs from 'fs';
import { DownloaderHelper } from 'node-downloader-helper';
import fetch from 'node-fetch';

// check if memes folder exists, create if not
const folderExists = fs.existsSync('memes');
console.log(folderExists);

if (folderExists) {
  console.log('memes folder already exists');
} else {
  fs.mkdirSync('memes');
  console.log('memes folder created');
}

// fetch the html
const memeWebsiteURL = 'https://memegen-link-examples-upleveled.netlify.app/';
const html = await fetch(memeWebsiteURL)
  .then((response) => response.text())
  .then((data) => data)
  .catch((error) => console.error('Error:', error));

// parse the html and extract the image atrributes
const $ = cheerio.load(html);
const $images = $('img');

const imageLinksArray = [];

$images.each((index, image) => {
  imageLinksArray.push(image.attribs.src);
});

const truncatedImageLinksArray = imageLinksArray.slice(0, 10);
console.log(truncatedImageLinksArray);

// donwload and save images
const downloadImage = (imageURL, index) => {
  // define file name and options
  const fileName = (index + 1).toString().padStart(2, 0) + '.jpg';
  const options = { override: true, fileName: fileName };

  const dl = new DownloaderHelper(imageURL, './memes', options);

  dl.on('end', () =>
    console.log(`Image ${fileName} has been successfully saved ✅`),
  );
  dl.on('error', (err) => console.log('Download Failed', err));

  dl.start().catch((err) => console.error(err));
};

// donwload the images
truncatedImageLinksArray.forEach(downloadImage);
