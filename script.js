let map = document.getElementById("map")
let good = document.getElementById("good")
let piratik = document.getElementsByClassName("piratik")[0]
let treaX = Math.floor(Math.random() * map.offsetWidth)
let treaY = Math.floor(Math.random() * map.offsetHeight)
let pirX 
let pirY  
let steps = 0

map.onclick = function(event){
    setTimeout(() => {
    }, 1000);
    console.log("ok");
    if (good.innerHTML == "hot") {
        good.innerHTML = "cold"
    }
    else {
        good.innerHTML = "hot"
        
    }
    steps = steps + 1
    pirX = event.offsetX
    pirY = event.offsetY
    piratik.style.left = event.offsetX + "px"
    piratik.style.top = event.offsetY + "px"
    console.log(treaX);
    console.log(treaY);
    console.log(event.offsetX, event.offsetY);
    let X = treaX - pirX
    let Y = treaY - pirY
    let dist = Math.sqrt(X**2+Y**2)
    console.log(dist);
    if (dist < 8){
        good.innerHTML = "you win and you did " + steps + " steps"
        map.style.pointerEvents = "none"

    }
    else if(dist <15){
        good.innerHTML = "burning lava"
    }
    else if(dist < 25){
        good.innerHTML = "hot magma"
    }
    else if(dist < 80){
        good.innerHTML = "hot"
    }
    else if(dist < 120){
        good.innerHTML = "warm"
    }
    else if(dist < 150){
        good.innerHTML = "windy"
    }
    else if(dist < 200){
        good.innerHTML = "cold"
    }
    else if(dist < 250){
        good.innerHTML = "ice"
    }
    else if(dist < 300){
        good.innerHTML = "the coldest iceberg"
    }
    else if(dist < 350){
        good.innerHTML = "ice age"
    }
    else{
        good.innerHTML = "absolute zero"
    }
};





