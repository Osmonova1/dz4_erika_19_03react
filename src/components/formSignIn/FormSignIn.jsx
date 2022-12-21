import React, { useState } from 'react'
import './Form.css'


function FormSignIn() {
    const [check,setCheck]=useState(true)

  return (
    <form>
        <h2>Окно регистрации</h2>
        <input  disabled={!check} type="text" name="name" id="" placeholder='Имя'/>
        <input  disabled={!check} type="text" name="surname" id="" placeholder='Фамилия'/>
        <input  disabled={!check} type="text" name="email" id="" placeholder="Email" />
       <label htmlFor="check">
        <p className='text'>Согласен(-сна) с условиями</p>
       <input onChange={()=>setCheck(!check)}  type="checkbox" id='check' />
       </label>
        <button disabled={check}>Отправить</button>
    </form>
   
  )
}

export default FormSignIn


