"use strict"
const item = ['book', 'red', 'pen', 'desk', 'lamp',  'paper'];

item.forEach((item) => {
  console.log(`My favorite item is ${item}`);
});



var fristGroup=["red","yellow","green"]
function myMap(firstGroup,callback){
var secondGroup=[]
for(var i=0;i<firstGroup.length;i++){
  var flower=callback(firstGroup[i],i,firstGroup)
  secondGroup.push(flower);
}
return secondGroup;
}


const myNumbers=[1, 2, 3, 4, 5]

const raiseBy = (y, e) => {
console.log(Math.pow(y, e))

}

const myFunction = (numbers, pow) => {
numbers.map((x) => raiseBy(x, pow));
}

myFunction(myNumbers, 2)


const myArry=[3, 4, 5, 6, 7]
const yourArry=(z, d)=>{
console.log(Math.pow(z, d))
}

const myFunc=(myArry, pow)=>{
myArry.map((x)=>yourArry(x, pow));
}
myFunc(myArry, 3)

const name= ["Artin","Idean"]
const azad=name.map((name)=>{
return`azad-${name}`;
})
console.log(azad);

const num=[1, 2, 3, 4, 5];
const Number=num.map((num)=>{
return `Number-${num}`;
})
console.log(Number);