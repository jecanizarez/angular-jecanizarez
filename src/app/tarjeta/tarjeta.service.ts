import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from './tarjeta';
import { TarjetaDetail } from './tarjeta-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";

const tarjetas = 'tarjetas.json';

@Injectable()
export class TarjetaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getTarjetas() : Observable<Tarjeta[]> {
        return this.http.get<Tarjeta[]>(API_URL + tarjetas);
    }
    
     
    getTarjetaDetail(tarjetaId): Observable<TarjetaDetail> {
      console.log(tarjetaId+" "+API_URL + "tarjeta-" + tarjetaId+".json");
        return this.http.get<TarjetaDetail>(API_URL + "tarjeta-" + tarjetaId+".json");
    }
}