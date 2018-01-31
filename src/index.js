import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Button from "./Component/Button";
import Dropdown from "./Component/Dropdown";
import Label from "./Component/Label";
import Breadcrumb from "./Component/Breadcrumb";
import Panel from "./Component/Panel";
import Message from "./Component/Message";
import Input from "./Component/Input";
import Navbar from "./Component/Navbar";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {Button, Dropdown, Label, Breadcrumb, Panel, Message, Input, Navbar}