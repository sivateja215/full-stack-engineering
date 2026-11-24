console.log("------------------------------------------------");
console.log("Class: class is a user defined datatype which contain variables/ properties and methods.")

// example : book class
class Book {
   bno:number=1;
   bname:string="React";
    display():void{
        console.log(`The book details are :${this.bno},${this.bname}`);
    }
}

console.log("object: it is instance of a class.");
console.log("Syntax: let object=new object");
let book =new Book();
book.display();

//create a class product with pno,pname,price as properties
//and display the data via function with return type

class Product{
    pno:number=1;
    pname:string="Laptop";
    price:number=60000;
    display():string{
          return `In the list product no:${this.pno}, product name : ${this.pname}
            ,and product price :${this.price}`;
    }
}
let product =new Product();
let p:string=product.display();
console.log(p);

console.log("--------------------------------------------");
console.log("Constructor: \n1.It is a method  which is used to initializzethe values./n2.constructor are declared with method isConstructorDeclaration()");
console.log("3.constructors are invoked when an object is created (no explicit call is required)");
console.log("syntax: class classname{\n\nconstructor()\n{initialize the values}}");
console.log("4.constructor will not retrun any value");
//ex create a class employee with eno and ename are properties initialize with constructor
//and display the information
class Employee
{
    //variable or properties
    eno:number;
    ename:string;
    //constructor
    constructor(){
        this.eno=101;
        this.ename="raju";
    }
    show():void{
    console.log("The ENo is:"+this.eno);
    console.log("The Ename:"+this.ename);
    }
}
let employee = new Employee;
console.log(employee.show());
console.log("Ex:craete a class order with old , name , isordered with parameter constructor");

class Order{
    oid:number;
    oname:string;
    isOrderProcessed:boolean;
    constructor(oid:number,oname:string,isOrderProcessed:boolean){
        this.oid=oid;
        this.oname=oname;
        this.isOrderProcessed=isOrderProcessed;
    }
    displayOrder():string{
        return "Orders:"+this.oid+","+this.oname+","+this.isOrderProcessed;
        //retun `Orders:${this.oid},${this.oname},${this.isOrderProcessed}`    
    }
}
let order=new Order(1,"Mobile",false);
order.displayOrder();
console.log(order.displayOrder());

console.log("--------------------------------------");
console.log("Inheritance:\n 1.Accquiring the properties of one class to another class is inheritance ");
console.log("2.extends is the keyword used for inheritance ");
console.log("3.If A&B are two classes.Class A properties are given to class b, then\na is clled parent/superclass and b is sub class /child classs");
console.log("4.object will be created to only subclass");
console.log("Syntax:class A{\n properties }\n class B extends A{\n}");

class University
{
getUniversity():void
{
console.log("K L University");
}
}

class Department extends University {
getDepartment():void
{
console.log("Department of CSE");

}
}
let dept=new Department();
dept.getUniversity();
dept.getDepartment();


console.log("example");
class university{
    constructor(){
        console.log("University");
    }

}
console.log("ex: create a class university with variables , uname,ucity , create a parameterised method to assign value to the variables.")
console.log("and display the information . create a subclass department2 with variable dname,dbuilding ");
console.log("create a parameterised method to assign values to the variable and display the information ");
class  University1{
    
}