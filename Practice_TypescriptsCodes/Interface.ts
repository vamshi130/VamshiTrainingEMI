interface IEmployee{
    salary:number;
    getTax():number;
}
class Employee implements IEmployee{
    salary: number;
    
    getTax(): number {
        return this.salary*10/100;
    }

}
var emp=new Employee();
emp.salary=1000;
console.log(emp.getTax());