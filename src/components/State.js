import {useState} from 'react'
import image from "../images/iman3.jpg"
import Header from './Header.js'
import Section1 from './Section1.js'
import Section2 from './Section2'
import Section3 from './Section3.js'
import style from './sideIcons.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer'
import Section4 from './sideIcons'


function State() {
    
    const [visible, setVisible] = useState(false)
    const [imageVisible, setImageVisible] = useState(true)
 

    const nouvelleImage = () => {
        setVisible(true)
        setImageVisible(false)
    }


    return (
        <>
   {imageVisible && (
        <div className="imgIman">
            <img onClick={nouvelleImage} data-aos="fade-right" data-aos-duration="1000" className="imgIman22"src={image}  />
         </div>

   )}
   

   { visible ? (
    <div>
       
        <Header />
        
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