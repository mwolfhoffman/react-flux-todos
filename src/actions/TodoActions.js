import dispatcher from '../dispatcher'

export function createTodo(text) { 
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    })
}

export function deleteTodo(id) {
    console.log('its in the ACTIONS folder')
    dispatcher.dispatch({
        type: 'DELETE_TODO', 
        id
    })
}