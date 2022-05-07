import React, { useState } from 'react'
import "./Slider.scss"
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

const Slider = () => {
  const [slidePos, setSlidepos] = useState(0);
  const HendleSlide = (direction) =>{
    if(direction == 'left'){
      setSlidepos(slidePos>0 ? slidePos-1 : 2)
    }else{
      setSlidepos(slidePos<2 ? slidePos+1 : 0)
    }
  }
  return (
    <div className='Slider'>
      <div className="slideArrows">
        <ArrowLeftOutlined className='botharrows' onClick={()=>HendleSlide('left')}/>
        <ArrowRightOutlined className='botharrows' onClick={()=>HendleSlide('right')}/>
      </div>
      <div className='sliderImgContainor' style={{transform: `translateX(${slidePos*(-100)}vw)`}}>
        <img src="/Assets/Fashion.jpg" alt="" />
        <img src="/Assets/Fashion.jpg" alt="" />
        <img src="/Assets/Fashion.jpg" alt="" />
      </div>
    </div>
  )
}

export default Slider