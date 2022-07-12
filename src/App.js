import React from 'react';
import './App.css';
import AddTransactions from './components/AddTransactions';
import Balance from './components/Balance';
import Header from './components/header/Header';
import IncomeExpenses from './components/incomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        {/* <Balance/>
        <TransactionList/>
        <AddTransactions/> */}
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <Transactions/>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
            <IncomeExpenses/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
