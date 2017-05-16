webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = mobileMenu;\nfunction mobileMenu() {\n    var container = document.getElementById('mobile-menu-container');\n    var menu = document.getElementById('mobile-menu');\n    var trigger = document.querySelector('nav-trigger');\n    var animatedClass = '--animatable';\n    var openClass = '--open';\n    var closeKeys = [27];\n\n    return {\n        toggle: toggle\n    };\n\n    function toggle() {\n        menu.style.willChange = \"opacity\";\n        container.classList.add(animatedClass);\n\n        if (container.classList.contains(animatedClass) && !container.classList.contains(openClass)) {\n            document.body.style.overflowY = 'hidden';\n            addEvents();\n            build();\n        } else {\n            document.body.style.overflowY = 'auto';\n            addEvents();\n            remove();\n        }\n\n        menu.style.willChange = 'auto';\n    }\n\n    function onTransitionEnd() {\n        container.classList.remove(animatedClass);\n    }\n\n    function closeKeyHandler(e) {\n        if (closeKeys.includes(e.which)) {\n            e.preventDefault();\n            close();\n        }\n    }\n\n    function build() {\n        trigger.classList.add('is-active');\n        menu.classList.add(openClass);\n    }\n\n    function remove() {\n        trigger.classList.remove('is-active');\n        menu.classList.remove(openClass);\n    }\n\n    function addEvents() {\n        container.addEventListener('transitionend', onTransitionEnd, false);\n    }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9zaGFyZWQvbW9iaWxlLW1lbnUuanM/YWY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2JpbGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudS1jb250YWluZXInKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51Jyk7XG4gICAgY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdi10cmlnZ2VyJyk7XG4gICAgY29uc3QgYW5pbWF0ZWRDbGFzcyA9ICctLWFuaW1hdGFibGUnO1xuICAgIGNvbnN0IG9wZW5DbGFzcyA9ICctLW9wZW4nO1xuICAgIGNvbnN0IGNsb3NlS2V5cyA9IFsyN107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGUsXG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIG1lbnUuc3R5bGUud2lsbENoYW5nZSA9IFwib3BhY2l0eVwiO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChhbmltYXRlZENsYXNzKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhhbmltYXRlZENsYXNzKSAmJiAhY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhvcGVuQ2xhc3MpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgYWRkRXZlbnRzKCk7XG4gICAgICAgICAgICBidWlsZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICBhZGRFdmVudHMoKTtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zdHlsZS53aWxsQ2hhbmdlID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VLZXlIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKGNsb3NlS2V5cy5pbmNsdWRlcyhlLndoaWNoKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQob3BlbkNsYXNzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zY3JpcHRzL3NoYXJlZC9tb2JpbGUtbWVudS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
])