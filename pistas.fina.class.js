class Pista {
    #nombre = 'nombre de la pista';
    #duracion = '';
    #tracks = [];


    constructor(){
        console.log('nueva pista creada');
    }

    setNombre(){

        do{
        this.#nombre = prompt('ingrese el nombre de la cancion');
        }while(!isNaN(this.#nombre));
    }

    getNombre(){
        return this.#nombre;
    }


    getDuracionPista(){
        let banderita = false; 
        do{
            if (banderita){
                alert('Error, la duración se excede de lo debido');  }
            this.#duracion = parseInt(prompt('Ingrese la duración del disco. Debe ser entre 0 y 7200 segundos, inclusive'));
            banderita = !(this.#duracion >= 0 && this.#duracion <= 7200)
        } while (banderita);
    }
    
    getDuracion() {
        return this.#duracion;
    }

    acumDuracionPistas() {
        let acum = 0;

        for(pista of this.#pistas) {
            acum += pista.getDuracionPista();
        }

        return acum;
    }

    cantidadPistas() {
        let cantidad = this.#pistas.length;
        return cantidad;
    }

    promedioPistas(){
        let cantidad = this.#pistas.length; // length del array
        
        for (let pista of this.#pistas) {
            acum += pista.getDuracion();
        }


        let promedioDuracion = acum/cantidad ;
        return promedioDuracion;
    }

    getPromedio(){
        return this.#promedioPistas();
    }

    bloqueHtml(){

        let html = `Nombre: ${this.#nombre} - <strong>Duracion:</strong> <span class="${(this.#duracion > 180) ? 'dpb' : 'apb'}">${this.#duracion}</span>`;
        return html;
    }

}


    