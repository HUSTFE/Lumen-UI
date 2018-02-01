import React from 'react'
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

  item = function(props) { return (<li>{props.children}</li>) }
}

export default Breadcrumb;