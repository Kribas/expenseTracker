import React from 'react';
import './App.css';
import AddTransactions from './components/AddTransactions';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Balance/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    </div>
  );
}

export default App;
