const recursionExercises = {
  //Exercise 1
  findFactorial: function (num, currentPorduct = num) {
    //Your code here
    if (num === 1 || num < 1) { return currentPorduct }

    currentPorduct *= num - 1
    return recursionExercises.findFactorial(--num, currentPorduct)
  },

  //Exercise 2
  reverseString: function (str, newStr = '') {
    //Your code here
    if(str.length === 0) { return newStr }

    newStr += str.slice(str.length - 1)
    str = str.slice(0, str.length - 1)

    return recursionExercises.reverseString(str, newStr)
  },

  //Exercise 3
  swap: function (arr1, arr2) {
    //Your code here
    if(arr1.length === 0) { return }

    arr2.push(arr1.splice(0,1)[0])
    return recursionExercises.swap(arr1, arr2)
  }
}
recursionExercises.reverseString("race car")
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = recursionExercises