import React from 'react'
import image1 from "./images/iman3.jpg"

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


function App() {
  return (
    <div className="App">

<>
          <header>
            
            <a href="#">CONTACT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">SKILLS</a>
                
            </header>

            <div className="container">
              <div className="part1">

                  <div className="imgIman">
                     
                        <img  src={image1} height={200} width={200} />
                  </div> 
                      <div className="textes">
                        <h5 className="h5Titre1">HELLO, I'M</h5>
                        <h1>IMAN CHAMILEVA</h1>
                        <h5 className="h5Titre2">AND I'M A</h5>
                        <h2>FRONT-END DEVELOPER</h2>
                    </div>
                  </div>
            </div>



            <div className="container2">

            <h3>My Skills</h3>
            <div className="rond">
            <ul className="firstIconeGroup"> 
            <div>
                    <li className="icone1"><FaHtml5 /></li>
                    <p>HTLM 5</p>
                    
                </div>
                    <div><li className="icone2"><FaCss3Alt /></li>
                    <p>CSS</p>
                </div>
                
                  <div>
                    <li className="icone3"><SiJavascript /></li>
                    <p>JavaScript</p>
                 </div> 

                 <div>
                    <li className="icone4"><GrReactjs /></li>
                    <p>React js</p>
                 </div>
               

                <div>
                    <li className="icone5"><FaNodeJs /></li>
                    <p>Node js</p>
                </div>
               

                <div>
                    <li className="icone6"><SiJquery /></li>
                    <p>JQuery</p>
                </div>
                

                <div>
                    <li className="icone7"><SiGithub /> </li>
                    <p>Github</p>
                </div>
                </ul>

                <ul className="secondIconeGroup">
                <div>
                    <li className="icone8"><SiWordpress /> </li>
                    <p>Wordpress</p>
                </div>
                

                <div>
                    <li className="icone9"><SiPhp /> </li>
                    <p>PHP</p>
                </div>
                

                <div>
                    <li className="icone10"><SiMysql /> </li>
                    <p>MySQL</p>
                </div>
                

                <div>
                    <li className="icone11"><SiBootstrap /> </li>
                    <p>Bootstrap</p>
                </div>
                

                <div>
                    <li className="icone12">< SiAdobexd /> </li>
                    <p>Adobe Xd</p>
                </div>
                

                <div>
                    <li className="icone13">< SiAdobeillustrator /> </li>
                    <p>Adobe Illustrator</p>
                </div>
               

                <div>
                    <li className="icone14">< SiAdobephotoshop /></li>
                    <p>Adobe Photoshop</p>
                </div>
                
              
              </ul>
             </div>
            </div>

            <div className="part3">
              <p className="titrePart3">Projects</p>
              <div class="divgeneraleprojets">
            <div className="divprojets1">

            <div className="projet1"></div>
            <div className="projet2"></div>
            </div>


            <div className="divprojets2">
              <div className="projet3"></div>
              <div className="projet4"></div>
            </div>
            </div>
          </div>
</>

    </div>
  )
}

export default App;
