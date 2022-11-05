//npm init -y -> uruchamia npm w danym w folderze
//npm install lodach instaluje package lodash
//npm install /npm i - doinstalowuje node_modules
// lodash - sortowanie, filtrowanie, sumy,
// react, angular, svelte, vue - frontend
// moment - operacje na datach i czasie
// express, koa - backend
// gulp,webpack
// www.npmjs.com - plik excel 
const _ = require('lodash');
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];
console.log(_.difference(tabA, tabB));

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));