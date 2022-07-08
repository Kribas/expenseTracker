import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { transactionAdded } from '../features/counter/counterSlice'

export default function AddTransactions() {

    const dispatch = useDispatch()


    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)


    const onSubmit = e => {
        e.preventDefault()
    }

    const addTransaction = () => {
        if(text && amount) {
            dispatch(
                transactionAdded(text,amount)
            )
        }
    }

  return (
    <div>
        <h2>Add new transaction</h2>


        <form className='d-flex flex-column' onSubmit={onSubmit}>
            <label htmlFor='text'>Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />

            <label htmlFor='amount'>Amount(negative - expense, positive - income)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={addTransaction} className='btn btn-success'>Add Transaction</button>
        </form>
    </div>
  )
}
