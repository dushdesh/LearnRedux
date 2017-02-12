var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <p>React Boiler Plate 3</p>
  </div>,
  document.getElementById('app')
);

require('./redux-example.jsx');