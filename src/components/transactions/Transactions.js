import React from 'react'
import TransactionList from '../TransactionList'
import './Transactions.css'

export default function Transactions() {
  return (
    <div className='transactions'>
        <h5>Transactions</h5>
        <TransactionList/>
    </div>
  )
}
