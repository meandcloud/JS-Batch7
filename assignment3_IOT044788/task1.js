let qualifications = ["SSC", "HSC", "BCS", "BSC", "B.COM", "BS", "BBA", "BA", "MCS", "MS"]
console.log(qualifications)

let degree = document.createElement("OL");

qualifications.forEach((data)=>{
    console.log(data)

    let degreeList = document.createElement("LI");
    degreeList.textContent = data

    degree.appendChild(degreeList)
})

let myBox = document.querySelector(".box")
console.log(myBox)
myBox.appendChild(degree)