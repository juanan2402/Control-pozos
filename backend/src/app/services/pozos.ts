import { inject, Injectable } from '@angular/core';
import {  Pozo} from "../model/pozos.type";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pozos {
  http = inject(HttpClient);
  
  getFromAPI() {
    const url = 'http://localhost:4000/pozos'
    return this.http.get<Array<Pozo>>(url);
  }

}
