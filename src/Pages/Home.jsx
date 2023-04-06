import React, { useState } from 'react'

import css from'./Home.module.css'
import Navbar from '../Components/Navbar'
import Page1 from '../Components/pg/page1'
import { Footer } from '../Components/Footer'
import { MdArrowLeft , MdArrowRight } from "react-icons/md";

import { useTranslation } from 'react-i18next';


const Home = () => {

  const { t } = useTranslation();
  const [index , setIndex] = useState(0);

  const imgs = [
    {id : require('./Sources/img1.png') , index:0 },
    {id : require('./Sources/img2.png') , index:1 }
  ]

  
  const handleClick = (direction) => {
      if(direction==='Left'){
        setIndex(index > 0 ? 0 : 1 )
        console.log(`left ${index}`)  
      }else{ 
          setIndex(index < 1 ? 1 : 0)
          console.log(`right ${index}`)
      }
     
  }

  return (
    <>
      <Navbar/>
      <div className={css.Home_Slider} >
        <div className={css.Slider_Arrow} style={{left:'15px', zIndex:'2'}} onClick={()=>handleClick('Left')} > <MdArrowLeft/> </div>
          <div className={css.Wrapper} style={{transform: `translateX(${index*-100}vw)`}}>
            {
              imgs.map((img)=>(
              <div className={css.Slider}>
                <div className={css.Img_Container}>
                    <img className={css.Slider_Img} src={img.id} />
                </div>
                <div className={css.Info_Container}>
                  <h1>{t(`slider.${img.index}.infoHeader`)}</h1>
                  <h2>{t(`slider.${img.index}.infoText`)}</h2>
                </div>
              </div>
              ))
            }
          </div>
          <div className={css.Slider_Arrow} style={{right:'15px'}} onClick={()=>handleClick('Right')} > <MdArrowRight/> </div>
      </div>
         
      <Page1/>
      <Footer/>
    </>
    
  )
}

export default Home


/*


*/