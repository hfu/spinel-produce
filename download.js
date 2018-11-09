const config = require('config')
const fetch = require('node-fetch')
const fs = require('fs')

const main = async () => {
  for (let url of config.get('src')) {
    const fn = `${config.get('srcDir')}/${url.split('/').pop()}`
    fetch(url).then(res => {
      console.log(`downloading ${fn}`)
      res.body.pipe(fs.createWriteStream(fn))
    })
  }
}

main()
