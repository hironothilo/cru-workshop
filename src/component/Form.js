import React, { useState } from 'react'//rafc พิมอย่างงงี้
//label ช่องสี่เหลี่ยมใส่อะไรซักอย่าง
//รับข้อมูลเป็นอะไร type

const Form = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const addList = (event)=>{
        event.preventDefault()
        const listData = {
            title:title,
            amount:Number(amount)
        }
        props.additem(listData)
    }
  return (
    <>
        <form onSubmit={addList}>
            <h3>{title}</h3>
            <h3>{amount}</h3>
            <div className="form-control">
                <label>รายการ</label>
                <input type="text" placeholder="ใส่รายการตึงๆ" name="list" onChange={(event) => setTitle(event.target.value)}/>
            </div>

            <div className="form-control">
                <label>จำนวน</label>
                <input type="number" placeholder="ใส่จำนวนรายการตึงๆ" name="amount" onChange={(event) => setAmount(event.target.value)}/>
            </div>
            <div>
                <button type="submit" 
                className="btn btn-primarytext"
                name="submit">
                เพิ่มข้อมูล
                </button>
            </div>
        </form>
    </>
  )
}

export default Form