
// import Header from './components/Header.js'
// import Section1 from './components/Section1.js'
// import Section2 from './components/Section2.js'
// import Section3 from './components/Section3.js'
import {useEffect} from 'react'
import AOS from 'aos'
// import 'aos/dist/aos.css'
// import Footer from './components/Footer'
import State from './components/State.js'
import {useState} from 'react'
import HandleClick from'./components/toggle'
import Form from './components/Form'
import Part2 from './components/new.js'



function App() {
useEffect (() => {
AOS.init()

})

const OptionsCursorTrueWithMargins = {
    followCursor: true,
    shiftX: 3,
    shiftY: 0
 }







  return (
    <div className="App">


       
        <State />
        

        {/* <Header /> */}

        {/* <Section1 /> */}

        {/* <Section2 />

        <Section3 />

        <Footer /> */}





    </div>




   
    )
}

export default App;
