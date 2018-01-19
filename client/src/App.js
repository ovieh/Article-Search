import React from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Switch>
			</Switch>
		</div>
	</Router>;
	


export default App;
