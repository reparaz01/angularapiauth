import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { Autorizacion } from 'src/app/models/autorizacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUserRef!: ElementRef;
  @ViewChild('cajapassword') cajaPassowrdRef!: ElementRef;
  public autorizacion!: Autorizacion;
  constructor(private _serviceAuth: ServiceEmpleados) {}
  login() {

  }
}
