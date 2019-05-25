'use strict';

const assert = require('assert');

// function forEach(arr, callback) {
//   // Your code here
//}

// const newArray = arr.map(function addOne(number) {
//   return number*number;
// });
// console.log(arr)
// console.log(newArray)
// function addOne(arr, newArray){
// const newArray = arr.map(numbers);
// console.log(arr)
//  console.log(newArray)
// }
// return number * number;
const arr = [1, 2, 3];

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const mapped = [];
  each(elements, item => {
    mapped.push(cb(item));
  });
  return mapped;
};

const cb = num => num*num;

const newArray = map(arr, cb);
console.log(newArray)


// const myArr = arr.filter(arr => arr % 2===0)
//   console.log(myArr);
function myFunc(items, callBack){
  for (let i=0; i<items.length; i++){
callBack(items[i], i);
console.log(items[i], i)
  }
};

const filter = (items, callBack)=>{
const filterd = [];
each(items, element => {
filterd.push(callBack(element))
});
return filterd
}
const callBack = num => num%2 === 0;
 const newArr = filter(arr, callBack);
 console.log(newArr)


  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(arr.reduce(reducer));

// function every(arr, callback) {
//   // Your code here
// }



if (typeof describe === 'function') {
    describe('#map()', () => {
      const arr = [1, 2, 3];
      const mapped = map(arr, (num) => {
        return num * num;
      });
      it('should return new array with mapped items', () => {
        assert.deepEqual(mapped, [1, 4, 9]);
      });
      it('should not affect the original array', () => {
        assert.deepEqual(arr, [1, 2, 3]);
      })
    });
  
    describe('#reduce()', () => {
      it('should return array elements added together', () => {
        const reduced = reduce([1, 2, 3], 0);
        assert.deepEqual(reduced, 6);
      });
    });
  
    describe('#filter()', () => {
      it('should return an array of items that pass the predicate test', () => {
        const filtered = filter([1, 2, 3], (num) => {
          return num % 2 === 0;
        });
        assert.deepEqual(filtered, [2]);
      });
    });
  } else {
    console.log('Only run the tests on this one!')
  }
