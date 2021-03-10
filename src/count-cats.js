const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
let count = 0;

arr.flat().forEach(element => {
  if ( element === '^^')
    count++;
});
return count;
};
