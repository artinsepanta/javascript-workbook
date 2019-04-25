"use strict"
// Use a do...while loop to console.log the numbers from 1 to 1000.
const text="";
const i=0;
do{
  text += "The numbers are" + i; i++;
}
while (i<1000);
console.log(i < 1000);
// Create an object (an array with keys and values) called person with the following data:
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['birthDate']);
console.log(person['gender'])
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
 

  for (allKeys in person){
   // console.log (allKeys)
    const allKeys = birthDate;
    .split("")
    if (x %2 != 0){
      return true
  }
 }
// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.// Use .map() to map over the arrayOfPersons and console.log() their information.
const arrayOfPersons=[
  {firstName:"Lili",
  lastName :"Doa",
  birthDate: "mMay 5, 2005",
  gender: "female"},

  {firstName:"Jahn",
  lastName :"poe",
  birthDate: "Jan 15, 2015",
  gender: "male"},

  {firstName:"Sam",
  lastName :"North",
  birthDate: "Nov 26, 2018",
  gender: "male"},
]


// Use .filter() to filter the persons array and console.log only males in the array.

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.