import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostFormDataService {

  constructor(private _http:Http) { }

  saveData(){
   let  _url:string="https://reqres.in/api/users";
    return this._http.post(_url,{firstName:'Jubain',comment:'dfndfn'})
                      .map((res:Response)=>res.json) ; 
  }

}
