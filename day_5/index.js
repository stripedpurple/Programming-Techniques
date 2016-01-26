// var theNumber = Number(prompt("Pick a number"))
// if (!isNaN(theNumber)) {
//   alert("Your Number Squred: " + Math.pow(theNumber, 2))
// }else{
//   alert("You did not type a number.")
// }

var power = function (num) {
  for (var i = 0; i < 25; i++) {
    num *= 2
  }
  return num
}

alert(power(2))

alert(morePower(2))

function morePower(num) {
  for (var i = 0; i < 25; i++) {
    num *= 2
  }
  return num
}

var counter = 0
var result = 0
while (counter < 25){
	result *= 2
	counter++
};
console.log(result)

var num = 2
for(var i = 0; i < 25; i++) {
   num *= 2
};
console.log(num)
