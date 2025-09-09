

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
 =*Var
 Scope:Function-scoped.
 Hoisting :Hoisted (moved to the top of the function) and initialized width undefined.
 Re-declare : Allowed in the same scope.
 Update value :Allowed.
 *Let
 Scope:Blocck-scoped{}.
 Hoisting :Hoisted but not initialized (Temporal Dead Zone).
 Re-declare : Not allowed in the same scope.
 Update value :Allowed.
 *Const 
 Scope:Block-scoped{}.
 Hoisting :Hoisted but not initialized (same as let).
 Re-declare : Not allowed.
 Update value : Not allowed.



#### 2) What is the difference between map(), forEach(), and filter()? 
 =  *Map()
 .Map() executes the same code an every element in an array and returns a new array with the updated elements.
 *forEach()
 .forEach() is used to executes the same code an every element in an array but does not change the array and it returns undefined. 
 *Filter()
 .filter() Checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

#### 3) What are arrow functions in ES6?
=Arrow function in ES6 are a shorter and more concise way to write functions in javascript .They use the => (arrow) syntex instead of traditional function keyword.

#### 4) How does destructuring assignment work in ES6?
=Destructuring assignment is a special syntex in ES6 that lets you unpack values from arrays or properties from objects into seperate variable in a cleaner and shoter way.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

=Template literals  ES6 are a new way introduced in ES6 to work with strings.They use backticks(``) instead of single (') or double (") quotes.
 String Concatenation:
 Difference between concatenated strings and template literals:

Unlike concatenated strings, we can slot expressions directly into template literals, meaning that we can effortlessly pull values into our string.

If we use ${ and } to enclose the name of a variable, and that variable's value will be spliced into our string.

 Example from concatenated string:

Console.log("Hello,welcome to" +website.name+"!\"message goes here\" ") ;

To template literal:

Console.log(`Hello,welcome to ${website.name} !"message goes here"` ) ;