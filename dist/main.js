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
      y: this.gameHeight - this.height - 20
    };
    this.velocity = {
      x: 0,
      y: 0
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
  var _this = this;

  _classCallCheck(this, Controller);

  this.left = false;
  this.right = false;
  this.down = false;
  this.jump = false;
  document.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.left = true;
        char.direction = "left";
        char.move();
        break;

      case 'ArrowRight':
        _this.right = true;
        char.direction = "right";
        char.move();
        break;

      case 'ArrowDown':
        _this.down = true;
        char.crouching = true;
        char.crouch();
        break;

      case 'Space':
        _this.jump = true;

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
        _this.left = false;
        char.direction = "left";
        char.stop();
        break;

      case 'ArrowRight':
        _this.right = false;
        char.direction = "right";
        char.stop();
        break;

      case 'ArrowDown':
        _this.down = false;
        char.crouching = false;
        break;

      case 'Space':
        _this.jump = false;
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
  var controller = new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__.default(char);
  var bg = new (_scripts_background__WEBPACK_IMPORTED_MODULE_2___default())(GAME_WIDTH, GAME_HEIGHT); // function startGame() {

  bg.drawBackground(ctx);
  char.drawChar(ctx); // }

  function gameLoop() {
    // startGame();
    if (controller.left) {
      char.velocity.x -= 0.5;
    }

    if (controller.left) {
      char.velocity.x += 0.5;
    }

    if (controller.jump && !char.jumping) {
      char.velocity.y -= 20;
    }

    char.velocity.y += char.constants.gravity;
    char.position.x += char.velocity.x;
    char.position.y += char.velocity.y;
    char.velocity.x *= char.constants.friction;
    char.velocity.y *= char.constants.friction; // if char is falling below floor line, stop falling

    if (char.position.y > GAME_HEIGHT - char.height - 20) {
      char.jumping = false;
      char.position.y = GAME_HEIGHT - char.height - 20;
      char.velocity.y = 0;
    } // if char is going off screen, stop at edge of screen


    if (char.position.x == 0) {
      char.position.x = 0;
    } else if (char.position.x == GAME_WIDTH) {
      char.position.x = GAME_WIDTH - char.width;
    }

    document.requestAnimationFrame(gameLoop);
  }

  document.requestAnimationFrame(gameLoop);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiQ2hhcmFjdGVyIiwiZGlyZWN0aW9uIiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJDb250cm9sbGVyIiwiY2hhciIsImxlZnQiLCJyaWdodCIsImRvd24iLCJqdW1wIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwibW92ZSIsImNyb3VjaCIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiY29udHJvbGxlciIsImJnIiwiZHJhd0NoYXIiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFU7QUFDSixzQkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0MsS0FBTCxHQUFhRixTQUFiO0FBQ0EsU0FBS0csTUFBTCxHQUFjRixVQUFkO0FBQ0Q7Ozs7V0FFRCx3QkFBZUcsR0FBZixFQUFvQjtBQUNsQkEsU0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELFNBQUcsQ0FBQ0UsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS0osS0FBeEIsRUFBK0IsS0FBS0MsTUFBcEM7QUFDRDs7O1dBRUQsaUJBQVFDLEdBQVIsRUFBYTtBQUNYLFdBQUtHLGNBQUwsQ0FBb0JILEdBQXBCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNiR0ksUztBQUNKLHFCQUFZUixTQUFaLEVBQXVCQyxVQUF2QixFQUFtQztBQUFBOztBQUNqQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUtNLFNBQUwsR0FBaUIsT0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsT0FBQyxFQUFFLEdBRFc7QUFFZEMsT0FBQyxFQUFFLEtBQUtkLFVBQUwsR0FBa0IsS0FBS0UsTUFBdkIsR0FBZ0M7QUFGckIsS0FBaEI7QUFJQSxTQUFLYSxRQUFMLEdBQWdCO0FBQ2RGLE9BQUMsRUFBRSxDQURXO0FBRWRDLE9BQUMsRUFBRTtBQUZXLEtBQWhCO0FBSUEsU0FBS0UsU0FBTCxHQUFpQjtBQUNmQyxhQUFPLEVBQUUsQ0FETTtBQUVmQyxjQUFRLEVBQUU7QUFGSyxLQUFqQjtBQUlEOzs7O1dBRUQsa0JBQVNmLEdBQVQsRUFBYztBQUNaQSxTQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsU0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBS08sUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNFLENBQTVDLEVBQStDLEtBQUtiLEtBQXBELEVBQTJELEtBQUtDLE1BQWhFO0FBQ0Q7OztXQUVELGdCQUFPO0FBQ0wsVUFBSSxLQUFLTSxTQUFMLElBQWtCLE1BQXRCLEVBQThCLENBRTdCLENBRkQsTUFFTyxDQUVOO0FBQ0Y7OztXQUVELGdCQUFPLENBRU47Ozs7OztBQUlILCtEQUFlRCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0lDM0NNWSxVLEdBQ0osb0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsT0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFFQUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxLQUFELEVBQVc7QUFDOUMsWUFBUUEsS0FBSyxDQUFDQyxJQUFkO0FBQ0UsV0FBSyxXQUFMO0FBQ0UsYUFBSSxDQUFDUCxJQUFMLEdBQVksSUFBWjtBQUNBRCxZQUFJLENBQUNaLFNBQUwsR0FBaUIsTUFBakI7QUFDQVksWUFBSSxDQUFDUyxJQUFMO0FBQ0E7O0FBQ0YsV0FBSyxZQUFMO0FBQ0UsYUFBSSxDQUFDUCxLQUFMLEdBQWEsSUFBYjtBQUNBRixZQUFJLENBQUNaLFNBQUwsR0FBaUIsT0FBakI7QUFDQVksWUFBSSxDQUFDUyxJQUFMO0FBQ0E7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsYUFBSSxDQUFDTixJQUFMLEdBQVksSUFBWjtBQUNBSCxZQUFJLENBQUNYLFNBQUwsR0FBaUIsSUFBakI7QUFDQVcsWUFBSSxDQUFDVSxNQUFMO0FBQ0E7O0FBQ0YsV0FBSyxPQUFMO0FBQ0UsYUFBSSxDQUFDTixJQUFMLEdBQVksSUFBWjs7QUFDQSxZQUFJLENBQUNKLElBQUksQ0FBQ1YsT0FBVixFQUFtQjtBQUNqQlUsY0FBSSxDQUFDVixPQUFMLEdBQWUsSUFBZjtBQUNBVSxjQUFJLENBQUNJLElBQUw7QUFDRDs7QUFDRDtBQXRCSjtBQXdCRCxHQXpCRDtBQTBCQUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxLQUFELEVBQVc7QUFDNUMsWUFBUUEsS0FBSyxDQUFDQyxJQUFkO0FBQ0UsV0FBSyxXQUFMO0FBQ0UsYUFBSSxDQUFDUCxJQUFMLEdBQVksS0FBWjtBQUNBRCxZQUFJLENBQUNaLFNBQUwsR0FBaUIsTUFBakI7QUFDQVksWUFBSSxDQUFDVyxJQUFMO0FBQ0E7O0FBQ0YsV0FBSyxZQUFMO0FBQ0UsYUFBSSxDQUFDVCxLQUFMLEdBQWEsS0FBYjtBQUNBRixZQUFJLENBQUNaLFNBQUwsR0FBaUIsT0FBakI7QUFDQVksWUFBSSxDQUFDVyxJQUFMO0FBQ0E7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsYUFBSSxDQUFDUixJQUFMLEdBQVksS0FBWjtBQUNBSCxZQUFJLENBQUNYLFNBQUwsR0FBaUIsS0FBakI7QUFDQTs7QUFDRixXQUFLLE9BQUw7QUFDRSxhQUFJLENBQUNlLElBQUwsR0FBWSxLQUFaO0FBQ0FKLFlBQUksQ0FBQ1csSUFBTDtBQUNBO0FBbEJKO0FBb0JELEdBckJEO0FBc0JELEM7O0FBR0gsK0RBQWVaLFVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFFQVIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFJUSxNQUFNLEdBQUdULFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixZQUF4QixDQUFiO0FBQ0EsTUFBSWhDLEdBQUcsR0FBRytCLE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsTUFBTUMsVUFBVSxHQUFHbEMsR0FBRyxDQUFDK0IsTUFBSixDQUFXakMsS0FBOUI7QUFDQSxNQUFNcUMsV0FBVyxHQUFHbkMsR0FBRyxDQUFDK0IsTUFBSixDQUFXaEMsTUFBL0I7QUFFQSxNQUFJa0IsSUFBSSxHQUFHLElBQUliLHVEQUFKLENBQWM4QixVQUFkLEVBQTBCQyxXQUExQixDQUFYO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQUlwQix3REFBSixDQUFlQyxJQUFmLENBQWpCO0FBQ0EsTUFBSW9CLEVBQUUsR0FBRyxJQUFJMUMsNERBQUosQ0FBZXVDLFVBQWYsRUFBMkJDLFdBQTNCLENBQVQsQ0FSa0QsQ0FVbEQ7O0FBQ0VFLElBQUUsQ0FBQ2xDLGNBQUgsQ0FBa0JILEdBQWxCO0FBQ0FpQixNQUFJLENBQUNxQixRQUFMLENBQWN0QyxHQUFkLEVBWmdELENBYWxEOztBQUVBLFdBQVN1QyxRQUFULEdBQW9CO0FBQ2xCO0FBQ0EsUUFBSUgsVUFBVSxDQUFDbEIsSUFBZixFQUFxQjtBQUNuQkQsVUFBSSxDQUFDTCxRQUFMLENBQWNGLENBQWQsSUFBbUIsR0FBbkI7QUFDRDs7QUFDRCxRQUFJMEIsVUFBVSxDQUFDbEIsSUFBZixFQUFxQjtBQUNuQkQsVUFBSSxDQUFDTCxRQUFMLENBQWNGLENBQWQsSUFBbUIsR0FBbkI7QUFDRDs7QUFDRCxRQUFJMEIsVUFBVSxDQUFDZixJQUFYLElBQW1CLENBQUNKLElBQUksQ0FBQ1YsT0FBN0IsRUFBc0M7QUFDcENVLFVBQUksQ0FBQ0wsUUFBTCxDQUFjRCxDQUFkLElBQW1CLEVBQW5CO0FBQ0Q7O0FBRURNLFFBQUksQ0FBQ0wsUUFBTCxDQUFjRCxDQUFkLElBQW1CTSxJQUFJLENBQUNKLFNBQUwsQ0FBZUMsT0FBbEM7QUFDQUcsUUFBSSxDQUFDUixRQUFMLENBQWNDLENBQWQsSUFBbUJPLElBQUksQ0FBQ0wsUUFBTCxDQUFjRixDQUFqQztBQUNBTyxRQUFJLENBQUNSLFFBQUwsQ0FBY0UsQ0FBZCxJQUFtQk0sSUFBSSxDQUFDTCxRQUFMLENBQWNELENBQWpDO0FBQ0FNLFFBQUksQ0FBQ0wsUUFBTCxDQUFjRixDQUFkLElBQW1CTyxJQUFJLENBQUNKLFNBQUwsQ0FBZUUsUUFBbEM7QUFDQUUsUUFBSSxDQUFDTCxRQUFMLENBQWNELENBQWQsSUFBbUJNLElBQUksQ0FBQ0osU0FBTCxDQUFlRSxRQUFsQyxDQWhCa0IsQ0FrQmxCOztBQUNBLFFBQUlFLElBQUksQ0FBQ1IsUUFBTCxDQUFjRSxDQUFkLEdBQWtCd0IsV0FBVyxHQUFHbEIsSUFBSSxDQUFDbEIsTUFBbkIsR0FBNEIsRUFBbEQsRUFBc0Q7QUFDcERrQixVQUFJLENBQUNWLE9BQUwsR0FBZSxLQUFmO0FBQ0FVLFVBQUksQ0FBQ1IsUUFBTCxDQUFjRSxDQUFkLEdBQWtCd0IsV0FBVyxHQUFHbEIsSUFBSSxDQUFDbEIsTUFBbkIsR0FBNEIsRUFBOUM7QUFDQWtCLFVBQUksQ0FBQ0wsUUFBTCxDQUFjRCxDQUFkLEdBQWtCLENBQWxCO0FBQ0QsS0F2QmlCLENBeUJsQjs7O0FBQ0EsUUFBSU0sSUFBSSxDQUFDUixRQUFMLENBQWNDLENBQWQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEJPLFVBQUksQ0FBQ1IsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQWxCO0FBQ0QsS0FGRCxNQUVPLElBQUlPLElBQUksQ0FBQ1IsUUFBTCxDQUFjQyxDQUFkLElBQW1Cd0IsVUFBdkIsRUFBbUM7QUFDeENqQixVQUFJLENBQUNSLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQndCLFVBQVUsR0FBR2pCLElBQUksQ0FBQ25CLEtBQXBDO0FBQ0Q7O0FBQ0R3QixZQUFRLENBQUNrQixxQkFBVCxDQUErQkQsUUFBL0I7QUFDRDs7QUFFRGpCLFVBQVEsQ0FBQ2tCLHFCQUFULENBQStCRCxRQUEvQjtBQUNELENBbERELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgfVxufSIsImNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IDc1O1xuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gXCJmYWxzZVwiO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAzMDAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAxLFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgXG4gICAgfSBlbHNlIHtcblxuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLmp1bXAgPSB0cnVlO1xuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgICAgICBjaGFyLmp1bXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLmp1bXAgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoY2hhcilcbiAgbGV0IGJnID0gbmV3IEJhY2tncm91bmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuXG4gIC8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBiZy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIGNoYXIuZHJhd0NoYXIoY3R4KTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIC8vIHN0YXJ0R2FtZSgpO1xuICAgIGlmIChjb250cm9sbGVyLmxlZnQpIHtcbiAgICAgIGNoYXIudmVsb2NpdHkueCAtPSAwLjU7XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLmxlZnQpIHtcbiAgICAgIGNoYXIudmVsb2NpdHkueCArPSAwLjU7XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLmp1bXAgJiYgIWNoYXIuanVtcGluZykge1xuICAgICAgY2hhci52ZWxvY2l0eS55IC09IDIwO1xuICAgIH1cblxuICAgIGNoYXIudmVsb2NpdHkueSArPSBjaGFyLmNvbnN0YW50cy5ncmF2aXR5O1xuICAgIGNoYXIucG9zaXRpb24ueCArPSBjaGFyLnZlbG9jaXR5Lng7XG4gICAgY2hhci5wb3NpdGlvbi55ICs9IGNoYXIudmVsb2NpdHkueTtcbiAgICBjaGFyLnZlbG9jaXR5LnggKj0gY2hhci5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgY2hhci52ZWxvY2l0eS55ICo9IGNoYXIuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmUsIHN0b3AgZmFsbGluZ1xuICAgIGlmIChjaGFyLnBvc2l0aW9uLnkgPiBHQU1FX0hFSUdIVCAtIGNoYXIuaGVpZ2h0IC0gMjApIHtcbiAgICAgIGNoYXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgY2hhci5wb3NpdGlvbi55ID0gR0FNRV9IRUlHSFQgLSBjaGFyLmhlaWdodCAtIDIwO1xuICAgICAgY2hhci52ZWxvY2l0eS55ID0gMDtcbiAgICB9XG5cbiAgICAvLyBpZiBjaGFyIGlzIGdvaW5nIG9mZiBzY3JlZW4sIHN0b3AgYXQgZWRnZSBvZiBzY3JlZW5cbiAgICBpZiAoY2hhci5wb3NpdGlvbi54ID09IDApIHtcbiAgICAgIGNoYXIucG9zaXRpb24ueCA9IDA7XG4gICAgfSBlbHNlIGlmIChjaGFyLnBvc2l0aW9uLnggPT0gR0FNRV9XSURUSCkge1xuICAgICAgY2hhci5wb3NpdGlvbi54ID0gR0FNRV9XSURUSCAtIGNoYXIud2lkdGg7XG4gICAgfVxuICAgIGRvY3VtZW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cbiAgXG4gIGRvY3VtZW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=