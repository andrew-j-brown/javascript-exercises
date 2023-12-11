const reverseString = function(string) {
  let output = "";
  let split = string.split("");
  for (let i = string.length - 1; i >= 0; i--) {
    output += split[i];
  } 
  return output;
};
//
// Do not edit below this line
module.exports = reverseString;
