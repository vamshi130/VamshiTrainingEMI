import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, pipe, Subject, subscribeOn, tap } from 'rxjs';
import { users } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  response: any;
  data: any
  name:any
  employeeId:any;
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;
  // private _afterLoginDetails=new Subject<void>();
  // get afterLoginRefreshed(){
  //   return this._afterLoginDetails;
  // }

  constructor(private _http: HttpClient, private _router: Router, private _toastr: ToastrService) { }

  public getEmployees(): Observable<users> {
    return this._http.get<users>("http://localhost:3000/employee")

  }
  public authenticateEmployee(data: any) {
    debugger;
    console.log(data)
    return this._http.get("http://localhost:3000/employee").subscribe(res => {
      this.user = res;
      this.data = data;
      this.authenticateUser();
      this.navigateUser();
    
    })

  }
  authenticateUser() {
    this.response = (this.user.find((x: any) => {
      debugger;
      return x.userName == this.data.userName && x.password == this.data.password
    }))

  }
  navigateUser() {
    if (this.response) {
      this.checkRole();
    }
    else {
      this._toastr.warning("invalid usernName or Password")
    }
  }
  checkRole() {
    this.name=this.response.name;
    this.isAuthenticated=true;
    
    if (this.response.role === 'admin') {
      this.isAdmin=true
      this.isAuthenticated=true;
      this._router.navigate(['booksList'], { queryParams: { name: this.response.name } })
    }
    else if (this.response.role === 'user') {
      this.employeeId=this.response.employeeId;
      this.isUser=true;
      this.isAuthenticated=true;
      this._router.navigate(['userRequest',this.response.id])
      // this._router.navigate(['userRequest',this.response.id],{queryParams:{id:this.response.id}})
    }
    else {
      

    }

  }







}
