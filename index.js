// Code your solutions in this file

// countdown to zero
function countDown(myNumber) {
    for (let i = myNumber; i >= 0; i--){
        console.log(i);
    }
}

//thank you card
function writeCards(nameArray, theEvent) {
    let messageArray = [];
    for (let i = 0; i < nameArray.length; i++){
        messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${theEvent} gift!`);
    }
    return messageArray;
}

    



