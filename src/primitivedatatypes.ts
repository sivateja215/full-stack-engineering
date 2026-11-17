// number: integers, decimal values, and negative values
let eno: number = 101;
var sno: number = 102;
let price: number = 100.90;
const marks: number = -25;
console.log("number:", eno, sno, price, marks);

// string: text
let firstName: string = "Siva";
const message: string = "Hello, TypeScript!";
console.log("string:", firstName, message);

// boolean: true or false
let isAvailable: boolean = true;
const hasPassed: boolean = false;
console.log("boolean:", isAvailable, hasPassed);

// bigint: integers larger than the safe range of number
let largeNumber: bigint = 9007199254740993n;
const accountNumber: bigint = 12345678901234567890n;
console.log("bigint:", largeNumber, accountNumber);
// symbol: a unique value
let userId: symbol = Symbol("userId");
const productId: symbol = Symbol("productId");
console.log("symbol:", userId, productId);

// undefined: a value that has not been assigned
let result: undefined = undefined;
console.log("undefined:", result);

// null: an intentional absence of a value
let selectedItem: string | null = null;
const emptyValue: null = null;
console.log("null:", selectedItem, emptyValue);




