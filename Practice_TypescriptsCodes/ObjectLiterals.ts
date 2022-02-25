var student:any={
    studentId :1,
    Name:"vamshi",
    Age:22,
    marks:60,
    getMarks:function(){
       if(this.marks>40){
           return "Pass"
       }
       else {
           return "Fail"
       }
    } 

};
student.email="vamshichowdary130@gmail.com";
console.log(student.studentId);
console.log(student.Name);
console.log(student.marks);
console.log(student.getMarks());