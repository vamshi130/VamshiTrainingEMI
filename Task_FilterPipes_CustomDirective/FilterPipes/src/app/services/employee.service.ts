import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/Employee.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empDetails: Employee[];
  
  constructor() { 
    this.empDetails=[
      new Employee(1 ,'vamshi',"India",22),
      new Employee(2 ,"Krishna","Afghanistan",22),
      new Employee(3 ,"Ravi","Europe",22),
      new Employee(4,"Vinay","Ukraine",22),
      new Employee(5 ,"Rohith","Nallamala",22),
      new Employee(11 ,"Nikhil","SouthAfrica",22),
      new Employee(12,"Ajay","Russia",22),
      new Employee(13,"Watson","China",22),
      new Employee(14,"Vemu","China",22),
      new Employee(15,"Reddy","Uk",22),
    ]
  }
  public getEmployees():Observable<Employee[]>{

    return of(this.empDetails)
  }
}
