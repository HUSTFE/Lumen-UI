import React from 'react'
import PropTypes from 'prop-types';
import "./Input.css";

class Input extends React.Component {
  render() {
    const props = this.props;
    const style = "lumen-input-" + (props.state || "default");

    return (
        <input className={"lumen-input " + style}  {...props}/>
    )
  }

  static label = function(props) { return <label className={"lumen-input-label"} {...props}>{props.children}</label> }
  static group = function(props) { return <div className={"lumen-input-group " + (props.state)}>{props.children}</div> }
}

Input.propTypes = {
  state: PropTypes.oneOf(['default','primary','success','info','warning','danger'])
};

export default Input;