import React from "react";
import Nav from "./components/Nav";
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	</Router>;
	


export default App;
