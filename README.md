# node-js-meme-scraper

## TO-DO's

TODOs

- [x] Create a repository
- [x] Create a readme
- [ ] Set up ESLint config
- [ ] Create a .gitignore file and ignore the images by adding memes
- [ ] Create the memes folder
- [ ] Connect to memegen-link-examples-upleveled.netlify.app
- [ ] Research methods to make request in Node.js
  - [ ] should we use a fetch request?
  - [ ] is this the same as connecting?
- [ ] Create a variable with the html string from the website
- [ ] From the html, extract all of the img src attributes (array of strings = array of urls)
- [ ] Limit the array of urls to the first 10 (maybe this can be done with the previous step)
- [ ] Loop over each of the first 10 URLs in the array
  - [ ] Request the image URL
  - [ ] Save the image data in a variable
  - [ ] Create the file name with the leading zero
  - [ ] Create the file with the file name
  - [ ] Put the image data inside of the file
  - [ ] Test that the program runs multiple times without errors
