export class Factura {
     idFactura: number = 0
     fecha: Date = new Date()

     constructor(idFactura: number, fecha: Date) {
          this.idFactura = idFactura
          this.fecha = fecha

     }

}