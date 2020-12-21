'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'audio';
// const private = 532;
// const if = 223;

// function logger() {
//   console.log('my name is andrew');
// }
// // calling / running/ invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 5);
// console.log(appleJuice);
// console.log(fruitProcessor(0, 5));

// const appleOrangeJuice = fruitProcessor(555, 555);
// console.log(appleOrangeJuice);

// const num = Number('23');

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// // Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1980, 'bob'));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange piecess`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
//   //return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1950, 'mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 2, 2));

const scoreDolphins = calcAverage(1244, 23, 71);
const scoreKoalas = calcAverage(56565, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('no one wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);
