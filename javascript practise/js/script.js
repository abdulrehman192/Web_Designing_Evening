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

z = !z;  //not operator return the opposit value
console.log(z);

// conditional structure
// if-else statement

a = 20;
if(a >= 20)
{
   console.log("number is greater than or equal 20");
}
else
{
   console.log("number is less than 20");
}

let age = 15;
 if(age >= 18)
 {
    console.log("You are 18+");
 }
 else
 {
   console.log("You are under 18");
 }

//  Series of if-else statements

// Write a program which calculate the Grade on the basis of given marks 

let marks = 35 ;
let grade = "F";

if(marks >= 50 && marks <= 60) // Grade D
{
   grade = "D";
}
else if(marks > 60 && marks <= 70) // Grade C
{
   grade = "C";
}
else if(marks > 70 && marks <= 80)
{
   grade = "B";
}
else if(marks > 80 && marks <= 90)
{
   grade = "A";
}
else if(marks > 90 && marks <=100)
{
   grade = "A+";
}
else if(marks < 0 || marks > 100)
{
   grade = "Invalid Input";
}
else
{
   grade = "F";
}

console.log("Your Grade is "+ grade);


// a = prompt("Enter Number a :"); //user input
// b = prompt("Enter Number b :");

a = Number(a);
b = Number(b);
let res = 0;
let operator = "*";

if(operator == "+")
{
   res = a + b;
   console.log("Sum = "+ res);
}
else if(operator == "-")
{
   res = a - b;
   console.log("Sub = "+ res);
}
else if(operator == "*")
{
   res = a * b;
   console.log("Mult = "+ res);
}
else if(operator == "/")
{
   res = a / b;
   console.log("Div = "+ res);
}
else if(operator == "%")
{
   res = a % b;
   console.log("Mod = "+ res);
}

let username = prompt("Enter Username");
let password = prompt("Enter Password");
if(username == "Admin" && password == "pakistan")
{
   console.log("Login Successfully");
}
else    
{
   console.log("Incorrect username or password");
}

// switch case statement

age = 25;

switch(age)
{
   case 18:
      console.log("Age is 18");
      break;
   case 20:
      console.log("Age is 20");
      break;
   default:
      console.log("Invalid Input");
      break;
}

// itrrative structure

// for loop
   for(let i = 1; i <= 10; i++)
   {
      console.log("Hello World " + i);
   }

   // while loop
   let i = 1; // loop initializer
   while(i <= 10)  //condition 
   {
      console.log(i + " Hello World ");
      i++; // step counter
   }

   //do while loop

   let j = 1;
    do
    {
      console.log(j + " Hello World ");
      j++; // step counter
    }while(j <= 10);

    // print table of given number
    let num = 5;
    for(let i = 1; i <= 10; i++)
    {
       console.log(num + " x " + i + " = " + num * i);
    }

   //  write a program that sum up first 50 natural numbers
   console.log("Sum of First 50 Natural Numbers")

   sum = 0;
   //  1+2+3+4+5+6+.....50
   for(let i = 1; i <= 50; i++)
   {
      sum = sum + i;
      // sum += i;
   }

   console.log("Sum = "+ sum);

   // print first 50 even numbers

   for(let i = 1; i <= 50; i++)
   {
      if(i % 2 == 0)
      {
         console.log(i);
      }
   }


   // write to program to calclate the factorial of a given number
   let fact = 10;
   res = 1;

   for(let i = 1; i <= fact; i++)
   {
      res = res * i;
   }

   console.log("factorial of " + fact + " = "+ res);

   for(let i = 0; i < cars.length; i++ )
   {
      console.log(cars[i]);
   }

   /*

   *
   **
   ***
   ****
   *****
   ******
   *******
   ********
   
   */

   let pattern = "";
   for(let i = 1 ; i <= 8; i++)
   {
      pattern = pattern + "*";
      // pattern += "*";
      console.log(pattern);
   }

   /*

   1
   12
   123
   1234
   12345
   123456
   1234567
   12345678

   */

   pattern = "";
   for(let i = 1; i <= 8; i++)
   {
      pattern += i;
      console.log(pattern);
   }

   /*

   A
   AB
   ABC
   ABCD
   ABCDE
   ABCDEF

   */

   var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
   pattern = "";
   var rows = 26;

   if(rows <= 26 && rows >= 0)
   {
      for(let i = 0; i < rows; i++)
      {
         pattern += characters[i];
         console.log(pattern)
      }
   }


   // nested loop

   // outer loop
   for(let i = 1; i <= 10; i++)
   {
      console.log("outer loop " + i);
      // inner loop
      for(let j = 1; j<= 10; j++)
      {
         console.log("inner loop " + j);
      }
   }

   // for in loop
   for(let char in characters)
   {
      console.log(characters[char]);
   }

   // funtions in javascript

   // function definition
   function print_sum()
   {
      console.log("sum = 85");
   }

   // function call
   print_sum();
   print_sum();

   // there are 4 types of funtions
   // function no return and no parameter

   function print_name()
   {
      console.log("My name is Abdul Rehman");
   }
    print_name();

   //  function with no return and with perameters
   
   function addition(a,  b)
   {
      console.log(a+b);
   }

   addition(15,20);
   addition(35,25);
   addition(105,85);


   // function with return and no perameters

   function get_class()
   {
      return "CIT-Web development";
   }

   let data = get_class();
   console.log(data);

   // function with return and with perameter
   function multiply(a, b)
   {
      let data = get_class();
      console.log(data);
      return a * b ;
   }

   multi = multiply(15, 10);
   console.log(multi);
   

   let car = {
      "name": 'Honda Civic',
      "Model": 2022,
      "Engine Power": '1800CC',
      "Color": 'Black',
      "Doors": 4,
      "Auto drive": false,
      run: function()
      {
         console.log("Car is running");
      },
      break: function()
      {
         console.log("Car is stopped");
      }
   };

   console.log(car.name);
   car.run();

   car.name = "Honda City";
   console.log(car.name);

   let car1 = car;
   car1.name = "ABXx";
   console.log(car);
   console.log(car1);

   function Person(name, age, address)
   {
      console.log("Name : " + name);
      console.log("Age : "+ age);
      console.log("Address : "+ address);
   }

   let father = new Person("Ali", 25, "Okara");
   let mother = new Person("Naila", 24, "Okara");
   
   // global variables
   let firstName = "Ali";
   let lastName = "Ahmad";
   let subject = "Web Programming";


   function Student_data(first, last, subject)
   {
      this.firstName = first;
      this.lastName = last;
      this.subject = subject;
   }

   function print_student_data()
   {
      console.log("First Name : "+ firstName);
      console.log("Last Name : "+ lastName);
      console.log("Subject : "+ subject);
   }
   print_student_data();

   let student1 = new Student_data("Hadi", "Ahmad", "CIT");

   console.log(student1.firstName);
   let student2 = new Student_data("Hamza", "Ahmad", "CIT");

   console.log(student2.firstName);

   // page redirection

   //  window.location.replace("https://www.google.com");

   // javascript page refresh

   // window.location.reload();

   // auto refresh

   function autorefresh(time)
   {
      window.setTimeout(
         window.location.reload(),
         time
      )
   }

   function openGoogle()
   {
      window.location.replace("https://www.google.com");
   }

   function showAlert()
   {
      alert("Hi I'm a alert box in javascript");
   }

   function showConfirm()
   {
      let ok = confirm("Do you want to close this dialogue");
      console.log(ok);
   }



