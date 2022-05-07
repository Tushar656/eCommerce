import { EmailRounded, Facebook, Instagram, Phone, Search, ShoppingCartRounded, Twitter } from '@material-ui/icons'
import React from 'react'
import "./Topbar.scss"

const Topbar = () => {
  return (
    <div className='Topbar'>
        <div className="topbarwraper">
            <div className="topbar">
                <div className="topbarLeft">
                    <ul className="topbarList">
                        <li className="topbarListItems">My account</li>
                        <li className="topbarListItems">Orders</li>
                        <li className="topbarListItems">Track Order</li>
                        <li className="topbarListItems">Login/Register</li>
                        <li className="topbarListItems">Logout</li>
                        <li className="topbarListItems"><EmailRounded style={{color: 'ff7b30'}}/>tushar@gmail.com</li>
                        <li className="topbarListItems"><Phone style={{color: 'blue'}}/>+91 45789-61235</li>
                    </ul>
                </div>
                <div className="topbarRight">
                    <Facebook className='topbarRightIcons' style={{color: '#4040ff'}}/>
                    <Instagram className='topbarRightIcons' style={{color: '#ff002d'}}/>
                    <Twitter className='topbarRightIcons' style={{color: 'blueviolet'}}/>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="headerRight">
                Name
            </div>
            <div className="headerLeft">
                <ul className="headerList">
                    <li className="headerListItems">Home</li>
                    <li className="headerListItems">Shop</li>
                    <li className="headerListItems">Blog</li>
                    <li className="headerListItems">About Us</li>
                    <li className="headerListItems">Contact Us</li>
                    <li className="headerListItems">My Account</li>
                    <li className="headerListItems"><ShoppingCartRounded/></li>
                    <li className="headerListItems"><Search/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Topbar