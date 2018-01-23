import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {
	Card,
	CardHeader,
	Button,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Container
} from "reactstrap";


const CardStyle = {
	marginTop: "10px"
};

class Saved extends Component {

	state = {
		articles: []
	}

	componentDidMount() {
		this.loadArticles();
	}

	loadArticles = () => {
		API.getArticles()
			.then(res => this.setState({ articles: res.data }))
			.then(res => console.log(this.state.articles))
			.catch(err => console.log(err));
	}

	removeArticle = (id) => {
		API.deleteArticle(id)
			.then(res => this.loadArticles())
			.catch(err => console.log(err));

	}

	renderArticles(articles) {
		if(articles && articles.length > 0)
			return articles.map((article, index) => <ListGroupItem key={index}>
				<span>
					<a href={`${article.url}`} target="_blank">
						<ListGroupItemHeading>{`${article.headline}`}</ListGroupItemHeading>
					</a>
					<Button className="float-right" onClick={() => this.removeArticle(article._id) }>
					<i class="fa fa-bookmark" aria-hidden="true"></i>
					{" "}
					Remove</Button>
				</span>
				<ListGroupItemText>{`${article.date}`}</ListGroupItemText>
			</ListGroupItem>);
		else 
			return <ListGroupItem>
			No Saved Articles!
			</ListGroupItem>;
	}
	
	render() {
		return(
			<div>
				<Jumbotron />
				<Container>
				<Card style={CardStyle}>
				<CardHeader>
					Search Results
				</CardHeader>
				<ListGroup>
					{this.renderArticles(this.state.articles) }
				</ListGroup>
				</Card>
				</Container>
			</div>
		);
	}
}

export default Saved;