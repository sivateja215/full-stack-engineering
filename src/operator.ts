// Arithmetic operators
let a: number = 10;
let b: number = 20;
let c: number;

console.log("ARITHMETIC OPERATORS");
c = a + b;
console.log("Addition :", c);
c = a - b;
console.log("Subtraction :", c);
c = a * b;
console.log("Multiplication:", c);
c = b / a;
console.log("Division:", c);
c = b % a;
console.log("Remainder:", c);
c = a ** 2;
console.log("Exponentiation :", c);


// Relational operators
console.log("RELATIONAL OPERATORS");
console.log(" equality (===):", a === b);
console.log(" inequality (!==):", a !== b);
console.log("Greater than (>):", b > a);
console.log("Less than (<):", a < b);
console.log("Greater than or equal to (>=):", b >= 20);
console.log("Less than or equal to (<=):", a <= 10);


// Assignment operators
console.log("ASSIGNMENT OPERATORS");
let score: number = 10;
console.log("Assignment (=):", score);
score += 5;
console.log("Addition assignment (+=):", score);
score -= 3;
console.log("Subtraction assignment (-=):", score);
score *= 2;
console.log("Multiplication assignment (*=):", score);
score /= 4;
console.log("Division assignment (/=):", score);



// Logical operators
console.log("LOGICAL OPERATORS");
const hasName: boolean = true;
const isEnrolled: boolean = false;
console.log("Logical AND (&&):", hasName && isEnrolled);
console.log("Logical OR (||):", hasName || isEnrolled);
console.log("Logical NOT (!):", !isEnrolled);


// Conditional (ternary) operator
console.log("CONDITIONAL (TERNARY) OPERATOR");
const age: number = 21;
const ageMessage: string = age >= 18 ? "Adult" : "Minor";
console.log("Conditional (?:):", ageMessage);

// String concatenation with +
console.log("STRING CONCATENATION");
const firstName: string = "Siva";
const greeting: string = "Hello, " + firstName + "!";
console.log("String concatenation (+):", greeting);

// Unary operators
console.log("UNARY OPERATORS");
let counter: number = 1;
counter++;
console.log("Increment (++):", counter);
counter--;
console.log("Decrement (--):", counter);
console.log("typeof:", typeof counter);
const voidResult: undefined = void 0;
console.log("void:", voidResult);

// Bitwise operators
console.log("BITWISE OPERATORS");
const x: number = 5;
const y: number = 3;
console.log("Bitwise AND (&):", x & y);
console.log("Bitwise OR (|):", x | y);
console.log("Bitwise XOR (^):", x ^ y);
console.log("Bitwise NOT (~):", ~x);
console.log("Left shift (<<):", x << 1);
console.log("Right shift (>>):", x >> 1);
console.log("Unsigned right shift (>>>):", x >>> 1);

// Property access with dot and bracket notation
console.log("PROPERTY ACCESS");
const student: { name: string; course: string; address?: { city: string } } = {
  name: "Siva",
  course: "TypeScript",
};
console.log("Dot access (.):", student.name);
console.log("Bracket access ([]):", student["course"]);

// Optional chaining (?.): safely access a property that may be missing
console.log("OPTIONAL CHAINING");
console.log("Optional chaining (?.):", student.address?.city);
