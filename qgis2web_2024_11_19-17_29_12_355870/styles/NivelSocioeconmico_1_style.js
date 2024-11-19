var size = 0;
var placement = 'point';

var style_NivelSocioeconmico_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PC1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -17.281918 && value <= -1.808779) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(60,177,62,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -1.808779 && value <= -0.631530) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,193,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.631530 && value <= 0.090001) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(147,210,169,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.090001 && value <= 0.797105) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,226,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.797105 && value <= 1.416940) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(112,200,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.416940 && value <= 1.812801) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(46,177,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.812801 && value <= 1.858231) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,164,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
