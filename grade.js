// Do not modify!
const GradeBook = require('./classes/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

// You can modify the following lines
console.log("Grade list");

// Call with correct context
console.log(gradesAvg.call(grades));        // 58
console.log(gradesAvg.call(grades, 20));    // 78
