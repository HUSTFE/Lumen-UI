import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button";
import Dropdown from "./Component/Dropdown";
import Label from "./Component/Label";
import Breadcrumb from "./Component/Breadcrumb/index";
import Panel from "./Component/Panel/index";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      di: false
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Lumen UI</h1>
        <img width="256px" src={logo}/>
        <p>It's <a href="https://github.com/HUSTFE">HUSTFE</a>'s UI Compoments Library</p>
        <h1>Buttons</h1>
        <div className="flex-box">
          <Button>default</Button>
          <Button type="primary">primary</Button>
          <Button type="success">success</Button>
          <Button type="info">info</Button>
          <Button type="warning">success</Button>
          <Button type="danger">danger</Button>
        </div>
        <div className="flex-box">
          <Button.Group>
            <Button type="primary">primary</Button>
            <Button type="success">success</Button>
            <Button type="info">info</Button>
          </Button.Group>
        </div>
        <div className="flex-box">
          <Button size="small" type="primary">small</Button>
          <Button type="primary" disabled>normal</Button>
          <Button type="primary" size="large">large</Button>
          <Button type="primary" size="icon">+</Button>
        </div>
        <h1>DropDown</h1>
        <div className="flex-box">
          <Button onClick={()=>this.setState({di: !this.state.di})}>
            Dropdown
            <Dropdown display={this.state.di}>
              <a href="dd">1</a>
              <a href="dd">2</a>
              <a href="dd">3</a>
              <Dropdown.line></Dropdown.line>
              <a href="dd">4</a>
            </Dropdown>
          </Button>
        </div>
        <h1>Label</h1>
        <div className="flex-box">
          <Label>default</Label>
          <Label type="primary">primary</Label>
          <Label type="success">success</Label>
          <Label type="info">info</Label>
          <Label type="warning">warning</Label>
          <Label type="danger">danger</Label>
        </div>
        <div className="flex-box">
          <Button type="info" size="icon">?<Label type="danger" size="badge">10</Label></Button>
        </div>
        <h1>Breadcrumb</h1>
        <Breadcrumb
          list={[
            <a href="#">First step</a>,
            "Last step",
            "Now step"
          ]}
        />
        <h1>Panel</h1>
        <Panel style={{textAlign: "left"}}>
          <Panel.head>Basic Panel Head</Panel.head>
          <Panel.body>Basic Panel</Panel.body>
          <Panel.foot>          <Button.Group>
            <Button type="success">Yes</Button>
            <Button type="danger">No</Button>
          </Button.Group></Panel.foot>
        </Panel>
      </div>
    );
  }
}

export default App;
