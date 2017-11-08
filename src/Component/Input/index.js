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

  static label = (props) => <label className={"lumen-input-label"} {...props}>{props.children}</label>
  static group = (props) => <div className={"lumen-input-group " + (props.state)}>{props.children}</div>
}

Input.propTypes = {
  state: PropTypes.oneOf(['default','primary','success','info','warning','danger'])
};

export default Input;