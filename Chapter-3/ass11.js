const fs = require("fs")
const currPath = "./a"
const newPath = "./assignment"
fs.rename(currPath, newPath, function(err) {
if (err) {
console.log(err)
} else {
console.log("Successfully renamed the directory.")
}
})