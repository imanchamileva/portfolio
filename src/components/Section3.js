
import image1 from "../images/projet1.png"
import image2 from "../images/projet2.png"
import image3 from "../images/projet3.png"

function Section3() {
    return (

        <div id="portfolio"className="part3">
            <h3 className="titrePart3">Projects</h3>

            <div class="divgeneraleprojets">

                <div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image2} className="projet44" /></div>

                <div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image1} className="projet44" /></div>

                <div className="projet4"><img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500" src={image3} className="projet44" /></div>

                <div id="emptyDiv"> <img data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="500"  /> </div>
            </div>
        </div>
    )
}

export default Section3