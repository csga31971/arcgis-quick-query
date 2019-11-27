// ==UserScript==
// @name         arcgis quick query
// @namespace    undefined
// @version      1.0f
// @description  arcgis please beautify your service pages
// @author       AltMirrorBell
// @match        http://*/arcgis/rest/services/*/MapServer
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const liList = document.getElementsByTagName("li");
    for(const i in liList){
        if(typeof i !== "number"){
            const href = liList[i].firstElementChild.href;
            let newa = document.createElement("a");
            newa.href = "javascript:void(0);";
            newa.innerText = "query";
            newa.addEventListener("click", function(){
                window.open(href + "?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson");
            })
            liList[i].append(newa);
        }
    }
})();
