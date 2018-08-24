import { Component, OnInit } from "@angular/core";

import { Estudiante } from "../shared/estudiante";
import { ClassEstudiante } from "../shared/class-estudiante";

@Component({
  selector: "app-material-list",
  templateUrl: "./material-list.component.html",
  styleUrls: ["./material-list.component.css"]
})
export class MaterialListComponent implements OnInit {
  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  listaEstudiantes: Estudiante[];

  constructor() {}

  ngOnInit() {
    console.log("Inicializando el componente MaterialList");
    this.estudiante1 = new ClassEstudiante(1, "Luis Aviles", "Alajuela");
    console.log("edad.estudiante1:", this.estudiante1.getEdad());

    this.estudiante2 = {
      id: 2,
      nombre: "Jorge Perez",
      ciudad: "Lima",
      fotoURL: "https://placeimg.com/640/480/people"
    };

    this.estudiante3 = {
      id: 3,
      nombre: "Maria Rodriguez",
      ciudad: "Bogota",
      fotoURL: "https://placeimg.com/640/480/people"
    };

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: "Juana Lopez",
        ciudad: "Santiago"
        // ,
        // fotoURL: 'https://placeimg.com/640/480/people'
      };
    }, 3000);
  }

  onMouseClick($event: Estudiante) {
    console.log("Click on: ", $event.nombre);
  }
}
