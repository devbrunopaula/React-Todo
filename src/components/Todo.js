import React, { Component } from "react"
import "./Todo.css"

export class Todo extends Component {
  render() {
    const { task, id, completed } = this.props.data
    return (
      <div>
        <h5
          className={`todo${completed ? " completed" : ""}`}
          onClick={() => this.props.toggleTodos(id)}
        >
          {task}
        </h5>
        {completed ? null : (
          <button
            onClick={() => this.props.deleteTodo(id)}
            className='todo__delete'
          >
            Delete
          </button>
        )}
      </div>
    )
  }
}

export default Todo
