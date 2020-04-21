import React from 'react'

const Expenses = ({ expenses, deleteExpense }) => {
  
  const expenseList = expenses.map(expense => {
    return (
      <div key={expense.id}>
        <h3>{ expense.description }</h3> 
        <h3>{ expense.price } </h3>
        <button onClick={() => deleteExpense(expense.id)}> X </button>
      </div>
    )
  })
  
  return (
    <div>
      { expenseList }
    </div>
  )
}

export default Expenses