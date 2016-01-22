$traceurRuntime.registerModule("../app.js", [], function(require) {
  "use strict";
  var $__22 = $traceurRuntime.initTailRecursiveFunction(greet),
      $__24 = $traceurRuntime.initTailRecursiveFunction(greetwithyield);
  var $__19 = $traceurRuntime.initGeneratorFunction(greet),
      $__20 = $traceurRuntime.initGeneratorFunction(greetwithyield);
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
  var battleship = (function() {
    var $__1 = 0,
        $__2 = [];
    var $__13 = true;
    var $__14 = false;
    var $__15 = undefined;
    try {
      for (var $__11 = void 0,
          $__10 = (numbers)[Symbol.iterator](); !($__13 = ($__11 = $__10.next()).done); $__13 = true) {
        var num = $__11.value;
        {
          var $__6 = true;
          var $__7 = false;
          var $__8 = undefined;
          try {
            for (var $__4 = void 0,
                $__3 = (letters)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
              var letter = $__4.value;
              $__2[$__1++] = num + letter;
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
        }
      }
    } catch ($__16) {
      $__14 = true;
      $__15 = $__16;
    } finally {
      try {
        if (!$__13 && $__10.return != null) {
          $__10.return();
        }
      } finally {
        if ($__14) {
          throw $__15;
        }
      }
    }
    return $__2;
  }());
  console.log(battleship);
  var battleship2 = (function() {
    var $__1 = 0,
        $__2 = [];
    var $__6 = true;
    var $__7 = false;
    var $__8 = undefined;
    try {
      var $__18 = function() {
        var num1 = $__4.value;
        $__2[$__1++] = (function() {
          var $__1 = 0,
              $__2 = [];
          var $__6 = true;
          var $__7 = false;
          var $__8 = undefined;
          try {
            for (var $__4 = void 0,
                $__3 = (letters)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
              var letter1 = $__4.value;
              $__2[$__1++] = num1 + letter1;
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
      };
      for (var $__4 = void 0,
          $__3 = (numbers)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
        $__18();
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
  console.log(battleship2);
  var salutation = "Hello";
  var greeting = '     ${salutation},      world    ';
  console.log(greeting);
  function greet() {
    return $traceurRuntime.call(function() {
      return $traceurRuntime.continuation($traceurRuntime.createGeneratorInstance, $traceurRuntime, [$traceurRuntime.initTailRecursiveFunction(function($ctx) {
        return $traceurRuntime.call(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                console.log('you called next()');
                $ctx.state = -2;
                break;
              default:
                return $traceurRuntime.continuation($ctx.end, $ctx, []);
            }
        }, this, arguments);
      }), $__19, this]);
    }, this, arguments);
  }
  var greeter = greet();
  console.log(greeter);
  var next = greeter.next();
  console.log(next);
  function greetwithyield() {
    return $traceurRuntime.call(function() {
      return $traceurRuntime.continuation($traceurRuntime.createGeneratorInstance, $traceurRuntime, [$traceurRuntime.initTailRecursiveFunction(function($ctx) {
        return $traceurRuntime.call(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                console.log('you called yield()');
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return "hello";
              case 2:
                $ctx.maybeThrow();
                $ctx.state = -2;
                break;
              default:
                return $traceurRuntime.continuation($ctx.end, $ctx, []);
            }
        }, this, arguments);
      }), $__20, this]);
    }, this, arguments);
  }
  var greeterwithyield = greetwithyield();
  console.log(greeterwithyield);
  var nextwithyield = greeterwithyield.next();
  console.log(nextwithyield);
  var donewithyield = greeterwithyield.next();
  console.log(donewithyield);
  return {};
});
$traceurRuntime.getModule("../app.js" + '');
