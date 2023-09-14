import React, { useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'


const App = () => {
  const [member, setMember] = useState();
  const [isActive, setActive] = useState(false)
  const [isnonActive, setnonActive] = useState(false)
  const nonact = () => {
    setnonActive(!isnonActive)
  }
  const oldarray = [
    {
      id: 1,
      pic: "./image/img-3.jpeg",
      picName: "Clark",
      balanceAmount: 1,
    },
    {
      id: 2,
      pic: "./image/img-3.jpeg",
      picName: "Sarh",
      balanceAmount: 0,
    },
    {
      id: 3,
      pic: "./image/img-3.jpeg",
      picName: "Antony",
      balanceAmount: -1,
    },
  ]
  const [arr, setArr] = useState([...oldarray])

  const handleArr = (newObj) => {
    setArr((arr) => [...arr, newObj])
  }


  const selectMember = (value) => {

    let memberDetail = arr.find((item) => (
      item.id === value
    ))
    setMember(memberDetail);
    setnonActive(true)


  }

  const handleSplit = (id, value, totalBill) => {

    const duplicateArr = [...arr]
    const splitArray = duplicateArr.map((data) => {
      if (data.id == id) {
        if (value == "you") {
          data.balanceAmount += totalBill;
        }
        else {
          data.balanceAmount -= totalBill;
        }
      }
      return data;
    })
    setArr(splitArray);

  }

  const handleadd = () => {
    setActive(true)
  }
  const closebtn = () => {
    setActive(false)
  }

  return (
    <div>
      <div className="container">
        {arr.map((item, indx) => (
          <Header value={item} key={indx} selectMember={selectMember} isnonActive={isnonActive} nonact={nonact} />

        ))}
        <button className='add_friend' onClick={handleadd}>AddFriend</button>
      </div>
      <Menu member={member} handleSplit={handleSplit} isnonActive={isnonActive} nonact={nonact} />
      <Footer isActive={isActive} handleArr={handleArr} closebtn={closebtn} />


    </div>
  )
}

export default App
