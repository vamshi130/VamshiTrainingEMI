import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user } from 'src/Models/Users';
// import { Observable } from 'rxjs';
// import { user } from 'src/Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // data!: JSON;
  constructor(private _http:HttpClient) { }
  getUsers(){
    debugger;
    //  this._http.get<any>("https://reqres.in/api/users?page=2").subscribe((response:JSON)=>{this.data=response})
    // return this._http.get<JSON>("https://reqres.in/api/users?page=2")
    return this._http.get("https://reqres.in/api/users?page=2");
    // console.log(this.data);
    // this._http.get("../assets/users.json").subscribe((obj)=>{this.data})
    //  console.log(this.data);
  }
  // getUsers():Observable<user[]>{
  //   debugger;
  //   return this._http.get<user[]>(" http://localhost:7000/data");
  // }
}

