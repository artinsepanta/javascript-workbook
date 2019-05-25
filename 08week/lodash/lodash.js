'use strict';
const _=require('lodash')

const arr = _.compact([0, 1, false, 2, '', 3]);
console.log(arr)

const myArr=_.chunk([1, 2, 3, 4, 5, 6], 3);
console.log(myArr)

const array=_.reverse(["a", "b", "c","d" ,"e"]);
console.log(array)

const arrArray=_.without(['A', 'B', 'C', 'D', 'E', 'C', 'A', 'F'], 'A', 'C');
console.log(arrArray)

const arrayArr=_.shuffle(['g', 'e', 't', 'd', 'y', 'u', 'i', 'p']);
console.log(arrayArr)

//Test
if (typeof describe === 'function') {
  it('should detect an array', () => {
    assert.equal(_.shuffle(), [ 'g', 'y', 'p', 'u', 'i', 't', 'd', 'e' ]);
  });
  it('should detect an array ', () => {
    assert.equal(_.compact(),[ 1, 2, 3 ]);
  });
  it('should detect an array', () => {
    assert.equal(_.chunk(),[ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
  });
  it('should detect an array', () => {
    assert.equal(_.reverse(), [ 'e', 'd', 'c', 'b', 'a' ]);
  });
  it('should detect an array', () => {
    assert.equal(_.without(), [ 'B', 'D', 'E', 'F' ]);
  });
}