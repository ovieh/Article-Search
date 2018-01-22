import React, { Component } from "react";
import API from "../../utils/API";
import {
	Card,
	CardHeader,
	Button,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

const CardStyle = {
	marginTop: "10px"
};


class Articles extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			articles: newProps.articles
		});
	}

	saveArticle(articleData) {
		const article = articleData.article;
		const newArticle = {
			headline: article.headline.main,
			date: article.pub_date,
			url: article.web_url,
		};
		console.log({newArticle});
		API.saveArticle(newArticle)
			.then(res => console.log(res))
			.then(res => this.loadArticles(article, article._id))
			.catch(err => console.log(err));
	}

	//If articles has been saved, it will be removed from search results
	loadArticles(article, id) {
		console.log(this.props.articles[0]._id);
		const articles = this.state.articles;

		const newArticles = articles.filter( article => id !== article._id);
		console.log(newArticles);
		this.setState({articles: newArticles});
	}

	renderArticles(articles) {
		if(articles && articles.length > 0)
			return articles.map((article, index) => <ListGroupItem key={index}>
				<span>
					<a href={`${article.web_url}`} target="_blank">
						<ListGroupItemHeading>{`${article.headline.main}`}</ListGroupItemHeading>
					</a>
					<Button className="float-right" onClick={() => this.saveArticle({article}) }>Save</Button>
				</span>
				<ListGroupItemText>{`${article.pub_date}`}</ListGroupItemText>
			</ListGroupItem>);
		else 
			return <ListGroupItem>
			No Articles!
			</ListGroupItem>;
	}
	
	
	
	//this runs first?
	render() {
		return <Card style={CardStyle}>
			<CardHeader>
					Search Results
			</CardHeader>
			<ListGroup>
				{this.renderArticles(this.state.articles) }
			</ListGroup>
		</Card>;
	}
}

export default Articles;

