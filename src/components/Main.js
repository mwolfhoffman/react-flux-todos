require('normalize.css/normalize.css');
require('styles/App.css');

import rootRef from '../config/data-adapter'

//libs
import React from 'react';

import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/todoStore'
//components
import Title from './Title'
import Form from './Form'
import Todo from './Todo'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  TodoActions.initializeStore()
}

componentWillUnmount() {
  TodoStore.removeListener("change", () => { console.log('change listener removed') })
}

renderTodos() {
  if (this.state.todos) {
    return (<ul>
      {TodoComponents}
    </ul>)
  } else {
    return (<p>You don't have any todos</p>)
  }
}

render() {
  let that = this;
  const { todos } = this.state
  const TodoComponents = todos.map((todo) => {
    return <Todo key={todo.id} id={todo.id} text={todo.text} />
  })


  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <Title />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
          <Form />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
      
          {
            this.state.todos.length ?
              <ul>{TodoComponents} </ul> : <p className="text-center">You have nothing to do!</p>
          }
        </div>
      </div>

    </div>
  );
}
}

AppComponent.defaultProps = {
};

export default AppComponent;
