class Resitencia{

    valor;
    unidad;
    tolerancia;
    codigocolor;
    colorBanda = [ "black", "brown", "red", "orange", "yellow", 
                "green", "blue", "violet", "grey", "white",
                "gold", "silver" ];

    resistenciasComerciales = [ "1", "10", "100", "1K", "10K", "100K", "1M",  
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

    tolerancias = [ "1%", "2%", "0.5%", "0.25%", "0.10%", "0.05%",
        "5%", "10%" ];


    constructor( valor, unidad, tolerancia ){
        this.valor = valor;
        this.tolerancia = tolerancia;
        this.unidad = unidad;
    }

    comprobacion(){       
        
        if( this.resistenciasComerciales.includes( this.valor + this.unidad) ){
            console.log( "Si existe ");
        }else{
            console.log("No existe esa valor.")
        }
    }

    convertir( ){

        var numero;
        numero = this.expresionesAUnidades();
        this.convertirABandas( numero );
        console.log( this.codigocolor );
 
    }

    expresionesAUnidades(){

        var numero = this.valor;

        if (this.unidad == "K")
            numero = numero * 1000;

        if (this.unidad == "M")
            numero = numero * 1000000;

        return numero;
    }

    setBandas(numero){
        var banda1;
        var banda2;
        var banda3=0;
        var banda4;

        //Se ontiene el numero
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

        this.codigocolor = [
            this.colorBanda[banda1], this.colorBanda[banda2],
            this.colorBanda[banda3], this.colorBanda[banda4]
        ];
    }

    setTolerancia(){
        dir = [][];
    }

}

let res = new Resitencia( 1.8, "M", "5%" );
res.convertir();











