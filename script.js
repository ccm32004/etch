const container = document.querySelector(".container");

function addOuterBoxes(container, number){
    for (let i = 0; i < number; i++){
        const box = document.createElement('div');
        box.classList.add('box');
    
        container.appendChild(box);
    } 
}

addOuterBoxes(container, 16);

function addBoxes(box, number){
    for (let i = 0; i < number; i++){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
    
        box.appendChild(innerBox);
    }
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => addBoxes(box, 16))

function addHover(e){
    e.target.classList.add('hovers');
}

const innerBoxes = document.querySelectorAll(".innerBox");
innerBoxes.forEach(inbox => inbox.addEventListener("mouseover", addHover));

var message = document.querySelector('.error');


function prompter(){
    let pixels = Number(window.prompt("Please enter how many pixels you want in a row"));
    if (pixels > 100){
        const error = document.createElement('div');
        error.classList.add('message');
        error.textContent = "too many pixels";
        message.appendChild(error);
    }
    else if (pixels < 0){
        const error = document.createElement('div');
        error.classList.add('message');
        error.textContent = "no negative numbers";
        message.appendChild(error);

    }
    else{
        container.replaceChildren();
        addOuterBoxes(container, pixels);
        
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => addBoxes(box, pixels));

        const innerBoxes = document.querySelectorAll(".innerBox");
        innerBoxes.forEach(inbox => inbox.addEventListener("mouseover", addHover));

    }
}

const button = document.querySelector("button");
button.addEventListener('click', prompter)




//add 16 divs to horizontal axis
//add 16 divs to vertical axis


