import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <h1 className=''>Contact</h1>
    <div className='con'>
    <div className='container'>
       <form action="">
        <div>
       <label htmlFor=""> First name :</label><br />
        <input type="text" placeholder='Enter first name' />
       </div><br />
       <div>
       <label htmlFor="">Last name :</label><br />
        <input type="text" placeholder='Enter last name' />
       </div><br />
       <div>
       <label htmlFor="">Mobile no :</label><br />
        <input type="text" placeholder='Enter Mobile no' />
       </div><br />
       <div>
       <label htmlFor="">Address :</label><br />

        <input type="text" placeholder='Enter Address' />
       </div><br />
       <div>
       <label htmlFor="">Mail Address :</label><br />
        <input type="text" placeholder='Enter Mail Address' />
        
       </div>
       </form>
    </div>
    </div>
    <div className='footer'>
       
    </div>
    </>
  )
}

export default Contact