import React, { Component} from "react";
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";
import Articles from "../Articles";

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			topic: "",
			startYear: "",
			endYear: ""
		};
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//Figure out why this isn't clearing form
	handleFormSubmit = event => {
		event.preventDefault();

		if(this.state.topic) {
			API.search( this.state.topic, this.state.startYear, this.state.endYear)
			.then(res =>  this.setState(
				{ articles: res.data.response }))
			.then(res => this.setState({ topic: "", startYear: "", endYear: "" }))
			.catch(err => console.log(err));
		}

	}

	render() {
		return (
			<div>
				<Card>
					<CardHeader>
						Article Search
					</CardHeader>
					<CardBody>
						<Form>
							<FormGroup>
								<Label for="topic">Topic</Label>
								<Input 
								name="topic" 
								id="topic" 
								placeholder="Topic: Required" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="startYear">Start Year</Label>
								<Input name="startYear" 
								id="startYear" 
								placeholder="Start Year: Optional" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="endYear">End Year</Label>
								<Input  name="endYear" 
								id="endYear" 
								placeholder="End Year: Optional" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<Button 
								onClick={this.handleFormSubmit}>
								<i className="fa fa-search" aria-hidden="true"></i>{" "}
								Search</Button>
						</Form>

					</CardBody>
				</Card>
				<Articles 
					articles= { this.state.articles.docs }
				/>
			</div> 
		);
	}
}