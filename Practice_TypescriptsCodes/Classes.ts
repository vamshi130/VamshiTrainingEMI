class Employee{
    empid:number;
    Name:string;
    Age:number;
    salary:number;
    isActive:boolean;
    constructor(empid:number,name:string,age:number,salary:number,isactive:boolean){
        this.empid=empid;
        this.Name=name;
        this.Age=age;
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
emp1= new Employee(1,"vamshi",23,39000,true);
// emp1.Name="vamshi";
// emp1.Age=23;
// emp1.isActive=true;
// emp1.empid=1;
// emp1.salary=39000;
console.log(emp1.getNetSalary());

var emp2:Employee;
emp2= new Employee(2,"vinay",23,43000,true);

// emp2.Name="Vinay";
// emp2.Age=23;
// emp2.isActive=true;
// emp2.empid=2;
// emp2.salary=41300;
console.log(emp2.getNetSalary());

var emp3:Employee;
emp3= new Employee(3,"ravi",24,4000,false);

// emp3.Name="ravi";
// emp3.Age=23;
// emp3.isActive=true;
// emp3.empid=1;
// emp3.salary=4000;
console.log(emp3.getNetSalary());
