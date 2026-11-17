/*
create a new /src /task.ts file
print the following details 
sno,
sname,
isJobAvailable,
modify sno value,
change the sname
company name is not known in advance
make sure salary is nullthe description of eno and sno are different
store the aadhar number.
use interpolation , concatenation
*/



let sno: number = 101;
console.log(`sno: ${sno}`);

let sname: string = "Siva Teja";
console.log("sname: " + sname);

const isJobAvailable: boolean = true;
console.log(`Is a job available? ${isJobAvailable}`);

const eno: number = 501;
console.log(`eno: ${eno}`);

sno = 102;
console.log(`Updated sno: ${sno}`);

sname = "Siva";
console.log("Updated sname: " + sname);

const companyFieldName: string = "companyName";
const companyDetails: Record<string, string> = {};
companyDetails[companyFieldName] = "Example Technologies";
console.log(`Company: ${companyDetails[companyFieldName]}`);

const salary: number | null = null;
console.log(`Salary: ${salary}`);

const aadharNumber: string = "XXXX-XXXX-XXXX";
console.log("Aadhaar Number: " + aadharNumber);
