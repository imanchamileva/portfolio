import  './Menuburger.css'
import React, {useState, useEffect} from 'react'


const Menuburger = () =>{

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
    
  return (
    <nav className="burgerNav">
        {(toggleMenu || screenWidth>500) && (
        <ul className="list">
            <li className="items"><a className="burgerTypo" href="#skills">SKILLS</a></li>
            <li className="items"><a  className="burgerTypo" href="#portfolio">PORTFOLIO</a></li>
            <li className="items"><a className="burgerTypo" href="https://github.com/imanchamileva" target="_blank">GITHUB</a></li>
        </ul>
        )}

      <button onClick={toggleNav} className="btn">
=
      </button>
    </nav>
  )
}



export default Menuburger