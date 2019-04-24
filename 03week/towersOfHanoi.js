'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  let lastPiece= stacks[startStack].pop();
  stacks[endStack].push(lastPiece);
}

function isLegal(startStack,endStack) {

  let lastPiece= stacks[startStack][stacks[startStack].length-1] ///important
  // if the last piece is less than the last piece in the end stack
 if(lastPiece < stacks[endStack][stacks[endStack].length-1] ){
   return true;
   // if the last stack is empty
 } else if(stacks[endStack].length<1){
   return true;
 } else {
   return false;
 }
}

function checkForWin() {
  //check the length of stacks a and b for 4
  if(stacks ['b'].length==4){
    return true;
  } if (stacks ['c'].length==4){
    return true;
  } else {
    return false;
  }
}

//calling all functions to starting game
function towersOfHanoi(startStack, endStack) {
 
  if (isLegal(startStack,endStack)){
  movePiece(startStack, endStack);
   checkForWin();
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests
describe("#empty last stack()",() =>{
  it('should detect last stack empty',()=>{
    stacks={a:[1] , b:[4, 3, 2], c:[]};
    assert.equal(stacks[endStack].length < 1)
    return true
  });
});

if(typeof describe==='function'){
  describe ('#the last piece is less than the last piece in the endStack()',()=>{
    it ('should check last piece',()=>{
      assert.equal(lastPiece < stacks[endStack][stacks[endStack].length-1] , true)
    });
  });
}

if(typeof describe==='function'){
  describe('#check the length of stacks a and b for 4()',()=>{
  it('should detect the length of stacks equal 4',()=>{
    assert.equal(checkForWin(stacks ['b'].length==4),"true")
  })
  })
}

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
