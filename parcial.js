'use strict';

let discos =[];


// ------------------------CLASS DISCO ------------------//
class Disco {
    #nombre = 'Nombre del disco';
    #autor = 'autor del disco';
    #codigo;
    pistas = [];
    static codigos = [];
    static cantidadDiscos = 0 ; 

    constructor(){
        console.log('se ha creado un disco nuevo');
        Disco.cantidadDiscos++;
    }

    setNombre(){
        do {
            this.#nombre = prompt('Ingrese el nombre del disco');

        }while(!isNaN(this.#nombre));
    }

    getNombre(){
        return this.#nombre;
    }

    setAutor(){
        do{
            this.#autor = prompt('Ingrese el autor del disco elegido');    
        }while(!isNaN(this.#autor));
    }

    getAutor(){
        return this.#autor;
    }

    setCodigo(){
        
        let codeExists = false ;
        do {
            this.#codigo = parseInt(prompt('Ingrese codigo del disco')); // ingreso datos 
        }while(!(this.#codigo >= 1 && this.#codigo <= 999 ) || Disco.codigos.includes(this.#codigo));
        Disco.codigos.push(this.#codigo);
        console.log(Disco.codigos);
    }

    getCodigo(){
        return this.#codigo;
    }

    setPista(pista){
        this.pistas.push(pista); // recibo un objeto de tipo pista en lista pistas
    }

    acumDuracionPistas() {
        let acum = 0;

        for(let pista of this.pistas) {
            acum += pista.getDuracionPista();
        }

        return acum;
    }

    getAcumDur(){
        return this.acumDuracionPistas;
    }

    cantidadPistas() {
        let cantidad = this.pistas.length;
        return cantidad;
    }

    getCantidadPistas() {
        return this.cantidadPistas;
    }

    promedioPistas(){
        let acum = 0;
        let cantidad = this.pistas.length; // length del array
        
        for (let pista of this.pistas) {
           acum += pista.getDuracionPista();
        }


        let promedioDuracion = acum/cantidad ;
        return promedioDuracion;
       }

    getPromedio(){
        return this.promedioPistas;
    }

  

    getPistaMax(){
        return this.setPistaMax;
    }

    bloqueHtml(){

        let html = `<p> <strong>Nombre del disco: </strong> ${this.#nombre}`;

        html += `<ul>`
        html += `<li>Nombre del autor: ${this.#autor}</li>`;
        html += `<li>Número de código: ${this.#codigo}</li>`;

        html += `<p> <strong>Pistas</strong></p>`;
        html += `<ul>`;

        for (let pista of this.pistas){
            html +=`<li> ${pista.bloqueHtml()}</li>`;
        }

        html += `</ul>`;
        html += `<ul>`
        html += `<li>Cantidad de pistas: ${this.cantidadPistas()}</li>`;
        html += `<li>Duración total del disco: ${this.acumDuracionPistas()}</li>`;
        html += `<li>Promedio del disco: ${this.promedioPistas()}</li>`;
        

        
        html += `</ul>`

        
        return html;
    }

}

// ----------------- CLASE PISTA ------------------------ //
    

class Pista {
    #nombre = 'nombre de la pista';
    #duracion = '';
    duraciones = [];


    constructor(){
        console.log('nueva pista creada');
    }

    setNombrePista(){

        do{
        this.#nombre = prompt('ingrese el nombre de la cancion');
        }while(!isNaN(this.#nombre));
    }

    getNombre(){
        return this.#nombre;
    }


    setDuracionPista(){
        let banderita = false; 
        do{
            if (banderita){
                alert('Error, la duración se excede de lo debido');  }
            this.#duracion = parseInt(prompt('Ingrese la duración del disco. Debe ser entre 0 y 7200 segundos, inclusive'));
            banderita = !(this.#duracion >= 0 && this.#duracion <= 7200)
        } while (banderita);

        let duraciones; 
        this.duraciones.push(this.#duracion);

        
    }

    
    getDuracionPista() {
        return this.#duracion;
    }


    bloqueHtml(){

        let html = `Nombre de la pista: ${this.#nombre} ||  Duración: <span class="${(this.#duracion > 180) ? 'mayor' : 'menor'}">${this.#duracion}</span>`

        return html;
    }

}




// Función Cargar:


function Cargar(){
    let disco = new Disco();

   

    disco.setNombre();
    disco.setAutor();
    disco.setCodigo();

    let result = true;
    do{
       let pista = new Pista();
       pista.setNombrePista();
       pista.setDuracionPista();
       disco.setPista(pista);
        result = confirm("Desea ingresar otra pista?");
       

    } while(result);

   discos.push(disco);
   

};


// Función Mostrar:
function Mostrar() {
  
    let html = ``;

    for (let disco of discos) {
        html += disco.bloqueHtml();

    }
    

    document.getElementById('info').innerHTML = html;
}




