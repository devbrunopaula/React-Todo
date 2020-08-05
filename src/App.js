import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Paint the House",
          id: 15288170773423,
          completed: false,
        },
      ],
    };
  }

  toggleTodos = (itemId) => {
    console.log("ItemId", itemId);
    // toggle completed
    // 1st if this items matches
    this.setState({
      data: this.state.data.map((todo) => {
        if (itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  handleInput = (todo) => {
    console.log("handle", todo);
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      data: [...this.state.data, newTodo],
    });
    console.log("state", this.state.data);
  };

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter((todo) => todo.completed === false),
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm handleInput={this.handleInput} />
        <TodoList
          data={this.state.data}
          toggleTodos={this.toggleTodos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
