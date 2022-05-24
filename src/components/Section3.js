
import image1 from "../images/projet1.png"
import image2 from "../images/projet2.png"
import image3 from "../images/projet3.png"
import image4 from "../images/projet4.png"
import Section2 from './Section2'


function Section3() {
    return (

        <div id="projects" className="part3">
            <h3 className="titrePart3">Projects</h3>

            <div class="divgeneraleprojets">

                <a href="https://github.com/imanchamileva/allora" target="_blank"><div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image1} className="projet44" /> </div></a>

                <a href="https://jdld.interface3.be/" target="_blank"><div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image2} className="projet44" /></div></a>

                <a href="https://coffeewars.interface3.be/" target="_blank"><div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image3} className="projet44" /></div></a>

                <a href="https://imanchamileva.github.io/" target="_blank"><div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image4} className="projet44" /></div></a>

                <div id="emptyDiv"> <img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" /> </div>
            </div>
        </div>
    )
}

export default Section3