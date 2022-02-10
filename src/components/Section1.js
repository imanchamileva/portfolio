import image from "../images/iman3.jpg"
import Menuburger from "./Menuburger"


function Section1() {
    return (

        <div class="container">

                <Menuburger/>
                  <div className="part1">
                    <div className="imgIman">
                        <img  className="imgIman22" src={image}  alt="iman_avatar"/>
                    </div>
                    <div className="textes" >

                        <h5 className="h5Titre1">HELLO, I'M</h5>

                        <h1 className="nameTypo"data-aos="fade-left" data-aos-duration="2000"
                        data-aos-easing="ease-in-out" >IMAN CHAMILEVA</h1>

                        <h5 className="h5Titre2">AND I'M A</h5>

                        <h2 className="frontTypo"data-aos="fade-left" data-aos-duration="2500"
                        data-aos-easing="ease-in-out"  data-aos-delay="100">FRONT-END DEVELOPER</h2>
                    </div>
                </div>
        </div>
    )
}

export default Section1