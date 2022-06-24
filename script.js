// // a, e, i, o, u

// function disemvowel(str) {
//   let target = [];
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     if (
//       strArr[i].toLowerCase() === "e" ||
//       strArr[i].toLowerCase() === "a" ||
//       strArr[i].toLowerCase() === "i" ||
//       strArr[i].toLowerCase() === "o" ||
//       strArr[i].toLowerCase() === "u"
//     ) {
//       continue;
//     } else {
//       target.push(strArr[i]);
//     }
//   }
//   return target.join("");
// }

// //   "This website is for losers LOL!"
// // would become "Ths wbst s fr lsrs LL!".

// // console.log(disemvowel("This website is for losers LOL!"));

// // console.log(res);

// // arrayDiff([3,4], [3]), [4]

// function arrayDiff(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     while (a.includes(b[i])) {
//       a.splice(a.indexOf(b[i]), 1);
//     }
//   }
//   return a;
// }

// // console.log(arrayDiff([3, 4], [3]));

// // let items = [
// //   { id: "b", val: 6, w: 7 },
// //   { id: "a", val: 10, w: 3 },
// //   { id: "c", val: 3.00012, w: 3 },
// // ];

// // let maxWight = 8;
// // function dream(arr) {
// //   let fillterdArray = items.filter((e) => e.w <= maxWight);
// //   fillterdArray.forEach((e) => (e.rate = e.val / e.w));

// //   return fillterdArray;
// // }
// let arr2 = [1, 2, 3, 100, 200, 120, 3120, 312, 321, 31, 213, 321];
// let arr3 = [1, 2, 3, 100, 200, 120, 3120, 312, 321, 31, 213, 321];
// // console.log(dream(items));

// function sum(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// let start = performance.now();
// // console.log(
// //   sum([
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //     ...arr2,
// //     ...arr3,
// //     ...arr3,
// //   ])
// // );
// let end = performance.now();
// // console.log(end - start);

// function likes(names) {
//   if (names.length === 0) return `no one likes this`;
//   if (names.length === 1) return `${names[0]} likes this`;
//   if (names.length === 2) return `${names[0]} and ${names[1]} likes this`;
//   if (names.length === 3)
//     return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//   if (names.length > 3)
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }

// // console.log(likes([]));

// // domainName("http://github.com/carbonfive/raygun") == "github"
// // domainName("http://www.zombie-bites.com") == "zombie-bites"
// // domainName("https://www.cnet.com") == "cnet"

// function domainName(url) {
//   let arr = url.split(".");
//   if (arr[0] === "www") return arr[1];

//   for (let i of arr) {
//     if (!i.includes("http://") && !i.includes("https://")) return arr[0];

//     if (i.includes("https://")) {
//       let res = i.replace("https://", "");
//       if (res === "www") return arr[1];
//       return res;
//     }
//     if (i.includes("http://")) {
//       let res = i.replace("http://", "");

//       if (res.includes("www")) {
//         return arr[1];
//       }
//       return res;
//     }
//   }
// }

// // console.log(domainName("https://www.gisthub.com/carbonfive/raygun"));
// // console.log(domainName("http://www.zom1sab2ie-bites.com"));
// // console.log(domainName("http://google.co.jp"));
// // console.log(domainName("youtube.com"));

// /////////////////

// function incrementString(strng) {
//   let str = "";
//   let num = "";
//   let zeroCounter = 0;
//   for (let i of strng) {
//     if (!isNaN(i)) {
//       num += i;
//     } else {
//       str += i;
//     }
//   }
//   let pad = num.length;
//   for (let i of num) {
//     if (i == 0) {
//       zeroCounter++;
//     }
//   }
//   let number = Number(num) + 1;
//   let strNumber = String(number);
//   let res = strNumber.padStart(pad, 0);
//   let finto = str.concat(res);
//   console.log(finto);
// }

// // incrementString("foo");

// function count(string) {
//   // The function code should be here
//   if (string == undefined || null) return {};

//   const arr = string.split("");
//   let uniqueArr = [...new Set(arr)];
//   let obj = {};

//   for (let p of uniqueArr) {
//     obj[p] = 0;
//   }

//   for (let p of arr) {
//     if (obj.hasOwnProperty(p)) {
//       obj[p]++;
//     }
//   }
//   return obj;
// }

// // console.log(count("abazz"));

// // console.log(count(""));

// // complete the function
// function solution(string) {
//   let res = str
//     .split("")
//     .map((c) => (c === c.toUpperCase() ? (c = ` ${c}`) : c))
//     .join("");
//   return res;
// }

// // let str = "Reverse this string, please!";
// // str.split(" ").forEach((e, i) => {
// //   if (i % 2 !== 0) {
// //     b = e.split("").reverse().join("");
// //     console.log(b);
// //   }
// // });

// function reverse(str) {
//   let arr = str.split(" ").filter((e) => e !== "");
//   let newArr = [];

//   for (let i of arr) {
//     if (arr.indexOf(i) % 2 !== 0) {
//       newArr.push(i.split("").reverse().join(""));
//     } else {
//       newArr.push(i);
//     }
//   }
//   return newArr.join(" ");
//   console.log(arr);
// }
// // console.log(reverse("    Reverse this string, please!"));

// function meeting(s) {
//   const res = s.split(";").map((e) => {
//     return `(${e.split(":").reverse().join(",").toUpperCase()})`;
//   });

//   return res.sort().join(" ");
// }

// s =
//   "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// // console.log(meeting(s));

// function getSum(a, b) {
//   //Good luck!
//   let arr = [];
//   if (a === b) return a;
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       arr.push(i);
//     }
//   }
//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       arr.push(i);
//     }
//   }

//   return arr.reduce((acc, cur) => acc + cur);
// }

// function longest(s1, s2) {
//   // your code
//   let arr = [...s1.split(""), ...s2.split("")];
//   let str1 = [...new Set(arr)];
//   return str1.sort().join("");
// }

// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// function towerBuilder(nFloors) {
//   let arr = [];
//   let odd = 1;

//   for (let i = 0; i < nFloors; i++) {
//     if (arr[i] === arr[0]) {
//       arr[i] = "*";
//     } else {
//       arr[i] = "*".repeat((odd += 2));
//     }
//   }

//   let arrLastindexLenght = arr.slice(-1).join("").length;

//   for (let i = 0; i < nFloors; i++) {
//     arr[i] = `${" ".repeat((arrLastindexLenght - arr[i].length) / 2)}${
//       arr[i]
//     }${" ".repeat((arrLastindexLenght - arr[i].length) / 2)}`;
//   }

//   return arr;
// }

// console.log(towerBuilder(6));
function findNb(m) {
  let sum = 0;
  let counter = 0;
  for (let i = 1; sum < m; i++) {
    counter++;
    sum += Math.pow(i, 3);
  }
  if (sum !== m) return -1;
  return counter;
}
// findNb(135440716410000);
// findNb(1071225) --> 45
// let sum = 0;
// for (let i = 100; i > 0; i--) {
//   sum += Math.pow(i, 3);
// }
// console.log(sum);

// alert();

// for (let i = 1071225 ; i )
function abbreviate(string) {
  let arr = string.split("");
  let arr2 = arr.map((char) => {
    return /[a-zA-Z]/.test(char) ? char : " ";
  });
  console.log(arr2.join("").split(" "));
}

// abbreviate("elephant-rides are really fun!");

let arr = [];
e = 0;
function test(s1) {
  let array = s1.split("");
  let lastIndex = array.length;
  if (e > lastIndex) return;
  //
  for (let i = 0; lastIndex > i; lastIndex--) {
    if (array.slice(e, lastIndex) != "") arr.push(array.slice(e, lastIndex));
    // if (e > 1) arr.push([array[0], ...array.slice(e, lastIndex)]);
  }
  //
  e++;
  test(s1);
}

// test("AGGTAB");
// console.log(arr);

// Regx !!!! t3lmha ya habibi kter mofeda !!

// function encode(string) {
//   return string.replace(/[12345]/g, (x) => "_aeiou"[x]);
//   return string.replace(/[aeiou]/g, (x) => "_aeiou".indexOf(x));
// }
///////
function decode(string) {
  const arr = string.split("");
  let res = arr.map((e) => (e == 1 ? (e = "a") : e));
  res = res.map((e) => (e == 2 ? (e = "e") : e));
  res = res.map((e) => (e == 3 ? (e = "i") : e));
  res = res.map((e) => (e == 4 ? (e = "o") : e));
  res = res.map((e) => (e == 5 ? (e = "u") : e));

  return res.join("");
}

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// queueTime([1, 2, 3, 4, 5], 100), 5;
// queueTime([5, 3, 4], 1);
// queueTime([], 1), 0;
13;
// queueTime([10, 2, 3], 2);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2, 3, 10], 2);
// should return 12
// const accTime = customers.reduce((acc, curr) => curr + acc);
// const biggestNum = customers.reduce((acc, curr) => (curr > acc ? curr : acc));
// const smallestNum = customers.reduce((acc, curr) =>
//   curr < acc ? curr : acc
// );
// queueTime([1, 2, 3, 4], 1), 10;
// queueTime([2, 2, 3, 3, 4, 4], 2), 9;

// function queueTime(customers, n) {
//   //TODO
//   if (customers.length == 0) return 0;
//   const smallestNum = customers.reduce((acc, curr) =>
//     curr < acc ? curr : acc
//   );
//   const biggestNum = customers.reduce((acc, curr) => (curr > acc ? curr : acc));
//   // const accTime = customers.reduce((acc, curr) => curr + acc);
//   let timer = 0;

//   for (let i of customers) {
//     //

//     let min = customers
//       .slice(0, n)
//       .reduce((acc, curr) => (curr < acc ? curr : acc));
//     timer += min;
//     //
//     for (let i of customers.slice(0, n)) {
//       customers[customers.indexOf(i)] = customers[customers.indexOf(i)] - min;

//       customers.splice(customers.indexOf(min), 1);

//     }
//     //

//     //
//   }

//   return timer + customers[0];
// }

// console.log(queueTime([10, 2, 3, 4, 1], 2));
// //137
function queueTime(customers, n) {
  //TODO
  if (customers.length == 0) return 0;
  const biggestNum = customers.reduce((acc, curr) => (curr > acc ? curr : acc));
  const accTime = customers.reduce((acc, curr) => curr + acc);
  const arrLen = customers.length;
  let timer = 0;
  //
  if (n == 1) return accTime;
  if (n >= customers.length) return biggestNum;

  for (let a = 0; a < arrLen; a++) {
    if (customers.length < 1) return timer;
    let minNum = customers
      .slice(0, n)
      .reduce((acc, curr) => (curr < acc ? curr : acc));
    timer += minNum;
    for (let i = 0; i < customers.slice(0, n).length; i++) {
      customers[i] = customers[i] - minNum;
    }
    for (let e = 0; e < customers.length; e++) {
      if (customers[e] == 0) {
        customers.splice(customers.indexOf(customers[e]), 1);
      }
    }
  }
  return timer;
}

// console.log(queueTime([10, 2, 3, 4], 2));
// console.log(
//   queueTime(
//     [
//       32, 23, 31, 29, 32, 39, 40, 23, 26, 9, 23, 38, 32, 14, 23, 41, 3, 24, 36,
//       48, 42, 31, 47,
//     ],
//     5
//   )
// );

function queueTime1(customers, n) {
  let tills = Array(n).fill(0);

  console.log(tills);
  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

// queueTime1(1, 5);

let arr1 = [1, 2, 3, 9];
let arr2 = [1, 2, 4, 4, 9];

function findTheSum(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (min > 8) return false;
  while (max > 8) {
    arr.splice(arr.indexOf(max), 1);
    max = Math.max(...arr);
  }
  console.log(arr);

  // console.log(sum);
}

// findTheSum(arr2);

function presses(text) {
  let click = 0;
  const alph = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const clicks = [
    1, 4, 4, 4, 4, 4, 5, 4, 5, 2, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4,
  ];

  text
    .split("")
    .map((e) => [
      (click += clicks[alph.indexOf(isNaN(e) ? e.toLowerCase() : e)]),
    ]);

  return click;
}

// console.log(presses("0"));

function pressess(phrase) {
  var chunks = [
      "1",
      "ABC2",
      "DEF3",
      "GHI4",
      "JKL5",
      "MNO6",
      "PQRS7",
      "TUV8",
      "WXYZ9",
      " 0",
    ],
    phrase = phrase.toUpperCase().split(""),
    total = 0;

  phrase.forEach(function (l) {
    let key = chunks.filter(function (c) {
      return c.indexOf(l) > -1;
    });
    console.log(key[0]);
    total += key[0].indexOf(l) + 1;
  });

  return total;
}

// console.log(pressess("21312"));

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => {
      if (!res.ok) return;
      return res.json();
    })
    .then((data) => {
      let { common } = data[0].name;
      console.log(common);
    });
};

// getCountryData("palestine");

const getCountryDataA = async function (country) {
  let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = await res.json();
  console.log(data[0]);
};

// getCountryDataA("palestine");
Math.round = function (number) {
  if (
    +number.toString().split(".")[0] === 0 &&
    +number.toString().split(".").length === 1
  ) {
    return 0;
  }
  if (+number.toString().split(".").length === 1) {
    return number;
  } else {
    return +number.toString().split(".")[1][0] >= 5
      ? +number.toString().split(".")[0] + 1
      : +number.toString().split(".")[0];
  }
};

Math.ceil = function (number) {
  if (number.toString().split(".").length <= 1)
    return +number.toString().split(".")[0];
  else {
    return +number.toString().split(".")[0] + 1;
  }
};

Math.floor = function (number) {
  return +number.toString().split(".")[0];
};

let num = 1121;

function squareSum(numbers) {
  if (numbers.length === 0) return 0;
  const sq = numbers.map((e) => Math.pow(e, 2));
  const res = sq.reduce((cur, acc) => cur + acc);
  return res;
}

// squareSum([1, 2, 3]);

function sumTwoSmallestNumbers(numbers) {
  const firstNum = Math.min(...numbers);
  numbers.splice(numbers.indexOf(firstNum), 1);
  const secondNum = Math.min(...numbers);
  return firstNum + secondNum;
}
//

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
// console.log(basicOp("+", 4, 7));

// function findShort(s) {
//   return Math.min(...s.split(" ").map((char) => char.length));
// }
// // console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// const asyncFunc = (req = 1, res = 2, next = 3) => {
//   return Promise.resolve("test" + req + res + next);
// };

// // asyncFunc().then((data) => console.log(data));

// const wraper = (fn) => {
//   return (a, b, c) => {
//     fn(3, 3, 3).then((data) => console.log(data));
//   };
// };

// const clouser = wraper(asyncFunc);

// console.log(clouser());

// function isIsogram(str) {
//   if (str.length <= 1) return true;
//   const arr = str.toLowerCase().split("");
//   const res = arr.map((char, index) => {
//     return arr.indexOf(char) == index;
//   });
//   return res.includes(false) ? false : true;
// }

// console.log(isIsogram("Dermatoglyphics"));

function anagrams(word, words) {
  let arr = [];
  for (let char of words) {
    for (let i = 0; i < char.length; i++) {
      arr.push(word.includes(char[i]));
      if (i >= char.length - 1) arr.push("@");
    }
  }

  let res = arr
    .join("")
    .split("@")
    .map((c) => {
      return c.includes("f") ? false : true;
    });

  let final = [];
  words.map((c, i) => {
    if (res[i]) final.push(c);
  });

  const uniq = [...new Set(final)];

  const wrodLenU = [...new Set(word)].join("").length;
  // console.log(wrodLenU);
  const wordsLena = [];
  uniq.map((q) => {
    if (
      [...new Set(q)].join("").length === wrodLenU &&
      q.length === word.length
    ) {
      wordsLena.push(q);
    }
  });
  // console.log(wordsLena);

  const filtered = wordsLena.filter((el) => {
    return el !== null && typeof el !== "undefined";
  });

  return filtered;
}

// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// function minnum(arr) {
//   let min = arr[0];
//   for (num of arr) {
//     min = min < num ? min : num;
//   }
//   return min;
// }

// console.log(minnum([22, 99, 643, 32, 76, 423, 554, 3]));

// class Cal {
//   baba = "test";
//   constructor(a, b) {
//     this.name = a;
//     this.last = b;
//   }
// }

// const testaaa = new Cal("mohammad", "abdeen");

// console.log(testaaa.baba);
// const arr123 = [7, 2, 3, "0", 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

// function removeZeros(array) {
//   let zerosArr = [];
//   let filterArr = [];
//   for (num of array) {
//     if (isNaN(num) || !+num == 0 || num === false || num === null) {
//       filterArr[filterArr.length] = num;
//     } else {
//       zerosArr[zerosArr.length] = num;
//     }
//   }
//   return [...filterArr, ...zerosArr];
// }

// console.log(
//   removeZeros([7, false, 3, 0, "asd", 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
// );

// function countWays(n) {
//   let arr = [];

//   // Initialize all table values as 0
//   for (let i = 0; i < n + 1; i++) {
//     arr[i] = 0;
//   }

//   // Base case (If given value is 0)
//   arr[0] = 1;

//   // Pick all integer one by one and
//   // update the arr[] values after
//   // the index greater than or equal
//   // to n
//   for (let i = 1; i < n; i++) {
//     for (let j = i; j <= n; j++) {
//       arr[j] += arr[j - i];
//     }
//   }
//   console.log(arr);
//   return arr[n] + 1;
// }

// console.log(countWays(5));

// const testarr = new Array(1 + 10);
// for (let i = 0; i < 10 + 1; i++) {
//   testarr[i] = 0;
// }
// console.log(testarr);

// function mineLocation(field) {
//   const res = [];
//   field.find();
// }

// mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
// mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
// mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

// mineLocation([
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]);

const res = [];

let testArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
];

const mapTest = testArr.map((arr) => {
  return arr.includes(1) ? testArr.indexOf(arr) : undefined;
});

const seconIndex = testArr.filter((arr) => arr.includes(1));
res.push(mapTest.filter((e) => e !== undefined)[0]);

// console.log(res);

function mineLocation(field) {
  let result = [];
  const firstIndex = field.map((arr) =>
    arr.includes(1) ? field.indexOf(arr) : undefined
  );
  const secondIndex = field.filter((arr) => arr.includes(1));
  result.push(firstIndex.filter((e) => e !== undefined)[0]);
  result.push(secondIndex[0].indexOf(1));
  return result;
}
let warr = [];
weirdReverse = (a) => {
  if (a.length === 0) {
    return warr[0];
  }
  warr.push(...a.splice(-1));
  weirdReverse(a);
};

// console.log(weirdReverse([4, 2, 3, 4, 5]));

function alphanumeric(string) {
  let test1 = string.replace(/\r?\n|\r/g, " ");
  let fillterdStr = test1.toLowerCase().split("");
  if (fillterdStr.includes(" ")) return false;
  for (let char of fillterdStr) {
    if (char.toUpperCase() === char && isNaN(char)) return false;
  }
  return true;
}

// alphanumeric("hello world_");
// alphanumeric("PassW0rd");
// alphanumeric("     ");

// console.log(alphanumeric("\n\n"));
// console.log("\t");

function accum(s) {
  let result = s
    .split("")
    .map((char, index) => {
      return char.repeat(index + 1);
    })
    .map((char) => {
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    })
    .join("-");

  return result;
}

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function noSpace(x) {
//   return x.replace(/\s/g, "");
// }

// function stray(numbers) {
//   let firstNum = numbers[0];
//   if (firstNum !== numbers[1] && numbers[2]) return firstNum;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[i + 1]) {
//       return numbers[i + 1];
//     }
//   }
// }

// console.log(stray([1, 2, 2]));

const testArrr = [1, 2, 3, 4, 5, 6, 7];
const testArrr2 = [17, 2, 17, 17, 17, 17, 17];

const mYarr = testArrr2.filter((x) => x == 17).length;

function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) arr.push(i);
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
}

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);

function rot13(message) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetCapital = alpha.map((x) => String.fromCharCode(x));
  const alphabetSmall = alphabetCapital.map((char) => char.toLowerCase());
  let res = [];

  const messageArray = message.split("");

  messageArray.map((l) => {
    if (isNaN(l) && l.toUpperCase() !== l.toLowerCase()) {
      let crypto = 0;

      if (l.toUpperCase() === l) {
        if (alphabetCapital.indexOf(l) + 13 >= 26) {
          crypto = alphabetCapital.indexOf(l) + 13 - 26;
        } else {
          crypto = alphabetCapital.indexOf(l) + 13;
        }
        res.push(alphabetCapital[crypto]);
      }
      if (l.toUpperCase() !== l) {
        if (alphabetSmall.indexOf(l) + 13 >= 26) {
          crypto = alphabetSmall.indexOf(l) + 13 - 26;
        } else {
          crypto = alphabetSmall.indexOf(l) + 13;
        }
        res.push(alphabetSmall[crypto]);
      }
    } else {
      res.push(l);
    }
  });
  return res.join("");
}

// console.log(rot13("n"));

// console.log("a" == "A");

// var isSquare = function (n) {
//   for (let i = 0; i < n; i++) {
//     if (n == 0) return true;
//     if (Math.pow(i, 2) == n) return true;
//   }
//   return false;
// };

// console.log(isSquare(1));

// function addBinary(a, b) {
//   let sum = a + b;
//   let result = [];
//   while (true) {
//     sum = Math.floor(sum) / 2;
//     if (sum == Math.floor(sum)) {
//       result.push(0);
//     } else {
//       result.push(1);
//     }

//     if (sum < 1) return result.reverse();
//   }
// }
// addBinary(174, 0);

// function squareDigits(num) {
//   return num
//     .toString()
//     .split("")
//     .map((num) => num ** 2)
//     .join("");
// }

// console.log(squareDigits(3212));
// console.log(9 ** 2);

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(a) {
//   let arr1 = [];
//   let arr2 = [];
//   a.forEach((n) => {
//     arr2.push(0);
//     if (!arr1.includes(n)) {
//       arr1.push(n);
//     }
//   });
//   arr1.map((n) => {
//     a.map((e) => {
//       if (n === e) {
//         arr2[arr1.indexOf(n)] += 1;
//       }
//     });
//   });
//   let res = "";
//   arr2.slice(0, arr1.length).forEach((n) => {
//     if (n % 2 === 1) return (res = arr1[arr2.indexOf(n)]);
//   });
//   return res;
// }

// console.log(findOdd([0, 1, 0, 1, 0]));

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueInOrder = function (iterable) {
//   let result = [];
//   if (typeof iterable == "object") {
//     result.push(iterable[0]);
//     for (let i = 1; i < iterable.length; i++) {
//       if (iterable[i] === iterable[i - 1]) continue;
//       result.push(iterable[i]);
//     }
//   } else {
//     let arry = iterable.split("");
//     result.push(arry[0]);
//     for (let i = 1; i < arry.length; i++) {
//       if (arry[i] === arry[i - 1]) continue;
//       result.push(arry[i]);
//     }
//   }
//   return result;
// };

// console.log(uniqueInOrder([1, 2, 2, 3, 3, 2, 3]));
// console.log(uniqueInOrder("ABBCcAD"));

// let element = document.querySelector("h1");

// let arrayNumbers = [1, 2, 3, 4, 5];

// let testFunc = () => {
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     setTimeout(() => {
//       element.innerHTML = arrayNumbers[i];
//       if (i === arrayNumbers.length - 1) testFunc();
//     }, i * 1000);
//   }
// };

// testFunc();

// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// };

// console.log(isPrime(4));
// console.log(Math.sqrt(25));

// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((e) => (e.length >= 5 ? e.split("").reverse().join("") : e))
//     .join(" ");
// }

// console.log(spinWords("stringg das"));

// let element = document.querySelector("h1");

// let arrayNumbers = [1, 2, 3, 4, 5];

// let testFunc = () => {
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     setTimeout(() => {
//       element.innerHTML = arrayNumbers[i];
//       if (i === arrayNumbers.length - 1) testFunc();
//     }, i * 1000);
//   }
// };

// testFunc();

// pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
// pigIt("Hello world !"); // elloHay orldway !

// function pigIt(str) {
//   return str
//     .trim()
//     .split(" ")
//     .map((char) => {
//       if (char.toLowerCase() !== char.toUpperCase()) {
//         return char.replace(char[0], "") + char[0] + "py";
//       } else return char;
//     })
//     .join(" ");
// }

// // console.log(pigIt("Hello woEld ! "));

// function validParenthesess(parens) {
//   if (parens.length === 1) return false;
//   if (parens.length === 0) return true;
//   if (parens[0] == ")") return false;
//   if (parens[parens.length - 1] == ")") return false;

//   let right = 0;
//   let left = 0;
//   parens.split("").map((e) => {
//     if (e === "(") {
//       right++;
//     }
//     if (e === ")") {
//       left++;
//     }
//   });

//   return right === left;
// }

// console.log(1()()()(1));
// // ()()((()
// function validParentheses(parens) {
//   let rightP = 0;
//   let leftP = 0;
//   parens.split("").forEach((e) => {
//     if (e === "(") leftP++;
//     if (e === ")") rightP++;
//   });
//   if (parens.slice(-1) === "(" || parens[0] === ")") return false;
//   if (rightP != leftP) return false;
//   return true;
// }

// // console.log(validParentheses("()()((()"));
// // console.log("testd".slice(-1));

// function validParentheses(parens) {
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == "(") n++;
//     if (parens[i] == ")") n--;
//     if (n < 0) return false;
//   }

//   return n == 0;
// }

// console.log(validParentheses("())(()"));

// console.log(0 < 0);

// function friend(friends) {
//   return friends.filter((i) => i.length == 4);
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));

// palindrome(8) => 11
// palindrome(281) => 282
// palindrome(1029) => 1001
// palindrome(1221) => 1221
// palindrome("1221") => "Not valid"

// function palindrome(num) {
//   if (typeof num != "number" || num < 0) return "Not valid";
//   if (num <= 10) return 11;
//   if (+num.toString().split("").reverse().join("") === num) return num;

//   let smaller = "";
//   let larger = "";
//   while (true) {
//     num++;
//     if (+num.toString().split("").reverse().join("") === num)
//       return (larger = num);
//   }

//   while (num > 0) {
//     num--;
//     if (+num.toString().split("").reverse().join("") === num)
//       return (smaller = num);
//   }
// }

// console.log(palindrome(281));

// function countSheeps(arrayOfSheep) {
//   let counter = 0;
//   arrayOfSheep.forEach((sheep) => {
//     if (sheep === true) counter++;
//   });
//   return counter;
// }

// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// function sortArray(array) {
//   let oddArray = [];
//   array.forEach((num) => {
//     if (num % 2 !== 0) {
//       oddArray.push(num);
//       array[array.indexOf(num)] = "odd";
//     }
//   });
//   oddArray = oddArray.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(oddArray);
//   for (let i = 0; i < oddArray.length; i++) {
//     array.forEach((num) => {
//       if (num == "odd") {
//         array[array.indexOf(num)] = oddArray[i];
//         oddArray.splice(0, 1);
//       }
//     });
//   }
//   return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4, 11]));
// expected [ 1, 11, 2, 8, 3, 4, 5 ] to deeply equal [ 1, 3, 2, 8, 5, 4, 11 ]

// function googleFunc(s1, s2) {
//   let sOne = [];
//   let sTwo = [];
//   s1.split("").forEach((char) => {
//     if (s2.includes(char)) sOne.push(char);
//   });
//   s2.split("").forEach((char) => {
//     if (s1.includes(char)) sTwo.push(char);
//   });
//   console.log(sOne.join(""));
//   console.log(sTwo.join(""));
//   let longestSub = [];
//   for (let i = 0; i < sTwo.length - 1; i++) {}
// }

// console.log(googleFunc("ABAZDC", "BACBAD"));
function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

// console.log(validateEmail("@1232@gmail.net"));

// navigator.geolocation.getCurrentPosition(
//   (pos) => {
//     console.log(pos);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// const promise = new Promise((res, rej) => {
//   navigator.geolocation.getCurrentPosition(
//     (pos) => {
//       res(pos);
//     },
//     (err) => {
//       rej(err);
//     }
//   );
// });

// console.log(promise);

// const ele = document.querySelector("div");

// ele.onclick = () => {
//   console.log(this);
// };

// const modulee = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = modulee.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(modulee);
// console.log(boundGetX());
// // expected output: 42

// const nameeee = "testout";

// const testonj = {
//   name: "abdeene",
//   getName: function () {
//     return this.name;
//   },
// };

// const outM = testonj.getName;

// console.log(this);

// let useState = {
//   a: "123",
//   b: "test",
//   c: {
//     nested: 123,
//   },
// };

// console.log(useState);

// let qwe = { ...useState, c: "max" };

// console.log(qwe);

// const todayDate = new Date(Date.UTC);

// console.log(todayDate);

const deleteNth = (arr, n) => {
  let fillterd = [];

  for (let [i, v] of arr.entries()) {
    if (arr.indexOf(arr[i]) == i) {
      fillterd.push(arr[i]);
    } else {
      let bla = 0;
      fillterd.forEach((num) => {
        if (num == arr[i]) bla = bla + 1;
      });

      if (bla < n) {
        fillterd.push(arr[i]);
      }
    }
  }
  return fillterd;
};

function deleteNthe(arr, x) {
  var obj = {};
  return arr.filter((number) => {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    console.log(obj[number]);
    console.log(obj[number] <= x);
    return obj[number] <= x;
  });
}

// console.log(deleteNthe([3, 2, 2, 2, 123, 2, 2, 2, 2, 2, 12], 3));

// function findNextSquare(sq) {
//   if (!Math.sqrt(sq).toString().includes(".")) {
//     while (true) {
//       sq++;
//       if (!Math.sqrt(sq).toString().includes(".")) return sq;
//     }
//   }
//   return -1;
// }

// console.log(findNextSquare(15241383936));

// console.log(Math.pow(5, 5));

// const useEffect = setTimeout(() => {
//   console.log("i love u ❤️");
// }, 1500);

// setTimeout(() => {
//   clearTimeout(useEffect);
// }, 1000);

// const deepObj = {
//   name: "Mohamed",
//   last: {
//     lastname: "abdeen",
//   },
// };

// let newObj = { ...deepObj };

// newObj.last.lastname = "test";
// newObj.name = "test";

// console.log(deepObj);
// console.log(newObj);

// const arrow = () => {
//   console.log(this);
// };

// arrow();

// function google(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum && i !== j) {
//         console.log(arr[i], arr[j]);
//       }
//     }
//   }
// }

// google([1, 2, 3, 4, 5, 6, 7, 8], 11);
// function parent(params) {
//   console.log(this);
//   let child = () => {
//     console.log(this, "a");
//   };
//   child();
// }

// parent();

// const objM = {
//   parent,
//   name: "abdeen",
// };

// // objM.parent();

// const myObj = {
//   name: "abdeen",
//   myname: () => {
//     console.log(this);
//   },
// };

// myObj.myname();

// const items = [
//   { id: 1, name: "Juila" },
//   { id: 2, name: "Dina" },
// ];

// items.concat("123");

// console.log();

// const bindTest = (id, test) => {
//   return id + test;
// };

// console.log(bindTest.bind(null, 1, 2)());

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// function getAverage(marks) {
//   return Math.floor(
//     marks.reduce((curMark, mark) => {
//       return curMark + mark;
//     }, 0) / marks.length
//   );
// }

// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);

// function findUniq(arr) {
//   let result = [];
//   arr.forEach((num, i) => {
//     if (arr.indexOf(num) !== i) result.push(num);
//   });

//   const finalRes = arr.filter((num) => {
//     return num !== result[0];
//   });

//   return finalRes[0];
// }

// // console.log(findUniq([3, 10, 3, 3, 3]));

// console.log([3, 10, 3, 3, 2].pop());

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }
// }

// function fib(n) {
//   let fibArry = [1, 1];

//   for (let i = 2; i <= n; i++) {
//     fibArry.push(fibArry.slice(-2)[0] + fibArry.slice(-2)[1]);
//   }

//   return fibArry[n];
// }

// console.log(fib(1));

// const countChange = function (money, coins) {
//   let result = 0;

//   for (let i = 0; i < coins.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < money; j++) {
//       sum += coins[i];
//       if (sum === money) {
//         result = result + 1;
//       }
//       if (sum > money) {
//         j = money + 1;
//       }
//     }
//   }

//   let sum = 0;

//   for (let i = 0; i < coins.length; i++) {
//     sum = sum + coins[i];
//     if (sum === money) {
//       result = result + 1;
//     }
//     if (sum > money) {
//       i = coins.length + 1;
//     }
//   }

//   return result;
// };

// console.log(countChange(4, [1, 2]));
// console.log(countChange(10, [5, 2, 3]));

// solution([
//   -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
//   19, 20,
// ]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// console.log(solution([-10, -9, -8, -6, -3]));
// function solution(list) {
//   let res = [];
//   let currentIndex = 0;
//   let nextIndex = currentIndex + 1;
//   let skip = 2;
//   let flag = true;
//   // [1, 3, 4, 5, 6, 7, 8, 12, 43, 44, 45, 50]
//   while (flag) {
//     if (list[currentIndex] + 1 === list[nextIndex]) {
//       skip++;
//       currentIndex++;
//     } else {
//       if (skip >= 3) {
//         let pushRes = [
//           list.slice(0, skip)[0],
//           list.slice(0, skip).slice(-1)[0],
//         ];
//         list.splice(0, skip);
//         res.push(pushRes.join("-"));
//         skip = 2;
//         currentIndex = 0;
//         if (list.length <= 0) flag = false;
//       } else {
//         res.push(list.splice(0, 1)[0]);
//         skip = 2;
//         currentIndex = 0;
//         if (list.length <= 0) flag = false;
//       }
//     }
//   }
//   return res;
// }

// function solution(list) {
//   let res = [];
//   let currentIndex = 0;
//   let nextIndex = currentIndex + 1;
//   let thirdIndex = nextIndex + 1;
//   let skip = 2;
//   let flag = true;
//   let counter = 0;
//   while (flag) {
//     if (list[currentIndex] + 1 === list[nextIndex]) {
//       skip++;
//       currentIndex++;

//       if (skip > 3 && list[nextIndex] + 1 !== list[thirdIndex]) {
//         let pushRes = [
//           list.slice(0, skip)[0],
//           list.slice(0, skip).slice(-1)[0],
//         ];
//         list.splice(0, skip);
//         res.push(pushRes.join("-"));
//         skip = 2;
//         currentIndex = 0;
//         if (list.length <= 0) flag = false;
//       }
//       console.log(`${list} from up`);
//     }

//     if (list[currentIndex] + 1 !== list[nextIndex]) {
//       res.push(list.splice(0, 1)[0]);
//       skip = 2;
//       currentIndex = 0;
//       if (list.length <= 0) flag = false;
//       console.log(`${list} from down `);
//       counter++;
//     }
//   }

//   return counter;
// }

// topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a']

// topThreeWords("a a c b b"), ['a','b','c']

// function topThreeWords(text) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "'",
//   ];

//   const myArray = text.split(" ");

//   let filterdArry = [];
//   for (let i of myArray) {
//     let char = i.split("");
//     let textToPush = "";
//     for (let e of char) {
//       if (alphabet.includes(e)) {
//         textToPush = textToPush + e;
//       }
//     }
//     if (textToPush !== "" && textToPush !== "'") {
//       filterdArry.push(textToPush.toLowerCase());
//     }
//   }

//   if (filterdArry.length <= 0) {
//     return [];
//   }

//   const unique = [...new Set(filterdArry)];

//   if (JSON.stringify(unique) === JSON.stringify(filterdArry)) {
//     if (filterdArry.length === 1) {
//       return [filterdArry[0].toLowerCase()];
//     }
//     if (filterdArry.length === 2) {
//       return [filterdArry[0].toLowerCase(), filterdArry[1].toLowerCase()];
//     }
//     if (filterdArry.length >= 3) {
//       return [
//         filterdArry[0].toLowerCase(),
//         filterdArry[1].toLowerCase(),
//         filterdArry[2].toLowerCase(),
//       ];
//     }
//   }

//   const repeatedTimeIndexes = [];

//   for (let i = 0; i < unique.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < filterdArry.length; j++) {
//       if (unique[i] === filterdArry[j]) {
//         counter++;
//       }
//     }
//     repeatedTimeIndexes.push(counter);
//   }

//   const test = unique.map((u, i) => {
//     return [u, repeatedTimeIndexes[i]];
//   });

//   let repeated = 0;
//   let mix;
//   for (let t of test) {
//     if (t[1] > 1) {
//       repeated++;
//       mix = test.indexOf(t);
//     }
//   }

//   if (repeated <= 1) {
//     if (test.length >= 3) {
//       return [test[mix][0], test[1][0], test[2][0]];
//     }

//     if (test.length >= 2) {
//       return [test[mix][0], test[0][0]];
//     }

//     if (test.length >= 1) {
//       return [test[mix][0]];
//     }
//   }
//   const sortedArry = test.sort(function (vote1, vote2) {
//     // Sort by votes
//     // If the first item has a higher number, move it down
//     // If the first item has a lower number, move it up
//     if (vote1[1] > vote2[1]) return -1;
//     if (vote1[1] < vote2[1]) return 1;

//     // If the votes number is the same between both items, sort alphabetically
//     // If the first item comes first in the alphabet, move it up
//     // Otherwise move it down
//     if (vote1[0] > vote2[0]) return 1;
//     if (vote1[0] < vote2[0]) return -1;
//   });

//   if (sortedArry.length === 1) {
//     return [sortedArry[0][0]];
//   }
//   if (sortedArry.length === 2) {
//     return [sortedArry[0][0], sortedArry[1][0]];
//   }
//   if (sortedArry.length >= 3) {
//     return [
//       sortedArry[0][0].toLowerCase(),
//       sortedArry[1][0].toLowerCase(),
//       sortedArry[2][0].toLowerCase(),
//     ];
//   }
// }
// console.log(topThreeWords("  //wont won't won't "));

// function multiply(a, b) {
//   const number = a * b;
//   if (number == "6.029999999999999") return "6.03";
//   return number;
// }

// console.log(multiply("2.01", "3.0000"));
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// function permutations(string) {
//   let possibles = string.split("");

//   let result = [];
//   for (let i = 0; i < possibles.length; i++) {
//     for (let j = 0; j < possibles.length; j++) {
//       let copyArray = [...possibles];
//       let [char] = copyArray.splice(i, 1);
//       copyArray.splice(j, 0, char);
//       result.push(copyArray.join(""));
//     }
//   }

//   return result;
// }

// function findPerms(str) {
//   if (str.length === 0) return "";
//   if (str.length === 1) return str;
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     const remainingChars = str.slice(0, i) + str.slice(i + 1);
//     for (let j = 0; j < remainingChars.length; j++) {
//       result.push(currentChar + findPerms(remainingChars)[j]);
//     }
//   }
//   return result;
// }

// console.log(findPerms("dog"));
// console.log(permutations("dog"));

// const deepFlatArray = (arr, depth = 1) => {
//   let result = [];
//   arr.forEach((val) => {
//     if (Array.isArray(val) && depth > 0) {
//       return result.push(...deepFlatArray(val, depth - 1));
//     } else {
//       result.push(val);
//     }
//   });
//   return result;
// };

// console.log(deepFlatArray([[1, 2], 2, [3, 4, 5, 6], [2, [2]]], 4));

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       (() => {
//         console.log(i);
//       })();
//     }, i * 1000);
//   }
// }

// a();

// function findPerms(str) {
//   if (str.length === 0) return "";
//   if (str.length === 1) return str;
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     const remainingChars = str.slice(0, i) + str.slice(i + 1);
//     for (let j = 0; j < remainingChars.length; j++) {
//       console.log(findPerms(remainingChars));
//       result.push(currentChar + findPerms(remainingChars)[j]);
//     }
//   }
//   return result;
// }

// console.log(findPerms("abc"));

// function nextSmaller(n) {
//   const target = n.toString().split("");

//   let smaller = n - 1;
//   while (true) {
//     if (smaller <= 0) return -1;
//     let smallerArray = smaller.toString().split("");
//     let checker = [];
//     for (let i = 0; i < target.length; i++) {
//       checker.push(smallerArray.includes(target[i]));
//       if (smallerArray.includes(target[i])) {
//         smallerArray.splice(smallerArray.indexOf(target[i]), 1);
//       }
//     }
//     if (!checker.includes(false)) {
//       return smaller;
//     }

//     smaller--;
//   }
// }

Array.prototype.sameStructureAs = function (other) {
  let firstArray = [];
  let secondArray = [];

  let nestedArray = (arr) => {
    let store = [];
    if (Array.isArray(arr)) {
      arr.forEach((e) => {
        if (Array.isArray(e)) {
          nestedArray(e);
        }
        store.push(Array.isArray(e));
      });
    } else {
      store.push(arr);
    }

    return store;
  };

  if (
    Array.isArray(other) &&
    Array.isArray(this) &&
    other.length === this.length
  ) {
    this.forEach((val) => {
      if (Array.isArray(val)) {
        firstArray.push(...nestedArray(val));
      }
      firstArray.push(Array.isArray(val));
    });

    other.forEach((val) => {
      if (Array.isArray(val)) {
        secondArray.push(...nestedArray(val));
      }

      secondArray.push(Array.isArray(val));
    });

    if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) return true;
    if (JSON.stringify(firstArray) !== JSON.stringify(secondArray))
      return false;
  }

  return false;
};
