
import {useState,useEffect} from 'react'
import AOS from 'aos'
import State from './components/State.js'




function App() {

useEffect (() => {
AOS.init()

})




  return (
    <div className="App">

 
        <State />
        

    </div>




   
    )
}

export default App;
