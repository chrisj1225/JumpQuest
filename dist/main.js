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
    this.moveSpeed = 1;
    this.jumpHeight = -10;
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
    key: "move",
    value: function move(keys) {
      console.log(keys);

      if (this.direction == "left" && keys['ArrowLeft']) {
        this.velocity.x -= this.moveSpeed;
      } else if (this.direction == "right" && keys['ArrowRight']) {
        this.velocity.x += this.moveSpeed;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  }, {
    key: "jump",
    value: function jump(keys) {
      console.log(keys);

      if (this.jumping && keys['Space']) {
        this.velocity.y += this.jumpHeight;
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
      // if (controller.left || controller.right) {
      //   this.position.x += this.velocity.x;
      // }
      // if (controller.jump && !char.jumping) {
      //   this.position.y += this.velocity.y;
      // }
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
        char.move(_this.keys);
        console.log(char);
        break;

      case 'ArrowRight':
        _this.keys[event.code] = true;
        char.direction = "right";
        char.move(_this.keys);
        console.log(char);
        break;

      case 'ArrowDown':
        _this.keys[event.code] = true;
        char.crouching = true;
        char.crouch();
        console.log(char);
        break;

      case 'Space':
        _this.keys[event.code] = true;

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
        char.direction = "left";
        char.stop();
        break;

      case 'ArrowRight':
        _this.keys[event.code] = false;
        char.direction = "right";
        char.stop();
        break;

      case 'ArrowDown':
        _this.keys[event.code] = false;
        char.crouching = false;
        char.uncrouch();
        break;

      case 'Space':
        _this.keys[event.code] = false; // char.jumping = false;
        // char.stop();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGwiLCJkcmF3QmFja2dyb3VuZCIsIkNoYXJhY3RlciIsImRpcmVjdGlvbiIsIm1vdmVTcGVlZCIsImp1bXBIZWlnaHQiLCJjcm91Y2hpbmciLCJqdW1waW5nIiwiZmFsbGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImJlZ2luUGF0aCIsInJlY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsIkNvbnRyb2xsZXIiLCJjaGFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwibW92ZSIsImNyb3VjaCIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJiZyIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiZHJhd0No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IjpbImNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA4MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IDE7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gLTEwO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gXCJmYWxzZVwiO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAzMDAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAwLjE1LFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKGtleXMpIHtcbiAgICBjb25zb2xlLmxvZyhrZXlzKTtcbiAgICBpZiAoKHRoaXMuZGlyZWN0aW9uID09IFwibGVmdFwiKSAmJiAoa2V5c1snQXJyb3dMZWZ0J10pKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICgodGhpcy5kaXJlY3Rpb24gPT0gXCJyaWdodFwiKSAmJiAoa2V5c1snQXJyb3dSaWdodCddKSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcChrZXlzKSB7XG4gICAgY29uc29sZS5sb2coa2V5cylcbiAgICBpZiAodGhpcy5qdW1waW5nICYmIGtleXNbJ1NwYWNlJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gODA7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gaWYgKGNvbnRyb2xsZXIubGVmdCB8fCBjb250cm9sbGVyLnJpZ2h0KSB7XG4gICAgLy8gICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIC8vIH1cbiAgICAvLyBpZiAoY29udHJvbGxlci5qdW1wICYmICFjaGFyLmp1bXBpbmcpIHtcbiAgICAvLyAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgLy8gfVxuICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmUsIHN0b3AgZmFsbGluZ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwKSB7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTsgLy8gY2hhciBpcyBubyBsb25nZXIganVtcGluZyB3aGVuIGxhbmRlZFxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgfVxuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZlKHRoaXMua2V5cyk7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmUodGhpcy5rZXlzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjaGFyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgaWYgKCFjaGFyLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIGNoYXIuanVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICBjaGFyLmp1bXAodGhpcy5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICAvLyBjaGFyLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAvLyBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IEp1bXBRdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlclwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vc2NyaXB0cy9iYWNrZ3JvdW5kXCI7XG5jb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgd29ya2luZyBwcm9wZXJseVwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGN0eC5jYW52YXMud2lkdGg7XG4gIGNvbnN0IEdBTUVfSEVJR0hUID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgbGV0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbmV3IENvbnRyb2xsZXIoY2hhcilcbiAgbGV0IGJnID0gbmV3IEJhY2tncm91bmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBzd2l0Y2goZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGdhbWVMb29wKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGJnLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgY2hhci51cGRhdGUoKTtcbiAgICBjaGFyLmRyYXdDaGFyKGN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=