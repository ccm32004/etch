const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    const box = document.createElement('div');
    box.classList.add('box');

    container.appendChild(box);
}


function addBoxes(box){
    for (let i = 0; i < 16; i++){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
    
        box.appendChild(innerBox);
    }
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => addBoxes(box))

function addHover(e){
    e.target.classList.add('hovers');
}

const innerBoxes = document.querySelectorAll(".innerBox");
innerBoxes.forEach(inbox => inbox.addEventListener("mouseover", addHover));



//add 16 divs to horizontal axis
//add 16 divs to vertical axis


