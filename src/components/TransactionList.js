import React from 'react'
import { useSelector } from 'react-redux'
import TimeAgo from './TimeAgo'

export default function TransactionList() {

    const transactions = useSelector(state => state.transactions.transactions)

    const renderedTransactions = transactions.map(transaction => (
        <div key={transaction.id} className='card d-flex flex-row align-items-center justify-content-between'>
          <div className='transaction__detail'>
            <h6>{transaction.title}</h6>
            <TimeAgo timestamp={transaction.date}/>
          </div>

          <div className='transaction__amount'>
            <p>{transaction.amount}</p>
          </div>
        </div>
    ))

  return (
    <div className='transactions__list'>
        {renderedTransactions}
    </div>
  )
}
