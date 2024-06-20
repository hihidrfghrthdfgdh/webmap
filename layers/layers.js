var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NHAMAY_1 = new ol.format.GeoJSON();
var features_NHAMAY_1 = format_NHAMAY_1.readFeatures(json_NHAMAY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHAMAY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHAMAY_1.addFeatures(features_NHAMAY_1);
var lyr_NHAMAY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHAMAY_1, 
                style: style_NHAMAY_1,
                popuplayertitle: "NHAMAY",
                interactive: true,
                title: '<img src="styles/legend/NHAMAY_1.png" /> NHAMAY'
            });
var format_MATNUOC_2 = new ol.format.GeoJSON();
var features_MATNUOC_2 = format_MATNUOC_2.readFeatures(json_MATNUOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MATNUOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MATNUOC_2.addFeatures(features_MATNUOC_2);
var lyr_MATNUOC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MATNUOC_2, 
                style: style_MATNUOC_2,
                popuplayertitle: "MATNUOC",
                interactive: true,
                title: '<img src="styles/legend/MATNUOC_2.png" /> MATNUOC'
            });
var format_HLDIEN_3 = new ol.format.GeoJSON();
var features_HLDIEN_3 = format_HLDIEN_3.readFeatures(json_HLDIEN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLDIEN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLDIEN_3.addFeatures(features_HLDIEN_3);
var lyr_HLDIEN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HLDIEN_3, 
                style: style_HLDIEN_3,
                popuplayertitle: "HLDIEN",
                interactive: true,
                title: '<img src="styles/legend/HLDIEN_3.png" /> HLDIEN'
            });
var format_CHUNGCU_4 = new ol.format.GeoJSON();
var features_CHUNGCU_4 = format_CHUNGCU_4.readFeatures(json_CHUNGCU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHUNGCU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHUNGCU_4.addFeatures(features_CHUNGCU_4);
var lyr_CHUNGCU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHUNGCU_4, 
                style: style_CHUNGCU_4,
                popuplayertitle: "CHUNGCU",
                interactive: true,
                title: '<img src="styles/legend/CHUNGCU_4.png" /> CHUNGCU'
            });
var format_HANHCHINH_5 = new ol.format.GeoJSON();
var features_HANHCHINH_5 = format_HANHCHINH_5.readFeatures(json_HANHCHINH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HANHCHINH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HANHCHINH_5.addFeatures(features_HANHCHINH_5);
var lyr_HANHCHINH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HANHCHINH_5, 
                style: style_HANHCHINH_5,
                popuplayertitle: "HANHCHINH",
                interactive: true,
                title: '<img src="styles/legend/HANHCHINH_5.png" /> HANHCHINH'
            });
var format_TTVH_6 = new ol.format.GeoJSON();
var features_TTVH_6 = format_TTVH_6.readFeatures(json_TTVH_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTVH_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTVH_6.addFeatures(features_TTVH_6);
var lyr_TTVH_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTVH_6, 
                style: style_TTVH_6,
                popuplayertitle: "TTVH",
                interactive: true,
                title: '<img src="styles/legend/TTVH_6.png" /> TTVH'
            });
var format_CHO_7 = new ol.format.GeoJSON();
var features_CHO_7 = format_CHO_7.readFeatures(json_CHO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHO_7.addFeatures(features_CHO_7);
var lyr_CHO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHO_7, 
                style: style_CHO_7,
                popuplayertitle: "CHO",
                interactive: true,
                title: '<img src="styles/legend/CHO_7.png" /> CHO'
            });
var format_CAYXANG_8 = new ol.format.GeoJSON();
var features_CAYXANG_8 = format_CAYXANG_8.readFeatures(json_CAYXANG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANG_8.addFeatures(features_CAYXANG_8);
var lyr_CAYXANG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANG_8, 
                style: style_CAYXANG_8,
                popuplayertitle: "CAYXANG",
                interactive: true,
                title: '<img src="styles/legend/CAYXANG_8.png" /> CAYXANG'
            });
var format_BIETTHU_9 = new ol.format.GeoJSON();
var features_BIETTHU_9 = format_BIETTHU_9.readFeatures(json_BIETTHU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIETTHU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIETTHU_9.addFeatures(features_BIETTHU_9);
var lyr_BIETTHU_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIETTHU_9, 
                style: style_BIETTHU_9,
                popuplayertitle: "BIETTHU",
                interactive: true,
                title: '<img src="styles/legend/BIETTHU_9.png" /> BIETTHU'
            });
var format_TRUONGHOC_10 = new ol.format.GeoJSON();
var features_TRUONGHOC_10 = format_TRUONGHOC_10.readFeatures(json_TRUONGHOC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRUONGHOC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRUONGHOC_10.addFeatures(features_TRUONGHOC_10);
var lyr_TRUONGHOC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRUONGHOC_10, 
                style: style_TRUONGHOC_10,
                popuplayertitle: "TRUONGHOC",
                interactive: true,
                title: '<img src="styles/legend/TRUONGHOC_10.png" /> TRUONGHOC'
            });
var format_LIENKE_11 = new ol.format.GeoJSON();
var features_LIENKE_11 = format_LIENKE_11.readFeatures(json_LIENKE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIENKE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIENKE_11.addFeatures(features_LIENKE_11);
var lyr_LIENKE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIENKE_11, 
                style: style_LIENKE_11,
                popuplayertitle: "LIENKE",
                interactive: true,
                title: '<img src="styles/legend/LIENKE_11.png" /> LIENKE'
            });
var format_DUONG_12 = new ol.format.GeoJSON();
var features_DUONG_12 = format_DUONG_12.readFeatures(json_DUONG_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUONG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUONG_12.addFeatures(features_DUONG_12);
var lyr_DUONG_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUONG_12, 
                style: style_DUONG_12,
                popuplayertitle: "DUONG",
                interactive: true,
                title: '<img src="styles/legend/DUONG_12.png" /> DUONG'
            });
var format_CAYXANH_13 = new ol.format.GeoJSON();
var features_CAYXANH_13 = format_CAYXANH_13.readFeatures(json_CAYXANH_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANH_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANH_13.addFeatures(features_CAYXANH_13);
var lyr_CAYXANH_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANH_13, 
                style: style_CAYXANH_13,
                popuplayertitle: "CAYXANH",
                interactive: true,
                title: '<img src="styles/legend/CAYXANH_13.png" /> CAYXANH'
            });
var format_CONG_14 = new ol.format.GeoJSON();
var features_CONG_14 = format_CONG_14.readFeatures(json_CONG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONG_14.addFeatures(features_CONG_14);
var lyr_CONG_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONG_14, 
                style: style_CONG_14,
                popuplayertitle: "CONG",
                interactive: true,
                title: '<img src="styles/legend/CONG_14.png" /> CONG'
            });
var format_HOGAA_15 = new ol.format.GeoJSON();
var features_HOGAA_15 = format_HOGAA_15.readFeatures(json_HOGAA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOGAA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOGAA_15.addFeatures(features_HOGAA_15);
var lyr_HOGAA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOGAA_15, 
                style: style_HOGAA_15,
                popuplayertitle: "HOGAA",
                interactive: true,
                title: '<img src="styles/legend/HOGAA_15.png" /> HOGAA'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_NHAMAY_1,lyr_MATNUOC_2,lyr_HLDIEN_3,lyr_CHUNGCU_4,lyr_HANHCHINH_5,lyr_TTVH_6,lyr_CHO_7,lyr_CAYXANG_8,lyr_BIETTHU_9,lyr_TRUONGHOC_10,lyr_LIENKE_11,lyr_DUONG_12,lyr_CAYXANH_13,lyr_CONG_14,lyr_HOGAA_15,],
                                fold: "open",
                                title: "group1"});

lyr_GoogleSatellite_0.setVisible(true);lyr_NHAMAY_1.setVisible(true);lyr_MATNUOC_2.setVisible(true);lyr_HLDIEN_3.setVisible(true);lyr_CHUNGCU_4.setVisible(true);lyr_HANHCHINH_5.setVisible(true);lyr_TTVH_6.setVisible(true);lyr_CHO_7.setVisible(true);lyr_CAYXANG_8.setVisible(true);lyr_BIETTHU_9.setVisible(true);lyr_TRUONGHOC_10.setVisible(true);lyr_LIENKE_11.setVisible(true);lyr_DUONG_12.setVisible(true);lyr_CAYXANH_13.setVisible(true);lyr_CONG_14.setVisible(true);lyr_HOGAA_15.setVisible(true);
var layersList = [group_group1];
lyr_NHAMAY_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MATNUOC_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_HLDIEN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHUNGCU_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOCHUNGCU': 'DANSOCHUNGCU', });
lyr_HANHCHINH_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TTVH_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHO_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANG_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BIETTHU_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOBT': 'DANSOBT', });
lyr_TRUONGHOC_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LIENKE_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSO': 'DANSO', });
lyr_DUONG_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANH_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CONG_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'D': 'D', 'DOC_I': 'DOC_I', 'Q_MUA': 'Q_MUA', 'Q_CONG': 'Q_CONG', 'V': 'V', 'H_D': 'H_D', 'H_D_20': 'H_D_20', });
lyr_HOGAA_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NHAMAY_1.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_MATNUOC_2.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_HLDIEN_3.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CHUNGCU_4.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'DANSOCHUNGCU': '', });
lyr_HANHCHINH_5.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_TTVH_6.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CHO_7.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CAYXANG_8.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_BIETTHU_9.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'DANSOBT': '', });
lyr_TRUONGHOC_10.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_LIENKE_11.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'DANSO': '', });
lyr_DUONG_12.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CAYXANH_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CONG_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'D': 'TextEdit', 'DOC_I': 'TextEdit', 'Q_MUA': 'TextEdit', 'Q_CONG': 'TextEdit', 'V': 'TextEdit', 'H_D': 'Range', 'H_D_20': 'TextEdit', });
lyr_HOGAA_15.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', });
lyr_NHAMAY_1.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_MATNUOC_2.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_HLDIEN_3.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_CHUNGCU_4.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', 'DANSOCHUNGCU': 'header label - always visible', });
lyr_HANHCHINH_5.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_TTVH_6.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_CHO_7.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_CAYXANG_8.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_BIETTHU_9.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', 'DANSOBT': 'header label - always visible', });
lyr_TRUONGHOC_10.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', });
lyr_LIENKE_11.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'header label - always visible', 'DANSO': 'header label - always visible', });
lyr_DUONG_12.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_CAYXANH_13.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_CONG_14.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'header label - always visible', 'D': 'header label - always visible', 'DOC_I': 'header label - always visible', 'Q_MUA': 'header label - always visible', 'Q_CONG': 'header label - always visible', 'V': 'header label - always visible', 'H_D': 'header label - always visible', 'H_D_20': 'header label - always visible', });
lyr_HOGAA_15.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', });
lyr_HOGAA_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});