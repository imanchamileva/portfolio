import { SiLinkedin } from "react-icons/si"
import style from './section4.module.css'


function Section4() {
    return (

        <div id={style.part4}>
            <h6 id={style.contactme} >CONTACT ME</h6>
                <div id={style.iconspart4}>
                    <a href="https://www.linkedin.com/in/iman-chamileva/" target="_blank" id={style.linkLinkedin}> <SiLinkedin id={style.linkedinSide}/> </a>            
                </div>
        </div>
    )
}

export default Section4