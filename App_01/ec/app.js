$traceurRuntime.registerModule("../app.js", [], function(require) {
  "use strict";
  var __moduleName = "../app.js";
  var square = function(x) {
    return x * x;
  };
  var add = function(a, b) {
    return a + b;
  };
  var pi = function() {
    return 3.1415;
  };
  console.log(square(5));
  console.log(add(3, 4));
  console.log(pi());
  var arrowGreeting = function(message, name) {
    return message + name;
  };
  var demo = function(message) {
    return message;
  };
  console.log(demo("hey"));
  console.log(arrowGreeting("hello this is message", " from vibhatha"));
  var student = [{
    "name": "Vibhatha",
    "phone": "071"
  }, {
    "name": "Frank",
    "phone": "072"
  }, {
    "name": "Sadunka",
    "phone": "073"
  }];
  var names = (function() {
    var $__1 = 0,
        $__2 = [];
    var $__6 = true;
    var $__7 = false;
    var $__8 = undefined;
    try {
      for (var $__4 = void 0,
          $__3 = (student)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
        var phone = $__4.value.phone;
        $__2[$__1++] = phone;
      }
    } catch ($__9) {
      $__7 = true;
      $__8 = $__9;
    } finally {
      try {
        if (!$__6 && $__3.return != null) {
          $__3.return();
        }
      } finally {
        if ($__7) {
          throw $__8;
        }
      }
    }
    return $__2;
  }());
  console.log(names);
  var nums = [1, 2, 3, 4, 5, 6, 6, 7, 8, 1];
  var aboveFive = (function() {
    var $__1 = 0,
        $__2 = [];
    var $__6 = true;
    var $__7 = false;
    var $__8 = undefined;
    try {
      for (var $__4 = void 0,
          $__3 = (nums)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
        var num = $__4.value;
        if (num > 5)
          $__2[$__1++] = num;
      }
    } catch ($__9) {
      $__7 = true;
      $__8 = $__9;
    } finally {
      try {
        if (!$__6 && $__3.return != null) {
          $__3.return();
        }
      } finally {
        if ($__7) {
          throw $__8;
        }
      }
    }
    return $__2;
  }());
  console.log(aboveFive);
  var numbers = [1, 3, 4, 5, 6];
  var letters = ["a", "b", "c", "d", "e"];
  return {};
});
$traceurRuntime.getModule("../app.js" + '');
