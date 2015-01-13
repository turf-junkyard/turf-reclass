turf-reclass
============
[![build status](https://secure.travis-ci.org/Turfjs/turf-reclass.png)](http://travis-ci.org/Turfjs/turf-reclass)

Takes a feature collection, a in field, an out field, and an array of translations and outputs an identical feature collection with the out field property populated.

###Install

```sh
npm install turf-reclass
```

###Parameters

|name|description|
|---|---|
|fc|featurcollection to transform|
|inField|field to map|
|outField|new field|
|translations|an array of translations like:  [[0, 20, 1], [20, 40, 2], ... [60, Infinity, 4]]|

###Usage

```js
reclass(pts, inField, outField, translations)
```

###Example

```js
var reclass = require('turf-reclass')
var fs = require('fs')

var inField = 'elevation',
var outField = 'heightIndex'
// 0 to 20 will map to 1, 20 to 40 will map to 2, etc.
var translations = [[0, 20, 1], [20, 40, 2], [40, 60 , 3], [60, Infinity, 4]]

var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))

var reclassed = reclass(pts, inField, outField, translations)

console.log(reclassed)
```
