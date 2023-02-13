import React from 'react'
import { useState } from 'react'


const Page = () => {
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const [name, setName] = useState("вы успешно зарег")


   

  return (  

    <div className=''>
        <p className='block'></p>
        <p className='p'>   зарегистрирван: {lastName}  </p>
        <div className="input">

            <input type="text" placeholder='First Name' />
            <h1></h1>
            <input type="text" placeholder='Last Name' />
            <h1></h1>
            <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder='Email' />
            <h1></h1>
            <button onClick={() => setLastName(lastName + email) } className='btn'>Register</button>
            


     
        </div>
       

    </div>
  )
}

export default Page
    
