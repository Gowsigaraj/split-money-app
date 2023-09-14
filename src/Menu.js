import React, { useState } from 'react'
import "./Menu.css"

const Menu = ({ member, handleSplit, isnonActive, nonact }) => {
    const [billValue, setBillValue] = useState(0);
    const [yourexpense, setYourExpense] = useState(0);
    const totalBill = billValue - yourexpense;

    const menuSubmit = (e) => {
        e.preventDefault();
        const Selectuser = e.target.elements.Selectedvalue.value;
        nonact();

        handleSplit(member.id, Selectuser, totalBill);

    }



    console.log(member);
    return (
        <div className={isnonActive ? "block" : "none"}>
            <form className="rows" onSubmit={menuSubmit} >
                <div className='menu_sec'>
                    <h2>split a bill with {member ? member.picName : ""} </h2>
                    <div className='bill'>
                        <p> 💰 Bill value</p>
                        <input type='text' name="billValue" id="billValue" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))}></input>
                    </div>
                    <div className='expense'>
                        <p>🧍‍♀️ Your expense</p>
                        <input type='text' name="expense" id="expense" value={yourexpense} onChange={(e) => setYourExpense(Number(e.target.value))}></input>
                    </div>
                    <div className='opp_expense'>
                        <p>👫 {member ? member.picName : ""} expense</p>
                        <input type='text' name="opp_expense" id="opp_expense" value={totalBill}></input>
                    </div>
                    <div className='paybill'>
                        <p>🤑 Who is paying the bill</p>
                        <select name='Selectedvalue'>
                            <option value="you">You</option>
                            <option value={member ? member.picName : ""}>{member ? member.picName : ""}</option>
                        </select>
                    </div>
                    <div className="split_bill">
                        <button type="submit">Split bill</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Menu