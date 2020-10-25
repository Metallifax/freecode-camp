# Javascript Basics Notes

Notes:

Useful Things:

```javascript
//A pattern that returns truthy instead of using if/else
function isTruthy(a, b) {
  return a < b;
}

isTruthy(1, 3);// true


// hasOwnProperty(property) checks to see if a property 
// exists inside an object.
var myObj = {
  top: 'hat',
  bottom: 'pants'
}
myObj.hasOwnProperty('top'); // true
myObj.hasOwnProperty('middle'); // false

// Recursively sum numbers in array
function sum(arr, n) {
  // Only change code below this line
  var total = 0;
  if ( n === 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
