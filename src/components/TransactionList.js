import React from 'react'
import { useSelector } from 'react-redux'

export default function TransactionList() {

    const transactions = useSelector(state => state.transactions.transactions)

    const renderedTransactions = transactions.map(transaction => (
        <div key={transaction.id} className='card'>
            <h1>{transaction.title}</h1>
            <p>{transaction.amount}</p>
        </div>
    ))

  return (
    <div>
        <h3>History</h3>
        {renderedTransactions}
    </div>
  )
}
