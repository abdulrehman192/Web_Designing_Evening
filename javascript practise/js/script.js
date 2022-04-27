console.log("Hello world");
// used for single line comment
/* used for multiline comments */

//variables in javascript

var a = 15;
console.log(a);

var b = -15;

var sum = a + b;
console.log(sum);

// decimal numbers
var c = 125.8979; 
console.log(a + c);

// string in javascript
var x = "Hello, this is a string in javascript";
console.log(x);

// boolean in javascript
let check = false;
console.log(check);
check = true;
console.log(check);

// objects in javascript

let student = {
   "Name": 'Abdul Rehman',
   "Roll No": "45-555",
   "Class": 'CIT'
};

console.log(student);

// arrays in javascript
//indexing    0         1           2
let cars = ["Honda", "Suzuki", "Ferreri"];
console.log(cars[2]);

// operators in javascript
// arithmatic operators => +, -, *, /, %

let n = 25;
let m = 15;

let add = n + m;
console.log("Add = "+ add);
let sub = n - m;
console.log("sub = "+ sub);
let multi = n * m;
console.log(n + " * "+ m + " = " + multi);
let div = n / m;
console.log(n + " / "+ m + " = " + div);
let mod = n % m;
console.log("mod = " + mod);

// comparison operators => return true or false value

let y = (n == m);  // loose comparison operator
console.log(y);

let o = "25";
y = (n == o); //loosely comaprison opertor
console.log(y);

y = (n === o); //tighly comparison opertor
console.log(y);

y = (n != m);  //check the value on n not equal to m
console.log(y);

y = (n > 20);  //check the value of n is greater than 20
console.log(y);
y = (m < 20); //check the value of m is less than 20
console.log(y);

y = (n >= 25); //check the value of n is greater than or equal to 25
console.log(y);
y = (n <= 25); //check the value of n is less than or equal to 25
console.log(y);

// logical operators => and, or , not
// n = 25
let z = (n > 20) && (n < 25) //and return true when both values are true
console.log(z);

z = (n > 20) || (n < 25) // or return false when both values are false
console.log(z);

z = !z;  //not return the opposit value
console.log(z);



