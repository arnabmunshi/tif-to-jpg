const Jimp = require("jimp");
const fs = require("fs");

const sourceFolder = "./original/";

fs.readdir(sourceFolder, (err, files) => {
  files.forEach((file) => {
    // console.log(file.split('.')[0]);

    let fileName = file.split(".")[0];
    Jimp.read(sourceFolder+file, function (err, file) {
      if (err) {
        console.log(err);
      } else {
        file.write(`./converted/${fileName}.jpg`);
      }
    });
  });
});
