"use strict"
// Use a do...while loop to console.log the numbers from 1 to 1000.
const text="The numbers are ";
const i=0;
do{
  text += text + i; i++;
}
while (i <1000 ){
console.log("The numbers are" +i);
i=i++
}
// Create an object (an array with keys and values) called person with the following data:
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.birthDate);
console.log(person.gender);
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
  for (const key in person){
    const Key = birthDate;
    if( Key = birthDate ( birthDate.split(",") %2 != 0)){
       return "it is odd"
      //  console.log("it is odd")
    } else{
      return "it is even."
    }
    // console.log()
  }
// console.log("it is odd")
 
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
  gender: "male"}
]
const arraymap=arrayOfPersons.map(print);

function print(data){
	return data.firstName+" "+data.lastName;
}



// Use .filter() to filter the persons array and console.log only males in the array.
const maleArray=arrayOfPersons.filter(checkMale);
function checkMale(data)
{
	return data.gender=="male";

}
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
var grouped = _.groupBy(courses, function(course) {
  return course.courseContentId;
});