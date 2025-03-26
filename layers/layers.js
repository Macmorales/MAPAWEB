ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([674755.078497, 5926648.508813, 675293.544765, 5926944.365743]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_coor_utm_1 = new ol.format.GeoJSON();
var features_coor_utm_1 = format_coor_utm_1.readFeatures(json_coor_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_coor_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coor_utm_1.addFeatures(features_coor_utm_1);
cluster_coor_utm_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coor_utm_1
});
var lyr_coor_utm_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coor_utm_1, 
                style: style_coor_utm_1,
                popuplayertitle: 'coor_utm',
                interactive: true,
                title: '<img src="styles/legend/coor_utm_1.png" /> coor_utm'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_coor_utm_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_coor_utm_1];
lyr_coor_utm_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Nombre': 'Nombre', 'video': 'video', 'Por_Corr': 'Por_Corr', 'Por_Inco': 'Por_Inco', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', });
lyr_coor_utm_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Nombre': 'TextEdit', 'video': 'TextEdit', 'Por_Corr': '', 'Por_Inco': '', 'Porc_Total': '', 'Preg_incor': '', });
lyr_coor_utm_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'video': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Por_Inco': 'inline label - always visible', 'Porc_Total': 'no label', 'Preg_incor': 'no label', });
lyr_coor_utm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});