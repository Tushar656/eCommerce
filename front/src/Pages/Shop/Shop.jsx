import { Slider } from '@material-ui/core'
import { AddShoppingCartRounded, Favorite, ShoppingBasket, ShoppingCartRounded } from '@material-ui/icons'
import React from 'react'
import { ShopProducts } from '../../data'
import "./Shop.scss"

function Shop() {
  return (
    <div className='Shop'>
        <div className="leftShop">
            <div className="filters">
                <h4>Filter by Price</h4>
                {/* <Slider/> */}
                <div className="data">
                    <span>Price</span>
                    <button>Filter</button>
                </div>
            </div>
            <div className="filters">
                <h4>Filter by Color</h4>
                {/* <Slider/> */}
                <div className="data">
                    <span>Price</span>
                    <button>Filter</button>
                </div>
            </div>
        </div>
        <div className="rightShop">
        <div className="AllProducts">
            {
                ShopProducts.map((item)=>(
                    <div className="Product">
                        <div className="itemcart">
                            <AddShoppingCartRounded className='Cart'/>
                            <Favorite className='Favroit'/>
                        </div>
                        <img src={item.img} alt="" />
                        <div className="decpric">
                            <h4 className="desc">{item.desc}</h4>
                            <span className="price">{item.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Shop