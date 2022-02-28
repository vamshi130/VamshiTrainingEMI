import { Component, OnInit } from '@angular/core';
import { user } from 'src/Models/Users';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userData:any=[];
  public details:boolean=false;
  public show:boolean=true;
  // public user=[];
  constructor(private _UserService:UserService) { }
  
  ngOnInit(): void {
    
    this._UserService.getUsers().subscribe(response=>{
      console.log(response);
      this.userData=JSON.stringify(response);
      this.userData=JSON.parse(this.userData).data
      
    })

  }
  public onDetails(){
   this.details=!this.details;
   console.log(this.details);
  }
 
}
