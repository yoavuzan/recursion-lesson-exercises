/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  //Your code here
  if (num == 1){
    return 1;
  }
  return findFactorial(num-1)*num;
}

//Exercise 2
const reverseString = function(myStr) {
  //Your code here
  if (myStr === ""){
    return ""
  }
  return reverseString(myStr.slice(1,)) + myStr[0]
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  //Your code here
  if(arr1.length === 0){
    return 
  }
  const val = arr1.shift(); // remove first item
  arr2.push(val);  
  return swap(arr1,arr2)
}

const swap2 = function(arr1,arr2) {
  //Your code here
  if(arr1.length === 0){
    return 
  }
  
  const val = arr1.pop();  
  return swap2(arr1,arr2)
  arr2.push(val);
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }