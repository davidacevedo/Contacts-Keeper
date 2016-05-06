import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, useRouterHistory, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App/index.js';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById('root')
)