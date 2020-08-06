import React, { Component } from "react"
import Todo from "./Todo"

export class TodoList extends Component {
  render() {
    const { data, clearCompleted } = this.props
    console.log("data", data)

    return (
      <div className='todo__List'>
        {data?.map(todo => (
          <Todo
            key={todo.id}
            data={todo}
            toggleTodos={this.props.toggleTodos}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
        {data.length === 0 ? (
          ""
        ) : (
          <button className='todo__clear' onClick={clearCompleted}>
            CLEAR
          </button>
        )}
      </div>
    )
  }
}

export default TodoList
