import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { books } from 'src/app/models/books.model';
import { booksRequested } from 'src/app/models/booksRequested.model';
import { userSavedBooks } from 'src/app/models/userSavedBooks.model';
import { BookService } from 'src/app/services/book.service';
import { UserServiceService } from 'src/app/services/user-service.service';
// exports: [MatExpansionModule]


@Component({
  selector: 'app-save-requested-book',
  templateUrl: './save-requested-book.component.html',
  styleUrls: ['./save-requested-book.component.css']
})
export class SaveRequestedBookComponent implements OnInit {
 public book:booksRequested;
 public date:Date;
 employeeId:any;
 bookData:books;
 userSavedEmployeeId:any;
 panelOpenState=true;

  constructor(public _dialog:MatDialogRef<SaveRequestedBookComponent>,private _bookService:BookService,private _userService:UserServiceService) { }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 6 );
    
    // console.log("Hiii" + this.book.BooksRequested);
    if(this.employeeId){
      debugger;
       this.addUserBooks()
      }
    else{
      this.UpdateBookSelected();
    }
  }
  public addUserBooks(){
    debugger;
    console.log(this.book)
      let books=new booksRequested()
      // books.BooksRequested=this.book.BooksRequested+1;
      books.employeeId=this.employeeId;
      // books.retutnDate=this.date
      books.BooksRequested=1
      console.log(books)
      this._bookService.postUserBooks(books).subscribe(res=>{console.log(res)
        debugger;
      this.addBooksPerUser(this.employeeId)
      })
  }
  
  public UpdateBookSelected():void{ 
    console.log(this.book);
    this.book.BooksRequested=this.book.BooksRequested+1;
    this._bookService.putUpdateUserBookSelected(this.book).subscribe((res)=>{
      this.addBooksPerUser(this.userSavedEmployeeId)
      console.log(res);
    })
  }
  public addBooksPerUser(id:any){
    debugger;
    let obj=new userSavedBooks()
    obj.author=this.bookData.author;
    obj.bookName=this.bookData.bookName;
    obj.employeeId=id;
    obj.returnDate=this.date;
    this._userService.postUserBooks(obj)
  }
}
