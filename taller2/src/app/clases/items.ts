export class Item {
    idFactura: number = 0
    nombre: String = ''
    precio: String = ''

    constructor(idFactura: number, nombre: String, precio: String) {
        this.idFactura = idFactura
        this.nombre = nombre
        this.precio = precio

    }

}