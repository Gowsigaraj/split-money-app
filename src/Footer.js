import React, { useState } from 'react'
import "./Footer.css"

const Footer = ({ isActive, handleArr, closebtn }) => {
    const [picName, setPicName] = useState("");
    const [pic, setPic] = useState("./image/img-3.jpeg");


    const handleAddFriend = (e) => {
        e.preventDefault()
        const newObj = { picName, pic, balanceAmount: 0, id: Date.now() }

        handleArr(newObj)

    }


    return (
        <div className={`${isActive ? "block" : "none"} `}>
            <div className='add_list'>
                <div>
                    <form className="add-card" onSubmit={handleAddFriend}>
                        <div className='list'>
                            <p>👫 Friend name</p>
                            <input type='text' name="frdNAME" id="frdName" value={picName} onChange={(e) => setPicName(e.target.value)}></input>
                        </div>
                        <div className='frd_Pic'>
                            <p>🌄 Image URL</p>
                            <input type='text' name="frdNAME" id="frdName" value={pic} onChange={(e) => setPic(e.target.value)}></input>
                        </div>
                        <div className='addBtn'>
                            <button>Add</button>
                        </div>
                    </form>

                </div>
            </div>


            <button className={isActive ? "close" : "none"} onClick={closebtn}>Close</button>

        </div >
    )
}

export default Footer