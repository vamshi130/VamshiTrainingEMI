import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:any;

  constructor(public _loginService:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this.name=this._loginService.isAuthenticated;

    
  }
  LogOut(){
    this._loginService.isAuthenticated=false
    this._router.navigate(['']);
  }
}
