const globalBooleanArray = new Array(24).fill(false);
const doorOpened = new Array(24).fill(false);
setPermissions();

function openDoor(elementId){
    const element = document.getElementById(''+elementId);
    const day = parseInt(elementId)-1;
    if (globalBooleanArray[day] && !doorOpened[day]){
        const randomized = "pictures/day" + (day+1) +"/"+ getRandomIntInclusive(1,3)+".jpg";
        element.setAttribute('src', ''+randomized);
        doorOpened[day] = true;
    } else if (doorOpened[day]) {
        console.log("The door for day "+ (day+1)+ " has already been opened!")
    } else {
        console.log("It is not yet time to open that door!")
    }
}

function setPermissions(){
    //TODO: remember to set correct constructor for "today" once all folders have pictures in them!
    const today = new Date(2023, 11, 1);
    const xmas2023 = new Date(2023, 11, 24);
    const dateDifferenceInMs = xmas2023 - today;
    let daysUntilXmas = 365;
    if (dateDifferenceInMs >= 0){
        daysUntilXmas = Math.ceil(dateDifferenceInMs / (1000*60*60*24));
    }
    if (daysUntilXmas >= 0 && daysUntilXmas < 24){
        for (let i = 23; i >= daysUntilXmas;  i-- ){
            globalBooleanArray[23-i] = true;
        }
    } else if (dateDifferenceInMs < 0){
        globalBooleanArray.fill(true);
    }
}

function openImageInNewWindow(elementId){
    const element = document.getElementById('box'+elementId);
    const day = parseInt(elementId)-1;
    if (globalBooleanArray[day]){
        const randomized = "pictures/day" + (day+1) +"/"+ getRandomIntInclusive(1,3)+".jpg";
        window.open(randomized, 'Image', 'width=300px,height=300px,resizable=1');
    } else {
        console.log("It is not yet time to open that door!")
    }
    
}

// copied from MDM documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

