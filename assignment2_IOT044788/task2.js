function signal(){
    var msg = document.getElementById("showMsg").value;

    if(msg === "red"){
        document.getElementById("red").style.display = "block"
    
    } else if(msg === "yellow"){
        document.getElementById("yellow").style.display = "block"
    
    } else if(msg === "green"){
        document.getElementById("green").style.display = "block"
    
    } else{
        document.getElementById("police").style.visibility = "visible"
    }
}

function myReset(){
    document.getElementById("showMsg").value = "";
    document.getElementById("police").style.visibility = "hidden";
}