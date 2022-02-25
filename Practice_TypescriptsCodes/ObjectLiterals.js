var student = {
    studentId: 1,
    Name: "vamshi",
    Age: 22,
    marks: 60,
    getMarks: function () {
        if (this.marks > 40) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
};
console.log(student.studentId);
console.log(student.Name);
console.log(student.marks);
console.log(student.getMarks());
