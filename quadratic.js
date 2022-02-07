let a = 3
let b = 9
let c = 2

function solve1(a, b, c) {
    var x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    
    return x1;
    
}

x1 = solve1(a, b, c)

function solve2(a, b, c) {
    var x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    
    return x2;
    
}

x2 = solve2(a,b ,c)

console.log("Having defined variable a =", a, ", variable b =", b, ", and variable c =", c, ". I then used the quadratic equation to define the values of two new variables. Variable x1 =", x1, ", and variable x2 =", x2);

