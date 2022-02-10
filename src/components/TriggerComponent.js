import './Menuburger.css'
import { slide as Menu } from "react-burger-menu";




export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Skills
      </a>

      <a className="menu-item" href="/about">
        Projects
      </a>

      <a className="menu-item" href="/services">
        Github
      </a>


    </Menu>
  );
};
