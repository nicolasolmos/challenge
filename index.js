require('regenerator-runtime/runtime');
const React = require('react');
const { HashRouter } = require('react-router-dom');
const ReactDOM = require('react-dom');
const App = require('./src/app');

const Tree = () => <HashRouter><App /></HashRouter>;

ReactDOM.render(<Tree />, document.getElementById('challenge-app'));