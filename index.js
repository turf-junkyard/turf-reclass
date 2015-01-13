var featurecollection = require('turf-featurecollection');
var reclass = require('./index.js');

/**
 * Takes a featurecollection, a in field, an out field, and
 * an array of translations and outputs an identical feature collection with
 * the out field property populated.
* @module turf/reclass
* @param {FeatureCollection} input
* @param {string} inField field to map
* @param {string} outField the field in which to store results
* @return {Array<number>} an array of translations
*/
module.exports = function(fc, inField, outField, translations, done){
  var reclassed = featurecollection([]);

  fc.features.forEach(function(feature){
    var reclassedFeature;
    var found = false;
    for(var i = 0; i < translations.length; i++){
      if(feature.properties[inField] >= translations[i][0] && feature.properties[inField] <= translations[i][1]) {
        feature.properties[outField] = translations[i][2];
      }
    }
    reclassed.features.push(feature);
  });

  return reclassed;
};
