export class Employee{
    id: number;
    name: string;
    age: number ;
    country: string;
    constructor(id:number, name: string, country: string, age: number)
    {
        this.id=id;
        this.name=name;
        this.age=age;
        this.country=country;
    }
}