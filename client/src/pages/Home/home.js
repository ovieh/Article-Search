import React, { Component } from "react";
import { Container } from "reactstrap";
import Jumbotron from "../../components/Jumbotron";
import Search from "../../components/Search";
// import Articles from "../../components/Articles";

class Home extends Component {

	render() {
		return(
			<div>
				<Jumbotron />
				<Container>
					<Search />
				</Container>
			</div>

		);
	}
}

export default Home;