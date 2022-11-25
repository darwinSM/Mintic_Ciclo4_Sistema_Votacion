import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultado } from '../modelos/resultado.model'; 

@Injectable({
  providedIn: 'root'
})

export class ResultadosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultados`);
    }

  eliminar(id:string){
  return this.http.delete<Resultado>(`${environment.url_gateway}/resultados/${id}`, );
  }

  getResultado(id: string): Observable<Resultado> {
    return this.http.get<Resultado>(`${environment.url_gateway}/resultados/${id}`);
    }

  crear(elResultado: Resultado) {
  return this.http.post(`${environment.url_gateway}/resultados`, elResultado);
  }
  
  editar(id:string, elResultado: Resultado) {
  return this.http.put(`${environment.url_gateway}/resultados/${id}`, elResultado);
  }
}
