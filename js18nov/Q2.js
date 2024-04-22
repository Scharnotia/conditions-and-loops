/*  Write a program that grades students based on their marks.
 If greater than 90 then A GradE
 If between 70 and 90 then a B grade
 If between 50 and 70 then a C grade
 Below 50 then an F grade
 */


 const student_marks = 55
 if(student_marks>=90){
    console.log("You got A grade")
 }else if(student_marks<90 && student_marks>=70){
    console.log("You got B grade")
 }else if (student_marks<70 && student_marks>=50){
    console.log("You got C grade")
 }else{
    console.log("You got F grade")
 }