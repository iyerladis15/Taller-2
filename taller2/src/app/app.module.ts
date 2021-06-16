import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
