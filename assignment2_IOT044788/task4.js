var num = parseInt(prompt("Enter number "))

if(num === 1){
    console.log("Bingo")
    if(num === 1){
        console.log("Reward $100")
    }

}else if(num === 10){
    console.log("Bingo")
    if(num === 10){
        console.log("Reward $20")
    }

}else if(num === 3){
    console.log("Bingo")
    if(num === 3){
        console.log("Reward $50")
    }
}else{
    console.log("Better luck next time")
}