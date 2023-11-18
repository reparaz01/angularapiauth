import { Component } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class LoginComponent2 {
  usuario: string = "";
  password: string = "";
  loginCorrecto: boolean = false;
  loginIncorrecto: boolean = false;

  constructor(private service: ServiceEmpleados) {}

  login() {
    // Llama a autorizarAcceso y maneja la promesa
    this.service.autorizarAcceso(this.usuario, this.password)
      .subscribe((response) => {
          console.log('Usuario:', this.usuario);
          console.log('Password:', this.password);

          // Asigna el token directamente a environment.token
          environment.token = response && response.response;

          console.log('TOKEN: ' + environment.token);

          // Cambia el estado para mostrar el mensaje de éxito
          this.loginCorrecto = true;
          this.loginIncorrecto = false;
        },
        error => {
          console.error('Error al autorizar acceso:', error);

          // Cambia el estado para mostrar el mensaje de error
          this.loginCorrecto = false;
          this.loginIncorrecto = true;
        }
      );
  }
}
