import React, { useState } from 'react'
import "./Header.css"


const Header = ({ value, selectMember, isnonActive, nonact }) => {


    return (
        <div className='row'>
            <div className="img_sec">
                <div className='image'>
                    <img src={value.pic}></img>

                </div>
                <div className='img_con'>
                    <h2>{value.picName}</h2>
                    {value.balanceAmount < 0 ? <p className='red'>{`you owe ${value.picName} a ${value.balanceAmount}`}</p> : (
                        value.balanceAmount == 0 ? <p className='blue'>{`you and ${value.picName} are even`}</p> : <p className='green'>{` ${value.picName} owes you ${value.balanceAmount}`}</p>
                    )}



                </div>
                <div className='btn'>
                    <button className={`${isnonActive ? "none" : "block"} btns`} onClick={() => selectMember(value.id)} >Select</button>
                    <button className={`${isnonActive ? "block" : "none"} btns`} onClick={nonact}>Close</button>

                </div>
            </div>
        </div>
    )
}

export default Header