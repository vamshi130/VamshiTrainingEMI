import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userSavedBooks } from '../models/userSavedBooks.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) { }

  public postUserBooks(book:any){
    this._http.post("http://localhost:3000/userSavedBooks",book).subscribe(res=>{console.log(res)})
  }
  public getUserBooks():Observable<userSavedBooks[]>{
    return this._http.get<userSavedBooks[]>("http://localhost:3000/userSavedBooks")
  }
}
