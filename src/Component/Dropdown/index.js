import React from 'react'
import PropTypes from 'prop-types';
import "./Dropdown.css";

class Dropdown extends React.Component {
  render() {
    const props = this.props;

    return (
      <div style={{position: "absolute"}}>
        <ul className={"lumen-dd" + (props.display ? "" : " hidden")} >
          {
            React.Children.map(props.children, function (child) {
              return <li className="lumen-dd-item">{child}</li>
            })
          }
        </ul>
      </div>
      )
  }

  static line = function(props) { return (<div className="lumen-dd-line" {...props}></div>) }
}

Dropdown.propTypes = {
  display: PropTypes.bool
};

export default Dropdown;