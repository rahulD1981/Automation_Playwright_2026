import {test,expect} from '@playwright/test';

test('Find Duplicates from Array', async ({ page }) => {

const arrayNumbers = [1,2,2,3,4,5,5,6]
const duplicates = arrayNumbers.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates);

})

test('Find Maximum Number', async ({ page }) => {

const arr2 = [2,3,4,555,6,77]
const MaxNum = Math.max(...arr2)
console.log("Maximun Number in array--" + MaxNum)
//method 2
})

test('Find Max', async ({page}) =>{
    const arr2 = [1,2,3,44,5,66]
    const maxFunction =(arr2)=> {
    return arr2.reduce(function(a,b) {
        return a>b ? a : b
    })
}

console.log(maxFunction(arr2))

})

test('Find Minimum', async ({page}) =>{
  const arr = [22,44,55,6,677]
    const minMum = Math.min(...arr);
    console.log(minMum)

})

test('Find Minimum1', async ({page}) =>{

      const arr2 = [1,2,3,44,5,66]
    const maxFunction =(arr2)=> {
    return arr2.reduce(function(a,b) {
        return a<b ? a : b
    })
}

console.log(maxFunction(arr2))
})

test('Find largest/2ndlargest/3rd laargest largentst', async ({page}) =>{

      const arr2 = [1,2,3,44,5,66]
      arr2.sort((a,b)=> a - b)
      const largestNum = arr2[arr2.length-1]
      const secndLargest = arr2[arr2.length-2];
      console.log("Largest Number -- " + largestNum)
      console.log("SecondLargest Numer -- " + secndLargest)
  
})
