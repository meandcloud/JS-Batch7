var date = new Date()
console.log(date)


var greetHour = date.getHours()
console.log(greetHour)

greetHour = parseInt(prompt("Enter time "))

if(greetHour >= 00 && greetHour < 12){
    console.log("Good Morning")

}else if(greetHour >= 12 && greetHour < 17){
    console.log("Good Afternoon")

}else if(greetHour >=17 && greetHour < 21){
    console.log("Good Evening")

}else if(greetHour >= 21 && greetHour < 24){
    console.log("Good Night")

}

