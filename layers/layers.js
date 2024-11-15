var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Densidaddepoblacinhabha_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad de población (hab/ha)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidaddepoblacinhabha_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6538519.673578, -4100958.418845, -6504564.976959, -4064204.503073]
                            })
                        });
var format_Radiocensal2022_2 = new ol.format.GeoJSON();
var features_Radiocensal2022_2 = format_Radiocensal2022_2.readFeatures(json_Radiocensal2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radiocensal2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radiocensal2022_2.addFeatures(features_Radiocensal2022_2);
var lyr_Radiocensal2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radiocensal2022_2, 
                style: style_Radiocensal2022_2,
                popuplayertitle: "Radio censal 2022",
                interactive: true,
                title: '<img src="styles/legend/Radiocensal2022_2.png" /> Radio censal 2022'
            });
var format_Localidad_3 = new ol.format.GeoJSON();
var features_Localidad_3 = format_Localidad_3.readFeatures(json_Localidad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidad_3.addFeatures(features_Localidad_3);
var lyr_Localidad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidad_3, 
                style: style_Localidad_3,
                popuplayertitle: "Localidad",
                interactive: true,
                title: '<img src="styles/legend/Localidad_3.png" /> Localidad'
            });
var format_LmitepartidodeTigre_4 = new ol.format.GeoJSON();
var features_LmitepartidodeTigre_4 = format_LmitepartidodeTigre_4.readFeatures(json_LmitepartidodeTigre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitepartidodeTigre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitepartidodeTigre_4.addFeatures(features_LmitepartidodeTigre_4);
var lyr_LmitepartidodeTigre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitepartidodeTigre_4, 
                style: style_LmitepartidodeTigre_4,
                popuplayertitle: "Límite partido de Tigre",
                interactive: true,
                title: '<img src="styles/legend/LmitepartidodeTigre_4.png" /> Límite partido de Tigre'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Densidaddepoblacinhabha_1.setVisible(true);lyr_Radiocensal2022_2.setVisible(true);lyr_Localidad_3.setVisible(true);lyr_LmitepartidodeTigre_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Densidaddepoblacinhabha_1,lyr_Radiocensal2022_2,lyr_Localidad_3,lyr_LmitepartidodeTigre_4];
lyr_Radiocensal2022_2.set('fieldAliases', {'LINK': 'LINK', 'Poblacion': 'Poblacion', 'Mujeres': 'Mujeres', 'Varones': 'Varones', 'Densidadd': 'Densidadd', });
lyr_Localidad_3.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_LmitepartidodeTigre_4.set('fieldAliases', {'fid': 'fid', 'FRACCION': 'FRACCION', 'CLAVEF': 'CLAVEF', 'Partido': 'Partido', });
lyr_Radiocensal2022_2.set('fieldImages', {'LINK': 'TextEdit', 'Poblacion': '', 'Mujeres': '', 'Varones': '', 'Densidadd': '', });
lyr_Localidad_3.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_LmitepartidodeTigre_4.set('fieldImages', {'fid': 'TextEdit', 'FRACCION': 'TextEdit', 'CLAVEF': 'TextEdit', 'Partido': 'TextEdit', });
lyr_Radiocensal2022_2.set('fieldLabels', {'LINK': 'no label', 'Poblacion': 'no label', 'Mujeres': 'no label', 'Varones': 'no label', 'Densidadd': 'no label', });
lyr_Localidad_3.set('fieldLabels', {'Nombre': 'no label', });
lyr_LmitepartidodeTigre_4.set('fieldLabels', {'fid': 'no label', 'FRACCION': 'no label', 'CLAVEF': 'no label', 'Partido': 'no label', });
lyr_LmitepartidodeTigre_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});