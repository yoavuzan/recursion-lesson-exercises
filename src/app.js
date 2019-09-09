//Exercise 1
const findFactorial = function(num, currentPorduct = num) {
  //Your code here
  if (num === 1 || num < 1) { return currentPorduct }

  currentPorduct *= num - 1
  return findFactorial(--num, currentPorduct)
}

console.log(findFactorial(8))

//Exercise 2
const reverseString = function (str, newStr = '') {
    //Your code here
    if(str.length === 0) { return newStr }

    newStr += str.slice(str.length - 1)
    str = str.slice(0, str.length - 1)

    return reverseString(str, newStr)
}

console.log(reverseString("butter"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1, arr2) {
    //Your code here
    if(arr1.length === 0) { return }

    arr2.push(arr1.splice(0,1)[0])
    return swap(arr1, arr2)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]