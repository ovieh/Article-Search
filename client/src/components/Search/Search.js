import React, { Component} from "react";
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API"


export default class Search extends Component {

		state = {
			articles: [],
			topic: null,
			startYear: null
		};
	

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		if(this.state.topic) {
			API.getArticles( this.state.topic, this.state.startYear, this.state.endYear)
			.then(res => console.log(res))
			.then(res =>  this.setState(
				{ articles: res.data.response })
			)
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
								placeholder="Bitcoin Bubble" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="startYear">Start Year</Label>
								<Input name="startYear" 
								id="startYear" 
								placeholder="1900" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="endYear">End Year</Label>
								<Input  name="endYear" 
								id="endYear" 
								placeholder="2018" 
								onChange={this.handleInputChange}
								/>
							</FormGroup>
							<Button 
								onClick={this.handleFormSubmit}>
								Search</Button>
						</Form>

					</CardBody>
				</Card>
			</div> 
		);
	}
}