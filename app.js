var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmF1emlhYmQiLCJhIjoiY2s4dWM5OXg1MDZuNzNvbHM3aTNyZTg2bSJ9.Bl2XGoNEE_HGhv_pWdlhLw'
}).addTo(mymap);

var states = [{
    "type": "Feature",
    "properties": { "party": "Republican" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22, 48.98],
            [-96.58, 45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": { "party": "Democrat" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];



L.geoJSON(states, {
    style: function (feature) {
        switch (feature.properties.party) {
            case 'Republican': return { color: "#ff0000" };
            case 'Democrat': return { color: "#0000ff" };
        }
    }
}).addTo(mymap);



let onedata = { "type": "Feature", "properties": { "fid": 1, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.1_1", "NAME_1": "Aceh", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "11", "HASC_1": "ID.AC" }, "geometry": { "type": "Point", "coordinates": [96.910886821593493, 4.224480160407047] } }


let data = [
    { "type": "Feature", "properties": { "fid": 1, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.1_1", "NAME_1": "Aceh", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "11", "HASC_1": "ID.AC" }, "geometry": { "type": "Point", "coordinates": [96.910886821593493, 4.224480160407047] } },
    { "type": "Feature", "properties": { "fid": 2, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.2_1", "NAME_1": "Bali", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "51", "HASC_1": "ID.BA" }, "geometry": { "type": "Point", "coordinates": [115.132109875536003, -8.369676936875747] } },
    { "type": "Feature", "properties": { "fid": 3, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.3_1", "NAME_1": "Bangka Belitung", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "19", "HASC_1": "ID.BB" }, "geometry": { "type": "Point", "coordinates": [106.552741964002308, -2.44845864447203] } },
    { "type": "Feature", "properties": { "fid": 4, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.4_1", "NAME_1": "Banten", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "36", "HASC_1": "ID.BT" }, "geometry": { "type": "Point", "coordinates": [106.109275725741469, -6.456455239560821] } },
    { "type": "Feature", "properties": { "fid": 5, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.5_1", "NAME_1": "Bengkulu", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "17", "HASC_1": "ID.BE" }, "geometry": { "type": "Point", "coordinates": [102.337147582127997, -3.533071221843934] } },
    { "type": "Feature", "properties": { "fid": 6, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.6_1", "NAME_1": "Gorontalo", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "75", "HASC_1": "ID.GO" }, "geometry": { "type": "Point", "coordinates": [122.37615124730074, 0.686847116093037] } },
    { "type": "Feature", "properties": { "fid": 7, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.7_1", "NAME_1": "DKI Jakarta", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "31", "HASC_1": "ID.JK" }, "geometry": { "type": "Point", "coordinates": [106.834483609003243, -6.200328557553623] } },
    { "type": "Feature", "properties": { "fid": 8, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.8_1", "NAME_1": "Jambi", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "15", "HASC_1": "ID.JA" }, "geometry": { "type": "Point", "coordinates": [102.723751853659607, -1.699423789792166] } },
    { "type": "Feature", "properties": { "fid": 9, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.9_1", "NAME_1": "Jawa Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "32", "HASC_1": "ID.JR" }, "geometry": { "type": "Point", "coordinates": [107.603031059099138, -6.920194936950778] } },
    { "type": "Feature", "properties": { "fid": 10, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.10_1", "NAME_1": "Jawa Tengah", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "33", "HASC_1": "ID.JT" }, "geometry": { "type": "Point", "coordinates": [110.200739854834183, -7.259387694138412] } },
    { "type": "Feature", "properties": { "fid": 11, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.11_1", "NAME_1": "Jawa Timur", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "35", "HASC_1": "ID.JI" }, "geometry": { "type": "Point", "coordinates": [112.733445371667116, -7.72007037643248] } },
    { "type": "Feature", "properties": { "fid": 12, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.12_1", "NAME_1": "Kalimantan Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "61", "HASC_1": "ID.KB" }, "geometry": { "type": "Point", "coordinates": [111.120964503698829, -0.086653385148637] } },
    { "type": "Feature", "properties": { "fid": 13, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.13_1", "NAME_1": "Kalimantan Selatan", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "63", "HASC_1": "ID.KS" }, "geometry": { "type": "Point", "coordinates": [115.439559515522674, -2.993286617208691] } },
    { "type": "Feature", "properties": { "fid": 14, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.14_1", "NAME_1": "Kalimantan Tengah", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "62", "HASC_1": "ID.KT" }, "geometry": { "type": "Point", "coordinates": [113.417665505541194, -1.602310894079314] } },
    { "type": "Feature", "properties": { "fid": 15, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.15_1", "NAME_1": "Kalimantan Timur", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "64", "HASC_1": "ID.KM" }, "geometry": { "type": "Point", "coordinates": [116.379456393408731, 1.329790677909816] } },
    { "type": "Feature", "properties": { "fid": 16, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.16_1", "NAME_1": "Kepulauan Riau", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "21", "HASC_1": "ID.KR" }, "geometry": { "type": "Point", "coordinates": [105.403191066919291, 1.481127480840642] } },
    { "type": "Feature", "properties": { "fid": 17, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.17_1", "NAME_1": "Lampung", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "18", "HASC_1": "ID.LA" }, "geometry": { "type": "Point", "coordinates": [105.022832620956493, -4.917955237085401] } },
    { "type": "Feature", "properties": { "fid": 18, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.19_1", "NAME_1": "Maluku", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "81", "HASC_1": "ID.MA" }, "geometry": { "type": "Point", "coordinates": [129.837407105245063, -4.72978697094356] } },
    { "type": "Feature", "properties": { "fid": 19, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.18_1", "NAME_1": "Maluku Utara", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "82", "HASC_1": "ID.MU" }, "geometry": { "type": "Point", "coordinates": [127.539910012195278, 0.210393282519175] } },
    { "type": "Feature", "properties": { "fid": 20, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.20_1", "NAME_1": "Nusa Tenggara Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "52", "HASC_1": "ID.NB" }, "geometry": { "type": "Point", "coordinates": [117.507452136569285, -8.606664515069475] } },
    { "type": "Feature", "properties": { "fid": 21, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.21_1", "NAME_1": "Nusa Tenggara Timur", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "53", "HASC_1": "ID.NT" }, "geometry": { "type": "Point", "coordinates": [122.180682955745084, -9.260112463717819] } },
    { "type": "Feature", "properties": { "fid": 22, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.23_1", "NAME_1": "Papua", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "94", "HASC_1": "ID.PA" }, "geometry": { "type": "Point", "coordinates": [138.691107059111857, -4.662877994107975] } },
    { "type": "Feature", "properties": { "fid": 23, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.22_1", "NAME_1": "Papua Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "91", "HASC_1": "ID.IB" }, "geometry": { "type": "Point", "coordinates": [132.96826000168187, -2.03777837927331] } },
    { "type": "Feature", "properties": { "fid": 24, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.24_1", "NAME_1": "Riau", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "14", "HASC_1": "ID.RI" }, "geometry": { "type": "Point", "coordinates": [101.808173239850504, 0.509879523489546] } },
    { "type": "Feature", "properties": { "fid": 25, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.25_1", "NAME_1": "Sulawesi Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "76", "HASC_1": "ID.SR" }, "geometry": { "type": "Point", "coordinates": [119.344007516869183, -2.461705235447353] } },
    { "type": "Feature", "properties": { "fid": 26, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.26_1", "NAME_1": "Sulawesi Selatan", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "73", "HASC_1": "ID.SE" }, "geometry": { "type": "Point", "coordinates": [120.161137316190107, -3.732296629347185] } },
    { "type": "Feature", "properties": { "fid": 27, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.27_1", "NAME_1": "Sulawesi Tengah", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "72", "HASC_1": "ID.ST" }, "geometry": { "type": "Point", "coordinates": [121.202283274345135, -1.003911741819611] } },
    { "type": "Feature", "properties": { "fid": 28, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.28_1", "NAME_1": "Sulawesi Tenggara", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "74", "HASC_1": "ID.SG" }, "geometry": { "type": "Point", "coordinates": [122.071914591938238, -4.126100456583013] } },
    { "type": "Feature", "properties": { "fid": 29, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.29_1", "NAME_1": "Sulawesi Utara", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "71", "HASC_1": "ID.SW" }, "geometry": { "type": "Point", "coordinates": [124.523091022862317, 1.262052818549361] } },
    { "type": "Feature", "properties": { "fid": 30, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.30_1", "NAME_1": "Sumatera Barat", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "13", "HASC_1": "ID.SB" }, "geometry": { "type": "Point", "coordinates": [100.466721223022489, -0.851751986431678] } },
    { "type": "Feature", "properties": { "fid": 31, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.31_1", "NAME_1": "Sumatera Selatan", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "16", "HASC_1": "ID.SL" }, "geometry": { "type": "Point", "coordinates": [104.170376902705641, -3.217433279256824] } },
    { "type": "Feature", "properties": { "fid": 32, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.32_1", "NAME_1": "Sumatera Utara", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "12", "HASC_1": "ID.SU" }, "geometry": { "type": "Point", "coordinates": [99.053311599530375, 2.190811216895826] } },
    { "type": "Feature", "properties": { "fid": 33, "GID_0": "IDN", "NAME_0": "Indonesia", "GID_1": "IDN.33_1", "NAME_1": "Yogyakarta", "VARNAME_1": null, "NL_NAME_1": null, "TYPE_1": "Propinisi", "ENGTYPE_1": "Province", "CC_1": "34", "HASC_1": "ID.YO" }, "geometry": { "type": "Point", "coordinates": [110.445379495717077, -7.89502820409914] } }
]



function minesStyle(feat) {
    return {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
};



var layer = L.geoJson(data, {
    pointToLayer: function (feat, ll) {
        var styleForThisFeature = minesStyle(feat);
        var featureForThisPoint = L.circleMarker(ll, styleForThisFeature);
        return featureForThisPoint;
    }
}).addTo(mymap)


