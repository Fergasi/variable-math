let x1 = 5
let y1 = 6
let x2 = 9
let y2 = 17

function getDistance(x1, y1, x2, y2){
    let x = x2 - x1;
    let y = y2 - y1;

    return Math.sqrt(x * x + y * y);
}

console.log("The distance between", "(", x1, ",", y1, ")", "and", "(", x2, ",", y2, ")", "is", getDistance(x1, y1, x2, y2));

