// 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.

var colors = require('colors');
let napis = "BestNode";
console.log(napis.rainbow);

if (colors) {
    colors.enable();
} else {
    colors.disable();
}