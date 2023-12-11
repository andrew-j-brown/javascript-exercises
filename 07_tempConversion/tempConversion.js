const convertToCelsius = function(num) {
  let output = ((num - 32) * (5 / 9));
  if (output % 1 != 0) {
    output = output.toFixed(1);
    return parseFloat(output);
  }
  return output;
};

const convertToFahrenheit = function(num) {
  let output = ((num * (9 / 5)) + 32);
  if (output % 1 != 0) {
    output = output.toFixed(1);
    return parseFloat(output);
  }
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
