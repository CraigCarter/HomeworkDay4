// 1. Copy the contents below into a file named main.js and read through each exercise and provide the answers or code required.
//    You should use console.log to help test your code.
   /*=========================================================
    Part 1: Variables
   */
    var givenName;
   // Q: What value is stored in `givenName` right now?
   // A: Undefined

   givenName = "Brett";
   // Q: What is `givenName` set to now?
   // A: Brett

   givenName = givenName;
   // Q: What is `givenName` set to now?
   // A:

// 2. Using the above code, create a variable called greeting that will store the expression below with givenName being used.
//    You should use console.log to help test your code. The final output should look like: Hello, how are you Brett?
  var hello;
  hello = "Hello." + " " + "How are you" + " " + givenName + "?";
  console.log(hello)

// 3. Copy the contents below into your file named main.js and read through each exercise and provide the answers or code required.
//    You should use console.log to help test your code.

      /*=========================================================
     Part 2: Simple Math
     */
     var high = 50;
     var low  = 10;

     var math = high - low;
     // Q: What is `math` set to?
     // A: 40

     math = high - "5";
     // Q: What is `math` set to?
     // A: 45

    // Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
    // Write Code Below:

    math = high + low;
    console.log(math);
    math = high - low;
    console.log(math);
    math = high * low;
    console.log(math);
    math = high / low;
    console.log(math);

// 4. Copy the contents below into your file named main.js and read through each exercise and provide the answers or code required.
//    You should use console.log to help test your code.

    /* =========================================================
     Part 3: Expressions
    */
    // Create a variable to calculate your age
    // The answer should read "NAME is XX years old"
    // The answer should not be written in a comment.
    var born = 1986;
    var today = 2017;

    // Answers Below:
    var age = today - born;
    var name = "Craig";
    var sentence = name + " " + "is" + " " + age + " " + "years old.";
    console.log(sentence);

    // Store some information following in variables.
    var yourName;
    var instructorName;

    // Update the variables above so the expression reads correctly.
    // Answers Below:
    yourName = "Craig"
    instructorName = "Briana"

    // Final Statement
    var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName + ".";
    console.log(statement);

//5. Each of the following blocks of JavaScript contains errors. Take a look at each and do the following:

// Identify which line the error occurs on.
// Explain the cause of the error
// Fix the error, so the code produces the desired response.

var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + " " + lastName;

console.log(fullName); // Julia Roberts

var yearBorn = 1967;
var currentYear = 2016;
var age = currentYear - yearBorn;

console.log(age); // 49
