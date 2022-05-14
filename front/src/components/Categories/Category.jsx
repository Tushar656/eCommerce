import React from 'react'
import { Link } from 'react-router-dom'
import "./Category.scss"

function Category() {
  return (
    <div className='CategorySection'>
        <h2>Featured Categories</h2>
        <div className="AllCategories">
            <Link to={`/products/$$$$$}`} className="linku">
                <div className="Category">
                    <h4>Fashion</h4>
                    <img src="/Assets/ClothCate.jpg" alt="" />
                </div>
            </Link>
            <Link to={`/products/$$$$$}`} className="linku">
                <div className="Category">
                    <h4>Watches</h4>
                    <img src="/Assets/Watch.jpg" alt="" />
                </div>
            </Link>
            <Link to={`/products/$$$$$}`} className="linku">
                <div className="Category">
                    <h4>Bags</h4>
                    <img src="/Assets/Bags.jpg" alt="" />
                </div>
            </Link>
            <Link to={`/products/$$$$$}`} className="linku">
                <div className="Category">
                    <h4>Shoes</h4>
                    <img src="/Assets/Shoes.jpg" alt="" />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Category