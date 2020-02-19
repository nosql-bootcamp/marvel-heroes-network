const csv = require('csv-parser')
const fs = require('fs')

const ids = []

console.log('comicId:ID,title,:LABEL')

fs.createReadStream('data/comics.csv')
  .pipe(csv())
  .on('data', (data) => {
      const id = data["comicID"]
      if (ids.indexOf(id) < 0) {
        ids.push(id)
        console.log(`${id},"${data["title"].replace(/"/g, '').replace(/(?:\r\n|\r|\n)/g, ' ')}",Comic`)
      }
  });
  