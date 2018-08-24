import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Estudiante } from "../../shared/estudiante";

@Component({
  selector: "app-item-estudiante",
  templateUrl: "./item-estudiante.component.html",
  styleUrls: ["./item-estudiante.component.css"]
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE = "http://via.placeholder.com/350x150";

  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() {}

  ngOnInit() {}

  onClick(e: Estudiante) {
    this.onMouseClick.emit(e);
  }
}
