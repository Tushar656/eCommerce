import React from 'react'
import "./Cart.scss"

function Cart() {
  return (
    <div className='CartSection'>
        <div className="Carttop">
            <button>Continue Shoping</button>
        </div>

        <div className="Cartbottom">

            <div className="CartItems">

                <div className="cartItem">
                    <div className="cartLeft">
                        <img src="https://m.media-amazon.com/images/I/717iSc2atIL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                    </div>
                    <div className="cartRight">
                        <div className="CartItemLeft">
                            <div className="cartItemLeftSection">
                                <div><b>Product: </b>Lorem ipsum dolor</div>
                                <div><b>ID: </b>6784523</div>
                                <div className="CartItemPrice">$25</div>
                            </div>
                        </div>
                        <div className="CartItemRight">
                            - 2 +
                        </div>
                    </div>
                </div>
                <div className="cartItem">
                    <div className="cartLeft">
                        <img src="https://m.media-amazon.com/images/I/91aRvAJ0QXL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                    </div>
                    <div className="cartRight">
                        <div className="CartItemLeft">
                            <div className="cartItemLeftSection">
                                <div><b>Product: </b>Lorem ipsum dolor</div>
                                <div><b>ID: </b>6784523</div>
                                <div className="CartItemPrice">$25</div>
                            </div>
                        </div>
                        <div className="CartItemRight">
                            - 2 +
                        </div>
                    </div>
                </div>
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
  )
}

export default Cart