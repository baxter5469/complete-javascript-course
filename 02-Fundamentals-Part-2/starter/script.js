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

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 2, 2));

// let scoreDolphins = calcAverage(1244, 23, 71);
// let scoreKoalas = calcAverage(56565, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('no one wins...');
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreKoalas, scoreDolphins);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'mike';
// const friend2 = 'bob';
// const friend3 = 'peter';

// const friends = ['mike', 'bob', 'peter'];
// console.log(friends);
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'jay';
// console.log(friends);

// const firstName = 'jonas';
// const lastName = 'smith';
// const jonas = [firstName, lastName, 2037 - 1991];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years[0]));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// const friends = ['mike', 'steve', 'bob'];
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// const popped = friends.pop();
// console.log(friends, popped);
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('steve'));

// console.log(friends.includes('steve'));

// if (friends.includes('steve')) {
//   console.log('friend steve');
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const jonas = {
//   firstName: 'jonas',
//   lastName: 'smith',
//   age: 20,
//   job: 'teacher',
//   friends: ['mike', 'bob', 'steve'],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt(
// //   'what do you want to know about jonas? Choose between firstName / lastName / age / job / friends'
// // );
// // console.log(jonas[interestedIn]);

// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // } else {
// //   console.log('wrong request');
// // }

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonas';

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
// );
/*
const jonas = {
  firstName: 'jonas',
  lastName: 'smith',
  birthYear: 1991,
  age: 20,
  job: 'teacher',
  friends: ['mike', 'bob', 'steve'],
  hasDriversLicense: false,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      this.job
    }, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(jonas.calcAge());

//console.log(jonas['calcAge'](1991));
console.log(jonas.getSummary());
*/

// const mark = {
//   firstName: 'mark',
//   lastName: 'miller',
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   firstName: 'john',
//   lastName: 'smith',
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(john.calcBMI(), mark.calcBMI());
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

// const jonasArray = ['jonas', 'smith', 'teacher', 2037 - 1991];
// const types = [];
// for (let i = 0; i <= jonasArray.length - 1; i++) {
//   console.log(jonasArray[i]);

//   //types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
//   console.log(types[i]);
// }

// const years = [1991, 2002, 1950, 2020];
// const ages = [];
// for (let i = 0; i <= years.length - 1; i++) {
//   ages.push(2037 - years[i]);
//   console.log(ages);
// }

// for (let i = 0; i <= jonasArray.length - 1; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;

//   console.log(jonasArray[i]);
// }
