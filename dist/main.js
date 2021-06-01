/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function() {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(gameWidth, gameHeight) {
    _classCallCheck(this, Background);

    this.width = gameWidth;
    this.height = gameHeight;
  }

  _createClass(Background, [{
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawBackground(ctx);
    }
  }]);

  return Background;
}();

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character(gameWidth, gameHeight) {
    _classCallCheck(this, Character);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 75;
    this.height = 100;
    this.direction = "right";
    this.crouching = "false";
    this.jumping = false;
    this.falling = false;
    this.position = {
      x: 300,
      y: this.gameHeight - this.height
    };
    this.velocity = {
      x: 5,
      y: 10
    };
    this.constants = {
      gravity: 1,
      friction: 0.9
    };
  }

  _createClass(Character, [{
    key: "drawChar",
    value: function drawChar(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "move",
    value: function move() {
      if (this.direction == "left") {} else {}
    }
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return Character;
}();

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(char) {
  _classCallCheck(this, Controller);

  document.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        char.direction = "left";
        char.move();
        break;

      case 'ArrowRight':
        char.direction = "right";
        char.move();
        break;

      case 'ArrowDown':
        char.crouching = true;
        char.crouch();
        break;

      case 'Space':
        if (!char.jumping) {
          char.jumping = true;
          char.jump();
        }

        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        char.direction = "left";
        char.stop();
        break;

      case 'ArrowRight':
        char.direction = "right";
        char.stop();
        break;

      case 'ArrowDown':
        char.crouching = false;
        break;

      case 'Space':
        char.stop();
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller */ "./src/scripts/controller.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/background */ "./src/scripts/background.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_background__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// import JumpQuest from "./scripts/game";




console.log("webpack is working properly");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("jump-quest");
  var ctx = canvas.getContext("2d");
  var GAME_WIDTH = ctx.canvas.width;
  var GAME_HEIGHT = ctx.canvas.height;
  var char = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__.default(GAME_WIDTH, GAME_HEIGHT);
  new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__.default(char);
  var bg = new (_scripts_background__WEBPACK_IMPORTED_MODULE_2___default())(GAME_WIDTH, GAME_HEIGHT);

  function startGame() {
    bg.animate(ctx);
    char.drawChar(ctx);
  }

  function gameLoop() {}
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiQ2hhcmFjdGVyIiwiZGlyZWN0aW9uIiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJDb250cm9sbGVyIiwiY2hhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsIm1vdmUiLCJjcm91Y2giLCJqdW1wIiwic3RvcCIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJiZyIsInN0YXJ0R2FtZSIsImFuaW1hdGUiLCJkcmF3Q2hhciIsImdhbWVMb29wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsVTtBQUNKLHNCQUFZQyxTQUFaLEVBQXVCQyxVQUF2QixFQUFtQztBQUFBOztBQUNqQyxTQUFLQyxLQUFMLEdBQWFGLFNBQWI7QUFDQSxTQUFLRyxNQUFMLEdBQWNGLFVBQWQ7QUFDRDs7OztXQUVELHdCQUFlRyxHQUFmLEVBQW9CO0FBQ2xCQSxTQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsU0FBRyxDQUFDRSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixLQUFLSixLQUF4QixFQUErQixLQUFLQyxNQUFwQztBQUNEOzs7V0FFRCxpQkFBUUMsR0FBUixFQUFhO0FBQ1gsV0FBS0csY0FBTCxDQUFvQkgsR0FBcEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2JHSSxTO0FBQ0oscUJBQVlSLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQ2pDLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBQ0EsU0FBS00sU0FBTCxHQUFpQixPQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsT0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjtBQUNkQyxPQUFDLEVBQUUsR0FEVztBQUVkQyxPQUFDLEVBQUUsS0FBS2QsVUFBTCxHQUFrQixLQUFLRTtBQUZaLEtBQWhCO0FBSUEsU0FBS2EsUUFBTCxHQUFnQjtBQUNkRixPQUFDLEVBQUUsQ0FEVztBQUVkQyxPQUFDLEVBQUU7QUFGVyxLQUFoQjtBQUlB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Q0FBYjtBQUNBLE1BQUk3QixHQUFHLEdBQUc0QixNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBLE1BQU1DLFVBQVUsR0FBRy9CLEdBQUcsQ0FBQzRCLE1BQUosQ0FBVzlCLEtBQTlCO0FBQ0EsTUFBTWtDLFdBQVcsR0FBR2hDLEdBQUcsQ0FBQzRCLE1BQUosQ0FBVzdCLE1BQS9CO0FBRUEsTUFBSWtCLElBQUksR0FBRyxJQUFJYix1REFBSixDQUFjMkIsVUFBZCxFQUEwQkMsV0FBMUIsQ0FBWDtBQUNBLE1BQUloQix3REFBSixDQUFlQyxJQUFmO0FBQ0EsTUFBSWdCLEVBQUUsR0FBRyxJQUFJdEMsNERBQUosQ0FBZW9DLFVBQWYsRUFBMkJDLFdBQTNCLENBQVQ7O0FBRUEsV0FBU0UsU0FBVCxHQUFxQjtBQUNuQkQsTUFBRSxDQUFDRSxPQUFILENBQVduQyxHQUFYO0FBQ0FpQixRQUFJLENBQUNtQixRQUFMLENBQWNwQyxHQUFkO0FBQ0Q7O0FBRUQsV0FBU3FDLFFBQVQsR0FBb0IsQ0FFbkI7QUFFRixDQW5CRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIH1cbn0iLCJjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA3NTtcbiAgICB0aGlzLmhlaWdodCA9IDEwMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLmNyb3VjaGluZyA9IFwiZmFsc2VcIjtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogMzAwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogNSxcbiAgICAgIHk6IDEwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAxLFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9XG4gIH1cblxuICBkcmF3Q2hhcihjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgaWYgKCFjaGFyLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIGNoYXIuanVtcGluZyA9IHRydWVcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2JhY2tncm91bmRcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnNvbGUubG9nKFwid2VicGFjayBpcyB3b3JraW5nIHByb3Blcmx5XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImp1bXAtcXVlc3RcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBHQU1FX1dJRFRIID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgY29uc3QgR0FNRV9IRUlHSFQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICBsZXQgY2hhciA9IG5ldyBDaGFyYWN0ZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBuZXcgQ29udHJvbGxlcihjaGFyKVxuICBsZXQgYmcgPSBuZXcgQmFja2dyb3VuZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGJnLmFuaW1hdGUoY3R4KTtcbiAgICBjaGFyLmRyYXdDaGFyKGN0eCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcblxuICB9XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==