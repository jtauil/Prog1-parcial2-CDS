class Disco {
    #nombre = 'Nombre del disco';
    #autor = 'autor del disco';
    #codigo;
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

            for(codigo in Disco.codigos){
                if (this.#codigo == codigo){
                alert('este codigo ya fue ingresado'); // recorro Disco.codigos en sus codigos, viendo si esta el codigo ingresado ahi 
                codeExists = true; //cambia a true porque si existe 
                }
            }

        }while(!(this.#codigo >= 1 && this.#codigo <= 999) || codeExists);
        Disco.codigos.push(this.#codigo);
        console.log(Disco.codigos);
    }

    getCodigo(){
        return this.#codigo;
    }

    bloqueHtml(){

        let html = `<p> <strong>Nombre del disco: </strong> ${this.#nombre} </p>`;

        html += `<p> <strong>Autor: </strong> ${this.#autor} </p>`;

        html += `<p> <strong>C贸digo: </strong> # ${this.#codigo} </p>`;

    return html;
    }


    
}
