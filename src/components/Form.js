import React from 'react'
import uuid from 'uuid'

import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/todoStore'

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    createTodo(text){
        let todo={
            completed: false,
            id: uuid(),
            text
        }
        TodoActions.createTodo(todo)
    }
    render() {
        let input; 
        return (
            <center>  
            <form
                onSubmit={(e) => { 
                    e.preventDefault();
                    var data = input.value 
                    input.value = '';
                    this.createTodo(data);
                }
                
                }>
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