import { Slider } from '@material-ui/core'
import { AddShoppingCartRounded, Favorite, ShoppingBasket, ShoppingCartRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Topbar from '../../components/Topbar/Topbar'
import { ShopProducts } from '../../data'
import axios from 'axios';
import "./Shop.scss"
import { useLocation } from 'react-router-dom'

function Shop() {
    const [priceVal, setPriceVal] = useState([100, 5000]);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const priceHendler = (e, data) => {
        setPriceVal(data);
    }

    useEffect(()=>{
        const getProducts = async () =>{
            try{
                const res = await axios.get(`/product?category=${cat}`);
                console.log(res.data);
            }catch(err){
                console.log("Get product error");
            }
        }
        getProducts();
    }, [])

  return (
      <>
        <Topbar/>
        <div className='Shop'>
            <div className="leftShop">
                <div className="filters">
                    <h4>Filter by Price</h4>
                    <Slider className='priceSlider' 
                        value={priceVal} 
                        onChange={priceHendler}
                        valueLabelDisplay="on"
                        min={100}
                        max={5000}/>
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
                            <div className="Product" key={item.id}>
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
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Shop