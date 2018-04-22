/*
maak de volgende variabelen
'name' - Een string met je naam in
'age' - Een int met je leeftijd in
'interests' - Een rij met je interesses in als strings
'show' - Een boolean die aangeeft of je deze info al dan niet wilt laten zien
 */
var name = "Dieter Maes";
var age = 19;
var interests = ["Coputers", "Music", "Food"];
var show = true;

/*
function isAllowedDirection
params direction, keywordDirection

kijk of een nieuwe richting toegestaan is.
    - nieuwe richting mag niet dezelfde zijn als houdige richting
    - nieuwe richting mag niet tegengesteld zijn aan houdige richting
 */

function isAllowedDirection(direction, keywordDirection) {
    var result;

    if (direction === keywordDirection) {
        result = false;
    } else if (direction === "up" && keywordDirection === "down") {
        result = false;
    } else if (direction === "down" && keywordDirection === "up") {
        result = false;
    } else if (direction === "left" && keywordDirection === "right") {
        result = false;
    } else if (direction === "right" && keywordDirection === "left") {
        result = false;
    } else {
        result = true;
    }

    return result;
}

/*
function snakeContainsCell
params snake, row, col
ga voor alle cellen in snake.cells na of er een cell is met dezelfde row en col als de gegegeven row en col
snake.cells is een rij.
    - rijen zijn 0-indexed
    - lengte van rij: rij.length
    - element op plaats x in de rij: rij[x]
row en col van een cell worden verkregen met cell.row en cell.col
 */

function snakeContainsCell(snake, row, col) {
    var result = false;
    for (var i = 0; i < snake.cells.length; i++) {
        var cell = snake.cells[i];
        if (cell.row === row && cell.col === col) result = true;
    }
    return result;
}

