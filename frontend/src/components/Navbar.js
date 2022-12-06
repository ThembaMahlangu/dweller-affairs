import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

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
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) =>{
            return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
            <i className={item.icon}></i>{item.title}
            </Link>
          </li>
            )
          })}
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/register">Register</Link></button>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/login">Login</Link></button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
