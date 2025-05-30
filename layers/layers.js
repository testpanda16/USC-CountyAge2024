var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_tl_2024_us_state_1 = new ol.format.GeoJSON();
var features_tl_2024_us_state_1 = format_tl_2024_us_state_1.readFeatures(json_tl_2024_us_state_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2024_us_state_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2024_us_state_1.addFeatures(features_tl_2024_us_state_1);
var lyr_tl_2024_us_state_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2024_us_state_1, 
                style: style_tl_2024_us_state_1,
                popuplayertitle: 'tl_2024_us_state',
                interactive: false,
                title: '<img src="styles/legend/tl_2024_us_state_1.png" /> tl_2024_us_state'
            });
var format_tl_2024_us_county_2 = new ol.format.GeoJSON();
var features_tl_2024_us_county_2 = format_tl_2024_us_county_2.readFeatures(json_tl_2024_us_county_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2024_us_county_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2024_us_county_2.addFeatures(features_tl_2024_us_county_2);
var lyr_tl_2024_us_county_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2024_us_county_2, 
                style: style_tl_2024_us_county_2,
                popuplayertitle: 'tl_2024_us_county',
                interactive: true,
    title: 'tl_2024_us_county<br />\
    <img src="styles/legend/tl_2024_us_county_2_0.png" /> 21 - 38<br />\
    <img src="styles/legend/tl_2024_us_county_2_1.png" /> 38 - 41<br />\
    <img src="styles/legend/tl_2024_us_county_2_2.png" /> 41 - 43<br />\
    <img src="styles/legend/tl_2024_us_county_2_3.png" /> 43 - 46<br />\
    <img src="styles/legend/tl_2024_us_county_2_4.png" /> 46 - 68<br />' });

lyr_ESRIGraydark_0.setVisible(true);lyr_tl_2024_us_state_1.setVisible(true);lyr_tl_2024_us_county_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_tl_2024_us_state_1,lyr_tl_2024_us_county_2];
lyr_tl_2024_us_state_1.set('fieldAliases', {'REGION': 'REGION', 'DIVISION': 'DIVISION', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_tl_2024_us_county_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'FIPS': 'FIPS', 'Counties 3rd Try_AGE6569_TOT': 'Counties 3rd Try_AGE6569_TOT', 'Counties 3rd Try_AGE7074_TOT': 'Counties 3rd Try_AGE7074_TOT', 'Counties 3rd Try_AGE7579_TOT': 'Counties 3rd Try_AGE7579_TOT', 'Counties 3rd Try_AGE8084_TOT': 'Counties 3rd Try_AGE8084_TOT', 'Counties 3rd Try_AGE85PLUS_TOT': 'Counties 3rd Try_AGE85PLUS_TOT', 'Counties 3rd Try_MEDIANAGE_TOTALS': 'Counties 3rd Try_MEDIANAGE_TOTALS', 'FIPS1': 'FIPS1', });
lyr_tl_2024_us_state_1.set('fieldImages', {'REGION': 'TextEdit', 'DIVISION': 'TextEdit', 'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_tl_2024_us_county_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'FIPS': 'TextEdit', 'Counties 3rd Try_AGE6569_TOT': 'TextEdit', 'Counties 3rd Try_AGE7074_TOT': 'TextEdit', 'Counties 3rd Try_AGE7579_TOT': 'TextEdit', 'Counties 3rd Try_AGE8084_TOT': 'TextEdit', 'Counties 3rd Try_AGE85PLUS_TOT': 'TextEdit', 'Counties 3rd Try_MEDIANAGE_TOTALS': 'Range', 'FIPS1': 'TextEdit', });
lyr_tl_2024_us_state_1.set('fieldLabels', {'REGION': 'no label', 'DIVISION': 'no label', 'STATEFP': 'no label', 'STATENS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_tl_2024_us_county_2.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'GEOID': 'hidden field', 'GEOIDFQ': 'hidden field', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'CLASSFP': 'hidden field', 'MTFCC': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'FIPS': 'hidden field', 'Counties 3rd Try_AGE6569_TOT': 'inline label - always visible', 'Counties 3rd Try_AGE7074_TOT': 'inline label - always visible', 'Counties 3rd Try_AGE7579_TOT': 'inline label - always visible', 'Counties 3rd Try_AGE8084_TOT': 'inline label - always visible', 'Counties 3rd Try_AGE85PLUS_TOT': 'inline label - always visible', 'Counties 3rd Try_MEDIANAGE_TOTALS': 'inline label - always visible', 'FIPS1': 'hidden field', });
lyr_tl_2024_us_county_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});