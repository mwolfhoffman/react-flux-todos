import dispatcher from '../dispatcher'
import rootRef from '../config/data-adapter'


export function initializeStore() {
    rootRef.ref('todos').once('value', snapshot => {
        dispatcher.dispatch({
            type: 'SET_INITIAL_STORE',
            snapshot:snapshot.val()
        })
    })
}

export function createTodo(todo) {
    rootRef.ref(`/todos/${todo.id}`).set(todo)
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        todo
    })
}

export function deleteTodo(id) {
    rootRef.ref(`/todos/${id}`).set(null)
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    })
}

