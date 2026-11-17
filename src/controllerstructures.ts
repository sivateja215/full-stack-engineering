// if
let marks: number = 32;
if (marks > 30) {
    console.log("pass.");
}

// if-else
let examMarks: number = 50;
if (examMarks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// if-else-if
let score: number = 82;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// nested if
let isRegistered: boolean = true;
let age: number = 20;
if (isRegistered) {
    if (age >= 18) {
        console.log("Eligible to vote.");
    } else {
        console.log("Registered, but not old enough to vote.");
    }
} else {
    console.log("Please register first.");
}

// switch-case
let dayNumber: number = 3;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Not a weekday number.");
}

// for loop
for (let count: number = 1; count <= 5; count++) {
    console.log(count);
}

let subjects: string[] = ["JavaScript", "TypeScript", "Python", "Java"];
for(let i=0;i<subjects.length;i++){
    console.log(i);
    console.log(subjects[i]);
}