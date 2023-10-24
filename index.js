const imgContainer = document.getElementById("imageContainer")

let deg = 0;
let hue = 0;    

function chgColor() {
    hue = (hue + 1) % 360;
    deg = (deg + .1) % 360;
    const color = `linear-gradient(${deg}deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%) `
    imgContainer.style.backgroundImage = color 
}

setInterval(chgColor, 20)


