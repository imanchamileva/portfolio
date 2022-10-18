
import image1 from "../images/projet1.png"
import image2 from "../images/projet2.png"
import image3 from "../images/projet3.png"
import image4 from "../images/projet4.png"
import Section2 from './Section2'


function Section3() {
    return (

        <div id="projects" className="part3">
            <h3 className="titrePart3">Projects</h3>

            <div class="divgeneraleprojets1">

                <div className="firstProject1">
                    <a href="https://github.com/imanchamileva/allora" target="_blank"><div className="projet4"><img src={image1} className="projet44" /> </div></a>
                    <div className="firstProjectTextOverlay1">
                        <div className="firstProjectText1">
                            HTML CSS JS
                        </div>
                    </div>
                </div>


                <div className="firstProject1">
                    <a href="https://jdld.interface3.be/" target="_blank"><div className="projet4"><img src={image2} className="projet44" /></div></a>
                    <div className="firstProjectTextOverlay1">
                        <div className="firstProjectText1">
                            TEAM PROJECT : HTML CSS JS PHP
                        </div>
                    </div>
                </div>

                <div className="firstProject1">
                    <a href="https://coffeewars.interface3.be/" target="_blank"><div className="projet4"><img src={image3} className="projet44" /></div></a>
                    <div className="firstProjectTextOverlay1">
                        <div className="firstProjectText1">
                            HACKATHON :  HTML CSS JS PHP
                        </div>
                    </div>
                </div>
            </div>

            <div class="divgeneraleprojets2">


                <div className="firstProject1">
                    <a href="https://imanchamileva.github.io/project" target="_blank"><div className="projet4"><img src={image4} className="projet44" /></div></a>
                    <div className="firstProjectTextOverlay1">
                        <div className="firstProjectText1">
                            REACT TAILWIND
                        </div>
                    </div>
                </div>
                </div>

            </div>
            )
}

            export default Section3