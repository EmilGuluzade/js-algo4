//! Task-1 Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir. Pul bərabər hissələrə bölünərək hər ay verilməlidir. Məs:1000 manat götürülür, 3 ayliq. Ekrana yazdirilmalidir: 1-ci ay 333manat, 2-ci ay 333manat, 3-cu ay 334 manat;
// let money = parseInt(prompt("Pul daxil eliyin :"));
// let month = parseInt(prompt("Ay daxil eliyin :"));

// const credit = (money, month) => {
//   let monthlyCredit = money / month;
//   for (let i = 1; i <= month; i++) {
//     console.log(i + "-ci ay " + (monthlyCredit | 0) + "manat odenmelidir");
//   }
// };

// credit(money, month);

//!Task-2 Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq) :   let myArr =  [1,3,4,2,2] // this is example. funksiya qaytarmalidir 2; Cunki 2 iki defe yazilib;   let myArr =  [1,3,4,4,]; funksiya qaytarmalidir 4; cunki 4 iki defe yazilib.

// const dublicate = (arr) => {
//   let num = "dublicate number yoxdur";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         num = arr[i];
//       }
//     }
//   }

//   return num;
// };

// let arr = [1, 3, 4, 2, 2];
// console.log(dublicate(arr));

//! Task-3 Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }
// let convertNum=parseInt(prompt("Selsi daxil eliyin :" ))
// let value = toCelsius(convertNum);

// console.log(value)
