import React, { Component } from 'react'

class AddExpense extends Component {
  state = {
    description: '',
    price: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addExpense(this.state)
    this.setState({
      description: '',
      price: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="description" onChange={this.handleChange} placeholder="description" value={this.state.description}/>
        <input type="number" id="price" onChange={this.handleChange}  placeholder="0" value={this.state.price}/>
        <button>Add Expense</button>
      </form>
    )
  }
}

export default AddExpense
