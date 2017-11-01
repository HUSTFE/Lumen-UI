import React from 'react'
import PropTypes from 'prop-types';
import "./Panel.css";

class Panel extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className={"lumen-panel"} {...props}>
        {props.children}
      </div>
    )
  }

  static head = (props) => (<div className={"lumen-panel-head"}>{props.children}</div>)
  static body = (props) => (<div className={"lumen-panel-body"}>{props.children}</div>)
  static foot = (props) => (<div className={"lumen-panel-foot"}>{props.children}</div>)

}

Panel.propTypes = {

};

export default Panel;