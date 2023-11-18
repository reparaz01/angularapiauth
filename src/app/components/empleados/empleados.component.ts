// empleados.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Empleado[]; // Agregamos el signo de admiración aquí

  constructor(public _serviceEmpleados: ServiceEmpleados) {}

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this._serviceEmpleados.getEmpleados().subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.empleados = response;
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }
}
