import image from "../images/iman3.jpg"
import Menuburger from "./Menuburger"


function Section1() {
    return (

        <div id="home" class="container">

            <Menuburger />
            <div className="part1">

                <div className="imgIman">
                    <img className="imgIman22" src={image} alt="iman_avatar" />
                </div>
                <div className="textes" >

                    <h5 className="h5Titre1">HELLO, I'M</h5>

                    <h1 className="nameTypo" data-aos="fade-left" data-aos-duration="2000"
                        data-aos-easing="ease-in-out" >IMAN CHAMILEVA</h1>

                    <h5 className="h5Titre2">AND I'M A</h5>

                    <h2 className="frontTypo" data-aos="fade-left" data-aos-duration="2500"
                        data-aos-easing="ease-in-out" data-aos-delay="100">FRONT-END DEVELOPER</h2>
                    <div className="textsDiv">
                        <h6 className="sentence1">I discovered web development almost 2 years ago. </h6>
                        <h6 className="sentence1">I fell in love with coding as soon as I saw on my screen </h6>
                        <h6 className="sentence1">the words "Hello, World !".</h6>
                        <h6 className="sentence1">Since then, I have been improving my skills </h6>
                        <h6 className="sentence1"> by coding new challenging projects.</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1