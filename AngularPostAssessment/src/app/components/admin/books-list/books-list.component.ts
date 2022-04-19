import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { books } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';
import { AddBooksComponent } from '../add-books/add-books.component';
import { EditBooksComponent } from '../edit-books/edit-books.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public number1 = [1, 2, 3, 4]
  public books: books[];
  constructor(private _booksService: BookService, private _matDialog: MatDialog,private _activatedRoute:ActivatedRoute) { }
  public id:any;
  public name:any;
  public searchBox:any="";

  ngOnInit(): void {
    debugger;
   this.getBooksList();
   this._booksService.RefreshedComponent.subscribe(response=>{
     this.getBooksList();
   })

  
    
    this.name=this._activatedRoute.snapshot.queryParamMap.get('name');
  }
  public getBooksList():void{
    this._booksService.getAllBooks().subscribe(response => {
      debugger;
      console.log(response);
      this.books = response
    });
      
  }
  public dialogAdd():void{
     this._matDialog.open(AddBooksComponent,{height:'60%',width:'30%'})
  }

 
  public dialogEdit(book: books):void {
    console.log(book)
    let dialogRef = this._matDialog.open(EditBooksComponent, { height: '60%', width: '30%' })
    dialogRef.componentInstance.book = book;
  }
  public deleteBook(book:any):void{
    this._booksService.deleteBook(book).subscribe(res=>{console.log(res)})


  }



}
