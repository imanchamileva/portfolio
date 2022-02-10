import  './Menuburger.css'
import{useState, useEffect} from 'react'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const Menuburger = () =>{

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [toggleIcon, setToggleIcon] = useState(false)
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
      setToggleIcon(!toggleIcon)
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
              <li className="items"><a  className="burgerTypo" href="#projects">PROJECTS</a></li>
              <li className="items"><a className="burgerTypo" href="https://github.com/imanchamileva" target="_blank">GITHUB</a></li>
          </ul>
          )}

    {(screenWidth<500) && (
        <button onClick={toggleNav} className="btn">
          {toggleIcon ? <FiX /> :  <FiMenu /> }
        </button>
        )}
      </nav>
    )
  }



export default Menuburger