import fs from 'fs';
import path from 'path';


function walk(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (error, files) => {
      if (error) {
        return reject(error);
      }
      Promise.all(files.map((file) => {
        return new Promise((resolve, reject) => {
          const filepath = path.join(dir, file);
          fs.stat(filepath, (error, stats) => {
            if (error) {
              return reject(error);
            }
            if (stats.isDirectory()) {
              walk(filepath).then(resolve);
            } else if (stats.isFile()) {
              resolve(filepath);
            }
          });
        });
      }))
      .then((foldersContents) => {
        resolve(foldersContents.reduce((all, folderContents) => all.concat(folderContents), []));
      });
    });
  });
}
walk('./src').then(files => {
    const jsFiles = files.filter(file => file.endsWith('.js'));
    jsFiles.forEach(file => {
        fs.rename(file, file.replace('.js', '.ts'), function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    });
});