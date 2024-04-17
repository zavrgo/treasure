let map = document.getElementById("map")
let good = document.getElementById("good")
let piratik = document.getElementsByClassName("piratik")[0]
let treaX = Math.floor(Math.random() * map.offsetWidth)
let treaY = Math.floor(Math.random() * map.offsetHeight)
let trea = document.getElementsByClassName("trea")[0]
let shtori = document.getElementsByClassName("shtori")[0]
let pirX
let pirY
let steps = 0
let newGame = document.getElementById("NewGame")
let ruls = document.getElementsByClassName("ruls")[0]
let karta = document.getElementsByClassName("karta")[0]


map.onclick = function (event) {
    piratik.style.transition = "2s"
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
    piratik.style.left = pirX + "px"
    piratik.style.top = pirY + "px"
    console.log(treaX);
    console.log(treaY);
    console.log(event.offsetX, event.offsetY);
    let X = treaX - pirX
    let Y = treaY - pirY
    let dist = Math.sqrt(X ** 2 + Y ** 2)
    console.log(dist);
    if (dist < 8) {
        good.innerHTML = "you win and you did " + steps + " steps"
        map.style.pointerEvents = "none"
        trea.style.left = pirX + "px"
        trea.style.top = pirY + "px"
        setTimeout(() => {

            trea.style.transition = "0.3s"
            trea.style.opacity = "1"
            setTimeout(() => {
                trea.style.left = "50%"
                trea.style.top = "50%"
                trea.style.transform = "translate(-60%, -80%)"
                trea.style.width = 250 + "px"
                setTimeout(() => {
                    newGame.style.opacity = "1"
                    newGame.style.pointerEvents = "auto"
                }, 2000);
            }, 1700);
        }, 0);
    }
    else if (dist < 15) {
        good.innerHTML = "burning lava"
    }
    else if (dist < 25) {
        good.innerHTML = "hot magma"
    }
    else if (dist < 80) {
        good.innerHTML = "hot"
    }
    else if (dist < 120) {
        good.innerHTML = "warm"
    }
    else if (dist < 150) {
        good.innerHTML = "windy"
    }
    else if (dist < 200) {
        good.innerHTML = "cold"
    }
    else if (dist < 250) {
        good.innerHTML = "ice"
    }
    else if (dist < 300) {
        good.innerHTML = "the coldest iceberg"
    }
    else if (dist < 350) {
        good.innerHTML = "ice age"
    }
    else {
        good.innerHTML = "absolute zero"
    }
};


newGame.onclick = function (event) {
    event.preventDefault()
    shtori = document.createElement("img")
    shtori.src = "ezgif.com-animated-gif-maker.gif"
    shtori.className = "shtori"
    karta.appendChild(shtori)
    shtori.style.opacity = "1"
    shtori.style.pointerEvents = "auto"
    setTimeout(() => {
        piratik.style.transition = "0s"
        good.innerHTML = "good luck"
        map.style.pointerEvents = "auto"
        piratik.style.top = "370px"
        piratik.style.left = "90px"
        trea.style.width = "25px"
        trea.style.opacity = "0"
        trea.style.transition = "0s"
        trea.style.pointerEvents = "none"
        newGame.style.opacity = "0"
        newGame.style.pointerEvents = "none"
        setTimeout(() => {
            shtori.style.opacity = "0"
            shtori.style.pointerEvents = "none"
        }, 1200);
    }, 1000);

}




