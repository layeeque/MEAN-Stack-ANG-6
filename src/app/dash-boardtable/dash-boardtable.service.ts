import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DashBoardtableService {

  constructor(public http: Http) { }
  loadData(){
     return this.http.post("http://localhost:5000/loadData",{"token":localStorage.getItem('token')}).pipe(map(res => res.json()))
    
  }

  edit(id){
    
    return this.http.post("http://localhost:5000/edit",{"id":id,"token":localStorage.getItem('token')}).pipe(map(res => res.json()))
    
  }
  deleteData(id){
    return this.http.post("http://localhost:5000/deleteData",{"id":id,"token":localStorage.getItem('token')}).pipe(map(res => res.json()))
    
  }
 
}
