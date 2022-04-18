import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { books } from 'src/app/models/books.model';
import { booksRequested } from 'src/app/models/booksRequested.model';
import { BookService } from 'src/app/services/book.service';
import { SaveRequestedBookComponent } from '../save-requested-book/save-requested-book.component';

@Component({
  selector: 'app-request-books',
  templateUrl: './request-books.component.html',
  styleUrls: ['./request-books.component.css']
})
export class RequestBooksComponent implements OnInit {
  public searchBox:any="";
  public books: books[];
  userBookDetails:any;
  bookSelected:any;
  id:any;
  userBookRequested:booksRequested;
  userData:any;
  noOfBooks:any;
  constructor(private _booksService:BookService,public _matDialog:MatDialog,public _toastr:ToastrService,private _activatedRoute:ActivatedRoute
              ,private _route:Router
    ) { }
 
  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.paramMap.get('id');
    this._booksService.getAllBooks().subscribe(response => {
      this.books = response
    })
    sessionStorage.setItem("id",this.id);
  }
  


  public requestBook(book:any){
  this.bookSelected=book;
  
  this._booksService.getUserBooks().subscribe(res=>{
      this.userBookDetails=res;
      this.checkUserBooks();
      this.request();
    })
  }

  public checkUserBooks(){
   let id=parseInt(this.id)
    this.userData=(this.userBookDetails.find((x:any)=>{
      return x.employeeId==id
    }))
  }
  public request():void{
    debugger;
    if(this.userData){
      debugger;
        this.applyrequest()
    }
    else{
      debugger;
      let id=parseInt(this.id)
      console.log(this.userData)
      let dialogRef=this._matDialog.open(SaveRequestedBookComponent,{height:'40%',width:'20%'})
      dialogRef.componentInstance.employeeId=id;
      dialogRef.componentInstance.bookData=this.bookSelected;
      // this._toastr.warning("You have exceeded the limit")
    }
  }
  public applyrequest():void{
    debugger;
    if(this.userData.BooksRequested<3){
      this.confirmBookRequest();
    }
    else{
      this._toastr.warning("You have exceeded the limit")
    }
  }

  public confirmBookRequest():void{
    let id=parseInt(this.id)
    let dialogRef=this._matDialog.open(SaveRequestedBookComponent,{height:'40%',width:'20%'})
    dialogRef.componentInstance.book=this.userData;
    dialogRef.componentInstance.userSavedEmployeeId=id;
    dialogRef.componentInstance.bookData=this.bookSelected;
    
  }
  public getSavedBooks(){
    this._route.navigate(['userSavedBooks'])
    
  }
  

}
