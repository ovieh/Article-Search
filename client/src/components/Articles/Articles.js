import React, { Component } from "react";
import { format } from "date-fns";
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
	marginTop: "10px",
	marginBottom: "70px"
};


class Articles extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		};
	}

	// Update state with articles from search
	componentWillReceiveProps(newProps, key) {
		const articles = newProps.articles;

		const cachedArticles = localStorage.getItem(articles);
		if (cachedArticles) {
			this.setState({ articles: JSON.parse(cachedArticles)} );
			return;
		}
		console.log(cachedArticles)
		localStorage.setItem(key, JSON.stringify(articles));

		this.setState({
			articles: articles
		});
	}

	saveArticle(articleData) {
		const article = articleData.article;
		const date = format(article.pub_date, "MM/DD/YYYY");
		console.log(date);
		const newArticle = {
			headline: article.headline.main,
			date: date,
			url: article.web_url,
		};
		console.log({newArticle});
		API.saveArticle(newArticle)
			.then(res => console.log(res))
			.then(res => this.parseArticles(article, article._id))
			.catch(err => console.log(err));
	}

	//If articles has been saved, it will be removed from search results
	parseArticles(article, id) {
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
					<a href={`${article.web_url}`} target="_blank" rel="noopener noreferrer">
						<ListGroupItemHeading>{`${article.headline.main}`}</ListGroupItemHeading>
					</a>
					<Button className="float-right" onClick={() => this.saveArticle({article}) }> 
						<i className="fa fa-bookmark-o" aria-hidden="true"></i>
						{" "}Save
					</Button>
				</span>
				<ListGroupItemText><span className="font-weight-bold">Published Date:</span> {`${format(article.pub_date, "MM/DD/YYYY")}`}</ListGroupItemText>
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

