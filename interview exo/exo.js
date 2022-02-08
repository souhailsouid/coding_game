// exo 1

const numberOfEventsPerDays = (data) => {
  return data.reduce((previous, current) => {
    previous[current] = (previous[current] || 0) + 1;

    return previous;
  }, {});
};

function countDuplicates(str) {
  let array = str.split(' ');
  console.log('array', array);

  return numberOfEventsPerDays(array);
}
console.log('countDuplicates', countDuplicates(str));


// exo 2

 // given an array
 const arr = [1, 2, 3, 4, 5, 6, 7, 1];

 // find a sum of all numbers that are bigger or equal to 3
 // your code goes here

 let res = arr.filter((num) => num >= 3);
 console.log('res', res);
 const reducer = (previousValue, currentValue) => previousValue + currentValue;

 res = res.reduce(reducer);
console.log('exo2', res);
 

// exo 3

let a = { prop1: 1 };
const b = a;  
// b = { prop1: 1 }

a.prop1 = 2;
// a = { prop1: 2 }

console.log(b);
//b = { prop1: 2 }

a = { prop2: 1 };
// a = { prop2: 1 };

console.log(b)
// b = { prop1: 2 } 

// exo 4 
// cf ./ressource.md