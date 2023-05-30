/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./popup.js":
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
/***/ (() => {

eval("const btn = document.getElementById('btn');\nconst messageQueue = [];\nlet balanceN = 9999999999;\nlet balanceNN;\n\n\nbtn.addEventListener('click', () => {\n\n\n    chrome.runtime.sendMessage({\n        type: \"pop\"\n    }, function (response) {\n        console.log(response);\n        if ((response.includes('$') && response.includes('.')) || response.includes('$')) {\n            document.getElementById('ext').textContent = response;\n            messageQueue.push(response);\n            bg.add(response);\n            var res = response.replace(/[$]/g, \"\").toString();\n            console.log(\"res = \" + Number.parseFloat(res));\n            balanceNN = balanceN.toFixed(1) - Number.parseFloat(res).toFixed(1);\n            console.log('balanceNN = ' + balanceNN);\n            let balance = '$' + balanceNN.toString();\n            console.log(balance);\n            document.getElementById('balance').textContent = balance;\n\n\n            console.log('pushed to messageQueue: ' + messageQueue);\n        } else {\n            console.log('cannot add or buy item without selecting price');\n        }\n    });\n\n});\n\nconst invBtnn = document.getElementById('invBtn');\ninvBtnn.addEventListener('click', () => {\n    chrome.storage.sync.set({\n        key: messageQueue\n    }, function () {\n\n        console.log('synced');\n    });\n\n    document.getElementById('inv').textContent = messageQueue;\n\n\n    /*\n        chrome.runtime.sendMessage({\n            type: \"invMsg\"\n        }, function (response) {\n            console.log('opened inv' + response);\n            document.getElementById('inv').textContent = response;\n        });\n    */\n});\n\n/*\n\n */\n\n  // Import the functions you need from the SDKs you need\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlsbGlvbmFpcmUtc2hvcHBpbmctZ2FtZS8uL3BvcHVwLmpzP2MyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xuY29uc3QgbWVzc2FnZVF1ZXVlID0gW107XG5sZXQgYmFsYW5jZU4gPSA5OTk5OTk5OTk5O1xubGV0IGJhbGFuY2VOTjtcblxuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJwb3BcIlxuICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGlmICgocmVzcG9uc2UuaW5jbHVkZXMoJyQnKSAmJiByZXNwb25zZS5pbmNsdWRlcygnLicpKSB8fCByZXNwb25zZS5pbmNsdWRlcygnJCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXh0JykudGV4dENvbnRlbnQgPSByZXNwb25zZTtcbiAgICAgICAgICAgIG1lc3NhZ2VRdWV1ZS5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGJnLmFkZChyZXNwb25zZSk7XG4gICAgICAgICAgICB2YXIgcmVzID0gcmVzcG9uc2UucmVwbGFjZSgvWyRdL2csIFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyA9IFwiICsgTnVtYmVyLnBhcnNlRmxvYXQocmVzKSk7XG4gICAgICAgICAgICBiYWxhbmNlTk4gPSBiYWxhbmNlTi50b0ZpeGVkKDEpIC0gTnVtYmVyLnBhcnNlRmxvYXQocmVzKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhbGFuY2VOTiA9ICcgKyBiYWxhbmNlTk4pO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSAnJCcgKyBiYWxhbmNlTk4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFuY2UnKS50ZXh0Q29udGVudCA9IGJhbGFuY2U7XG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3B1c2hlZCB0byBtZXNzYWdlUXVldWU6ICcgKyBtZXNzYWdlUXVldWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nhbm5vdCBhZGQgb3IgYnV5IGl0ZW0gd2l0aG91dCBzZWxlY3RpbmcgcHJpY2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KTtcblxuY29uc3QgaW52QnRubiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZCdG4nKTtcbmludkJ0bm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgICAgICBrZXk6IG1lc3NhZ2VRdWV1ZVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnc3luY2VkJyk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52JykudGV4dENvbnRlbnQgPSBtZXNzYWdlUXVldWU7XG5cblxuICAgIC8qXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW52TXNnXCJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbmVkIGludicgKyByZXNwb25zZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52JykudGV4dENvbnRlbnQgPSByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgKi9cbn0pO1xuXG4vKlxuXG4gKi9cblxuICAvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./popup.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./popup.js"]();
/******/ 	
/******/ })()
;