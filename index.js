var order = [];
var clickedOrder = [];
var score = 0;
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul
var blue = document.querySelector('.blue');
var red = document.querySelector('.red');
var green = document.querySelector('.green');
var yellow = document.querySelector('.yellow');
// do a shuffle order of colors
var shuffleOrder = function () {
    var colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for (var i in order) {
        var elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
    console.log(order);
};
// light up the element that matches the color
var lightColor = function (element, number) {
    console.log('number', number);
    number = number * 500;
    setTimeout(function () {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(function () {
        element.classList.remove('selected');
    }, number);
};
// check if the clicked order is the same of the array and have the same length
var checkOrder = function () {
    for (var i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert("Pontua\u00E7\u00E3o: " + score + ". Boa.\nAgora bora pro next level!");
        nextLevel();
    }
};
// function when the user clicks
var click = function (color) {
    console.log('clicked order:', clickedOrder);
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(function () {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};
//function that returns the color
var createColorElement = function (color) {
    var values = {
        0: green,
        1: red,
        2: yellow,
        3: blue
    };
    return values[color];
};
// function to go to the next level of the game
var nextLevel = function () {
    score++;
    shuffleOrder();
};
// function when the player loses the game
var gameOver = function () {
    alert("Pontua\u00E7\u00E3o: " + score + "\nPerdeu\nClica em Ok agora");
    order = [];
    clickedOrder = [];
    playGame();
};
var playGame = function () {
    alert('Bem vindo ao joguinho genius');
    score = 0;
    nextLevel();
};
green.addEventListener('click', function () { return click(0); });
red.addEventListener('click', function () { return click(1); });
yellow.addEventListener('click', function () { return click(2); });
blue.addEventListener('click', function () { return click(3); });
playGame();
