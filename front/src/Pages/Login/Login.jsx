import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import "./Login.scss"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user);

  const loginHendler = (e) =>{
    e.preventDefault();
    login(dispatch, {username, password})
  }
  return (
    <div className='Login'>
        <div className="LoginSection">
            <h2>Login to Account</h2>
            <form action="">
                <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)}/>
                <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={loginHendler} disabled={isFetching}>Login</button>
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