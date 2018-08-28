import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AddformserviceService {

  constructor(private _http:Http) { }
  add(addfname,addlname,addaddress,addstate,addmobile){
    
    return this._http.post("http://localhost:5000/add",{"fname":addfname,"lname":addlname,"address":addaddress,"state":addstate,"mobile":addmobile,"token":localStorage.getItem('token')}).pipe(map(res => res.json()))
  }
}
