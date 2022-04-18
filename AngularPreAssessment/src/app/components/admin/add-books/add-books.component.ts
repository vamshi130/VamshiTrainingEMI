import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { BooksListComponent } from '../books-list/books-list.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  public reactiveBookData:FormGroup;

  constructor(private formBuilder:FormBuilder,private bookService:BookService,private matDialogRef:MatDialogRef<AddBooksComponent>,
              private _toastr:ToastrService,public bookscomponent:BooksListComponent,private _router:Router,private _location:Location
             ) { }

  ngOnInit(): void {
    this.reactiveBookData=this.formBuilder.group({
      id:[''],
      bookName:['',[Validators.required]],
      author:['',Validators.required],
      availability:['',Validators.required]
    })
  }

  public onSubmit(bookData:NgForm):void{
    this.bookService.postBook(bookData).subscribe((res)=>{console.log(res)
    })
    this._toastr.success('Your Request has sent succesfully', 'Hey Congrats ');

  }
  public closeDialog(){
    this.matDialogRef.close();

  }

}
