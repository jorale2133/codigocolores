import { convertirABandas } from './Resistencia.js';

var obtenerCodigo = function(){

    var resistencia = document.getElementById("valRes");
    var unidad = document.getElementById("unidades");
    var tolerancia = document.getElementById("tolerancias");

    var codigoColor = convertirABandas( parseFloat(resistencia.value), unidad.value, tolerancia.value);
    console.log( codigoColor , parseFloat(resistencia.value) );

    document.getElementsByClassName("banda")[0].style.background = codigoColor[0];
    document.getElementsByClassName("banda")[1].style.background = codigoColor[1];
    document.getElementsByClassName("banda")[2].style.background = codigoColor[2];
    document.getElementsByClassName("banda")[3].style.background = codigoColor[3];


}

document.getElementById("obtenerCodigo").addEventListener("click", obtenerCodigo);