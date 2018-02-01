import React from 'react'
import PropTypes from 'prop-types';
import "./Message.css";

class Message extends React.Component {
  render() {
    const props = this.props;
    const style = "lumen-msg-" + (props.type || "warning") ;

    return (
      <div className={"lumen-msg " + style}>
        <button className="lumen-msg-close">x</button>
        {props.title ? <h4>{props.title}</h4> : null}
        {props.children}
      </div>
    )
  }
}

Message.propTypes = {
  type: PropTypes.oneOf(['success','info','warning','danger']),
  title: PropTypes.node
};

export default Message;