import React from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  constructor() {
    super()
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
      currentSearched: "",
      notFound: [
        {
          task: "Not Found...",
          id: 15342,
          completed: false,
        },
      ],
    }
  }

  toggleTodos = itemId => {
    this.setState({
      data: this.state.data.map(todo => {
        if (itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    })
  }

  handleInput = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      data: [...this.state.data, newTodo],
    })
    console.log("state", this.state.data)
  }

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(todo => todo.completed === false),
    })
  }
  deleteTodo = todoId => {
    this.setState({
      data: this.state.data.filter(todo => todo.id !== todoId),
    })
  }

  todoSearch = e => {
    this.setState({ currentSearched: e.target.value })
  }

  test = e => {
    console.log("test")
    this.setState({
      data: this.state.data.filter(todo =>
        todo.task.includes(this.state.currentSearched)
      ),
    })
  }

  render() {
    console.log(this.state.data)
    const filteredData = this.state.data.filter(todo =>
      todo.task
        .toLowerCase()
        .includes(this.state.currentSearched.toLocaleLowerCase())
    )
    return (
      <div className='app'>
        <div className='wrapper'>
          <h2 className='todo__title'>Todo App!</h2>
          {console.log(filteredData.length)}
          <TodoForm handleInput={this.handleInput} />
          <input
            className='app_search'
            type='search'
            value={this.state.currentSearched}
            onChange={this.todoSearch}
            placeholder='Search...'
          />
          <TodoList
            data={
              filteredData.length === 0 ? this.state.notFound : filteredData
            }
            toggleTodos={this.toggleTodos}
            clearCompleted={this.clearCompleted}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
