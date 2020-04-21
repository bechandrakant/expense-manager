import React, { Component } from 'react';
import Expenses from './Expenses'
import AddExpense from './AddExpense'

class App extends Component {
  state = {
    expenses: [
      { id: 1, description: 'Bought Milk', price: 33 }
    ]
  }

  addExpense = (expense) => {
    expense.id = Math.random()
    this.setState({
      expenses: [...this.state.expenses, expense]
    })
  }

  deleteExpense = (id) => {
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    this.setState({
      expenses: newExpenses
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Expense Manager Application</h1>
        <AddExpense addExpense={this.addExpense} />
        <Expenses expenses={this.state.expenses} deleteExpense={this.deleteExpense}/>
      </div>
    );
  }
}

export default App;
