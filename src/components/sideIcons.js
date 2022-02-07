import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import style from './sideIcons.module.css'


function Section4() {
    return (

        <div id="contact" className="part4">

            <ul className="iconspart4">
                <li style={{height:10,width:10}} > <SiGithub  /> </li>
                <li className={style.lilinkedinSide}> <SiLinkedin /> </li>
            </ul>

        </div>
    )
}

export default Section4