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
    this.moveSpeed = 2;
    this.jumpSpeed = -15;
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
      gravity: .2,
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
    value: function move() {
      if (this.direction == "left") {
        this.velocity.x = -this.moveSpeed;
      } else {
        this.velocity.x = this.moveSpeed;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
      this.jumping = false;
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumping) {
        this.velocity.y = this.jumpSpeed;
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
      this.velocity.y += this.constants.gravity;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x *= this.constants.friction;
      this.velocity.y *= this.constants.friction; // if char is falling below floor line, stop falling

      if (this.position.y > this.gameHeight - this.height - 20) {
        this.jumping = false;
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
        console.log(char);
        break;

      case 'ArrowRight':
        _this.right = true;
        char.direction = "right";
        char.move();
        console.log(char);
        break;

      case 'ArrowDown':
        _this.down = true;
        char.crouching = true;
        char.crouch();
        console.log(char);
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
        char.uncrouch();
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
    // startGame();
    // if (controller.left) {
    //   char.velocity.x -= 0.5;
    // }
    // if (controller.right) {
    //   char.velocity.x += 0.5;
    // }
    // if (controller.jump && !char.jumping) {
    //   char.velocity.y -= 20;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGwiLCJkcmF3QmFja2dyb3VuZCIsIkNoYXJhY3RlciIsImRpcmVjdGlvbiIsIm1vdmVTcGVlZCIsImp1bXBTcGVlZCIsImNyb3VjaGluZyIsImp1bXBpbmciLCJmYWxsaW5nIiwicG9zaXRpb24iLCJ4IiwieSIsInZlbG9jaXR5IiwiY29uc3RhbnRzIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwiYmVnaW5QYXRoIiwicmVjdCIsIkNvbnRyb2xsZXIiLCJjaGFyIiwibGVmdCIsInJpZ2h0IiwiZG93biIsImp1bXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJtb3ZlIiwiY29uc29sZSIsImxvZyIsImNyb3VjaCIsInN0b3AiLCJ1bmNyb3VjaCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJnIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1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Q0EsTUFBSW9CLEVBQUUsR0FBRyxJQUFJL0Msd0RBQUosQ0FBZTZDLFVBQWYsRUFBMkJDLFdBQTNCLENBQVQ7QUFFQWQsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBQyxLQUFLLEVBQUk7QUFDNUMsWUFBT0EsS0FBSyxDQUFDQyxJQUFiO0FBQ0UsV0FBSyxPQUFMO0FBQ0VhLGlCQUFTO0FBQ1Q7QUFISjtBQUtELEdBTkQ7O0FBUUEsV0FBU0EsU0FBVCxHQUFxQjtBQUNuQkMsWUFBUTtBQUNSQyx5QkFBcUIsQ0FBQ0QsUUFBRCxDQUFyQjtBQUNEOztBQUVELFdBQVNBLFFBQVQsR0FBb0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBRixNQUFFLENBQUN0QyxjQUFILENBQWtCSixHQUFsQjtBQUNBc0IsUUFBSSxDQUFDd0IsTUFBTDtBQUNBeEIsUUFBSSxDQUFDeUIsUUFBTCxDQUFjL0MsR0FBZDtBQUNBNkMseUJBQXFCLENBQUNELFFBQUQsQ0FBckI7QUFDRDtBQUVGLENBMUNELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA4MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IDI7XG4gICAgdGhpcy5qdW1wU3BlZWQgPSAtMTU7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBcImZhbHNlXCI7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDMwMCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IC4yLFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcbiAgICB9XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCkge1xuICAgIGlmICh0aGlzLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkXG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDgwO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmNvbnN0YW50cy5ncmF2aXR5O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmUsIHN0b3AgZmFsbGluZ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwKSB7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjA7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgIH1cblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92ZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoYXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLmp1bXAgPSB0cnVlO1xuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgICAgICBjaGFyLmp1bXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgdGhpcy5qdW1wID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBnYW1lTG9vcCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBzdGFydEdhbWUoKTtcbiAgICAvLyBpZiAoY29udHJvbGxlci5sZWZ0KSB7XG4gICAgLy8gICBjaGFyLnZlbG9jaXR5LnggLT0gMC41O1xuICAgIC8vIH1cbiAgICAvLyBpZiAoY29udHJvbGxlci5yaWdodCkge1xuICAgIC8vICAgY2hhci52ZWxvY2l0eS54ICs9IDAuNTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKGNvbnRyb2xsZXIuanVtcCAmJiAhY2hhci5qdW1waW5nKSB7XG4gICAgLy8gICBjaGFyLnZlbG9jaXR5LnkgLT0gMjA7XG4gICAgLy8gfVxuXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBjaGFyLnVwZGF0ZSgpO1xuICAgIGNoYXIuZHJhd0NoYXIoY3R4KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==