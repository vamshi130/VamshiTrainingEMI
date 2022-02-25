var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(personName, personAge) {
        this.person_Name = personName;
        this.person_Age = personAge;
    }
    return person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(personName, personAge, empid, salary, isactive) {
        var _this = _super.call(this, personName, personAge) || this;
        _this.empid = empid;
        _this.salary = salary;
        _this.isActive = isactive;
        return _this;
    }
    Employee.prototype.getNetSalary = function () {
        if (this.isActive == true) {
            if (this.salary > 10000) {
                return this.salary + ((this.salary * 10) / 100);
            }
            else if (this.salary > 5000 && this.salary <= 10000) {
                return this.salary + ((this.salary * 5) / 100);
            }
            else {
                return this.salary;
            }
        }
        else
            return 0;
    };
    return Employee;
}(person));
var emp1;
emp1 = new Employee("vamshi", 23, 1, 39000, true);
console.log(emp1.getNetSalary());
var emp2;
emp2 = new Employee("vinay", 23, 2, 43000, true);
console.log(emp2.getNetSalary());
var emp3;
emp3 = new Employee("ravi", 24, 3, 4000, false);
console.log(emp3.getNetSalary());
