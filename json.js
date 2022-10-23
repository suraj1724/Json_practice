
function AccesData(){
    fetch("product.json").then(function(responce){
        return responce.json();
    }).then(function(students){
        for (var student of students){
            var tr =document.createElement("tr");
            var tdName =document.createElement("td");
            var tdAge =document.createElement("td");
            tdName.innerHTML= student.Name;
            tdAge.innerHTML =student.Age;
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        document.querySelector("tbody").appendChild(tr);
            
    }

    })
    console.log("suraj")
}
console.log("suraj");


function AccessNasa(){
    fetch("https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY").then(function(access){
        return access.json();
    }
    ).then(function(informations){
        for( var info of informations){

var nasaimage=document.getElementById("image");
// nasaimage.src=info.image;
var nasacaption=document.getElementById("heading5");
var paragraph=document.getElementById("para");
paragraph.innerHTML=info.attitude_quaternions.q0;
paragraph.innerHTML=info.attitude_quaternions.q01;



var nasaidenty=document.getElementById("heading6");
nasacaption.innerHTML=info.caption;
nasaidenty.innerHTML=info.identifier;
// nasaimage.src=info.image;
}
    })

    
}


