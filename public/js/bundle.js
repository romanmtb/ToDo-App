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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/Task.js":
/*!*****************************!*\
  !*** ./application/Task.js ***!
  \*****************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nclass Task {\n\tconstructor(text) {\n\t\tthis._id = new Date().getTime().toString();\n\t\tthis.text = text;\n\t}\n\n\tget id() {\n\t\treturn this._id;\n\t}\n\n\tvalidate(newData) {\n\t\tlet data = newData || this;\n\t\treturn !(!data.text || typeof data.text !== 'string' || data.text === '');\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./application/Task.js?");

/***/ }),

/***/ "./application/TaskCounterUI.js":
/*!**************************************!*\
  !*** ./application/TaskCounterUI.js ***!
  \**************************************/
/*! exports provided: TaskCounterUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskCounterUI\", function() { return TaskCounterUI; });\nclass TaskCounterUI {\n\tconstructor(container, list) {\n\t\tthis.list = list;\n\t\tthis.cacheElements(container);\n\t\tthis.bindEvents();\n\t\tthis.update();\n\t}\n\n\tcacheElements(container) {\n\t\tthis.container = document.querySelector(container);\n\t}\n\n\tbindEvents() {\n\t\tdocument.addEventListener(\n\t\t\tthis.list.model.eventKeys.taskAdded,\n\t\t\tthis.update.bind(this)\n\t\t);\n\t\tdocument.addEventListener(\n\t\t\tthis.list.model.eventKeys.taskRemoved,\n\t\t\tthis.update.bind(this)\n\t\t);\n\t}\n\n\tupdate() {\n\t\tthis.container.textContent = this.list.model.count;\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./application/TaskCounterUI.js?");

/***/ }),

/***/ "./application/TaskList.js":
/*!*********************************!*\
  !*** ./application/TaskList.js ***!
  \*********************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskList\", function() { return TaskList; });\nclass TaskList {\n\tconstructor(container) {\n\t\tthis.id = container.replace('#', '');\n\t\tthis.count = 0;\n\t\tthis._tasks = [];\n\n\t\tthis.eventKeys = {\n\t\t\ttaskAdded: this.id + ':task:added',\n\t\t\ttaskRemoved: this.id + ':task:removed',\n\t\t};\n\n\t\tthis.events = {\n\t\t\ttaskAdded: new Event(this.eventKeys.taskAdded),\n\t\t\ttaskRemoved: new Event(this.eventKeys.taskRemoved),\n\t\t};\n\t}\n\n\taddTask(task) {\n\t\tif (!task.validate()) return;\n\t\tthis._tasks.push(task);\n\t\tthis.events.taskAdded.task = task;\n\t\tthis.events.taskAdded.count = ++this.count;\n\t\tdocument.dispatchEvent(this.events.taskAdded);\n\t\treturn task;\n\t}\n\n\tremoveTask(task) {\n\t\tif (!task.validate()) return;\n\t\tlet idx = this._tasks.indexOf(task);\n\t\tthis._tasks.splice(idx, 1);\n\t\tthis.events.taskRemoved.count = --this.count;\n\t\tdocument.dispatchEvent(this.events.taskRemoved);\n\t}\n\n\tget tasks() {\n\t\treturn this._tasks;\n\t}\n\n\tgetTask(id) {\n\t\treturn this._tasks.find(task => task.id === id);\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./application/TaskList.js?");

/***/ }),

/***/ "./application/TaskListUI.js":
/*!***********************************!*\
  !*** ./application/TaskListUI.js ***!
  \***********************************/
/*! exports provided: TaskListUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskListUI\", function() { return TaskListUI; });\n/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList */ \"./application/TaskList.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./application/Task.js\");\n\n\n\nclass TaskListUI {\n\tconstructor(container) {\n\t\tthis.model = new _TaskList__WEBPACK_IMPORTED_MODULE_0__[\"TaskList\"](container);\n\n\t\tthis.cacheElements(container);\n\t\tthis.bindEvents();\n\t\tthis.renderList();\n\t}\n\n\tcacheElements(container) {\n\t\tthis.container = document.querySelector(container);\n\t\tthis.form = this.container.querySelector(container + '-form');\n\t\tthis.form.taskText = this.form.querySelector('input');\n\t\tthis.list = this.container.querySelector(container + '-list');\n\t}\n\n\tbindEvents() {\n\t\tthis.form.addEventListener('submit', this.addTask.bind(this));\n\t\tdocument.addEventListener(\n\t\t\tthis.model.eventKeys.taskAdded,\n\t\t\tthis.renderList.bind(this)\n\t\t);\n\t\tdocument.addEventListener(\n\t\t\tthis.model.eventKeys.taskAdded,\n\t\t\tthis.formClearer.bind(this)\n\t\t);\n\t\tdocument.addEventListener(\n\t\t\tthis.model.eventKeys.taskRemoved,\n\t\t\tthis.renderList.bind(this)\n\t\t);\n\t}\n\n\tformClearer() {\n\t\tthis.form.taskText.value = '';\n\t}\n\n\taddTask(event) {\n\t\tevent.preventDefault();\n\t\tlet inputText = this.form.querySelector('input').value;\n\t\tif (inputText === '') return;\n\n\t\tlet task = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"Task\"](inputText);\n\t\tthis.model.addTask(task);\n\t\tthis.form.querySelector('input').focus();\n\t}\n\n\tupdateTaskOnKeyPress(event) {\n\t\tif (event.which === 13) {\n\t\t\tthis.addTask.call(this, event);\n\t\t}\n\t}\n\n\tremoveTask(event) {\n\t\tif (!event.target.dataset.id) {\n\t\t\tconsole.warn('Task ID is required');\n\t\t\treturn;\n\t\t}\n\t\tlet task = this.model.getTask(event.target.dataset.id);\n\t\tlet sure = confirm('Delete task \"' + task.text + '\"?');\n\t\tif (sure) this.model.removeTask(task);\n\t}\n\n\trenderList() {\n\t\tthis.list.innerHTML = '';\n\n\t\tlet tasks = this.model.tasks;\n\n\t\tif (tasks.length < 1) {\n\t\t\tlet li = document.createElement('li');\n\t\t\tli.classList.add('collection-item', 'grey', 'lighten-3');\n\t\t\tlet span = document.createElement('span');\n\t\t\tspan.textContent = 'There is no tasks! Take a break ☕️';\n\t\t\tli.appendChild(span);\n\t\t\tthis.list.appendChild(li);\n\t\t}\n\n\t\ttasks.forEach(\n\t\t\tfunction(task) {\n\t\t\t\tthis.renderTask(task);\n\t\t\t}.bind(this)\n\t\t);\n\t}\n\n\trenderTask(task) {\n\t\tlet li = document.createElement('li');\n\t\tli.classList.add('collection-item');\n\t\tli.dataset.id = task.id;\n\n\t\tlet div = document.createElement('div');\n\t\tdiv.classList.add('clear');\n\n\t\tlet span = document.createElement('span');\n\t\tspan.textContent = task.text;\n\t\tdiv.appendChild(span);\n\n\t\tlet input = document.createElement('input');\n\t\tinput.classList.add('left');\n\t\tinput.setAttribute('type', 'text');\n\t\tinput.value = task.text;\n\t\tdiv.appendChild(input);\n\n\t\tlet btnRemove = this.renderButton('removeTask', task.id, 'delete');\n\t\tbtnRemove.classList.add('secondary-content');\n\t\tdiv.appendChild(btnRemove);\n\n\t\tli.appendChild(div);\n\n\t\tthis.list.appendChild(li);\n\n\t\tinput.addEventListener('keypress', this.updateTaskOnKeyPress.bind(this));\n\t\tbtnRemove.addEventListener('click', this.removeTask.bind(this));\n\t}\n\n\trenderButton(action, id, text) {\n\t\tlet btn = document.createElement('a');\n\t\tbtn.setAttribute('href', '#');\n\t\tbtn.classList.add('grey-text', 'right');\n\t\tbtn.dataset.action = action;\n\t\tbtn.dataset.id = id;\n\n\t\tlet icon = document.createElement('i');\n\t\ticon.classList.add('material-icons');\n\t\ticon.textContent = text;\n\t\ticon.dataset.action = action;\n\t\ticon.dataset.id = id;\n\n\t\tbtn.appendChild(icon);\n\n\t\treturn btn;\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./application/TaskListUI.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TaskListUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListUI */ \"./application/TaskListUI.js\");\n/* harmony import */ var _TaskCounterUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCounterUI */ \"./application/TaskCounterUI.js\");\n\n\n\nlet list = new _TaskListUI__WEBPACK_IMPORTED_MODULE_0__[\"TaskListUI\"]('#tasks');\nlet listCounter = new _TaskCounterUI__WEBPACK_IMPORTED_MODULE_1__[\"TaskCounterUI\"]('#tasks-counter', list);\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });