import React from 'react'
import PropTypes from 'prop-types';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    const props = this.props;

    return (
      <nav className={"lumen-nav " + (props.className || "") } >
        <div className={"lumen-nav-logo"}>
          {props.logo}
        </div>
        <div className={"lumen-nav-content"}>{props.children}</div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logo: PropTypes.node,
};

export default Navbar;