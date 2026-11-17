let marks:number[]=[90,80,70,60,50];
console.log(marks);
console.log(marks[4]);
//declare array of student names and print the information
let studentNames:string[]=["Alice","Bob","Charlie","David","Eve"];
console.log(`The student names are : ${studentNames}`);
console.log(`The third student name is : ${studentNames[2]}`);
console.log(studentNames[6]);//undefined because the index 6 is out of bounds
//push() method
marks.push(40);
console.log(`The updated marks are : ${marks}`);//[90,80,70,60,50,40]
marks.push(30,20,10);
console.log(`The updated marks are : ${marks}`);//[90,80,70,60,50,40,30,20,10]

//unshift() method
marks.unshift(1);
console.log(`The updated marks after unshift are : ${marks}`);//[1,90,80,70,60,50,40,30,20,10]

//pop() method
marks.pop();
console.log(`The updated marks after pop are : ${marks}`);//[1,90,80,70,60,50,40,30,20]

marks.splice(2, 3); //removes 3 elements starting from index 2
console.log(`The updated marks after splice are : ${marks}`);//[1,90,30,20]

let departments:string[]=["CSE","ECE","CIVIL"];
departments.splice(1, 0, "MECH"); //inserts "MECH" at index 1 without removing any elements
console.log(`The updated departments after splice are : ${departments}`);//[CSE, MECH, ECE, CIVIL]
departments.splice(2, 0, "EEE","AIDS"); //inserts "EEE" and "AIDS" at index 2 without removing any elements
console.log(`The updated departments after splice are : ${departments}`);//[CSE, ECE, EEE, AIDS, CIVIL]

let names:string[]=["ram","sam","raj","harsha","ravi","rajesh"];
console.log(`The names are : ${names}`);
names.splice(1,1); //removes 1 element at index 1
console.log(`The updated names after splice are : ${names}`);

//SLICE()
console.log(`The first three names are : ${names.slice(0, 3)}`);
console.log(`The name at index 1 is : ${names.slice(1, 2)}`);
console.log(`The names from index -2 to 1 are : ${names.slice(-2, 1)}`);

let univ = ["klu","jntuk","jntua","jntuk"];
console.log(`Only klu: ${univ.slice(0, 1)}`);
console.log(`jntua and jntuk: ${univ.slice(2, 4)}`);
console.log(`The last two universities: ${univ.slice(-2)}`);
console.log(`All universities: ${univ.slice()}`);
