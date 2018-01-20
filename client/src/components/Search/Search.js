import React, { Component} from "react";
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Search extends Component {
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
								<Input name="topic" id="topic" placeholder="Bitcoin Bubble"></Input>
							</FormGroup>
							<FormGroup>
								<Label for="startYear">Start Year</Label>
								<Input name="startYear" id="startYear" placeholder="1900"></Input>
							</FormGroup>
							<FormGroup>
								<Label for="endYear">End Year</Label>
								<Input  name="endYear" id="endYear" placeholder="2018"></Input>
							</FormGroup>
							<Button>Search</Button>
						</Form>

					</CardBody>
				</Card>
			</div> 
		);
	}
}