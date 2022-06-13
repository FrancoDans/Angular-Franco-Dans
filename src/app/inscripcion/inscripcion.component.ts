
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { retry } from 'rxjs';
@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  formularioContacto: FormGroup;
 constructor(
   private fb:FormBuilder
 ) { }
 

 ngOnInit(): void {
   this.formularioContacto=this.fb.group({
     nombre: ["", [Validators.required, Validators.maxLength(15)]],
     curso:["", [Validators.required, Validators.maxLength(15)]],
     email:["", [Validators.email]],
     tel:["", Validators.maxLength(15)]
   })
 }
 submit(){
   console.log(this.formularioContacto.value);
   alert("Te contactaremos via Email y SMS para finalizar la inscripción")
   
    
   
   
 }
}

