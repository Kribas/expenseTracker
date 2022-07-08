import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {

    const transactions = useSelector(state => state.transactions.transactions)

    const amounts = transactions.map((transaction) => transaction.amount)

    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2)

  return (
    <div>
        <h4>Your Balance</h4>
        <h1>$ {total}</h1>
    </div>
  )
}
