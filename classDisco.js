class Disco{
    static cantidadDiscos = 0;
    static codigos = [];
    #nombre = '';
    #autor = '';
    #codigo;

    constructor() {
        console.log('Se creo un nuevo disco');
        Disco.cantidadDiscos ++

    }


    establecerNombreDisco() {
        do{ 
            this.#nombre = prompt('Por favor escriba el nombre del disco');
        } while(!isNaN(this.#nombre));
    }

    establecerAutor(){
        do{
            this.#autor = prompt('Ahora escriba el nombre del autor');
        }
        while(!isNaN(this.#autor));
    }

    establecerCodigo() {
        let existeCodigo = false;
        do {
            existeCodigo = false;
            this.#codigo = parseInt(prompt('Ingrese c贸digo del disco'));
            
            for (let codigo of Disco.codigos) {
                if (this.#codigo == codigo) {
                    alert('Este c贸digo ya existe');
                    existeCodigo = true;
                }
            }
        } while (!(this.#codigo >= 1 && this.#codigo <= 999) || existeCodigo);
        Disco.codigos.push(this.#codigo);
        console.log(Disco.codigos);
    }
    
        obtenerNombreDisco(){
            return this.#nombre;
        }

        obtenerAutor(){
            return this.#autor
        }

        obtenerCodigo(){
            return this.#codigo
        }
        
        bloqueHtml(){

            let html = `<p> <strong>Nombre del disco: </strong> ${this.#nombre} </p>`;

            html += `<p> <strong>Autor: </strong> ${this.#autor} </p>`;

            html += `<p> <strong>C贸digo: </strong> # ${this.#codigo} </p>`;

        return html;
        }

        

}