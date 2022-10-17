const os = require("os");
const fs = require("fs");

const userData = os.userInfo();
console.log(userData);

let data = userData.username;
fs.writeFileSync("user.txt", data);