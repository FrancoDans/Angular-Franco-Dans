import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConversorPipe } from './conversor.pipe';
import { TituloDirective } from './titulo.directive';
import {AppRoutingModule} from "./app-routing.module"
import { RouterModule } from '@angular/router';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { SobrenostrosComponent } from './sobrenostros/sobrenostros.component'


const appRoutes=[
  {path:'', component:HomeComponent },
  {path:'info', component:InfoCursoComponent },
  {path:'contacto', component:ContactoComponent },
  {path:'inscribirse', component:InscripcionComponent },
  {path:'nosotros', component:SobrenostrosComponent }

  

]


@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    CardComponent,
    LayoutComponent,
    ToolbarComponent,
    FormularioComponent,
    ConversorPipe,
    TituloDirective,
    InfoCursoComponent,
    HomeComponent,
    ContactoComponent,
    InscripcionComponent,
    UsersComponent,
    SobrenostrosComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
