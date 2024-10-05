// how to define an array in ts

// taking a function that returns the maximum value present in the array

type Numbers = number[]; // yoou can do this in this way also but not in interfaces
function maxval(arr: Numbers) {
  // this is the qway to tell ts that arr is a number of array
  let maxi = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxi) maxi = arr[i];
  }
  return maxi;
}

console.log(maxval([1, 2, 3]));
