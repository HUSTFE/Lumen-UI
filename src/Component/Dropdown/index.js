import React from 'react'
import PropTypes from 'prop-types';
import "./Dropdown.css";

class Dropdown extends React.Component {
  render() {
    const props = this.props;
    const item = this.item;


    return (
      <div style={{position: "absolute"}}>
        <ul className={"lumen-dd" + (props.display ? "" : " hidden")} >
          {
            React.Children.map(props.children, function (child) {
              return <this.item>{child}</this.item>
            }.bind(this))
          }
        </ul>
      </div>
      )
  }

  item = (props) => (<li className="lumen-dd-item">{props.children}</li>)
  static line = (props) => (<div className="lumen-dd-line"></div>)
}

Dropdown.propTypes = {

};

export default Dropdown;