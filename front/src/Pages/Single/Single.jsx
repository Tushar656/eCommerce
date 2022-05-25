import React, { useEffect, useState } from 'react'
import "./SIngle.scss"
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Topbar from '../../components/Topbar/Topbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../../redux/cartRedux'
import {useDispatch} from 'react-redux'

function Single() {
  const location = useLocation();
  const prId = (location.pathname.split('/')[2]);
  const [product, setProduct] = useState(null);
  const [cartNum, setCartNum] = useState(1)

  useEffect(()=>{
    const getProduct = async() =>{
      const res = await axios.get(`/product/find/${prId}`);
      // console.log(res.data);
      setProduct(res.data);
    }
    getProduct();
  }, [product])

  const dispatch = useDispatch();
  const addCartHendler = () =>{
    dispatch(addProduct({product, quntity: cartNum, price: product.price*cartNum}))
  }
  return (
    <>
      <Topbar/>
      <div className='Single'>
          <div className="leftSingle">
              <img src={product? product.img : ""} alt="" />
          </div>
          <div className="rightSingle">
              <h1>{product? product.title : ""}</h1>
              <div className="content">{product? product.desc + " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur fugit tempore nemo blanditiis sequi voluptate amet aut fuga consequatur est corporis, voluptas vitae rem aspernatur rerum cupiditate odit officia dicta. Reiciendis, repudiandae molestiae saepe tenetur ad nam rerum eligendi molestias libero facere, assumenda voluptates." : ""}</div>
              <div className="Price">{`$${product? product.price : ""}`}</div>

              <div className="SingleCartSection">
                  <div onClick={()=> setCartNum(cartNum>1 ? cartNum-1 : 1)}>-</div>
                  <div className="SingleCartNumber">{cartNum}</div>
                  <div onClick={()=> setCartNum(cartNum+1)}>+</div>
                  <button className="addToCart" onClick={addCartHendler}>Add to Cart</button>
              </div>
          </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Single