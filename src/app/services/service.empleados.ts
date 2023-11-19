// service-empleados.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  autorizarAcceso(username: string, password: string): Observable<any> {
    const json = {
      userName: username,
      password: password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const request = 'auth/login';
    const url = environment.urlApi + request;
    
    return this._http.post(url, json, { headers: headers });
  }

  getEmpleados(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/empleados';
    const url = environment.urlApi + request;
    return this._http.get(url, { headers: headers });
  }
}
