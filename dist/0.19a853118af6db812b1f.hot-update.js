webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = mobileMenu;\nfunction mobileMenu() {\n    var container = document.getElementById('mobile-menu-container');\n    var menu = document.getElementById('mobile-menu');\n    var trigger = document.querySelector('.nav-trigger');\n    var animatedClass = '--animatable';\n    var openClass = '--open';\n    var closeKeys = [27];\n\n    return {\n        toggle: toggle\n    };\n\n    function toggle() {\n        menu.style.willChange = \"opacity\";\n        container.classList.add(animatedClass);\n\n        if (container.classList.contains(animatedClass) && !container.classList.contains(openClass)) {\n            document.body.style.overflowY = 'hidden';\n            addEvents();\n            build();\n        } else {\n            document.body.style.overflowY = 'auto';\n            addEvents();\n            remove();\n        }\n\n        menu.style.willChange = 'auto';\n    }\n\n    function onTransitionEnd() {\n        container.classList.remove(animatedClass);\n    }\n\n    function closeKeyHandler(e) {\n        if (closeKeys.includes(e.which)) {\n            e.preventDefault();\n            close();\n        }\n    }\n\n    function build() {\n        trigger.classList.add('is-active');\n        container.classList.add(openClass);\n        document.body.addEventListener('keydown', closeKeyHandler);\n    }\n\n    function remove() {\n        trigger.classList.remove('is-active');\n        container.classList.remove(openClass);\n        container.removeEventListener('keydown', closeKeyHandler);\n    }\n\n    function addEvents() {\n        container.addEventListener('transitionend', onTransitionEnd);\n    }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc2NyaXB0cy9zaGFyZWQvbW9iaWxlLW1lbnUuanM/YWY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2JpbGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudS1jb250YWluZXInKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51Jyk7XG4gICAgY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdHJpZ2dlcicpO1xuICAgIGNvbnN0IGFuaW1hdGVkQ2xhc3MgPSAnLS1hbmltYXRhYmxlJztcbiAgICBjb25zdCBvcGVuQ2xhc3MgPSAnLS1vcGVuJztcbiAgICBjb25zdCBjbG9zZUtleXMgPSBbMjddO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBtZW51LnN0eWxlLndpbGxDaGFuZ2UgPSBcIm9wYWNpdHlcIjtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZWRDbGFzcyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoYW5pbWF0ZWRDbGFzcykgJiYgIWNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMob3BlbkNsYXNzKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGFkZEV2ZW50cygpO1xuICAgICAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgYWRkRXZlbnRzKCk7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnUuc3R5bGUud2lsbENoYW5nZSA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGVkQ2xhc3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlS2V5SGFuZGxlcihlKSB7XG4gICAgICAgIGlmIChjbG9zZUtleXMuaW5jbHVkZXMoZS53aGljaCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQob3BlbkNsYXNzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VLZXlIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKG9wZW5DbGFzcyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VLZXlIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zY3JpcHRzL3NoYXJlZC9tb2JpbGUtbWVudS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
])