webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = slider;\nfunction slider(slides) {\n    var length = slides.length;\n    var activeSlide = 0;\n\n    function start() {\n        slides[0].classList.add('active');\n        activeSlide += 1;\n        setInterval(function () {\n            if (activeSlide !== length) {\n                slides[activeSlide].classList.add('active');\n                slides[activeSlide - 1].classList.remove('active');\n                activeSlide += 1;\n            } else {\n                slides[activeSlide].classList.remove('active');\n                slides[0].classList.add('active');\n            }\n        }, 2500);\n    }\n\n    start();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9wYWdlcy9sYW5kaW5nL3NsaWRlci5qcz8zMTJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcihzbGlkZXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuICAgIGxldCBhY3RpdmVTbGlkZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgc2xpZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBhY3RpdmVTbGlkZSArPSAxO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlU2xpZGUgIT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlc1thY3RpdmVTbGlkZV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2FjdGl2ZVNsaWRlIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2FjdGl2ZVNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzbGlkZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MDApO1xuICAgIH1cblxuICAgIHN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zY3JpcHRzL3BhZ2VzL2xhbmRpbmcvc2xpZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})