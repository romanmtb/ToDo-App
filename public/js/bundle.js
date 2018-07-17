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

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Task(text) {\n\n  this.id = new Date().getTime().toString();\n  this.text = text;\n\n}\n\nTask.prototype.validate = function(newData) {\n    var data = newData || this;\n    if (!data.text || typeof data.text !== \"string\" || data.text === \"\") {\n      return false;\n    }\n    return true;\n};\n\nTask.prototype.update = function (data) {\n  if (!this.validate(data)) {\n    return false;\n  }\n  Object.keys(data).forEach(function(key){\n    this[key] = data[key];\n  }.bind(this));\n  return this;\n};\n\n\nfunction TaskCounterUI(container, list) {\n\n  this.list = list;\n  this.cacheElements(container);\n  this.bindEvents();\n  this.update();\n\n}\n\nTaskCounterUI.prototype.cacheElements = function (container) {\n  this.container = document.querySelector(container);\n};\n\nTaskCounterUI.prototype.update = function (event) {\n  this.container.textContent = this.list.model.count;\n};\n\nTaskCounterUI.prototype.bindEvents = function () {\n  document.addEventListener(this.list.model.eventKeys.taskAdded, this.update.bind(this));\n  document.addEventListener(this.list.model.eventKeys.taskRemoved, this.update.bind(this));\n};\n\nfunction TaskList(container) {\n\n  this.id = container.replace('#', '');\n  this.tasks = [];\n  this.count = 0;\n\n  this.eventKeys = {\n    taskAdded: this.id + ':task:added',\n    taskUpdated: this.id + ':task:updated',\n    taskRemoved: this.id + ':task:removed'\n  };\n\n  this.events = {\n    taskAdded: new Event(this.eventKeys.taskAdded),\n    taskUpdated: new Event(this.eventKeys.taskUpdated),\n    taskRemoved: new Event(this.eventKeys.taskRemoved)\n  };\n\n}\n\nfunction TaskListUI(container) {\n\n  this.model = new TaskList(container);\n\n  this.cacheElements(container);\n  this.bindEvents();\n  this.renderList();\n\n}\n\nTaskListUI.prototype.cacheElements = function (container) {\n  this.container = document.querySelector(container);\n  this.form = this.container.querySelector(container + '-form');\n  this.form.taskText = this.form.querySelector('input');\n  this.list = this.container.querySelector(container + '-list');\n};\n\nTaskListUI.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', this.addTask.bind(this));\n  document.addEventListener(this.model.eventKeys.taskAdded, this.renderList.bind(this));\n  document.addEventListener(this.model.eventKeys.taskAdded, this.formClearer.bind(this));\n  document.addEventListener(this.model.eventKeys.taskRemoved, this.renderList.bind(this));\n};\n\nTaskListUI.prototype.formClearer = function (event) {\n  this.form.taskText.value = '';\n};\n\nTaskListUI.prototype.addTask = function (event) {\n  event.preventDefault();\n  var text = this.form.querySelector('input').value;\n  var task = new Task(text);\n  this.model.addTask(task);\n};\n\nTaskListUI.prototype.editTask = function (event) {\n  var li = event.target.closest('li');\n  var input = li.querySelector('input');\n\n  li.classList.add('edit-mode');\n  input.focus();\n  input.setSelectionRange(0, input.value.length);\n\n};\n\nTaskListUI.prototype.updateTask = function (event) {\n  var li = event.target.closest('li');\n  var result = this.model.updateTask(li.dataset.id, {\n    text: event.target.value\n  });\n  if(result) {\n    li.classList.remove('edit-mode');\n    var span = li.querySelector('span');\n    span.textContent = result.text;\n  }\n};\n\nTaskListUI.prototype.updateTaskOnKeyPress = function (event) {\n  if ( event.which === 13 ) {\n    this.updateTask.call(this, event);\n  }\n};\n\nTaskListUI.prototype.removeTask = function (event) {\n  if (!event.target.dataset.id) {\n    alert('The task ID is required');\n    return;\n  }\n  var task = this.model.getTask(event.target.dataset.id);\n  var sure = confirm('Delete task \"' + task.text  + '\"?');\n  if (sure) {\n    this.model.removeTask(task);\n  }\n};\n\nTaskListUI.prototype.renderList = function () {\n\n  this.list.innerHTML = '';\n\n  var tasks = this.model.getTasks();\n\n  if (tasks.length < 1) {\n\n    var li = document.createElement('li');\n    li.classList.add('collection-item', 'grey', 'lighten-3');\n\n    var span = document.createElement('span');\n    span.textContent = 'There is no tasks! Take a break...';\n\n    li.appendChild(span);\n\n    this.list.appendChild(li);\n\n    return;\n\n  }\n\n  tasks.forEach(function (task) {\n    this.renderTask(task);\n  }.bind(this));\n\n};\n\nTaskListUI.prototype.renderTask = function (task) {\n\n  var li = document.createElement('li');\n  li.classList.add('collection-item');\n  li.dataset.id = task.id;\n\n  var div = document.createElement('div');\n  div.classList.add('clear');\n\n  var span = document.createElement('span');\n  span.textContent = task.text;\n  div.appendChild(span);\n\n  var input = document.createElement('input');\n  input.classList.add('left');\n  input.setAttribute('type', 'text');\n  input.value = task.text;\n  div.appendChild(input);\n\n  var btnRemove = this.renderButton('removeTask', task.id , 'delete');\n  btnRemove.classList.add('secondary-content');\n  div.appendChild(btnRemove);\n\n  li.appendChild(div);\n\n  this.list.appendChild(li);\n\n  div.addEventListener('click', this.editTask);\n  input.addEventListener('blur', this.updateTask.bind(this));\n  input.addEventListener('keypress', this.updateTaskOnKeyPress.bind(this));\n  btnRemove.addEventListener('click', this.removeTask.bind(this));\n\n};\n\nTaskListUI.prototype.renderButton = function (action, id, text) {\n\n  var btn = document.createElement('a');\n  btn.setAttribute('href', '#');\n  btn.classList.add('grey-text', 'right');\n  btn.dataset.action = action;\n  btn.dataset.id = id;\n\n  var btn = document.createElement('a');\n  btn.setAttribute('href', '#');\n  btn.classList.add('grey-text', 'right');\n  btn.dataset.action = action;\n  btn.dataset.id = id;\n\n  // var icon = document.createElement('i');\n  // icon.classList.add('material-icons');\n  // icon.textContent = text;\n  // icon.dataset.action = action;\n  // icon.dataset.id = id;\n  //\n  // btn.appendChild(icon);\n  //\n  // return btn;\n};\n\n\nvar list1 = new TaskListUI('#tasks');\nvar list1Counter = new TaskCounterUI('#tasks-counter', list1);\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });