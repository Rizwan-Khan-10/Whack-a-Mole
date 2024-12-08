let currentMoleTile;
let currentPlantTile;
let reset = document.getElementById("reset");
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 1; i <= 9; i++) {
        let title = document.createElement("div");
        title.id = "pipe" + i;
        title.addEventListener('click', selecTile);
        document.getElementById("board").appendChild(title);
    }
    setInterval(() => {
        setMole();
    }, 1000);
    setInterval(() => {
        setPlant();
    }, 2000);
}

function getRandomTile() {
    let num = Math.ceil(Math.random() * 9);
    return "pipe" + num;
}

function setMole() {
    if (gameOver) {
        reset.style.display = "block";
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "Images/monty-mole.png";
    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id === num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        reset.style.display = "block";
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "Images/piranha-plant.png";
    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id === num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selecTile() {
    if (gameOver) {
        reset.style.display = "block";
        return;
    }

    if (this === currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score;
    } else if (this === currentPlantTile) {
        document.getElementById("score").innerText = `Game Over Your Score was ${score}`;
        gameOver = true;
    }else{
        score -= 5;
        if(score<0){
            score=0;
        }
        document.getElementById("score").innerText = score;
    }
}

reset.addEventListener('click', () => {
    reset.style.display = "none";
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score;
});
