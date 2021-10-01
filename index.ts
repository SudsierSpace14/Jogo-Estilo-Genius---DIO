let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

// do a shuffle order of colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }

    console.log(order)
}

// light up the element that matches the color
let lightColor = (element: Element, number: number) => {
    console.log('number', number)
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)

    setTimeout(() => {
        element.classList.remove('selected')
    }, number)
}

// check if the clicked order is the same of the array and have the same length
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}. Boa.\nAgora bora pro next level!`)
        nextLevel()
    }

}

// function when the user clicks
let click = (color: number) => {
    console.log('clicked order:', clickedOrder)
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')   
        checkOrder()
    }, 250)
}

//function that returns the color
let createColorElement = (color: number) => {
    const values = {
        0: green,
        1: red,
        2: yellow,
        3: blue
    }

    return values[color]
}

// function to go to the next level of the game
let nextLevel = () => {
    score++
    shuffleOrder()
}

// function when the player loses the game
let gameOver = () => {
    alert(`Pontuação: ${score}\nPerdeu\nClica em Ok agora`)

    order=[];
    clickedOrder=[]

    playGame()
}

let playGame = () => {
    alert('Bem vindo ao joguinho genius')
    score = 0;

    nextLevel()
}

green.addEventListener('click', () => click(0))
red.addEventListener('click', () => click(1))
yellow.addEventListener('click', () => click(2))
blue.addEventListener('click', () => click(3))

playGame()