var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getTax = function () {
        return this.salary * 10 / 100;
    };
    return Employee;
}());
var emp = new Employee();
emp.salary = 1000;
console.log(emp.getTax());
