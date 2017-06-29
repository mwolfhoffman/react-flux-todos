import EventEmitter from 'events'
import dispatcher from '../dispatcher'


class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
  }
  getAll() {
    return this.todos;
  }
  createTodo(todo) {
    this.todos.push(todo);
    this.emit("change");
  }

  deleteTodo(id) {
    this.todos.map((t, i) => {
      if (t.id === id) { this.todos.splice(i, 1); }
    })
    this.emit("change");
  }

  setInitialStore(store) {
    this.todos = Object.values(store);
    this.emit("change");
}

  handleActions(action) {
    console.log('todoStore recieved an action', action);
    switch (action.type) {
      case 'CREATE_TODO':
        this.createTodo(action.todo)
      case 'DELETE_TODO':
        this.deleteTodo(action.id)
      case 'SET_INITIAL_STORE':
          console.log('setting initial store');
          this.setInitialStore(action.snapshot)
      default:
        break;

    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
