import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";

import { AppComponent } from "./app.component";
import { BotonUtnComponent } from "./boton-utn/boton-utn.component";
import { MaterialButtonComponent } from "./material-button/material-button.component";
import { MaterialInputComponent } from "./material-input/material-input.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { ItemEstudianteComponent } from "./material-list/item-estudiante/item-estudiante.component";
import { MaterialDemoComponent } from "./material-demo/material-demo.component";

@NgModule({
  declarations: [AppComponent, BotonUtnComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
