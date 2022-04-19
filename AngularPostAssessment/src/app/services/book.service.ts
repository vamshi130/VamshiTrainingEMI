import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { books } from '../models/books.model';
import { booksRequested } from '../models/booksRequested.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public baseUrl="http://localhost:3000/books";
  constructor(private _http:HttpClient) { }


  private _refreshComponent=new Subject<void>();
  get RefreshedComponent(){
    return this._refreshComponent;
  }


  public getAllBooks():Observable<books[]>{
    return this._http.get<books[]>("http://localhost:3000/books")

  }
  public postBook(book:any){
    return this._http.post(this.baseUrl,book).pipe(
      tap(()=>{this.RefreshedComponent.next()})
    );
  }

  public editBook(book:any){
   const url=`${this.baseUrl}/${book.id}`
    return this._http.put(url,book).pipe(
      tap(()=>{this.RefreshedComponent.next()})
    );
    
  }
  public deleteBook(book:any){
    const url=`${this.baseUrl}/${book.id}`
    return this._http.delete(url).pipe(
      tap(()=>{this.RefreshedComponent.next()})
    )
  }
  public getUserBooks():Observable<booksRequested>{
    return this._http.get<booksRequested>("http://localhost:3000/requestedBooks")
  }
  public postUserBooks(userBook:any){
    return this._http.post("http://localhost:3000/requestedBooks",userBook)
  }
  public putUpdateUserBookSelected(upDatedBook:any){
    let baseUrl1="http://localhost:3000/requestedBooks"
    const url=`${baseUrl1}/${upDatedBook.id}`
    return this._http.put(url,upDatedBook);
  }

}
