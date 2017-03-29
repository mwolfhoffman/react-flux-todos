import React from 'react'

import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/todoStore'

export default class Todo extends React.Component {
    constructor() {
        super()
        // this.deleteTodo=this.deleteTodo().bind(this)
    }

    deleteTodo(id) {
        console.log('in the component? ', id)
        TodoActions.deleteTodo(id)
    }
    render() {
        let that = this
        return (
            <p 
            id={this.props.key} 
            text={this.props.text} 
            onClick={()=>{this.deleteTodo(this.props.id)}}>
            {this.props.text}
            </p>
        )
    }
}