import React from 'react'
import Todo from './components/todo'

export default class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: props.todos }
  }
  addTodo() {
    const { todos } = this.state
    todos.push('追加したよ')
    this.setState({ todos })
  }
  handleUpdateTodo(todo, i) {
    const { todos } = this.state
    todos[i] = todo
    this.setState({ todos })
  }
  render() {
    const { todos } = this.state
    return (
      <React.Fragment>
        <ul className="list-group">
          {todos.map((todo, i) =>
            <Todo
              key={todo}
              todo={todo}
              handleUpdateTodo={todo => this.handleUpdateTodo(todo, i)}
            />
          )}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => this.addTodo()}>
          TODO追加
        </button>
      </React.Fragment>
    )
  }
}