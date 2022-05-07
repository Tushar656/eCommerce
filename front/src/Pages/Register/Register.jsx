import React from 'react'
import "./Register.scss"

function Register() {
  return (
    <div className='Register'>
        <div className="RegisterSection">
            <h2>Create an Account</h2>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='password'/>
                <input type="text" placeholder='confirm Password'/>
                <button>Create</button>
            </form>
            <div className='alrdyHaveacc'>Already have an Account</div>
        </div>
    </div>
  )
}

export default Register