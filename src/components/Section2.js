import { FaAdn } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr"; 
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

function Section2() {
    return (

        <div className="part2">

        <h3 id="skills">My Skills</h3>
        <div className="divIconsgroup">

        <ul className="firstIconGroup">

                <div>
                    <li data-aos="zoom-in-down" data-aos-offset="200" data-aos-duration="1000" className="icone1"><FaHtml5 /></li>
                    <p>HTLM 5</p>
                </div>
                    <div><li data-aos="zoom-in-down"  data-aos-offset="200" data-aos-duration="1000" className="icone2"><FaCss3Alt /></li>
                    <p>CSS</p>
                </div>
                
                <div>
                    <li className="icone3" data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-offset="200"><SiJavascript /></li>
                    <p>JavaScript</p>
                </div> 

                <div>
                    <li className="icone4" data-aos="zoom-in-down" data-aos-duration="1000"  data-aos-offset="200"><GrReactjs /></li>
                    <p>React js</p>
                </div>
            

                <div>
                    <li className="icone5" data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-offset="200"><FaNodeJs /></li>
                    <p>Node js</p>
                </div>
            

                <div>
                    <li className="icone6" data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-offset="200"><SiJquery /></li>
                    <p>JQuery</p>
                </div>
                

                <div>
                    <li className="icone7" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200"><SiGithub /> </li>
                    <p>Github</p>
                </div>
            </ul>

            <ul className="secondIconGroup">
                <div>
                    <li className="icone8" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200"><SiWordpress /> </li>
                    <p>Wordpress</p>
                </div>
                

                <div>
                    <li className="icone9" data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-offset="200"><SiPhp /> </li>
                    <p>PHP</p>
                </div>
                

                <div>
                    <li className="icone10" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200"><SiMysql /> </li>
                    <p>MySQL</p>
                </div>
                

                <div>
                    <li className="icone11" data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-offset="200"><SiBootstrap /> </li>
                    <p>Bootstrap</p>
                </div>
                

                <div>
                    <li className="icone12" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">< SiAdobexd /> </li>
                    <p>Xd</p>
                </div>
                

                <div>
                    <li className="icone13" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">< SiAdobeillustrator /> </li>
                    <p>Illustrator</p>
                </div>
            

                <div>
                    <li className="icone14" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">< SiAdobephotoshop /></li>
                    <p>Photoshop</p>
                </div>
                
            
          </ul>
         </div>
        </div>
    )
}
        
export default Section2