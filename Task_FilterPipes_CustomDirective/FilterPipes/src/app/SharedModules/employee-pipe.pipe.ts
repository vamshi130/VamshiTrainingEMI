import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(value: any, searchBox:any): any {
    if(value.length===0 || searchBox===""){
      return value;
    }
    var empData=[];
    for(var i=0;i<value.length;i++){
      if((value[i].name).includes(searchBox) || (value[i].country).includes(searchBox) || ((value[i].id).toString()).includes(searchBox)){
        empData.push(value[i]);
      }
    }
    return empData;
  }

  

}
