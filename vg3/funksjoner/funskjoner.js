//@ts-check

function setup() {
    document.getElementById("nr1").innerHTML = "3+4=" + sum(3, 4);
    document.getElementById("nr2").innerHTML = snitt(3, 4, 6);
    document.getElementById("nr3").innerHTML = produkt(4, 6);
    document.getElementById("nr4").innerHTML = celsius2faren(37.8);
    document.getElementById("nr5").innerHTML = f2c(100);
    document.getElementById("nr6").innerHTML = primtall(7);

}

function sum(a, b) {
    return a + b;
}

function snitt(a, b, c) {
    return (a + b + c) / 3;
}

function produkt(a, b) {
    return a * b;
}

function celsius2faren(c) {
    return c * (9 / 5) + 32;
}

function f2c(f) {
    return (f - 32) * (5 / 9)
}

function primtall(n) {
    if (n === 1) return false;
    if (n === 2) return false;
    if (n % 2 === 0) return false;
    for (let i = 3; i < Math.sqrt(n + 1); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}