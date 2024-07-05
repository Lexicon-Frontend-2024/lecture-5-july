sayHello('Jesper');

// Function declaration
function sayHello(name) {
    console.log(`Hello ${name}! Kul att du kunde komma!!!`);
}

let counter = 3; // reseverar plats ...934
counter = increase(counter);
console.log(counter);
function increase(number) { // parametern som tas emot sparas som en kopia på en annan plats i minnet ex ...654
    number++;
    console.log(number);
    return number;
}

console.log(getSquareValue(3));

function getSquareValue(number) {
    return number * number;
}

// Function expression - arrow function
// let sayHello2 = () => {
//     console.log('Hello gänget igen!');
// }

// // Must be called AFTER initialization
// sayHello2();