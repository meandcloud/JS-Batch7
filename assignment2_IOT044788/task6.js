var firstNum = parseInt(prompt("Enter First Value: "))
var secondNum = parseInt(prompt("Enter Second Value"))
var operation = prompt("Enter sign ")

if(operation === "+"){
    var addition = firstNum + secondNum;
    console.log(addition)

}else if(operation === "-"){
    var subtraction = firstNum - secondNum;
    console.log(subtraction)

}else if(operation === "*"){
    var multiplication = firstNum * secondNum;
    console.log(multiplication)

}else if(operation === "/"){
    var division = firstNum / secondNum;
    console.log(division)

}else if(operation === "%"){
    var mod = firstNum % secondNum;
    console.log(mod)

}else{
    console.log("Wrong Input")
}