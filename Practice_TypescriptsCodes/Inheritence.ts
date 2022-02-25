
class person{
    public person_Name:string;
    public person_Age:number; 
    constructor(personName:string,personAge:number){
        this.person_Name = personName;
        this.person_Age=personAge;
    }
}
class Employee extends person{
    empid:number;
    salary:number;
    isActive:boolean;
    constructor(personName:string, personAge:number,empid:number,salary:number,isactive:boolean){
        super(personName, personAge)
        this.empid=empid;
        this.salary=salary;
        this.isActive=isactive;
    }
    getNetSalary():number{
        if(this.isActive==true){
            if(this.salary >10000){

                return this.salary+((this.salary*10)/100)
            }
            else if(this.salary>5000 && this.salary<=10000){
                return this.salary+((this.salary*5)/100)
            }
            else{
                return this.salary;
            }
        }
        else
        return 0;
    }
}
var emp1:Employee;
emp1= new Employee("vamshi",23,1,39000,true);
console.log(emp1.getNetSalary());

var emp2:Employee;
emp2= new Employee("vinay",23,2,43000,true);
console.log(emp2.getNetSalary());

var emp3:Employee;
emp3= new Employee("ravi",24,3,4000,false);
console.log(emp3.getNetSalary());
