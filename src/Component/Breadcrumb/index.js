import React from 'react'
import PropTypes from 'prop-types';
import "./Breadcrumb.css";

class Breadcrumb extends React.Component {
  render() {
    const props = this.props;

    return (
      <ul className={"lumen-bc"}>
        {
          React.Children.map(props.list, function (child) {
            return <this.item>{child}</this.item>
          }.bind(this))
        }
      </ul>
    )
  }

  item = (props) => (<li>{props.children}</li>)
}

Breadcrumb.propTypes = {

};

export default Breadcrumb;