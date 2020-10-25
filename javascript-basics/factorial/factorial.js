export const factorial = (num, res=1) => {
  if(num) {
    return factorial(num-1, res * num);
  }
  return res;
};

// The factorial function is defined as the product of all positive integers less than or equal to its argument.
// The first condition states: “if the parameter passed equals 0 or 1, we will exit and return 1”.
// Next, the recursive case states:

// “If the parameter is not 0 or 1, then we will pass value of num times the return value of calling this function 
// again with num-1 as its argument”.