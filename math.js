// podstawy tworzenia funkcji w js
function add(a, b) {
    // dowolny kod js
    return a + b;
}

function sub(a, b) {
    const result = a - b;
    return result;
}

function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

// ctrs + shift + alt + strzałka w dół oraz kopiowanie cale linikji shift + alt + strzałka w dół
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.Pi = 3.14;

// zapis równoważny
// module.exports = {
//     add: add,
//     sub: sub,
//     mul: mul,
//     div: div
// }