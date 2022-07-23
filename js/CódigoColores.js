import { convertirABandas, convertirAValor } from './Resistencia.js';


var box = document.getElementById("infoRes");
var texto ;
var mensaje;
var codigoColor;
var valor;

var obtenerCodigo = function(){

    var resistencia = document.getElementById("valRes");
    var unidad = document.getElementById("unidades");
    var tolerancia = document.getElementById("tolerancias");

    try{
        codigoColor = convertirABandas( parseFloat(resistencia.value), unidad.value, tolerancia.value);
        mensaje = parseFloat(resistencia.value) + "" + unidad.value + " ohms " + tolerancia.value;
    }catch(Error){
        mensaje = Error;
    }

    console.log( codigoColor , parseFloat(resistencia.value) );

    texto = document.createTextNode( mensaje );
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

    try{
        valor = convertirAValor(primeraBanda.value, segundaBanda.value, terceraBanda.value, tolBanda.value);
        mensaje = valor[0] + "" + valor[1] + " ohms " + valor[2];

        document.getElementsByClassName("banda")[0].style.background = primeraBanda.value;
        document.getElementsByClassName("banda")[1].style.background = segundaBanda.value;
        document.getElementsByClassName("banda")[2].style.background = terceraBanda.value;
        document.getElementsByClassName("banda")[3].style.background = tolBanda.value;
        
    }catch(Error){
        mensaje = Error ;
    }

    console.log( valor );

    texto = document.createTextNode( mensaje );
    box.replaceChildren(texto);

}

document.getElementById("obtenerCodigo").addEventListener("click", obtenerCodigo);

document.getElementById("obtenerValor").addEventListener("click", obtenerValor)