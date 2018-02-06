import React from 'react'
import "./Breadcrumb.css";

class Breadcrumb extends React.Component {
  render() {
    const props = this.props;

    return (
      <ul className={"lumen-bc"}>
        {
          React.Children.map(props.list, function (child) {
            return <li className={"lumen-bc-item"}>{child}</li>
          }.bind(this))
        }
      </ul>
    )
  }
}

export default Breadcrumb;