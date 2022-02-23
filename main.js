let userName = "Bob";
let userQuestion = "How many fingers am I holding up?" 
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "3"
if (userName === 'Jane') {
    console.log(`Hello ${userName}!`);
}else {
    console.log('Hello!');
}
console.log(userQuestion);
if (randomNumber === 1) {
    console.log('It is certain');
} else if (randomNumber === 2) {
    console.log('It is decidedly so');
} else if (randomNumber === 3) {
    console.log('Reply hazy try again');
} else if (randomNumber === 4) {
    console.log('Cannot predict now');
} else if (randomNumber === 5) {
    console.log('Do not count on it');
} else if (randomNumber === 6) {
    console.log('My sources say no');
} else if (randomNumber === 7) {
    console.log('Signs point to yes');
}
console.log(eightBall)
