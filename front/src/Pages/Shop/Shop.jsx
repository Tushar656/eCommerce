import { Slider } from '@material-ui/core'
import { AddShoppingCartRounded, Favorite, ShoppingBasket, ShoppingCartRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Topbar from '../../components/Topbar/Topbar'
import Category from '../../components/Categories/Category'
import { ShopProducts } from '../../data'
import axios from 'axios';
import "./Shop.scss"
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Shop() {
    const [priceVal, setPriceVal] = useState([0, 200]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState(products);
    const location = useLocation();
    const cat = location.pathname.split("/")[2].toLowerCase();
    const priceHendler = (e, data) => {
        setPriceVal(data);
    }
    useEffect(()=>{
        const getProducts = async () =>{
            try{
                const res = await axios.get(`/product?category=${cat}`);
                setProducts(() => res.data);
                setfilteredProducts(() => res.data);
                setPriceVal([0, 200]);
                // console.log(products);
            }catch(err){
                console.log("Get product error");
            }
        }
        getProducts();
    }, [cat]);

    useEffect(()=>{
        const getProducts = async () =>{
            try{
                let minPrice = priceVal[0];
                let maxPrice = priceVal[1];
                setfilteredProducts(() => products.filter(item => item.price>=minPrice && item.price<=maxPrice));
                // console.log(products);
            }catch(err){
                console.log("Set filter error");
            }
        }
        getProducts();
    }, [cat, priceVal])
    
  return (
      <>
        <Topbar/>
        <Category/>
        <div className='Shop'>
            <div className="leftShop">
                <div className="filters">
                    <h4>Filter by Price</h4>
                    <Slider className='priceSlider' 
                        value={priceVal}
                        onChange={priceHendler}
                        valueLabelDisplay="on"
                        min={0}
                        max={200}/>
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
                        filteredProducts.length != 0? 
                        filteredProducts.map((item)=>(
                            <Link to={`/product/${item._id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                                <div className="Product" key={item._id}>
                                    <div className="itemcart">
                                        <AddShoppingCartRounded className='Cart'/>
                                        <Favorite className='Favroit'/>
                                    </div>
                                    <img src={item.img} alt="" />
                                    <div className="decpric">
                                        <h4 className="desc">{item.desc}</h4>
                                        <span className="price">{`$${item.price}`}</span>
                                    </div>
                                </div>
                            </Link>
                        )) : 
                        <h1>No Products in This Range!!!</h1>
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