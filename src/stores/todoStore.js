import EventEmitter from 'events'
import dispatcher from '../dispatcher'



class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = []
  }
  getAll() {
    return this.todos
  }
  createTodo(text) {
    console.log('todo is inthe store ', text )
    this.todos.push({
      text,
      completed: false,
      id: Date.now()
    })
    this.emit("change")
  }

  deleteTodo(id){
    this.todos.map((t,i)=>{
     if(t.id===id){ this.todos.splice(i,1)} 
    })
    this.emit("change")
  }

  handleActions(action) {
    console.log('todoStore recieved an action', action)
    switch (action.type) {
      case 'CREATE_TODO':
        this.createTodo(action.text)
        console.log('the todos', this.todos)
        case 'DELETE_TODO':
        this.deleteTodo(action.id)
      default:
        break;

    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))

// window.todoStore = todoStore
// window.dispatcher = dispatcher
export default todoStore
