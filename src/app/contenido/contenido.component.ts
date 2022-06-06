import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;
  ngOnInit(): void {
    this.asyncPromise = this.promise("Facundo Gonzalez");
    this.asyncObservable = this.observable("Bianca Solem");
  }
  promise(value: string): Promise<string>{
    return new Promise((resolve, reject) =>{
      setTimeout(()=> resolve(value), 2000)
    })
  } 
  observable(value: string): Observable<string>{
    return of(value).pipe(delay(3000));
  } 
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

  


}
