import React, { Component } from "react"

class TodoForm extends Component {
  state = {
    todoItems: "",
    error: "",
  }

  handleOnChange = e => {
    this.setState({ todoItems: e.target.value })
  }

  submitTodo = e => {
    e.preventDefault()
    if (this.state.todoItems) {
      this.props.handleInput(this.state.todoItems)
      this.setState({
        todoItems: "",
        error: "",
      })
    } else {
      alert("You must Enter a Todo")
      this.setState({
        error: "Please Enter a Todo",
      })
    }
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.submitTodo}>
          <input
            // className='form__input'
            className={
              this.state.error === "Please Enter a Todo"
                ? "form__input-error "
                : "form__input"
            }
            type='text'
            name='item'
            value={this.state.todoItems}
            onChange={this.handleOnChange}
            placeholder={
              this.state.error ? this.state.error : "Enter a Todo..."
            }
          />
          <button className='form__button' type='submit'>
            ADD
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm
