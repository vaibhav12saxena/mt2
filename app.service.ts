//This is service used to fetch data

import { Injectable } from '@angular/core'; //importing
import {HttpClient} from '@angular/common/http' //importing

@Injectable({
  providedIn: 'root'
})
export class AppService {
//defining a constructor which accept _http as an argument which i of HttpClient type
  constructor(private _http:HttpClient) { }   

  getfile(x:string)  
  {
    return this._http.get(x); //loading mobile.json in this service
  }
}
