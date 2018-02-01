import React from 'react'
import PropTypes from 'prop-types';
import "./Label.css";

class Label extends React.Component {
  render() {
    const props = this.props;
    const style = "lumen-label-" + (props.type || "default") + " " + (props.size || "");

    return (
      <span className={"lumen-label " + style}>
        {props.children}
      </span>
    )
  }
}

Label.propTypes = {
  type: PropTypes.oneOf(['default','primary','success','info','warning','danger']),
  size: PropTypes.oneOf(['', 'badge'])
};

export default Label;