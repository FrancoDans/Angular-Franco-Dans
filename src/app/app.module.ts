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
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
