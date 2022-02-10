import {useState} from 'react'
import image from "../images/iman3.jpg"

import Section1 from './Section1.js'
import Section2 from './Section2'
import Section3 from './Section3.js'
import style from './section4.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer'
import Section4 from './Section4'
import Menuburger from './Menuburger'




function State() {
    
    const [visible, setVisible] = useState(false)
    const [imageVisible, setImageVisible] = useState(true)
 

    const newImage = () => {
        setVisible(true)
        setImageVisible(false)
    }


    return (
        <>
   {imageVisible && (
        <div id="imanStart">
            <img onClick={newImage} data-aos="fade-right" data-aos-duration="1000" className="imgIman22"src={image}  />
         </div>

   )}
   

   { visible ? (
    <div>
       
       
     
        <Section1 /> 

        <Section2/>

        <Section3 />

        <Section4 />

        <Footer /> 
 
    </div>

) : <img className={style.displayImage} /> }  



    </>
    )
}


export default State