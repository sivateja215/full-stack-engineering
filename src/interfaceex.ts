//declaring the interface with variables
// interface student{
//     sno: number;
//     sname: string;
// }
// let ob:student={
//     sno: 1,
//     sname: "Raju"
// }
// console.log("The student number is:"+ob.sno);
// console.log("The student name is:"+ob.sname);


//interface with optionalparameters
interface student{
    sno: number;
    sname?: string;//this is optional parameter
}
let ob:student={
    sno: 1
}
console.log("The student number is:"+ob.sno);
console.log("The student name is:"+ob.sname);

//interface with readonly parameters
interface Employee{
    readonly eno: number;
    ename: string;
}


