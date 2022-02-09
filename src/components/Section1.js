import image from "../images/iman3.jpg"
import Menuburger from "./MenuBurger"
// import Navbar from "./Navbar"

function Section1() {
    return (

        <div class="container">

                <Menuburger/>
                {/* <nav> 
                    <a href="#contact">SKILLS</a>
                    <a href="#portfolio">PORTFOLIO</a>
                    <a href="https://github.com/imanchamileva" target="_blank">GITHUB</a>
                </nav> */}

                <div className="part1">
                    <div className="imgIman">
                        <img  className="imgIman22" src={image}  alt="iman_avatar"/>
                    </div>
                    <div className="textes" >
                        <h5 className="h5Titre1">HELLO, I'M</h5>
                        <h1 data-aos="fade-left" data-aos-duration="2000"
                        data-aos-easing="ease-in-out" >IMAN CHAMILEVA</h1>
                        <h5 className="h5Titre2">AN D I'M A</h5>
                        <h2 data-aos="fade-left" data-aos-duration="2500"
                        data-aos-easing="ease-in-out"  data-aos-delay="100">FRONT-END DEVELOPER</h2>
                    </div>
                </div>
        </div>
    )
}

export default Section1