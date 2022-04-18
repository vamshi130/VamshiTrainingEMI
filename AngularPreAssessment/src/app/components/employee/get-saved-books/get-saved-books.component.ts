import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-get-saved-books',
  templateUrl: './get-saved-books.component.html',
  styleUrls: ['./get-saved-books.component.css']
})
export class GetSavedBooksComponent implements OnInit {
  public id:any;
  books:any;
  public UserBooks=[] as any;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private _userService:UserServiceService,private _router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("id");
    this._userService.getUserBooks().subscribe(res=>{
      this.books=res;
      console.log(res);
      this.findUserBooks(this.books);

    }) 
  }
  public findUserBooks(book:any){
    debugger;
    // this.books=this.books.find((x:any)=>{
    //   return x.employeeId==this.id;
    // })
    // console.log(this.books);
    for(var i in book){
      if(book[i].employeeId==this.id){
        this.UserBooks.push(book[i]);
      }
    }
  }
  public back(){
    this._router.navigate(['userRequest',this.id]);
  }


  

}
