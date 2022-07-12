import React from 'react'
import './IncomeExpenses.css'


export default function CardView({title,amount}) {
  return (
    <div className='card'>
        <div className='card__details'>
            <h6>{title}</h6>
            <h1>{amount}</h1>
        </div>
    </div>
  )
}
