import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

@Component({
  selector: 'app-root',
  imports: [ TablaAlumnosComponent, TablaCursosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cursos:boolean= true;
  handleCambio(){
    this.cursos = !this.cursos;
  }
}
