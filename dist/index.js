'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bubbleSort = function bubbleSort(arr) {
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var _ref = [arr[j + 1], arr[j]];
        arr[j] = _ref[0];
        arr[j + 1] = _ref[1];
      }
    }
  }

  return arr;
};

var selectionSort = function selectionSort(arr) {
  var length = arr.length;
  var tempIndex;

  for (var i = 0; i < length - 1; i++) {
    tempIndex = i;

    for (var j = i + 1; j < length; j++) {
      if (arr[tempIndex] > arr[j]) {
        tempIndex = j;
      }
    }

    if (i !== tempIndex) {
      var _ref = [arr[tempIndex], arr[i]];
      arr[i] = _ref[0];
      arr[tempIndex] = _ref[1];
    }
  }

  return arr;
};

exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
