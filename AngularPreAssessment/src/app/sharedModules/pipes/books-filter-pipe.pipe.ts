import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksFilterPipe'
})
export class BooksFilterPipePipe implements PipeTransform {

  transform(value:any,searchBox:any):any {
    return this.filterData(value,searchBox);
  }

filterData(value:any,searchBox:any){
  debugger
  if( searchBox==""){
    return value
  }
  // this.filerData2(value,searchBox);
  var bookData=[];
  for(var i=0;i<value.length;i++){
    if((value[i].bookName).includes(searchBox)){
      bookData.push(value[i]);

      
    }
  }
  return bookData;

}
  // var bookData=[];
}
// filerData2(value:any,searchBox:any){
//   var bookData=[];
//   for(var i=0;i<value;i++){
//     if((value[i].bookName).includes(searchBox)){
//       bookData.push(value[i]);

      
//     }
//   }
//   return bookData;

// }

// }
