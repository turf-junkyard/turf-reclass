var featurecollection = require('turf-featurecollection');
var reclass = require('./index.js');

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
  })

  return reclassed;
}
