// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore). Create a method that accepts a student name and updates the studentName of an instance of your Student Class. Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.

// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

class Student{
    constructor(name,cohart){
        this.studentName = name;
        this.codeSchoolCohart = cohart;
        this.grades = [
            this.assignmentName = null,
            this.assignmentScore = null,
        ];
      }
    
      user(){
        alert(`Hello My name is ${this.name} and these are my grades ${this.grades}`)
    }
}



let student = new Student('Eddie Ewell','Code 201',)

student.grades;

console.log(student);






