import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddTransactionForm from "./AddTransactionForm";
import CardView from "./CardView";
import "./IncomeExpenses.css";
import { transactionAdded } from "../../features/counter/counterSlice";


export default function IncomeExpenses() {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState('')
  const [amount, setAmount] = useState(0)

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if(title && amount) {
        dispatch(
            transactionAdded(title,amount)
        )
    }

    setTitle('')
    setAmount('')
    
  };

  return (
    <div className="income__expenses">
      <div className="balance__detail">
        <h4>Your Balance</h4>
        <h1>$0</h1>
      </div>

      <CardView title="Income" amount="$0" />
      <CardView title="Expense" amount="$0" />

      <button onClick={handleClickOpen} className="add__transaction__button">
        <i class="fa-solid fa-plus"></i> Add Transactions
      </button>
      <Dialog open={open} handleClose={handleClose}>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">
                Title
              </label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value= {title}
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault02" className="form-label">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                className="form-control"
                id="validationDefault02"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
          <button className="btn btn-primary mx-4" onClick={handleClose}>
                Cancel
              </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
