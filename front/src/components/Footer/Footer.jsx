import {Email, LocationOnRounded, Phone } from '@material-ui/icons'
import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='Footer'>
        <div className="sect1">
            <h3>NAME</h3>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur doloremque aut corporis quaerat modi porro delectus obcaecati. Recusandae amet obcaecati tempora impedit qui tempore inventore perferendis at esse autem.</div>
        </div>
        <div className="sect2">
            <h3>Usefull Links</h3>
        </div>
        <div className="sect3">
            <h3>Contact Info</h3>
            <div className="contectsect">
                <span className="icon"><LocationOnRounded/></span>
                <div className="data">
                    <h6>Address</h6>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
            <div className="contectsect">
                <span className="icon"><Phone/></span>
                <div className="data">
                    <h6>Phone</h6>
                    <span>+91 15432-84516</span>
                </div>
            </div>
            <div className="contectsect">
                <span className="icon"><Email/></span>
                <div className="data">
                    <h6>Email</h6>
                    <span>tushar@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer