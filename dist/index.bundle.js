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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_scss__);


var currentItem = 0;

window.onload = function(){
	let direction = getParameterByName('direction');

	let twitterUsername = getParameterByName('twitter');
	let ytUsername = getParameterByName('youtube');

	if(!twitterUsername){
		let twitter = document.getElementById('twitter-container');
		twitter.parentNode.removeChild(twitter);
	} else {
		document.getElementById('twitter-text').innerText = `@${twitterUsername}`;
	}

	if(!ytUsername){
		let youtube = document.getElementById('youtube-container');
		youtube.parentNode.removeChild(youtube);
	} else {
		document.getElementById('youtube-text').innerText = `@${ytUsername}`;
	}

	var items = document.getElementsByClassName('item');
		//item cycle

	const ITEM_CYCLE_TIME = 8000;
	const CARD_IN_OUT_TIME = 300000;
	const CARD_ACTIVE_TIME = ITEM_CYCLE_TIME * items.length;



	if(direction !== 'left' && direction !== 'right') {
		direction = 'right';
	}

	//set first item to active
	items.item(currentItem).classList.add('active');
	setInterval(function(){
		this.item(currentItem).classList.remove('active');
		currentItem = (currentItem + 1) % (this.length);
		this.item(currentItem).classList.add('active');
	}.bind(items), ITEM_CYCLE_TIME);



	//card cycle
	var card = document.getElementsByClassName('slide-out-container')[0];
	card.classList.add(direction);
	var cardSetup = () => {
		card.classList.remove('in');
		card.classList.add('out');
		setTimeout(() => {
			card.classList.remove('out');
			card.classList.add('in');
		}, CARD_ACTIVE_TIME);
	};
	cardSetup();
	setInterval(cardSetup, CARD_IN_OUT_TIME);

}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);