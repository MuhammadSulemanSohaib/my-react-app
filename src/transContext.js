import React, { createContext, useReducer } from "react"

import TransactionReducer from "./transReducer"

const initialTransaction = [
    {amount: +500 , desc: "Cash"},
    {amount: -50  , desc: "Book"},
    {amount: +100 , desc: "GST" },
    {amount: -200 , desc: "Camera"}
]

export const TransactionContext = createContext(initialTransaction)

export const TransactionProvider = ({children})=>{
    
    let [state, dispatch] = useReducer(TransactionReducer,initialTransaction)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount:transObj.amount,
                desc:transObj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transaction:state,
            addTransaction}}>
                {children}
        </TransactionContext.Provider>
    )
}