function rangeOfNumbers(startNum, endNum) {

  var array = [];
  for (var i = startNum; i <= endNum; i ++) {
    array.push(i);
  }
  return array;
}

console.log(rangeOfNumbers(1, 3));