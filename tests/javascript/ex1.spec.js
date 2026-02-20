import {test,expect} from '@playwright/test';

test('Check box validation', async ({ page }) => {
var arr1 = ['zapple','banana', 'caulitfloer']
arr1.sort()
//console.log(arr1)

let arr2 = arr1.sort((a,b)=>a-b);
console.log(arr2)

//objects
let employeer = {
    fname : "rahul",
    lName : "donkey",
        address : {
            mob : 8007776124,
            loc : "Manjri",
        },
       bonus : function()
       {
            console.log("No bonus")
       } 
}

console.log(employeer.fname)
console.log(employeer.address.mob)
console.log(employeer.bonus())

//////////////////////////////////////
let students = [
{name : "rahul", age : 44},
{name : "ukey", age : 40},

{hobbies: ["cricket","football","drinking"]}
];
console.log(students[0].name)
console.log(students[2].hobbies[2])        //acessing array inside object little tricky
console.log(students[1].age)

/////////filtering array of objects
let numbers = [2,33,44,554,4]
let evenNumbers = numbers.filter(no => no%2===0)
console.log("Filter Even numbers are" + (evenNumbers))

//filter no > 10
let Num10 = numbers.filter(num=>num > 10)
console.log("Numbers greater than 10 are" + Num10)

//find
let numbers1 = [2,33,44,554,4]
let evenNumbers1 = numbers.find(no => no%2===0)
console.log("find Even numbers are" + (evenNumbers1))

//conversion - check syntax properly
s= "1234";
Number.parseInt(s)
Number.parseFloat(s)
Number.toString(s)


});