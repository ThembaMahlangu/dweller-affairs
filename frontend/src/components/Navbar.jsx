import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import {HiMenuAlt3} from "react-icons/hi"
import {FaTimes} from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
  // Set state
  state = { clicked: false };
  // Make Handleclick Function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Dweller Affairs</h1>

          <div className="menu-icons" onClick={this.handleClick}>
            {
              this.state.clicked?<FaTimes style={{fontSize:'2em'}}/>:<HiMenuAlt3 style={{fontSize:'2em'}}/>
            }
          </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) =>{
            return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <FontAwesomeIcon icon={item.icon} style={{marginRight:'10px'}}/>{item.title}
            </Link>
          </li>
            )
          })}
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/partnerlogin">Partner Login</Link></button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
