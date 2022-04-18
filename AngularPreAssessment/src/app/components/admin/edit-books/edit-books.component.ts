import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { books } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  book:books;
  public reactiveFormBook:FormGroup;
  constructor(private formBuilder:FormBuilder,private bookService:BookService,private matDialogRef:MatDialogRef<EditBooksComponent>,
    private _toastr:ToastrService,private _router:Router) { }

  ngOnInit(): void {
    this.reactiveFormBook=this.formBuilder.group({
      id:[],
      bookName:['',[Validators.required]],
      author:['',[Validators.required]],
      availability:['',[Validators.required]]
    })
    this.reactiveFormBook.patchValue({

      id:this.book.id,
      bookName:this.book.bookName,
      author:this.book.author,
      availability:this.book.availability
    })
    
  }  
  public onSubmit(bookData:NgForm):void{
    this.bookService.editBook(bookData).subscribe((res)=>{console.log(res),
      this._toastr.success('Your Request has sent succesfully', 'Hey Congrats ');
      // this.bookService.RefreshedComponent.subscribe(res=>{})

    })
  }
  public closeDialog():void{
    this.matDialogRef.close();
    // window.location.reload();
    // this._router.navigate(['booksList'])
    
    
  }
  


}
