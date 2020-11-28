"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    //metodo constructor
    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      //metodo para adicionar Todo
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList(); //instaciação de método

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodo();
};
