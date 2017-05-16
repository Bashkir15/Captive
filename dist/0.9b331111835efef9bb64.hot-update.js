webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _nav = __webpack_require__(0);\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _landing = __webpack_require__(2);\n\nvar _landing2 = _interopRequireDefault(_landing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _nav2.default)();\n\nif (window.location.pathname == '/') {\n    (0, _landing2.default)();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9pbmRleC5qcz83MDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYXZIYW5kbGVyIGZyb20gJy4vc2hhcmVkL25hdic7XG5pbXBvcnQgbGFuZGluZyBmcm9tICcuL3BhZ2VzL2xhbmRpbmcnO1xuXG5uYXZIYW5kbGVyKCk7XG5cbmlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XG4gICAgbGFuZGluZygpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zY3JpcHRzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(3);\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar slides = document.querySelectorAll('.slide');\n\n(0, _slider2.default)(slides);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9wYWdlcy9sYW5kaW5nLmpzPzAwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsaWRlciBmcm9tICcuL2xhbmRpbmcvc2xpZGVyJztcblxuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XG5cbnNsaWRlcihzbGlkZXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc2NyaXB0cy9wYWdlcy9sYW5kaW5nLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = slider;\nfunction slider(slides) {\n    var length = slides.length;\n    var activeSlide = 0;\n\n    function start() {\n        slides[0].classList.add('active');\n        activeSlide += 1;\n        setInterval(function () {\n            if (activeSlide + 1 !== length) {\n                slides[activeSlide].classList.add('active');\n                slides[activeSlide - 1].classList.remove('active');\n                activeSlide += 1;\n            } else {\n                activeSlide = slides[0];\n            }\n        });\n    }\n\n    start();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9wYWdlcy9sYW5kaW5nL3NsaWRlci5qcz8zMTJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcihzbGlkZXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuICAgIGxldCBhY3RpdmVTbGlkZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgc2xpZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBhY3RpdmVTbGlkZSArPSAxO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlU2xpZGUgKyAxICE9PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXNbYWN0aXZlU2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNsaWRlc1thY3RpdmVTbGlkZSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc2NyaXB0cy9wYWdlcy9sYW5kaW5nL3NsaWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
])