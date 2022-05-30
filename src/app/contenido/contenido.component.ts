import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  name="CODIGO 97";
  profesores = [
    {
      nombre: "Franco",
      curso:"Angular"
    },
    {
      nombre: "Micaela",
      curso:"Vue Js"
    },
    {
      nombre: "Oriana",
      curso:"Javascript"
    },
    {
      nombre: "Rodrigo",
      curso:"SEO"
    },
    {
      nombre: "Felipe",
      curso:"React Js"
    },
    {
      nombre: "Marcos",
      curso:"CSS"
    }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
