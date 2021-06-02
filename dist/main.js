/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
      ctx.fill();
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawBackground(ctx);
    }
  }]);

  return Background;
}();

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character(gameWidth, gameHeight) {
    _classCallCheck(this, Character);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 80;
    this.direction = "right";
    this.moveSpeed = .75;
    this.jumpHeight = -12;
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
      gravity: 0.15,
      friction: 0.9
    };
    this.keys = {};
  }

  _createClass(Character, [{
    key: "drawChar",
    value: function drawChar(ctx) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.rect(this.position.x, this.position.y, this.width, this.height);
      ctx.fill();
    }
  }, {
    key: "updateKeys",
    value: function updateKeys(keys) {
      this.keys = keys;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  }, {
    key: "jump",
    value: function jump() {
      // console.log(keys)
      if (this.jumping) {
        this.velocity.y = this.jumpHeight;
      }
    }
  }, {
    key: "crouch",
    value: function crouch() {
      this.height = 40;
    }
  }, {
    key: "uncrouch",
    value: function uncrouch() {
      this.height = 80;
    }
  }, {
    key: "update",
    value: function update() {
      // check current key presses
      if (this.keys['ArrowLeft']) {
        this.velocity.x = -this.moveSpeed;
      } else if (this.keys['ArrowRight']) {
        this.velocity.x = this.moveSpeed;
      }

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.velocity.y += this.constants.gravity;
      this.velocity.x *= this.constants.friction;
      this.velocity.y *= this.constants.friction; // if char is falling below floor line, stop falling

      if (this.position.y > this.gameHeight - this.height - 20) {
        this.jumping = false; // char is no longer jumping when landed

        this.position.y = this.gameHeight - this.height - 20;
        this.velocity.y = 0;
      } // if char is going off screen, stop at edge of screen


      if (this.position.x <= 0) {
        this.position.x = 0;
      } else if (this.position.x >= this.gameWidth - this.width) {
        this.position.x = this.gameWidth - this.width;
      }
    }
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

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(char) {
  var _this = this;

  _classCallCheck(this, Controller);

  this.keys = {};
  document.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.keys[event.code] = true;
        char.direction = "left";
        char.keys = _this.keys;
        break;

      case 'ArrowRight':
        _this.keys[event.code] = true;
        char.direction = "right";
        char.updateKeys(_this.keys);
        break;

      case 'ArrowDown':
        // this.keys[event.code] = true
        char.crouching = true;
        char.crouch();
        break;

      case 'Space':
        // this.keys[event.code] = true
        if (!char.jumping) {
          char.jumping = true;
          char.jump(_this.keys);
        }

        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowRight':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowDown':
        // this.keys[event.code] = false;
        char.crouching = false;
        char.uncrouch();
        break;

      case 'Space':
        // this.keys[event.code] = false;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/controller */ "./src/scripts/controller.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/background */ "./src/scripts/background.js");
 // import JumpQuest from "./scripts/game";




console.log("webpack is working properly");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("jump-quest");
  var ctx = canvas.getContext("2d");
  var GAME_WIDTH = ctx.canvas.width;
  var GAME_HEIGHT = ctx.canvas.height;
  var char = new _scripts_character__WEBPACK_IMPORTED_MODULE_1__.default(GAME_WIDTH, GAME_HEIGHT);
  new _scripts_controller__WEBPACK_IMPORTED_MODULE_2__.default(char);
  var bg = new _scripts_background__WEBPACK_IMPORTED_MODULE_3__.default(GAME_WIDTH, GAME_HEIGHT);
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case 'Enter':
        startGame();
        break;
    }
  });

  function startGame() {
    gameLoop();
    requestAnimationFrame(gameLoop);
  }

  function gameLoop() {
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.drawBackground(ctx);
    char.update();
    char.drawChar(ctx);
    requestAnimationFrame(gameLoop);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGwiLCJkcmF3QmFja2dyb3VuZCIsIkNoYXJhY3RlciIsImRpcmVjdGlvbiIsIm1vdmVTcGVlZCIsImp1bXBIZWlnaHQiLCJjcm91Y2hpbmciLCJqdW1waW5nIiwiZmFsbGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJiZWdpblBhdGgiLCJyZWN0IiwiQ29udHJvbGxlciIsImNoYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJiZyIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwi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QUFKLENBQWVDLElBQWY7QUFDQSxNQUFJaUIsRUFBRSxHQUFHLElBQUk3Qyx3REFBSixDQUFlMkMsVUFBZixFQUEyQkMsV0FBM0IsQ0FBVDtBQUVBZixVQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUM1QyxZQUFPQSxLQUFLLENBQUNDLElBQWI7QUFDRSxXQUFLLE9BQUw7QUFDRWMsaUJBQVM7QUFDVDtBQUhKO0FBS0QsR0FORDs7QUFRQSxXQUFTQSxTQUFULEdBQXFCO0FBQ25CQyxZQUFRO0FBQ1JDLHlCQUFxQixDQUFDRCxRQUFELENBQXJCO0FBQ0Q7O0FBRUQsV0FBU0EsUUFBVCxHQUFvQjtBQUNsQjtBQUNBRixNQUFFLENBQUNwQyxjQUFILENBQWtCSixHQUFsQjtBQUNBdUIsUUFBSSxDQUFDcUIsTUFBTDtBQUNBckIsUUFBSSxDQUFDc0IsUUFBTCxDQUFjN0MsR0FBZDtBQUNBMkMseUJBQXFCLENBQUNELFFBQUQsQ0FBckI7QUFDRDtBQUVGLENBL0JELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA4MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTI7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBcImZhbHNlXCI7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDMwMCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IDAuMTUsXG4gICAgICBmcmljdGlvbjogMC45LFxuICAgIH07XG4gICAgdGhpcy5rZXlzID0ge307XG4gIH1cblxuICBkcmF3Q2hhcihjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coa2V5cylcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gODA7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfVxuICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmUsIHN0b3AgZmFsbGluZ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwKSB7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTsgLy8gY2hhciBpcyBubyBsb25nZXIganVtcGluZyB3aGVuIGxhbmRlZFxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgfVxuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKHRoaXMua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBnYW1lTG9vcCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBiZy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIGNoYXIudXBkYXRlKCk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxufSkiXSwic291cmNlUm9vdCI6IiJ9