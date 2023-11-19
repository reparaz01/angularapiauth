import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})

export class LoginComponent2  {

  @ViewChild('cajaUsername') cajaUsernameRef!: ElementRef;
  @ViewChild('cajaPassword') cajaPasswordRef!: ElementRef;

  public mensaje = '';
  public loginCorrecto: boolean = false;
  public loginIncorrecto: boolean = false;

  constructor(
    private serviceEmpleados: ServiceEmpleados,
    private _router: Router
    ) {}

  login(): void {


    var username = this.cajaUsernameRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;

    this.serviceEmpleados.autorizarAcceso(username,password).subscribe(
      (data) => {


        environment.token = data.response;
        this.loginCorrecto = true;
        this.loginIncorrecto = false;
        console.log("Usuario:", username);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);

      },
      (error) => {
        console.error(error);
        this.loginCorrecto = false;
        this.loginIncorrecto = true;
        console.log("Usuario:", username);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);
      }
    );
  }


}

