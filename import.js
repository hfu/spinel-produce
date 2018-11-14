const modify = require('./modify.js')
const config = require('config')
const fs = require('fs')
const zlib = require('zlib')
const readline = require('readline')

for (const url of config.get('src')) {
  const path = `${config.get('srcDir')}/${url.split('/').pop()}`
  const rl = readline.createInterface({
    input: fs.createReadStream(path).pipe(zlib.createGunzip())
  })
  rl.on('line', l => {
    const f = modify(JSON.parse(l))
    if (f) {
      console.log(JSON.stringify(f))
    }
  })
}
