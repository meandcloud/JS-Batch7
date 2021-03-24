var date = new Date()

var greetHour = date.getHours()
console.log(greetHour)

switch(true){
    case (greetHour >= 00 && greetHour < 12):
        console.log("Good Morning")
        break;

    case (greetHour >= 12 && greetHour < 17):
        console.log("Good Afternoon")
        break;

    case (greetHour >=17 && greetHour < 21):
        console.log("Good Evening")
        break;

    case (greetHour >= 21 && greetHour < 24):
        console.log("Good Night")
        break;
        default:
}