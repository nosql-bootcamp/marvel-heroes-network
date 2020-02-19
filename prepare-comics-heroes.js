const csv = require('csv-parser')
const fs = require('fs')

console.log(':START_ID,:END_ID,:TYPE')

fs.createReadStream('data/comics-heroes.csv')
  .pipe(csv())
  .on('data', (data) => {
      console.log(`${data["characterID"]},${data["comicID"]},APPEARED_IN`)
  });
  