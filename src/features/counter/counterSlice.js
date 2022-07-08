import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  transactions: []
}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
      transactionAdded: {
        reducer(state,action) {
          state.transactions.push(action.payload)
        },
        prepare(title,amount) {
          return {
            payload: {
              id: nanoid(),
              title: title,
              amount: +amount
            }
          }
        }
      }
    }
})

export default transactionsSlice.reducer
export const {transactionAdded} = transactionsSlice.actions