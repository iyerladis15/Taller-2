import { Component, OnInit } from '@angular/core';
import { Factura } from '../clases/facturas';
import { Item } from '../clases/items';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  consecutivoF: number = 0
  facturas: String[]
  item = ''
  
  cajaFactura: String = '';

  constructor() {
    this.facturas = []

   }

  anadirFactura(item: String) {
    if(item == "") {
      alert("DEBE DIGITAR UNA FACTURA POR FAVOR!")

    } else {
      this.consecutivoF = this.consecutivoF + 1
      this.facturas.push(item)

    }
    

  }

  removerFactura() {
    if(this.facturas.length == 0) {
      alert("NO HAY FACTURAS PARA ELIMINAR!")

    } else {
      this.facturas.splice(this.facturas.length - 1, 1)

    }

  }

  ngOnInit(): void {
  }

}
