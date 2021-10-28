class Pista{
    #nombrePista = '';
    #duracion = '';
    #pistas = [];

    constructor() {
        console.log('Nueva pista creada');
    }

    establecerDuracionPista(){
        let banderita = false; 
        do{
            if (banderita){
                alert('Error, la duración se excede de lo debido');
            }
            this.#duracion = parseInt(prompt('Ingrese la duración del disco. Debe ser entre 0 y 7200 segundos, inclusive'));
        } while (!(this.#duracion >= 0 && this.#duracion <= 7200));
    }
     banderita = false;

     establecerNombrePista() {
        do {
            this.#nombrePista = prompt('Ingrese el nombre de la pista')
        } while(!isNaN(this.#nombrePista));
    }
     
    obtenerDuracion() {
        return this.#duracion;
    }

    obtenerNombrePista(){
        return this.#nombrePista;
    }

    establecerPista (pista) {
        this.#pistas.push(pista);
    }

    cantidadPistas() {
        let cantidad = this.#pistas.length;
        return cantidad;
    }

    acumularTiempoPistas() {
        let acum = 0;
        for (let pista of this.#pistas) {
            acum += pista.obtenerDuracion();
        }
        return acum;
    }

    promedioDuracion() {
        let cantidad = this.#pistas.length;
        let acum = 0;
        for (let pista of this.#pistas) {
            acum += pista. obtenerDuracion();
        }
        let promedio = acum / cantidad;
        return promedio;
    }


    bloqueHtml(){
        let html = `Nombre: ${this.#nombrePista} - <strong>Duracion:</strong> <span class="${(this.#duracion > 180) ? 'dpb' : 'apb'}">${this.#duracion}</span>`;
        return html;
    }
}

        