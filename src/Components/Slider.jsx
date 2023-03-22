import React, { useState } from 'react'
import './SliderCSS.css';

import { MdArrowLeft , MdArrowRight } from "react-icons/md";




const imgs = 
[    {id:require('./nootebook-screen.png')},
    {id:require('./nootebook-screen2.png')},
    {id:require('./nootebook-screen3.png'
)},
]

const Slider = () => {

    const [index , setIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==='Left'){
            setIndex(index > 0 ? index-1 : index.lenght-1 )
        }else{ 
            setIndex(index < index.lenght-1 ? index+1 : 0)
        }
    }

    //transform: translateX({(props)=> props.index * -100}vw);

  return (
    <div className='Slider_Container'>

        <div className='Slider_Arrow' onClick={handleClick('Left')}>
            <MdArrowLeft/>
        </div>


        <img className='NooteBook_Img' src={require('./nootebook.png')} />
            <div className='Slider_Img_Slider' index={index}>
                    {imgs.map((img)=>(
                        <img className='NooteBook_Screen' src={img.id}/>
                ))}
                
            </div>
        <div className='Slider_Arrow' onClick={handleClick('Right')}>
            <MdArrowRight/>
        </div>


    </div>
  )
}

export default Slider