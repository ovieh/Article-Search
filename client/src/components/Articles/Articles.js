import React, {Component} from "react";
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


	saveArticle(articleData) {
		// console.log(articleData.article);
		const newArticle = {
			headline: articleData.article.headline.main,
			date: articleData.article.pub_date,
			url: articleData.article.web_url
		};
		API.saveArticle(newArticle)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	//Todo: If search doesnt return any articles (array.length === 0) render message, "search return zero results"
	renderArticles() {
		if (this.props.articles) 
			return this.props.articles.map((article, index) => <ListGroupItem key={index}>
				<span>
					<a href={`${article.web_url}`} target="_blank">
						<ListGroupItemHeading>{`${article.headline.main}`}</ListGroupItemHeading>
					</a>
					<Button className="float-right" onClick={() => this.saveArticle({article})  }>Save</Button>
				</span>
				<ListGroupItemText>{`${article.pub_date}`}</ListGroupItemText>
			</ListGroupItem>);
		else if (!this.props.articles) {
			return <ListGroupItem>
							No Articles!
			</ListGroupItem>;
		}
	}

	render() {

		return <Card style={CardStyle}>
			<CardHeader>
					Search Results
			</CardHeader>
			{console.log(this.props.articles)}
			<ListGroup>
				{this.renderArticles()}
			</ListGroup>
		</Card>;

	}

}

export default Articles;