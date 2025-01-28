import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { alumnos } from './mock';
import { alumno } from '../../models/alumno-to';

@Component({
  selector: 'app-tabla-alumnos',
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit{
   public alumnos?: alumno[]

   ngOnInit(): void {
     this.alumnos = alumnos
   }
}
