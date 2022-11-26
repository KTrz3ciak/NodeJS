//npm init -y -> uruchamia npm w danym w folderze
//npm install lodach instaluje package lodash
//npm install /npm i - doinstalowuje node_modules
// lodash - sortowanie, filtrowanie, sumy,
// react, angular, svelte, vue - frontend
// moment - operacje na datach i czasie
// express, koa - backend
// gulp,webpack
// www.npmjs.com - plik excel
// zad2 Rozszerzenie poprzedniego zadania o nową funkcję która: przyjmuje jako argument dwie tablice i zwraca elementy które są tylko w pierwszej tablicy.
// const utils = ...
// const _ = require('lodash');
// const nodemon = require('nodemon');
// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];
// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));
// 3. Zmiana 2 zadania tak, by funkcje pochodziły nie z naszego modułu utils lecz z repozytorium npm (nazwa modułu lodash).
// console.log(_.difference(tabA, tabB));
// console.log(_.difference(tabB, tabA));
// 4. Znalezienie minimalnej oraz maksymalnej wartości w tablicy przy użyciu biblioteki lodash
// const tabNumber = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]
// let maxNumber = _.max(tabNumber);
// let minNumber = _.min(tabNumber);
// console.log(`Max number is: ${maxNumber}\n Min number is ${minNumber}`);
// 5. Zainstalowanie globalnego modułu 'nodemon' (https://www.npmjs.com/package/nodemon), który umożliwia automatyczne restartowanie w przypadku wykrycia zmian w uruchomionych aplikacjach. Aplikacja wyświetla w konsoli dowolny komunikat. Po zmianie kodu aplikacji (i zapisaniu zmian) powinna się ona automatycznie uruchomić ponownie.
// ================= npm instal nodemon ===================
// 6. Stworzenie kalkulatora wprowadzonych danych. Przy użyciu zewnętrznej biblioteki yargs (moduł odpowiedzialny parsowanie parametrów wejściowych).
// Get the yargs resource
// =============== npm instal yargs ====================
// const yargs = require('yargs');
// yargs.command({
//     command: "add",
//     describe: "Add to numbers",
//     builder: {
//             a: {
//                 describe: "First number",
//                 demandOption: true,
//                 type: 'number',
//             },
//             b: {
//                 describe: "Second number",
//                 demandOption: true,
//                 type: 'number',
//             }
//         },
//         // Function for your command
//         handler(argv) {
//             console.log("Result of sum is: " ,(argv.a + argv.b));
//         }
    
// })
// yargs.parse() // Użyte do ustawienia powyższych danych
//7.  Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową (JSON.stringify).
// const fs = require('fs');
// const user = {
//     name: 'Konrad',
//     surName: 'Trzeciak'
// };
// const convertToJson = JSON.stringify(user);
// fs.writeFileSync('user.json', convertToJson, err => {
//   if (err) {
//     throw err
//   }
//   console.log('Well done, we saved JSON file.')
// })
// //8. Rozszerzenie aplikacji z zadania 7 o dynamiczne wprowadzanie danych które chcemy zapisać do pliku. Do wykorzystania zewnętrzny moduł yargs.
// const yargs = require('yargs');
// const fs = require('fs');
// // const parse = require('yargs-parser');
// const personalData = yargs.command({
//     command: "data",
//     describe: "Let me see your name and surname",
//     builder: {
//             name: {
//                 describe: "Name",
//                 type: 'string',
//             },
//             surName: {
//                 describe: "Last name",
//                 type: 'string',
//             }
//         },
//   handler(argv) {
//     // console.log(`Welcome Mr|Mrs ${argv.name} ${argv.surName}`);
//   }
      
// })
// // yargs.parse()
// const convertToJson = JSON.stringify(personalData);
// fs.writeFileSync('personalData.json', convertToJson, err => {
//   if (err) {
//     throw err
//   }
//   console.log('Error here');
// })
// 9. Dodanie do naszej aplikacji z zadania 8 odczytu danych przed nadpisaniem nowymi wartościami. W konsoli wypiszmy jedynie imię wczytanego użytkownika.
const yargs = require('yargs');
const fs = require('fs');
// const parse = require('yargs-parser');
const parsedUser = fs.readFileSync('personalData.json', 'utf8',
    function(err, data) {
    if(err)
        console.log(err);
    else
        console.log(data);
    }
);
// console.log(user.name);
// const nameFromJson = parsedUser.name;
console.log(parsedUser);

const personalData = yargs.command({
    command: "data",
    describe: "Let me see your name and surname",
    builder: {
            name: {
                describe: "Name",
                type: 'string',
            },
            surName: {
                describe: "Last name",
                type: 'string',
            }
        },
  handler(argv) {
    // if (argv.name === true && argv.surName === true) {
      console.log(`Welcome Mr|Mrs ${argv.name} ${argv.surName}`);
    // } else {
    //   console.log(`Name here: ${argv.name}`);
    // }
  } 
      
})
// yargs.parse()
const convertToJson = JSON.stringify(personalData);
fs.writeFileSync('personalData.json', convertToJson, err => {
  if (err) {
    throw err
  }
  console.log('Well done we saved JSON file.')
})
