import React from 'react'
import "./SIngle.scss"
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Topbar from '../../components/Topbar/Topbar'

function Single() {
  return (
    <>
      <Topbar/>
      <div className='Single'>
          <div className="leftSingle">
              <img src="https://m.media-amazon.com/images/I/616OJ7WB1-L._UX569_.jpg" alt="" />
          </div>
          <div className="rightSingle">
              <h1>Heading</h1>
              <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enim iure nam doloribus ab aperiam recusandae nulla autem, cum quis minima alias. Dolore ab velit non corrupti quo officiis dolorum ratione ipsum illum omnis nulla nesciunt, nostrum impedit sapiente doloribus?</div>
              <div className="Price">$20</div>

              <div className="SingleCartSection">
                  <div>-</div>
                  <div className="SingleCartNumber">2</div>
                  <div>+</div>
                  <button className="addToCart">Add to Cart</button>
              </div>
          </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Single