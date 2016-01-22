let square = x=> x*x;
let add = (a,b)=> a+b;
let pi = () => 3.1415

console.log(square(5));
console.log(add(3,4));
console.log(pi());

let arrowGreeting = (message,name)=> message + name;

let demo = message=> message;

console.log(demo("hey"))
console.log(arrowGreeting("hello this is message"," from vibhatha"))
    
let student = [
    
    {
        "name":"Vibhatha",
        "phone":"071"
    },
    {
        "name":"Frank",
        "phone":"072"
    },
    {
        "name":"Sadunka",
        "phone":"073"
    }
    
]

//here the deconstruction of the array is used
let names = [for({phone} of student) phone]

console.log(names);

//without the deconstruction of the array

var nums = [1,2,3,4,5,6,6,7,8,1];

var aboveFive = [for (num of nums) if(num>5) num]

console.log(aboveFive);

//double array example


var numbers = [1,3,4,5,6];

var letters = ["a","b","c","d","e"];

var battleship = [ for (num of numbers) for(letter of letters) num+letter ]

console.log(battleship);


var battleship2 =[for (num1 of numbers) [for (letter1 of letters) num1+letter1]]

console.log(battleship2);


var salutation = "Hello";

var greeting = '     ${salutation},      world    ';
console.log(greeting);



////////////////////

/**Next Statement */

function *greet(){
    
    console.log('you called next()');
    
}

let greeter = greet();
console.log(greeter);

let next = greeter.next();
console.log(next);


////////////////////////////////

/**Yield Statement */

function *greetwithyield(){
    
    console.log('you called yield()');
    yield "hello"
    
}

let greeterwithyield = greetwithyield();
console.log(greeterwithyield);

let nextwithyield = greeterwithyield.next();
console.log(nextwithyield);

let donewithyield = greeterwithyield.next();
console.log(donewithyield);







