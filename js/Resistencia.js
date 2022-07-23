var colorBanda = [ "black", "brown", "red", "orange", "yellow", 
                "green", "blue", "violet", "grey", "white",
                "gold", "silver" ];

var resistenciasComerciales = [ "1", "10", "100", "1K", "10K", "100K", "1M",  
                            "1.2", "12", "120", "1.2K", "12K", "120K", "1.2M",
                            "1.5", "15", "150", "1.5K", "15K", "150K", "1.5M",
                            "1.8", "18", "180", "1.8K", "18K", "180K", "1.8M",
                            "2.2", "22", "220", "2.2K", "22K", "220K", "2.2M",
                            "2.7", "27", "270", "2.7K", "27K", "270K", "2.7M",
                            "3.3", "33", "330", "3.3K", "33K", "330K", "3.3M",
                            "3.9", "39", "390", "3.9K", "39K", "390K", "3.9M",
                            "4.7", "47", "470", "4.7K", "47K", "470K", "4.7M",
                            "5.6", "56", "560", "5.6K", "56K", "560K", "5.6M",
                            "6.8", "68", "680", "6.8K", "68K", "680K", "6.8M",
                            "8.2", "82", "820", "8.2K", "82K", "820K", "8.2M",
                            "9.1", "91", "910", "9.1K", "91K", "910K", "9.1M" ];

var tolerancias = [ "", "1%", "2%", "", "", "0.5%", "0.25%", "0.10%", "0.05%",
                    "", "5%", "10%" ];


/*
Verifica que exista la resistencia comecial y
Convierte los valores de la resistencia a código  de colores 
*/
function convertirABandas( valor, unidad, tolerancia ){

    
    if( resistenciasComerciales.includes( minimizar(valor) + unidad) ){

        var numero;
        numero = calcularMult( valor, unidad );
        return setBandas( numero, tolerancia );
            
    }else{
        throw "Esa resistencia no se ha encontrado.";
    }

}

/*Convierte el valor de la resistencia en un numero */
function calcularMult( valor, unidad ){

    var numero = valor;

    if ( unidad == "K" )
        numero = numero * 1000;

    if ( unidad == "M")
        numero = numero * 1000000;

    return numero;
}

//Se obtienen el código de colores 
function setBandas(numero, tolerancia){
    var banda1;
    var banda2;
    var banda3=0;
    var banda4;

    //Se obtiene el numero
    while ( numero >= 100 ){
        numero = numero/10;
        banda3++;
        
    }

    /*Exceopcion para los numeros decimales */
    if( !Number.isInteger(numero)){
        banda3 = 10;
        numero = numero * 10;
    }

        /*se asignan bandas*/
    banda1 = parseInt( numero / 10 );
    banda2 = Math.round((( numero / 10) - banda1) * 10 );
        
    /*Busca la banda4 */
    if( tolerancias.includes( tolerancia ) )
        banda4 = buscarTolerancia( tolerancia );

    return [ colorBanda[banda1], colorBanda[banda2],
            colorBanda[banda3], colorBanda[banda4] ];

}

//Regresa la posición donde se encuentra la tolerancia.
function buscarTolerancia( tolerancia ){
    var posicion=0;

    for( posicion=0; posicion < tolerancias.length; posicion++ ){
        if( tolerancias[posicion] == tolerancia )
            return posicion;
        }

    return posicion;
}

function minimizar( numero ){
    while ( numero >= 100 ){
        numero = numero/10; 
    }
    return numero;
}

function convertirAValor( banda1, banda2, banda3, banda4 ){
    
    var valor;
    var unidad = "";
    var multiplicador;
    var tolerancia;


    multiplicador = Math.pow(10, buscarColorBanda(banda3));
    valor = (buscarColorBanda(banda1)*10 + buscarColorBanda(banda2))*multiplicador;
    tolerancia = tolerancias[buscarColorBanda(banda4)];

    valor = calcularUnidad(valor);

    if( resistenciasComerciales.includes(valor[0] + valor[1]) ){
        return [valor[0], valor[1], tolerancia];
    }else{
        throw "No es una resistencia comercial.";
    }

    console.log( valor + "" + unidad +  " +- " + tolerancia );

}

function buscarColorBanda( banda ){

    var numero=0;

    for(var posicion=0; posicion<colorBanda.length; posicion++){
        if(colorBanda[posicion] == banda){
            numero = posicion;
        }
    }
    return numero;
}

function calcularUnidad( numero ){
    var unidad = "";

    if(numero/1000 >=1){
        numero = numero/1000;
        unidad = "K";
    }
    
    if( numero/1000 >= 1){
        numero = numero/1000;
        unidad = "M"
    }

    return [numero, unidad];
}


convertirAValor("yellow","violet","red","silver");

export{ convertirABandas, convertirAValor };
