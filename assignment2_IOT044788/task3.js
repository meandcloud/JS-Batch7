var course1 = parseInt(prompt("Enter marks for course 1: "));
var course2 = parseInt(prompt("Enter marks for course 2: "));
var course3 = parseInt(prompt("Enter marks for course 3: "));
var course4 = parseInt(prompt("Enter marks for course 4: "));
var course5 = parseInt(prompt("Enter marks for course 5: "));
totalMarks = 500;
var obtainedMarks = (course1 + course2 + course3 + course4 + course5)
var percentage = obtainedMarks * 100 / totalMarks
console.log(obtainedMarks)
console.log(percentage)
console.log("Obtained Marks: "+ obtainedMarks +" Percentage: "+ percentage+"%")

if(percentage > 80 && percentage <=99 ){
  console.log("A+")
  console.log("Excellent")
  
}else if(percentage > 70 && percentage <= 79){
  console.log("A")
  console.log("Good")

}else if(percentage > 60 && percentage <= 69){
  console.log("B")
  console.log("You need to improve")


}else{
  console.log("Fail")
  console.log("Sorry")
}