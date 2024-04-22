/* What are conditional statements? Explain conditional statements with syntax and examples.

Conditional statements are those statements which are used when a specific condition evalutes to true or false. They are mostly in the form of if-else statements, in which certain actions are taken if the required condition is met or even it is not met.
 
1.If statement   
if condition:
    # code to execute if condition is true
else:
    # code to execute if condition is false

2. Else if (else if) statement
if condition1:
    # code to execute if condition1 is true
else if condition2:
    # code to execute if condition1 is false and condition2 is true
else:
    # code to execute if both condition1 and condition2 are false

3. Nested if statements:
if condition1:
    if condition2:
        # code to execute if both condition1 and condition2 are true
    else:
        # code to execute if condition1 is true but condition2 is false
else:
    # code to execute if condition1 is false

    */

let age = 16
if(age == 18){
    console.log("YOU ARE ELIGIBLE FOR DRIVING")
}
else {
    console.log("SORRY, YOU ARE NOT ELIGIBLE FOR DRIVING")
}


