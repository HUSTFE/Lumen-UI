import React from 'react'
import PropTypes from 'prop-types';
import "./Button.css";

class Button extends React.Component {
  render() {
    const props = this.props;
    const style = "lumen-btn-" + (props.type || "default") + " " + (props.size || "");

    return (
        <button
          className={"lumen-btn " + style}
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.children}
        </button>
    )
  }

  static Group = (props) => (<div className="lumen-btn-group">{props.children}</div>)
}

Button.propTypes = {
  type: PropTypes.oneOf(['default','primary','success','info','warning','danger']),
  size: PropTypes.oneOf(['large','small','icon']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button