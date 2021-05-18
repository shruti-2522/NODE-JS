const fs = require("fs");
try{
const filenames = fs.readdirSync("./a");
console.log(filenames);
}catch(error){
console.error(error);
}
