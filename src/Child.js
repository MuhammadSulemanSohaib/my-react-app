import React, { useContext, useState } from "react";

import { TransactionContext } from "./transContext";

export default function App(){

    let {transaction , addTransaction} = useContext(TransactionContext)

    let [newDesc, setDesc] = useState("")
    let [newAmount, setAmount] = useState(0)

    const handleAddition = (event) =>{
        event.preventDefault()
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for(var i = 0; i < transaction.length; i++){
            if(transaction[i].amount > 0)
            income += transaction[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for(var i = 0; i < transaction.length; i++){
            if(transaction[i].amount < 0)
            expense += transaction[i].amount
        }
        return expense;
    }

    return(

        <div className="container">
        <h2 className="text-center">Expense Tracker</h2>
        <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

        <div className="container-1">
        <h3>INCOME <br /> ${getIncome()}</h3>
        <h3>EXPENSE <br /> ${getExpense()}</h3>
        </div>

        <h3>History</h3>
        <hr />

        <ul className="transaction-list">
            {transaction.map((transObj, ind)=>{
                return(
            <li>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
            </li>
                )
            })}
        </ul>

        <h3>Add new transaction</h3>
        <hr />

        <form className="form" onSubmit={handleAddition}>

            <label>
                <h3>Text <br />
                <input type="text" value={newDesc} placeholder="Enter text..." onChange={(ev)=>setDesc(ev.target.value)} required/>   
                </h3>
            </label>

        <label>
            <h3>Amount <br /> (negative-expense, positive-income)
            <input placeholder="Enter amount..." value={newAmount} type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
            </h3>
        </label>

        <input type="submit" value="Add Transaction" />
        
        </form>

    </div>
    )
}