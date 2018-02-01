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

  static head = function(props) { return (<div className={"lumen-panel-head"}>{props.children}</div>) }
  static body = function(props) { return (<div className={"lumen-panel-body"}>{props.children}</div>) }
  static foot = function(props) { return (<div className={"lumen-panel-foot"}>{props.children}</div>) }

}

Panel.propTypes = {

};

export default Panel;