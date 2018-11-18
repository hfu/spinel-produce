const geojsonArea = require('@mapbox/geojson-area')

// the flap function:
// a function to return a function to dynamically assign maximum and minimim
// zoom levels from the area of the polygon geometry.
const flap = (minzoom, maxzoom, F) => {
  if (!F) F = 19 // default flap constant
  return (f) => {
    f.tippecanoe.minzoom = Math.floor(
      F - Math.log2(geojsonArea.geometry(f.geometry)) / 2
    )
    if (f.tippecanoe.minzoom <= minzoom) {
      if (minzoom === 0) {
        // tippecanoe requires that minzoom should not be 0.
        delete f.tippecanoe.minzoom
      } else {
        f.tippecanoe.minzoom = minzoom
      }
    }
    if (f.tippecanoe.minzoom >= maxzoom) f.tippecanoe.minzoom = maxzoom
    return f
  }
}

// flap cache
const flaps = {
  building: flap(13, 15, 18)
}

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

  // For OpenStreetMap - 'two-eleven' schema
  if (f.properties.landuse) {
    f.tippecanoe = { layer: 'landuse', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.natural) {
    f.tippecanoe = { layer: 'natural', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.boundary) {
    f.tippecanoe = { layer: 'boundary', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.waterway) {
    f.tippecanoe = { layer: 'waterway', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.highway) {
    f.tippecanoe = { layer: 'highway', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.building) {
    f.tippecanoe = { layer: 'building', minzoom: 11, maxzoom: 15 }
    return flaps.building(f)
  }
  if (f.properties.railway) {
    f.tippecanoe = { layer: 'railway', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.route) {
    f.tippecanoe = { layer: 'route', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.aeroway) {
    f.tippecanoe = { layer: 'aeroway', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.place) {
    f.tippecanoe = { layer: 'place', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.leisure) {
    f.tippecanoe = { layer: 'leisure', minzoom: 11, maxzoom: 15 }
    return f
  }

  if (f.properties.amenity) {
    f.tippecanoe = { layer: 'amenity', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.historic) {
    f.tippecanoe = { layer: 'historic', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.military) {
    f.tippecanoe = { layer: 'military', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.man_made) {
    f.tippecanoe = { layer: 'man_made', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.power) {
    f.tippecanoe = { layer: 'power', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.sport) {
    f.tippecanoe = { layer: 'sport', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.office) {
    f.tippecanoe = { layer: 'office', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.craft) {
    f.tippecanoe = { layer: 'craft', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.public_transport) {
    f.tippecanoe = { layer: 'public_transport', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.tourism) {
    f.tippecanoe = { layer: 'tourism', minzoom: 11, maxzoom: 15 }
    return f
  }
  if (f.properties.shop) {
    f.tippecanoe = { layer: 'shop', minzoom: 11, maxzoom: 15 }
    return f
  }

  // DEFAULT
  // f.tippecanoe = { layer: 'default', minzoom: 11, maxzoom: 15 }
  // return f
  return null
}
