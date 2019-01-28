import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Jumbotron />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/saved" component={Saved} />

			</Switch>
			<Footer/>

		</div>
	</Router>;
	


export default App;
