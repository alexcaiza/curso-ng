import { JoinPipe } from './pipes/join/join.pipe';
import { BrandDirective } from './directives/brand.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Home2Component } from './home2/home2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { Panel2Component } from './panel2/panel2.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploComponent,
    BrandDirective,
    JoinPipe,
    Home2Component,
    DatabindingComponent,
    PanelComponent,
    Panel2Component,
    FormulariosComponent,
    ValidacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
