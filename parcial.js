'use strict';
console.log("hola");
let discos =[];

// CLASS DISCO //
class Disco {
    #nombre = 'Nombre del disco';
    #autor = 'autor del disco';
    #codigo;
    pistas = [];
    static codigos = [];
    static cantidadDiscos = 0 ; // es un contador empieza en cero

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

        }while(!(this.#codigo >= 1 && this.#codigo >= 999 ) || Disco.codigos.includes(this.#codigo));
        Disco.codigos.push(this.#codigo);
        console.log(Disco.codigos);
    }

    getCodigo(){
        return this.#codigo;
    }
    acumDuracionPistas() {
        let acum = 0;

        for(pista of this.pistas) {
            acum += pista.getDuracionPista();
        }

        return acum;
    }

    cantidadPistas() {
        let cantidad = this.pistas.length;
        return cantidad;
    }

    promedioPistas(){
        let cantidad = this.pistas.length; // length del array
        
        for (let pista of this.pista) {
            acum += pista.getDuracion();
        }


        let promedioDuracion = acum/cantidad ;
        return promedioDuracion;
    }

    getPromedio(){
        return this.promedioPistas;
    }

    bloqueHtml(){

        let html = `<p> <strong>Nombre del disco: </strong> ${this.#nombre} </p>`;

        html += `<p> <strong>Autor: </strong> ${this.#autor} </p>`;

        html += `<p> <strong>C贸digo: </strong> # ${this.#codigo} </p>`;

    return html;
    }


    
}
class Pista {
    #nombre = 'nombre de la pista';
    #duracion = '';


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
    }
    
    getDuracionPista() {
        return this.#duracion;
    }


    bloqueHtml(){

        let html = `Nombre: ${this.#nombre} - <strong>Duracion:</strong> <span class="${(this.#duracion > 180) ? 'dpb' : 'apb'}">${this.#duracion}</span>`;
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
       disco.pistas.push(pista);
        result = confirm("Desea ingresar otra pista?");
       

    } while(result);

   discos.push(disco);
   

};


// Función Mostrar:
function Mostrar() {
    let html = ``;

    for (let disco of discografia) {
        html += `<p>nombre del disco: ${disco.nombre}`;
        html += `<p>nombre del autor: ${disco.autor}`;
        html += `<p>nombre del disco: ${disco.codigo}`;

    }

    for (let pista of pistas) {
        html += `<p>nombre de la pista: ${pista.nombre}`;
        html += `<p>duracion: ${pista.duracion}`;
    }



}

document.getElementById('info').innerHTML = html;

//deshacer --> { elimina el ultimo disco agregado //eliminas
                ///Disco.cantidadDiscos--; // decrementas
                ///mostrar{} //mostrar funciones adentro de otra
//}
//const mostrar

// Todas las funciones que necesites:
