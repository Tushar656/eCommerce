import React from 'react'
import "./Login.scss"

function Login() {
  return (
    <div className='Login'>
        <div className="LoginSection">
            <h2>Login to Account</h2>
            <form action="">
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='password'/>
                <button>Login</button>
            </form>

            <div className="btmPart">
                <div className='alrdyHaveacc'>Create a new Account</div>
                <div className='frgtpass'>Forgot Password?</div>
            </div>
        </div>
    </div>
  )
}

export default Login