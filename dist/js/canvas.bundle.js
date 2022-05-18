/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/enemy-2-walk-left.png":
/*!***************************************!*\
  !*** ./src/img/enemy-2-walk-left.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2c11a770d02850bd5f5690f5cbe49276.png");

/***/ }),

/***/ "./src/img/enemy-2-walk-right.png":
/*!****************************************!*\
  !*** ./src/img/enemy-2-walk-right.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2739a81c8b93aad1c65ab8acdc00b828.png");

/***/ }),

/***/ "./src/img/enemy-3-walk-left.png":
/*!***************************************!*\
  !*** ./src/img/enemy-3-walk-left.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11391c959ea3f19d9a5e8481c3ac35d8.png");

/***/ }),

/***/ "./src/img/enemy-3-walk-right.png":
/*!****************************************!*\
  !*** ./src/img/enemy-3-walk-right.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d54c0b344f84ca1a642b8a63d2ddfe9.png");

/***/ }),

/***/ "./src/img/enemy-walk-left.png":
/*!*************************************!*\
  !*** ./src/img/enemy-walk-left.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1812733d3020e4211c1e4ea65318f92.png");

/***/ }),

/***/ "./src/img/enemy-walk-right.png":
/*!**************************************!*\
  !*** ./src/img/enemy-walk-right.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a8796790d2df226580811501a613a755.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_enemy_walk_right_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/enemy-walk-right.png */ "./src/img/enemy-walk-right.png");
/* harmony import */ var _img_enemy_2_walk_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/enemy-2-walk-right.png */ "./src/img/enemy-2-walk-right.png");
/* harmony import */ var _img_enemy_3_walk_right_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/enemy-3-walk-right.png */ "./src/img/enemy-3-walk-right.png");
/* harmony import */ var _img_enemy_walk_left_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/enemy-walk-left.png */ "./src/img/enemy-walk-left.png");
/* harmony import */ var _img_enemy_2_walk_left_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/enemy-2-walk-left.png */ "./src/img/enemy-2-walk-left.png");
/* harmony import */ var _img_enemy_3_walk_left_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/enemy-3-walk-left.png */ "./src/img/enemy-3-walk-left.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 578;
var gravity = 1.5;
var platformsOffset;
var lastKey;

var createImage = function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
};

var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  }
};

var Player = /*#__PURE__*/function () {
  function Player(x, y, width, height, color) {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.color = color;
    this.frame = 0;
    this.sprites = {
      stand: {
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 177,
        width: 39
      },
      run: {
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 341,
        width: 76.725
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    this.currentWidth = this.sprites.stand.width;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.frame * this.currentCropWidth, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.currentWidth, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.frame = this.frame < 29 ? this.frame + 1 : 0;

      if (this.position.y + this.height + this.velocity.y + gravity <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Enemy = /*#__PURE__*/function () {
  function Enemy(x, y, width, height, color, range) {
    _classCallCheck(this, Enemy);

    this.speed = 10;
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 5,
      y: 0
    };
    this.sprites = {
      walk: {
        left: createImage(_img_enemy_walk_left_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        right: createImage(_img_enemy_walk_right_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        cropWidth: 27
      }
    };
    this.initialPosition = x;
    this.initialVelocity = this.velocity.x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.range = range;
    this.frame = 0;
    this.currentDirection = 'right';
    this.currentSprite = this.sprites.walk.right;
    this.currentCropWidth = this.sprites.walk.cropWidth;
    this.currentWidth = this.width;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, Math.floor(this.frame) * this.currentCropWidth, 0, this.currentCropWidth, 24, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.frame = this.frame < 3 ? this.frame + 0.25 : 0;

      if (this.position.y + this.height + this.velocity.y + gravity <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Enemy;
}();

var Enemy2 = /*#__PURE__*/function () {
  function Enemy2(x, y, width, height, color, range) {
    _classCallCheck(this, Enemy2);

    this.speed = 10;
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 5,
      y: 0
    };
    this.sprites = {
      walk: {
        left: createImage(_img_enemy_2_walk_left_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
        right: createImage(_img_enemy_2_walk_right_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        cropWidth: 24
      }
    };
    this.initialPosition = x;
    this.initialVelocity = this.velocity.x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.range = range;
    this.frame = 0;
    this.currentDirection = 'right';
    this.currentSprite = this.sprites.walk.right;
    this.currentCropWidth = this.sprites.walk.cropWidth;
    this.currentWidth = this.width;
  }

  _createClass(Enemy2, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, Math.floor(this.frame) * this.currentCropWidth, 0, this.currentCropWidth, 23, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.frame = this.frame < 3 ? this.frame + 0.25 : 0;

      if (this.position.y + this.height + this.velocity.y + gravity <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Enemy2;
}();

var Enemy3 = /*#__PURE__*/function () {
  function Enemy3(x, y, width, height, color, range) {
    _classCallCheck(this, Enemy3);

    this.speed = 10;
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 3,
      y: 0
    };
    this.sprites = {
      walk: {
        left: createImage(_img_enemy_3_walk_left_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        right: createImage(_img_enemy_3_walk_right_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        cropWidth: 48
      }
    };
    this.initialPosition = x;
    this.initialVelocity = this.velocity.x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.range = range;
    this.frame = 0;
    this.currentDirection = 'right';
    this.currentSprite = this.sprites.walk.right;
    this.currentCropWidth = this.sprites.walk.cropWidth;
    this.currentWidth = this.width;
  }

  _createClass(Enemy3, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, Math.floor(this.frame) * this.currentCropWidth, 0, this.currentCropWidth, 48, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.frame = this.frame < 5 ? this.frame + 0.1 : 0;

      if (this.position.y + this.height + this.velocity.y + gravity <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Enemy3;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y,
      image: image
    }, this.image = image;
    this.width = image.width, this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericImage = /*#__PURE__*/function () {
  function GenericImage(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericImage);

    this.position = {
      x: x,
      y: y,
      image: image
    }, this.image = image;
    this.width = image.width, this.height = image.height;
  }

  _createClass(GenericImage, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericImage;
}();

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var floorPlatformYPos = canvas.height - platformImage.height;
var player;
var enemies;
var platforms;
var genericImages;
var winLocation;

var init = function init() {
  winLocation = platformImage.width * 4 + 500;
  player = new Player(100, 100, 76, 90, 'red');
  enemies = [new Enemy3(550, floorPlatformYPos - 70, 70, 70, 'red', 300), new Enemy2(1300, floorPlatformYPos - 50, 50, 50, 'blue', 600), new Enemy(winLocation, floorPlatformYPos - 61.6, 70, 61.6, '#bada55', 500)];
  platformsOffset = 0;
  platforms = [new Platform({
    x: -1,
    y: floorPlatformYPos,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 98 - platformSmallTallImage.width,
    y: 250,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width - 3,
    y: floorPlatformYPos,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: floorPlatformYPos,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 98,
    y: floorPlatformYPos,
    image: platformImage
  }), new Platform({
    x: winLocation,
    y: floorPlatformYPos,
    image: platformImage
  })];
  genericImages = [// new GenericImage({
  //   x: -1,
  //   y: -1,
  //   image: createImage(bodyBg)
  // }),
  new GenericImage({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
};

var animate = function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericImages.forEach(function (genericImage) {
    genericImage.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  enemies.forEach(function (enemy) {
    return enemy.update();
  });

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && platformsOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platformsOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericImages.forEach(function (genericImage) {
        genericImage.position.x -= player.speed * 0.66;
      });
      enemies.forEach(function (enemy) {
        return enemy.position.x -= player.speed;
      });
    }

    if (keys.left.pressed && platformsOffset > 0) {
      platformsOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericImages.forEach(function (genericImage) {
        genericImage.position.x += player.speed * 0.66;
      });
      enemies.forEach(function (enemy) {
        return enemy.position.x += player.speed;
      });
    }
  } // enemy movement


  enemies.forEach(function (enemy) {
    if (enemy.currentDirection === 'right' && enemy.position.x + platformsOffset > enemy.initialPosition + enemy.range) {
      enemy.currentDirection = 'left';
      enemy.currentSprite = enemy.sprites.walk.left;
      enemy.velocity.x = -enemy.initialVelocity;
    } else if (enemy.currentDirection === 'left' && enemy.position.x + platformsOffset < enemy.initialPosition) {
      enemy.currentDirection = 'right';
      enemy.currentSprite = enemy.sprites.walk.right;
      enemy.velocity.x = enemy.initialVelocity;
    }
  }); // enemy collision detection
  // clean up the enemy position logic + detect when player landed on enemy and kill the enemy!

  enemies.forEach(function (enemy) {
    if (player.position.x + player.width > enemy.position.x && player.position.x < enemy.position.x + enemy.width && player.position.y + player.height > enemy.position.y) {
      init();
    }
  }); // platform collision detection

  platforms.forEach(function (platform) {
    var playerIsAboveOrExactlyOnPlatform = player.position.y + player.height <= platform.position.y;
    var playerRightSideIsFurtherThanPlatformStart = player.position.x + player.width > platform.position.x;

    if (playerIsAboveOrExactlyOnPlatform && player.position.y + player.height + player.velocity.y >= platform.position.y && playerRightSideIsFurtherThanPlatformStart && player.position.x < platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // sprite toggling ?

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.currentWidth = player.sprites.run.width;
    player.frames = 1;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.currentWidth = player.sprites.run.width;
    player.frames = 1;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.currentWidth = player.sprites.stand.width;
    player.frames = 1;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.currentWidth = player.sprites.stand.width;
    player.frames = 1;
  } // Win condition


  if (platformsOffset > winLocation - 400) {
    console.log('You won!!!');
  } // Lose condition


  if (player.position.y > canvas.height) {
    init();
  }
};

init();
animate();
var KEYCODES = {
  a: 65,
  s: 83,
  d: 68,
  w: 87,
  right: 39,
  left: 37,
  up: 38,
  down: 40
};
window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case KEYCODES.left:
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case KEYCODES.down:
      player.velocity.y += 0;
      break;

    case KEYCODES.right:
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case KEYCODES.up:
      if (player.velocity.y === 0) {
        player.velocity.y -= 30;
      }

      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case KEYCODES.left:
      keys.left.pressed = false;
      break;

    case KEYCODES.down:
      player.velocity.y = 0;
      break;

    case KEYCODES.right:
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map