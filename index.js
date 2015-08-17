'use strict';

function comparator(a, b) {
  return a - b;
}

module.exports = function(arr, cmp) {
  cmp = cmp || comparator;
  var len = arr.length;
  var temp;
  var j;
  for (var i = 1; i < len; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && cmp(arr[j], temp) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};