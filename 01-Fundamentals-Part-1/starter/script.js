/*
let js = 'bob';
console.log(40 + 8 + 23 - 10);
// Variable Name Conventions
let firstName = 'bob';
let lastName = 'bob';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/
/*
let javescriptIsFun = true;
console.log(javescriptIsFun);

// console.log(typeof true);
console.log(typeof javescriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javescriptIsFun = 'YES!';
console.log(typeof javescriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2020;
console.log(typeof year);

console.log(typeof null);
*/
/*let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'smith';
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageAndrew = now - 2022;
console.log(ageJonas, ageAndrew);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2
// math operators
const firstName = 'jonas';
const lastName = 'smith';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x +1
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageAndrew); // >m <, >=, <=
console.log(ageAndrew >= 18);

const isFullAge = ageAndrew >= 18;

console.log(now - 1991 > now - 2022);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageAndrew = now - 2022;

console.log(now - 1991 > now - 2022);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageAndrew) / 2;
console.log(ageJonas, ageAndrew, averageAge);
*/

/*
Coding Challenge #1 

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/
/*
const firstName = 'andrew';
const job = 'student';
const birthYear = 2002;
const year = 2037;

const andrew =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(andrew);

const andrewNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(andrewNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`string
new
line
lmao`);
*/
/*
const age = 15;

if (age >= 16) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 16 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1992;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
const markBMI = 20;
const johnBMI = 15;
if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is higher then Mark's BMI (${markBMI})!`
  );
}
*/
// type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('24' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

// 5 Falsy Values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log('Dont spend it all :)');
} else {
  console.log('get a job loser');
}

let height;
if (height) {
  console.log('height is defined');
} else {
  console.log('not defined');
}
*/
/*
const age = '18';
if (age === 18) console.log('you are an adult (strict)');
if (age == 18) console.log('you are an adult (loose)');

const favNum = Number(prompt('What is your favorite number'));
console.log(favNum);

if (favNum === 69) {
  console.log('cool! 69 is good number');
} else if (favNum === 21) {
  console.log('21 is cool too');
} else {
  console.log('num sucks');
}
if (favNum != 21) {
  console.log('why you bad at number choice');
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log('Someone else should drive...');
}
*/
// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore) {
//   console.log('Dolphins win!');
// } else if (koalasScore > dolphinsScore) {
//   console.log('Koalas win!');
// } else if (koalasScore === dolphinsScore) {
//   console.log('tie');
// }

// const day = 'monday';

// switch (day) {
//   case 'monday':
//     console.log('plan course structure');
//     console.log('go to meetup');
//     break;
//   case 'tuesday':
//     console.log('gaming');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('write code examples');
//     break;
//   case 'friday':
//     console.log('record vids');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('relax');
//     break;
//   default:
//     console.log('invalid day');
// }

// const age = 19;

// age >= 21 ? console.log('drinking good') : console.log('water');

// const drink = age >= 21 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 21) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 21 ? 'wine' : 'water'}`);

// const bill = 400;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`
// );
