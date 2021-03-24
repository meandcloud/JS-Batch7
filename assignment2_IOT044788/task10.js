var date = new Date()
console.log(date)

var day = date.getDay()
console.log(day)

switch(day){
    case 0:
        console.log("Today is Sunday "+ day)
        break;
    
    case 1:
        console.log("Today is Monday "+ day)
        break;

    case 2:
        console.log("Today is Tuesday "+ day)
        break;
    
    case 4:
        console.log("Today is Wednesday "+ day)
        break;

    case 5:
        console.log("Today is Thursday "+ day)
        break;
    
    case 6:
        console.log("Today is Friday "+ day)
        break;

    case 7:
        console.log("Today is Saturday "+ day)
        break;
        default:

}


