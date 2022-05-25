import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Topbar from '../../components/Topbar/Topbar'
import "./Cart.scss"

function Cart() {
    const cart = useSelector(state=> state.cart);
    console.log(cart);
  return (
      <>
        <Topbar/>
        <div className='CartSection'>
            <div className="Carttop">
                <button>Continue Shoping</button>
            </div>

            <div className="Cartbottom">

                <div className="CartItems">

                    {cart.products.map((m)=>(
                        <div className="cartItem" key={m._id}>
                        <div className="cartLeft">
                            <img src={m.img} alt="" />
                        </div>
                        <div className="cartRight">
                            <div className="CartItemLeft">
                                <div className="cartItemLeftSection">
                                    <div><b>Product: </b>{m.title}</div>
                                    <div><b>ID: </b>{m._id}</div>
                                    <div className="CartItemPrice">${m.price}</div>
                                </div>
                            </div>
                            <div className="CartItemRight">
                                - 2 +
                            </div>
                        </div>
                    </div>))}
                </div>

                <div className="cartShiping">
                    <h1>Order Summry</h1>
                    <div className="cartSummrySection">
                        <div className="CartSummry">
                            <div>SubTotal</div>
                            <div>$25</div>
                        </div>
                        <div className="CartSummry">
                            <div>Estimate Shipping</div>
                            <div>$25</div>
                        </div>
                        <div className="CartSummry">
                            <div>Shipping discount</div>
                            <div>$25</div>
                        </div>
                        <div className="CartSummry CartSummryTotal">
                            <div>Total</div>
                            <div>$25</div>
                        </div>

                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Cart