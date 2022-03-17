import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { urlData } from 'src/app/models/url.moel';
import { UrlServiceService } from 'src/app/services/url-service.service';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
  public urlData=new urlData();  
  constructor(private _urlService:UrlServiceService,private _router:Router, private _matdialogRef:MatDialogRef<AddUrlComponent>) { }
  ngOnInit(): void {
  }
  public onSubmit(myForm:NgForm){
    // myForm.value.dateCreated="new Date().getDate()";
    debugger;
    console.log(myForm.value);
    this._urlService.postUrlData(myForm.value).subscribe(response=>{
      console.log(response);
      debugger;
      // this._router.navigate(['url']);
      // this._matdialogRef.close();
      window.location.reload();
     },(error:any)=>{console.log(error)})

    
  }
}
