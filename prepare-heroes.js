const csv = require('csv-parser')
const fs = require('fs')

const ids = []

console.log('heroId:ID,name,:LABEL')

fs.createReadStream('data/heroes.csv')
  .pipe(csv())
  .on('data', (data) => {
      const id = data["characterID"]
      if (ids.indexOf(id) <0) {
        ids.push(id)
        console.log(`${id},"${data["name"]}",Hero`)
      }
  });
  