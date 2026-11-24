// console.log("Generics in Typescript");
// function show(msg:string):void
// {
//     console.log(msg);
// }
// function show1(a:number):void{
//     console.log(a);

// }
// function show2<Type>(msg:Type):void
// {
//    console.log(msg);
// }
// show2("hello");
// show2(123);
// show2(true);
// //write a generic function to take two integers and return integer
// // write a generic function to take two string and return string
// //function genfunction<T>(a:T,b:T):T
// {
// //logic
// }
// // write a generic function to display some message/value
// function disp<T>(a:T):void
// {
// console.log("The value is:"+a);
// }
// disp("Welcome");//disp<string>("welcome")
// disp(12);//disp<number>(12)
// disp(false);//disp<boolean>(false)
// // create a generic function which takes two values and concatenation
// function add(a:number,b:number):void{
//     let c:number=a+b;
//     console.log("The value is:"+c);
// }
// function concat<T>(a:T,b:T):void{
    
//     console.log("The value is:"+a+b);
// }
// concat(1,2);
// concat("Welcome"," klu");
// //generic class
// class Employee<T>{
//     eno:T;
//     constructor(en0:T){
//         this.eno=en0
//     }
//     display():void{
//         console.log(this.eno);
//     }
// }
// let obj= new Employee(104);
// obj.display();

// class Book<T>{
//     bname:T;
//     constructor(bname:T){
//         this.bname=bname;
//     }
//     display():void{
//         console.log("The Book Name is:"+this.bname);
//     }
// }
// let ob=new Book("RAMAYAN");
// ob.display();
// let ob1=new Book(120);
// ob1.display();
// let ob2=new Book(true);
// ob2.display();
// let ob4=new Book<String>("RAMAYAN");
// ob4.display();
 
// interface student<T>
// {
//     sno:T;
//     sname:String;
// }
// let s1:student<number>={
//     sno:100,
//     sname:"Ravi"
// };
// let s2:student<string>={
//     sno:"101",
//     sname:"Raghu"
// }
// //create an interface Department which contain dno(generic type),dname(String)
// //create two objects and pass the data:105 cse and D108,csit
 
// interface Department<T>{
//     dno:T;
//     dname:string;
// }
// let d1:Department<number>={
// dno:105,
// dname:"cse"
// };
// let d2:Department<string>={
//     dno:"D108",
//     dname:"csit"
// }
// //write a function which takes a generic type sno,string 
// //display the information 
// function stu <T>(sno:T,sname:string){
//     console.log(sno);
//     console.log(sname);
// }
// stu<number>(101,"Raju");
// stu<string>("S1032","Raju");
// //function with different generic types
// function stu1<T,U>(sno:T,sname:U){
//     console.log(sno);
//     console.log(sname);
// }
// stu1<number,string>(101,"Raju");
// stu1<string,string>("S1032","Raju");

// //write a program to read employee information eno,ename,esal,  isHikeThere
// //create a generic function with four generic types.
// function employee<T, U, V, W>(eno: T, ename: U, esal: V, ishikethere: W): void {
//     console.log("Employee Number:", eno);
//     console.log("Employee Name:", ename);
//     console.log("Employee Salary:", esal);
//     console.log("Is He/She There:", ishikethere);
// }

// employee<number, string, number, boolean>(101, "Raju", 25000, true);

// //generic arrays
// let dept:Array<string>=["cse","ece","it"];
// console.log(dept);

//Generic Classes
class Employee1<T>
{
    eno:T;
    ename:string;
    //intialize directly
    //constructor
    //setter
    constructor(eno:T,ename:string)
    {
        this.eno=eno;
        this.ename = ename;
    }
    display():void
    {
        console.log("The employee number "+this.eno+" "+this.ename);
    }
}
let e=new Employee1<number>(101,"Siva");
e.display();

let e1 = new Employee1<string>("E104","Ravi");
e1.display();


