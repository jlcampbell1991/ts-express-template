const fs = require('fs');

function maybeWriteDir(name) {
  if(!fs.existsSync(name)) { fs.mkdirSync(name, { recursive: true }); }
}

function iterateFiles(readFrom, writeTo) {
  maybeWriteDir(writeTo);
  fs.readdirSync(readFrom).forEach(file => {
    const fromPath = `${readFrom}/${file}`;
    const toPath = `${writeTo}/${file}`;

    if(fs.lstatSync(fromPath).isDirectory()) {
      maybeWriteDir(toPath);
      iterateFiles(fromPath, toPath)
    } else {
      fs.copyFileSync(fromPath, toPath)
    }
  })
}

iterateFiles('./template', './temp');
