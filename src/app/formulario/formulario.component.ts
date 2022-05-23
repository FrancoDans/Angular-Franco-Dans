import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
   formularioContacto: FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }
  

  ngOnInit(): void {
    this.formularioContacto=this.fb.group({
      nombre: [""],
      email:[""],
      mensaje:[""]
    })
  }
  submit(){
    console.log(this.formularioContacto.value);

    
  }
}
