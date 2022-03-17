import { Component, OnInit, ViewChild } from '@angular/core';
import { urlData } from 'src/app/models/url.moel';
import { UrlServiceService } from 'src/app/services/url-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUrlComponent } from '../add-url/add-url.component';
import { config } from 'rxjs';
// import { config } from 'process';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  public urlData:MatTableDataSource<urlData>;
   public date=new Date().getDate()
  columnsToDisplay:string[]=['id','from','to','dateCreated','permanentLink']
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private _urlService: UrlServiceService,public _dialog:MatDialog) { }

  ngOnInit(): void {
    this._urlService.getUrlData().subscribe((res:urlData[])=>{
          this.urlData=new MatTableDataSource<urlData>(res);
          this.urlData.paginator=this.paginator;
          console.log(this.urlData);
    }, (error)=>{console.log(error)})
  }


  dialogPopUp(){
    console.log("hello");
    this._dialog.open(AddUrlComponent,{height:'70%',width:'30%'})
  }

}
