import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    todoItems: "",
  };

  handleOnChange = (e) => {
    this.setState({ todoItems: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.props.handleInput(this.state.todoItems);
    this.setState({ todoItems: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            name="item"
            value={this.state.todoItems}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
