const rl = require('readline').createInterface({
  input: process.stdin
})

rl.on('line', line => {
  let f = modify(JSON.parse(line))
  if(f) console.log(JSON.stringify(f))
})

const modify = (f) => {
  if (f.properties.natural === 'coastline') {
    f.tippecanoe = {
      layer: 'coastline',
      minzoom: 6, 
      maxzoom: 15
    }
    return f
  } else {
    return null
  }
}
