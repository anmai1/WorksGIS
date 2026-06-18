ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4269").setExtent([-73.652196, 34.244715, -73.652154, 34.244771]);
var wms_layers = [];

var format_MedianEarningsforBachelorDegreeHolders_0 = new ol.format.GeoJSON();
var features_MedianEarningsforBachelorDegreeHolders_0 = format_MedianEarningsforBachelorDegreeHolders_0.readFeatures(json_MedianEarningsforBachelorDegreeHolders_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4269'});
var jsonSource_MedianEarningsforBachelorDegreeHolders_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianEarningsforBachelorDegreeHolders_0.addFeatures(features_MedianEarningsforBachelorDegreeHolders_0);
var lyr_MedianEarningsforBachelorDegreeHolders_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianEarningsforBachelorDegreeHolders_0, 
                style: style_MedianEarningsforBachelorDegreeHolders_0,
                popuplayertitle: 'Median Earnings for Bachelor Degree Holders',
                interactive: true,
    title: 'Median Earnings for Bachelor Degree Holders<br />\
    <img src="styles/legend/MedianEarningsforBachelorDegreeHolders_0_0.png" /> $0 - $41,076<br />\
    <img src="styles/legend/MedianEarningsforBachelorDegreeHolders_0_1.png" /> $41,076 - $82,153<br />\
    <img src="styles/legend/MedianEarningsforBachelorDegreeHolders_0_2.png" /> $82,153 - $123,229<br />\
    <img src="styles/legend/MedianEarningsforBachelorDegreeHolders_0_3.png" /> $123,229 - $164,306<br />\
    <img src="styles/legend/MedianEarningsforBachelorDegreeHolders_0_4.png" /> $164,306 - $205,382<br />' });

lyr_MedianEarningsforBachelorDegreeHolders_0.setVisible(true);
var layersList = [lyr_MedianEarningsforBachelorDegreeHolders_0];
lyr_MedianEarningsforBachelorDegreeHolders_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'MedianIncome_2019_GEO_ID': 'MedianIncome_2019_GEO_ID', 'MedianIncome_2019_NAME': 'MedianIncome_2019_NAME', 'MedianIncome_2019_Earnings_Less than high school graduate': 'MedianIncome_2019_Earnings_Less than high school graduate', 'MedianIncome_2019_Earnings_High school graduate (includes equivalency)': 'MedianIncome_2019_Earnings_High school graduate (includes equivalency)', 'MedianIncome_2019_Earnings_Some college or associate\'s degree': 'MedianIncome_2019_Earnings_Some college or associate\'s degree', 'MedianIncome_2019_Earnings_Bachelor\'s degree': 'MedianIncome_2019_Earnings_Bachelor\'s degree', 'MedianIncome_2019_Earnings_Graduate or professional degree': 'MedianIncome_2019_Earnings_Graduate or professional degree', });
lyr_MedianEarningsforBachelorDegreeHolders_0.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'MedianIncome_2019_GEO_ID': 'TextEdit', 'MedianIncome_2019_NAME': 'TextEdit', 'MedianIncome_2019_Earnings_Less than high school graduate': 'Range', 'MedianIncome_2019_Earnings_High school graduate (includes equivalency)': 'Range', 'MedianIncome_2019_Earnings_Some college or associate\'s degree': 'Range', 'MedianIncome_2019_Earnings_Bachelor\'s degree': 'Range', 'MedianIncome_2019_Earnings_Graduate or professional degree': 'Range', });
lyr_MedianEarningsforBachelorDegreeHolders_0.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'NAME': 'inline label - always visible', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'MedianIncome_2019_GEO_ID': 'no label', 'MedianIncome_2019_NAME': 'no label', 'MedianIncome_2019_Earnings_Less than high school graduate': 'no label', 'MedianIncome_2019_Earnings_High school graduate (includes equivalency)': 'no label', 'MedianIncome_2019_Earnings_Some college or associate\'s degree': 'no label', 'MedianIncome_2019_Earnings_Bachelor\'s degree': 'inline label - always visible', 'MedianIncome_2019_Earnings_Graduate or professional degree': 'no label', });
lyr_MedianEarningsforBachelorDegreeHolders_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});