import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from "reactstrap";

export default class navbarInstance extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this
			.toggle
			.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">React - NYTimes Search</NavbarBrand>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className="nav-link"to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/saved">Saved</Link>
							</NavItem>

						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}