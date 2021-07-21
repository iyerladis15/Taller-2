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
  items: String[]
  item = ''
  
  cajaFactura: String = '';

  constructor() {
    this.facturas = []
    this.items =[]

   }

  anadirFactura(item: String,tipo: string) {
    if(tipo == "factura") {
      this.consecutivoF = this.consecutivoF + 1
      this.facturas.push(item)

    } else {
      this.consecutivoF = this.consecutivoF + 1
      this.items.push(item)

    }
    

  }

  removerFactura(tipo: String) { 
    if (tipo=="factura"){
    if(this.facturas.length == 0) {
      alert("NO HAY FACTURAS PARA ELIMINAR!")

    } else {
      this.facturas.splice(this.facturas.length - 1, 1)

    }
  } else {

    if(this.items.length == 0) {
      alert("NO HAY ITEMS PARA ELIMINAR!")

    } else {
      this.items.splice(this.items.length - 1, 1)

    }

  }
  
  }


  ngOnInit(): void {
  }

}
