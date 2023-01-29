// 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.

var colors = require('colors');
const input = process.argv[2];
console.log(input.rainbow);

if (colors) {
    colors.enable(); // standardowo wyświetla sie ciąg znaków w kolorze lub za pomocą wyrażenia --color=true
} else {
    colors.disable(); // po wpisaniu wyrażenia np - Node --color=false ciąg nie będzie tęczowy
}