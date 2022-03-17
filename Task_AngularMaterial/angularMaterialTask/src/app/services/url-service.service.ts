import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlData } from '../models/url.moel';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private _http: HttpClient) { }
  getUrlData():Observable<urlData[]> {
    return this._http.get<urlData[]>("http://localhost:7000/data");
  }
  postUrlData(formData:any){
    debugger;
    return this._http.post<urlData[]>("http://localhost:7000/data",formData)
  }
}
