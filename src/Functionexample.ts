function display():void
{
    console.log("display function");
}
display();

//function with parameter and without return type
function display1(message: string): void {
    console.log(`The message is: ${message}`);
}
display1("Hello!");

//write a function to find the sum of two numbers and return the result
function sum(a: number, b: number): void
{
    let s = a + b;
    console.log(`The sum is: ${s}`);
}
sum(3,4);
sum(1,2);

//functions with parameter and return type
function messagefunction(s1:string,s2:string): string
{
    let s3:string = s1 + " " + s2;
    return `The string is : ${s3}`;
}
let s4:string=messagefunction("Hello","World");
console.log(s4);

//function without parameters ,without return type
function displayEmp1(): void
{
    let eno:number=101;
    let ename:string="siva";
    let esal:number=10000;
    let dept:string="Technical";
    let isHike:boolean=true;
    console.log(`Employee number is : ${eno}`);
    console.log(`Employee name is : ${ename}`);
    console.log(`Employee salary is : ${esal}`);
    console.log(`Employee department is : ${dept}`);
    console.log(`Employee hike status is : ${isHike}`);

}
displayEmp1();

//d.Function with parameters and with return type
function displayEmp2(eno:number,ename:string,esal:number,dept:string,isHike:boolean): string
{
    let data:string=`The data is: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
    return data;
}
let msg:string=displayEmp2(101,"siva",10000,"Technical",true);
console.log(msg);


//functions with optional parameters
function display3(s1:string,s2?:string):void
{
    console.log(`The data is : ${s1} ${s2}`);
}
display3("Hello","klu");
display3("Hello");

//functions with default values
function display4(a:number,b:number,c:number=100):void
{
    console.log(`a,b,c values are : ${a},${b},${c}`);
}
display4(1,2,3);
display4(1,4);



//arrow functions 

//a) use an arrow function
const bookInfo = (bno: number, bname: string, bprice: number) => {
    console.log(`Book Information: Book number: ${bno}, Book name: ${bname}, Book price: ${bprice}`);
};
bookInfo(101, "TypeScript Guide", 2999);

const bookInfo1 = (bno: number, bname: string, bprice: number): void => {
    console.log(`Book Information: Book number: ${bno}, Book name: ${bname}, Book price: ${bprice}`);
};
bookInfo1(102, "JavaScript Guide", 2499);

// passing an array to a function
let marks: number[] = [10, 20, 30, 40, 50];
function displayMarks(a: number[]): void {
    console.log(a);
}
displayMarks(marks);

//example2:write a program to read a number and string of book names and print the information via a function
let m:number=10;
let bookarray=["java","donet","typescript"];
function displayBooks(a:number,b:string[]):void
{
    console.log(`Number of books: ${a}`);
    console.log(`Book names are :${b}`);
    
}

displayBooks(m,bookarray);

//aray holding different data types
let studentdata=[101,102,103];
console.log(`Student data is : ${studentdata}`);
let studentdata1=[101,"cse","klu"];
console.log(`Student data is : ${studentdata1}`);