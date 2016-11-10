export class Libro {
    //creo un constructor
    constructor(
        private titulo: string,
        private autor: string,
        private sinopsis?/*es opcional, el resto ya obliga a ser opcionales */: string
    ){}

    toString():string{
        return "Libro: \n\tTitulo: " + this.titulo + " \n\tAutor: " + this.autor + "\n\tSinopsis: " + this.sinopsis;
    }
}
