function myCity(){
    var cityName = document.getElementById("city").value
    var updatedCity = cityName.toUpperCase();

    //document.getElementById("msgDisplay").innerHTML = citName;


    if(updatedCity === "KARACHI"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Light"
    
    } else if(updatedCity === "LAHORE"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Joy Hearted people"
    
    } else if(updatedCity === "MULTAN"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Sufi Shrines"
    
    } else if(updatedCity === "PESHAWAR"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Food and Tourism"
    
    } else if(updatedCity === "ISLAMABAD"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Parks and Forests"
    
    } else if(updatedCity === "RAWALPINDI"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Industrial Centre"
    
    } else if(updatedCity === "FAISALABAD"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Textile"
    
    } else if(updatedCity === "SIALKOT"){
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " Welcome to the city of Sporting Goods"
    
    }
    else{
        document.getElementById("msgDisplay1").innerHTML = updatedCity;
        document.getElementById("msgDisplay2").innerHTML = " The description of the city is not listed"
    }

    
}

function myReset(){
    document.getElementById("city").value = "";
}


//This is the program for console:

// var my_City = prompt("Enter your city name: ")
// var updatedmy_City = my_City.toLowerCase()

// if(updatedmy_City === "karachi"){
//     console.log(updatedmy_City+" Welcome to the city of Light")

// } else if(updatedmy_City === "lahore"){
//     console.log(updatedmy_City+" Welcome to the city of Joy Hearted people")

// } else if(updatedmy_City === "multan"){
//     console.log(updatedmy_City+" Welcome to the city of Sufi Shrines")
// } else{
//     console.log(updatedmy_City+" The description of the city is not available")
// }

