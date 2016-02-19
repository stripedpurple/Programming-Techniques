/*
1. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible
by both 3 and 5 ( and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (var i = 1; i <= 100; i++) {
    var str = '';

    if (i % 3 === 0 && i % 5 === 0) {
        str += 'Fizz Buzz';
    }else if (i % 3 === 0) {
        str += (str !== '' ? ' ' : '') + 'Fizz';
    }else if (i % 5 === 0) {
        str += (str !== '' ? ' ' : '') + 'Buzz';
    }else if (str === '') {
        str += i;
    }

    console.log(str);
}

// Recursive
function fizzBuzz(i){
    if (i >100){
        return 0
    }

    var str = '';
    if (i % 3 === 0 && i % 5 === 0) {
        str += 'Fizz Buzz';
    }else if (i % 3 === 0) {
        str += (str !== '' ? ' ' : '') + 'Fizz';
    }else if (i % 5 === 0) {
        str += (str !== '' ? ' ' : '') + 'Buzz';
    }else if (str === '') {
        str += i;
    }

    console.log(str);
    i++;
    fizzBuzz(i)
}

fizzBuzz(1);

/*
2. You can get the Nth character, or letter, from a str by writing "str".charAt(N), similar to how you get its length with "s".length.
The returned value will be a str containing only one character (for example, "b").
The first character has position zero, which causes the last one to be found at position str.length - 1.
In other words, a two-character str has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a str as its only argument and returns a number that indicates how many uppercase "B" characters are in the str.

Next, write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only uppercase "B" characters).
Rewrite countBs to make use of this new function.
*/

function countBs(str){
    if (typeof str != "string"){
        console.log("Please check your input argument.\nError", typeof str, "is not a string");
        return 0;
    }
    var count = 0;
    for ( var j in str ){
        if (str[j] == 'B'){
            count++;
        }
    }
    return count;
}

console.log(countBs("The Beautiful Bouquet Blossomed in the Bright sun."));

function countChar(str, char){
    if (typeof str != "string"){
        console.log("Please check your input argument.\nError", typeof str, "is not a string");
        return 0;
    }
    var count = 0;
    for ( var j in str ){
        if ( str[j] == char ){
            count++
        }
    }
    return count
}

console.log(countChar("The Beautiful Bouquet Blossomed in the Bright sun.", "a"));


function countBs2(str){
    return countChar(str, "B")
}

console.log(countBs2("The Beautiful Bouquet Blossomed in the Bright sun."));

/*
3. Arrays have a method reverse, which changes the array by inverting the order in which elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
Neither may use the standard revers method.
*/

function reverseArray(arr){
    if (typeof arr != "object"){
        console.log("Please check your input argument.\nError", typeof arr, "is not a array");
        return 0;
    }

    var newArr = [];
    for (var j = arr.length - 1; j >= 0; j--){
        newArr.push(arr[j]);
    }
    return newArr;
}

var myArr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(myArr));


var myArr = [1, 2, 3, 4, 5, 6];
function reverseArrayInPlace(arr){
    if (typeof arr != "object"){
        console.log("Please check your input argument.\nError", typeof arr, "is not a array");
        return 0;
    }

    var p1;
    for (var j = 0; j < arr.length/2; j++){ // With out this conditional the array will be reversed twice.
            p1 = arr[j];
            arr[arr.length - j -1] = p1;
            arr[j] = p2;
            return arr;
        }
    }
}

reverseArrayInPlace(myArr);
console.log("Original\n====================");
console.log(myArr);


/*
4. The == operator compares objects by identity. This means if two objects point to the same memory location it would return true otherwise false.
However, sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the
same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison. Do you have to take any exception into account?
*/

function deepEqual(val1, val2){
    if (typeof val1 != typeof val2){ // Rational behind this is simply that data types are not equal so even though 1 is equal to "1" it is only a shallow equivalence.
        return false;
    }
    else if (typeof val1 == typeof val2 && typeof val1 == 'object'){
        // Gets propertie names
        var p1 = Object.getOwnPropertyNames(val1);
        var p2 = Object.getOwnPropertyNames(val2);

        // Check for equal object length
        if (p1.length != p2.length) {
            return false;
        }

        for (var j in p1) {
            var props = p1[j];

            // Checks if properties of the same name have equal values
            if (typeof val1[props] == "object" &&  typeof val2[props] == "object") {
                return deepEqual(val1[props], val2[props]);
            }
            else if (val1[props] !== val2[props]) {
                return false;
            }
        }

        // Objects are equal
        return true;
        //return deepEqual();
    }
    else if (typeof val1 == typeof val2 && typeof val1 != 'object'){
         return val1 == val2;
    }
}

console.log(deepEqual(1,2)); // False
console.log(deepEqual(1,1)); // True
console.log(deepEqual(1,"1")); // False

var cat = {animal: true,
    color:'blue',
    likes:{
        meat: true,
        pizza: 'who doesn\'t'
    }
};

var dog = {animal: true,
    color:'blue',
    likes:{
        meat: true,
        pizza: 'who doesn\'t'
    }
};

console.log(deepEqual(cat, dog)); // True

var lion = {animal: true,
    color:'blue',
    likes:{
        meat: true,
        pizza: 'who doesn\'t'
    }
};

var monkey = {animal: true,
    color:'blue',
    likes:{
        meat: false,
        pizza: 'who doesn\'t'
    }
};

console.log(deepEqual(lion, monkey)); // False
