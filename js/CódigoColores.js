import { convertirABandas, convertirAValor } from './Resistencia.js';


var box = document.getElementById("infoRes");
var texto ;
var codigoColor;
var valor;

var obtenerCodigo = function(){

    var resistencia = document.getElementById("valRes");
    var unidad = document.getElementById("unidades");
    var tolerancia = document.getElementById("tolerancias");

    codigoColor = convertirABandas( parseFloat(resistencia.value), unidad.value, tolerancia.value);
    console.log( codigoColor , parseFloat(resistencia.value) );


    texto = document.createTextNode( parseFloat(resistencia.value) + "" + unidad.value + " ohms " + tolerancia.value );
    box.replaceChildren(texto);

    document.getElementsByClassName("banda")[0].style.background = codigoColor[0];
    document.getElementsByClassName("banda")[1].style.background = codigoColor[1];
    document.getElementsByClassName("banda")[2].style.background = codigoColor[2];
    document.getElementsByClassName("banda")[3].style.background = codigoColor[3];

}

var obtenerValor = function(){
    var primeraBanda = document.getElementById("primeraBanda");
    var segundaBanda = document.getElementById("segundaBanda");
    var terceraBanda = document.getElementById("terceraBanda");
    var tolBanda = document.getElementById("tolBanda");

    valor = convertirAValor(primeraBanda.value, segundaBanda.value, terceraBanda.value, tolBanda.value);
    console.log( primeraBanda.value );

    texto = document.createTextNode( valor[0] + "" + valor[1] + " ohms " + valor[2] );
    box.replaceChildren(texto);

    document.getElementsByClassName("banda")[0].style.background = primerBanda.value;
    document.getElementsByClassName("banda")[1].style.background = segundoBanda.value;
    document.getElementsByClassName("banda")[2].style.background = terceraBanda.value;
    document.getElementsByClassName("banda")[3].style.background = tolBanda.value;

}

document.getElementById("obtenerCodigo").addEventListener("click", obtenerCodigo);

document.getElementById("obtenerValor").addEventListener("click", obtenerValor)