const imgContainer = document.getElementById("imageContainer")


let hue = 0;    

function chgColor() {
    hue = (hue + 1) % 360;
    const color = `linear-gradient(0deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%) `
    imgContainer.style.backgroundImage = color 
}

setInterval(chgColor, 20)


