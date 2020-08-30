import React, { Component } from "react";
import { format } from "date-fns";
import { API } from "../../utils/API";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const CardStyle = {
  marginTop: "10px",
  marginBottom: "70px",
};

const DisplayDate = ({ date }) => {
  const formattedDate = new Date(date);
  return date.length > 0 ? (
    <ListGroupItemText>
      <span className="font-weight-bold">Published Date:</span>{" "}
      {`${format(formattedDate, "MM/dd/yyyy")}`}
    </ListGroupItemText>
  ) : null;
};

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  // Update state with articles from search
  componentWillReceiveProps(newProps, key) {
    const articles = newProps.articles;

    const cachedArticles = localStorage.getItem(articles);
    if (cachedArticles) {
      this.setState({ articles: JSON.parse(cachedArticles) });
      return;
    }
    localStorage.setItem(key, JSON.stringify(articles));

    this.setState({
      articles: articles,
    });
  }

  async saveArticle(articleData) {
    const article = articleData.article;
    const formattedDate = new Date(article.pub_date);
    const date = format(formattedDate, "MM/dd/yyyy");
    const newArticle = {
      headline: article.headline.main,
      date: date,
      url: article.web_url,
    };
    try {
      const savedArticle = await API.saveArticle(newArticle);
      this.parseArticles(article, article._id);
    } catch (error) {
      console.log(error);
    }
  }

  //If articles has been saved, it will be removed from search results
  parseArticles(article, id) {
    const articles = this.state.articles;

    const newArticles = articles.filter((article) => id !== article._id);
    this.setState({ articles: newArticles });
  }

  handleSaveArticle(article) {
    this.saveArticle({ article });
  }

  renderArticles(articles) {
    if (articles && articles.length > 0)
      return articles.map((article, index) => (
        <ListGroupItem key={index}>
          <span>
            <a
              href={`${article.web_url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListGroupItemHeading>{`${article.headline.main}`}</ListGroupItemHeading>
            </a>
            <Button
              className="float-right"
              onClick={() => this.saveArticle({ article })}
            >
              <i className="fa fa-bookmark-o" aria-hidden="true"></i> Save
            </Button>
          </span>
          <DisplayDate date={article.pub_date} />
        </ListGroupItem>
      ));
    else return <ListGroupItem>No Articles!</ListGroupItem>;
  }

  //this runs first?
  render() {
    return (
      <Card style={CardStyle}>
        <CardHeader>Search Results</CardHeader>
        <ListGroup>{this.renderArticles(this.state.articles)}</ListGroup>
      </Card>
    );
  }
}

export default Articles;
