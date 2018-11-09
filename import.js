const modify = require('./modify.js')
const config = require('config')
const fs = require('fs')
const zlib = require('zlib')
const readline = require('readline')

for (const url of config.get('src')) {
  const path = `${config.get('srcDir')}/${url.split('/').pop()}`
  const rl = readline.createInterface({
    input: fs.createReadStream(path).pipe(zlib.createGunzip())//,
//    output: fs.createWriteStream(config.get('dst'))
  })
  rl.on('line', l => {
    console.log(JSON.stringify(modify(JSON.parse(l))))
  })
}