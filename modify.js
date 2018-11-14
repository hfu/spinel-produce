module.exports = f => {
  // For Global Map Sri Lanka 2.0
  switch (f.properties.f_code) {
    case 'BA010': // coastl
      f.tippecanoe = { layer: 'coastl', minzoom: 6, maxzoom: 10 }
      return f
    case 'AP030': // roadl
      f.tippecanoe = { layer: 'roadl', minzoom: 6, maxzoom: 10 }
      return f
    case 'BH140': // riverl
      f.tippecanoe = { layer: 'riverl', minzoom: 6, maxzoom: 10 }
      return f
    case 'BH000': // inwatera
      f.tippecanoe = { layer: 'inwatera', minzoom: 6, maxzoom: 10 }
      return f
    case 'FA000': // polbndl
      f.tippecanoe = { layer: 'polbndl', minzoom: 6, maxzoom: 10 }
      return f
    case 'AN010': // raill
      f.tippecanoe = { layer: 'raill', minzoom: 6, maxzoom: 10 }
      return f
    case 'GB005': // airp
      f.tippecanoe = { layer: 'airp', minzoom: 6, maxzoom: 15 }
      return f
    case 'AL020': // builtupp
      f.tippecanoe = { layer: 'builtupp', minzoom: 6, maxzoom: 10 }
      return f
    case 'FA001': // polbnda
      return null // we do not use polbnda
    default:
      break
  }
  // For OpenStreetMap
  f.tippecanoe = { layer: 'osm', minzoom: 11, maxzoom: 15 }
  return f
}