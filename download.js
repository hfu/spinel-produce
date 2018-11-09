const config = require('config')
const fetch = require('node-fetch')
const fs = require('fs')

const main = async () => {
  for (let url of config.get('src')) {
    const path = `${config.get('srcDir')}/${url.split('/').pop()}`
    if (fs.existsSync(path)) {
      console.log(`${path} already exists, skipped.`)
    } else {
      fetch(url).then(res => {
        console.log(`downloading ${path}`)
        res.body.pipe(fs.createWriteStream(path))
      })
    }
  }
}

main()
