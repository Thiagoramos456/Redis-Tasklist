"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const mockTasks = [\n        {\n            id: 1,\n            title: \"Task 1\",\n            completed: false\n        },\n        {\n            id: 2,\n            title: \"Task 2\",\n            completed: true\n        }\n    ];\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockTasks);\n    const handleCheck = (taskId)=>{\n        const newTasks = [\n            ...tasks\n        ];\n        const selectedTask = newTasks.find((x)=>x.id == taskId);\n        selectedTask.completed = !selectedTask.completed;\n        setTasks(newTasks);\n    };\n    const handleDelete = (taskId)=>{\n        const newTasks = [\n            ...tasks\n        ];\n        const selectedTask = newTasks.filter((x)=>x.id != taskId);\n        setTasks(newTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Checklist\"\n            }, void 0, false, {\n                fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks && tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: ()=>handleCheck(task.id),\n                                checked: task.completed,\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thiagoramos456/repos/Redis-Tasklist/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YTe/5E52oIFp3DpUaSLJQTsFiRU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNQyxZQUFZO1FBQ2hCO1lBQ0VDLElBQUk7WUFDSkMsT0FBTztZQUNQQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsV0FBVztRQUNiO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUNFO0lBRW5DLE1BQU1NLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsV0FBVztlQUFJSjtTQUFNO1FBRTNCLE1BQU1LLGVBQWVELFNBQVNFLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFVixFQUFFLElBQUlNO1FBQ2xERSxhQUFhTixTQUFTLEdBQUcsQ0FBQ00sYUFBYU4sU0FBUztRQUVoREUsU0FBU0c7SUFDWDtJQUVBLE1BQU1JLGVBQWUsQ0FBQ0w7UUFDcEIsTUFBTUMsV0FBVztlQUFJSjtTQUFNO1FBRTNCLE1BQU1LLGVBQWVELFNBQVNLLE1BQU0sQ0FBQyxDQUFDRixJQUFNQSxFQUFFVixFQUFFLElBQUlNO1FBRXBERixTQUFTRztJQUNYO0lBRUEscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VaLFNBQ0NBLE1BQU1hLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FDQ0MsVUFBVSxJQUFNZixZQUFZWSxLQUFLakIsRUFBRTtnQ0FDbkNxQixTQUFTSixLQUFLZixTQUFTO2dDQUN2Qm9CLE1BQUs7Ozs7OzswQ0FFUCw4REFBQ0M7MENBQUdOLEtBQUtoQixLQUFLOzs7Ozs7MENBQ2QsOERBQUN1QjswQ0FBTzs7Ozs7Ozt1QkFQRFAsS0FBS2pCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhNUI7R0FwRHdCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgbW9ja1Rhc2tzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUobW9ja1Rhc2tzKTtcblxuICBjb25zdCBoYW5kbGVDaGVjayA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrcyA9IFsuLi50YXNrc107XG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBuZXdUYXNrcy5maW5kKCh4KSA9PiB4LmlkID09IHRhc2tJZCk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlZCA9ICFzZWxlY3RlZFRhc2suY29tcGxldGVkO1xuXG4gICAgc2V0VGFza3MobmV3VGFza3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrcyA9IFsuLi50YXNrc107XG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBuZXdUYXNrcy5maWx0ZXIoKHgpID0+IHguaWQgIT0gdGFza0lkKTtcblxuICAgIHNldFRhc2tzKG5ld1Rhc2tzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxPkNoZWNrbGlzdDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHt0YXNrcyAmJlxuICAgICAgICAgIHRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVjayh0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cD57dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwibW9ja1Rhc2tzIiwiaWQiLCJ0aXRsZSIsImNvbXBsZXRlZCIsInRhc2tzIiwic2V0VGFza3MiLCJoYW5kbGVDaGVjayIsInRhc2tJZCIsIm5ld1Rhc2tzIiwic2VsZWN0ZWRUYXNrIiwiZmluZCIsIngiLCJoYW5kbGVEZWxldGUiLCJmaWx0ZXIiLCJtYWluIiwiaDEiLCJ1bCIsIm1hcCIsInRhc2siLCJsaSIsImlucHV0Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwidHlwZSIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});