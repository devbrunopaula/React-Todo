import React, { Component } from "react";
import TodoForm from "./TodoForm";
import "./Todo.css";

export class Todo extends Component {
  render() {
    const { task, id, completed } = this.props.data;
    return (
      <div
        className={`todo${completed ? " completed" : ""}`}
        onClick={() => this.props.toggleTodos(id)}
      >
        <h5 className="todos">{task}</h5>
      </div>
    );
  }
}

export default Todo;
