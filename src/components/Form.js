import React from 'react'

import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/todoStore'

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    createTodo(todo){
        console.log('yup in the component workin')
        // debugger 
        TodoActions.createTodo(todo)
    }
    render() {
        let input; 
        return (
            <center>  
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    this.createTodo(input.value)
                    input.value = ''
                }}>
                <input type="text"
                className="form"
                    ref={node => { input = node }}
                    placeholder="Enter Todo"
                />
            </form >
            </center>
        )
    }
}