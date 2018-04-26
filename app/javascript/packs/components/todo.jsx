import React from 'react'

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { todo: props.todo, isEdit: false }
  }
  editMode() {
    this.setState({ isEdit: true })
  }
  updateTodo(todo) {
    this.setState({ todo })
  }
  save() {
    const { handleUpdateTodo } = this.props
    const { todo } = this.state
    this.setState({ isEdit: false })
    handleUpdateTodo(todo)
  }
  render() {
    const { todo, isEdit } = this.state
    return (
      <li
        className="list-group-item"
        onClick={() => this.editMode()}
      >
        {isEdit
          ?
          <div className="input-group">
            <input
              type="text"
              defaultValue={todo}
              onChange={e => this.updateTodo(e.target.value)}
              className="form-control"
              autoFocus
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => this.save()}
              >
                保存
              </button>
            </div>
          </div>
          : todo}
      </li>
    )
  }
}