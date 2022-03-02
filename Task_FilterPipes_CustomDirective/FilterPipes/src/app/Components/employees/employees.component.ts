import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  searchBox:any="";
  employees:any;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees().subscribe(response=>{
       this.employees=response;
     })
  }

}
