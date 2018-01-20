import React, {Component} from "react";
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

	renderArticles() {
		if (this.props.articles) 
			return this.props.articles.map((article, index) => <ListGroupItem key={index}>
				<span>
					<a href={`${article.web_url}`} target="_blank">
						<ListGroupItemHeading>{`${article.headline.main}`}</ListGroupItemHeading>
					</a>
					<Button className="float-right">Save</Button>
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