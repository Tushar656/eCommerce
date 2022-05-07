import { Send } from '@material-ui/icons'
import React from 'react'
import "./Newsletter.scss"

function NewsLetter() {
  return (
    <div className='Newsletter'>
        <h1>Newsletter</h1>
        <div className="sect">Get timely updates from Your favorite products.</div>
        <div className="NewsSentBow">
            <input type="text" placeholder='Your Email'/>
            <button><Send/></button>
        </div>
    </div>
  )
}

export default NewsLetter