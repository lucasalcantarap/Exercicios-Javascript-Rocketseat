class TodoList {
    constructor(){ //metodo constructor
        this.todos = []; 
    }


addTodo() { //metodo para adicionar Todo
    this.todos.push('Novo todo');
    console.log(this.todos);
    }
}

const MinhaLista = new TodoList(); //instaciação de método

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}