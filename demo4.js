// var numbers = [175, 50, 25];
// var a = numbers.reduce(myFunc)
// console.log("a : ", a)

// function myFunc(total, num) {
//     console.log("total, num : ", total, num)
//     return total - num;
//   }



  var numbers = [1, 2, 3];
var a = numbers.reduce(myFunc)
console.log("a : ", a)

function myFunc(total, num) {
    console.log("total, num : ", total, num)
    return total + num;
  }