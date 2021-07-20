import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './component/App';
import Count from './component/Count';
import TodoApp from './todolist/TodoApp';
import Card from './crudapp/Card';
///import Form from './formheadling/Form';


ReactDOM.render( <Card />, document.getElementById("root"));
