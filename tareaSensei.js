class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    sayName(){
        console.log(this.nombre);
    }
    
    showStats(){
        console.log(this.constructor.name,this.nombre,this.salud,this.velocidad,this.fuerza); 
    }    
    drinkSake(){
        
        this.salud +=10;
        console.log("Lo que un desarrollador puede hacer en un mes dos lo hacen en quince días");
    }    
}    

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.sabiduria = 10;
        
    }

    speakWisdom(){
    
        const message = super.drinkSake();
            return (message);
            
    }
}

const superSensei = new Sensei('Elizabeth');
superSensei.speakWisdom();
superSensei.showStats();