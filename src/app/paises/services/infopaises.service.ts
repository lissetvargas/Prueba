import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

//Models
import { Paises } from '../models/paises.model';



@Injectable({
  providedIn: 'root'
})
export class InfopaisesService {

  url: string = "http://localhost:3000/paises";
  

  constructor(
    private _http: HttpClient
  ) {
    
  }

  GetInfoPaises() {
    return this._http.get<Paises[]>(this.url);
  }

  DeletePais(Id: string) {
    return this._http.delete(this.url+"/"+Id);
  }

  AddPais(Pais: Paises) {
    return this._http.post(this.url, Pais);
  }
}


