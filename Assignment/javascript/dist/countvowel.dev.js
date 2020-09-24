"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var vowel = function vowel() {
  var count = 0;
  var vowelcount = 0;

  for (var _len = arguments.length, str = new Array(_len), _key = 0; _key < _len; _key++) {
    str[_key] = arguments[_key];
  }

  for (var i in str) {
    if (str[i] != ' ') {
      count += 1;
    }

    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      vowelcount += 1;
    }
  }

  console.log('Number of letters are ' + count);
  console.log('Number of vowels are ' + vowelcount);
};

vowel.apply(void 0, _toConsumableArray('betty bought some butter'));