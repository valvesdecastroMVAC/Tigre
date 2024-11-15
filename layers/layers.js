var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Localidad_1 = new ol.format.GeoJSON();
var features_Localidad_1 = format_Localidad_1.readFeatures(json_Localidad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidad_1.addFeatures(features_Localidad_1);
var lyr_Localidad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidad_1, 
                style: style_Localidad_1,
                popuplayertitle: "Localidad",
                interactive: true,
                title: '<img src="styles/legend/Localidad_1.png" /> Localidad'
            });
var format_Problematicasyconflictosambientales_2 = new ol.format.GeoJSON();
var features_Problematicasyconflictosambientales_2 = format_Problematicasyconflictosambientales_2.readFeatures(json_Problematicasyconflictosambientales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Problematicasyconflictosambientales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Problematicasyconflictosambientales_2.addFeatures(features_Problematicasyconflictosambientales_2);
var lyr_Problematicasyconflictosambientales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Problematicasyconflictosambientales_2, 
                style: style_Problematicasyconflictosambientales_2,
                popuplayertitle: "Problematicas y conflictos ambientales",
                interactive: true,
    title: 'Problematicas y conflictos ambientales<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_0.png" /> Contaminación<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_1.png" /> Inundaciones<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_2.png" /> Biodiversidad<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_3.png" /> Turismo<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_4.png" /> Salud<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_5.png" /> Transporte<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_6.png" /> Servicios<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_7.png" /> Condiciones de vida<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_8.png" /> Educación Ambiental<br />\
    <img src="styles/legend/Problematicasyconflictosambientales_2_9.png" /> Participación ciudadana<br />'
        });
var format_LmitepartidodeTigre_3 = new ol.format.GeoJSON();
var features_LmitepartidodeTigre_3 = format_LmitepartidodeTigre_3.readFeatures(json_LmitepartidodeTigre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitepartidodeTigre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitepartidodeTigre_3.addFeatures(features_LmitepartidodeTigre_3);
var lyr_LmitepartidodeTigre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitepartidodeTigre_3, 
                style: style_LmitepartidodeTigre_3,
                popuplayertitle: "Límite partido de Tigre",
                interactive: true,
                title: '<img src="styles/legend/LmitepartidodeTigre_3.png" /> Límite partido de Tigre'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Localidad_1.setVisible(true);lyr_Problematicasyconflictosambientales_2.setVisible(true);lyr_LmitepartidodeTigre_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Localidad_1,lyr_Problematicasyconflictosambientales_2,lyr_LmitepartidodeTigre_3];
lyr_Localidad_1.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_Problematicasyconflictosambientales_2.set('fieldAliases', {'Problemati': 'Problemati', 'Categoria': 'Categoria', });
lyr_LmitepartidodeTigre_3.set('fieldAliases', {'fid': 'fid', 'FRACCION': 'FRACCION', 'CLAVEF': 'CLAVEF', 'Partido': 'Partido', });
lyr_Localidad_1.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_Problematicasyconflictosambientales_2.set('fieldImages', {'Problemati': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_LmitepartidodeTigre_3.set('fieldImages', {'fid': 'TextEdit', 'FRACCION': 'TextEdit', 'CLAVEF': 'TextEdit', 'Partido': 'TextEdit', });
lyr_Localidad_1.set('fieldLabels', {'Nombre': 'no label', });
lyr_Problematicasyconflictosambientales_2.set('fieldLabels', {'Problemati': 'header label - always visible', 'Categoria': 'header label - always visible', });
lyr_LmitepartidodeTigre_3.set('fieldLabels', {'fid': 'no label', 'FRACCION': 'no label', 'CLAVEF': 'no label', 'Partido': 'no label', });
lyr_LmitepartidodeTigre_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});