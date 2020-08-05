import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    const { data, clearCompleted } = this.props;

    return (
      <div>
        {data?.map((todo) => (
          <Todo
            key={todo.id}
            data={todo}
            toggleTodos={this.props.toggleTodos}
          />
        ))}
        <button onClick={clearCompleted}>Clear</button>
      </div>
    );
  }
}

export default TodoList;
