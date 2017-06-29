import React from 'react';
import FontAwesome from 'react-fontawesome';

import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/todoStore';

export default class Todo extends React.Component {
    constructor() {
        super();
    }
    deleteTodo(id) {
        TodoActions.deleteTodo(id);
    }
    render() {
        return (
            <div>
                <div class className="col-sm-3">
                    <FontAwesome
                        name="check"
                    />
                    <FontAwesome
                        name="pencil"
                    />
                    <FontAwesome
                        name="trash"
                    />
                </div>
                <div class className="col-sm-9">
                    <p
                        key={this.props.id}
                        onClick={() => { this.deleteTodo(this.props.id) }}>
                        {this.props.text}

                    </p>
                </div>
            </div>
        )
    }
}