class RecursionExercises {
  //Exercise 1
  findFactorial (num, currentPorduct = num) {
    //Your code here
    if (num === 1 || num < 1) { return currentPorduct }
    console.log("run")
    currentPorduct *= num - 1
    return this.findFactorial(--num, currentPorduct)
  }

  //Exercise 2
  reverseString(str, newStr = '') {
    //Your code here
    if(str.length === 0) { return newStr }

    newStr += str.slice(str.length - 1)
    str = str.slice(0, str.length - 1)

    return this.reverseString(str, newStr)
  }

  //Exercise 3
  swap(arr1, arr2) {
    //Your code here
    if(arr1.length === 0) { return }

    arr2.push(arr1.splice(0,1)[0])
    return this.swap(arr1, arr2)
  }
}

const ex = new RecursionExercises()

const arr1 = [1, 2, 3]
const arr2 = []

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = ex