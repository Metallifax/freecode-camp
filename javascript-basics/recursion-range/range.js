function rangeOfNumbers(startNum, endNum=startNum) {
  // Essentially this but recursively
  var array = [];
  for (var i = startNum; i <= endNum; i ++) {
    array.push(i);
  }
  return array;
}


// eslint-disable-next-line no-undef
module.exports = {
  rangeOfNumbers
};