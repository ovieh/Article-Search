import axios from "axios";
const API_KEY = "JnE2WwlCcmYjGoDkJHWNSw5GzLSZnnx8";
class API {
  BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  async search(topic, starYear = 2010, endYear = 2020) {
    const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let params = `?api-key=${API_KEY}`;
    params += `&q=${topic}`;
    if (parseInt(starYear, 10)) params += `&begin_date=${starYear}0101`;
    if (parseInt(endYear, 10)) params += `&end_date=${endYear}1231`;
    return axios.get(BASE_URL + params);
  }

  async saveArticle(articleData) {
	const article = await axios.post("/api/articles", articleData);
	if(!article) throw new Error('Could not save article, Internal Server Error');
	return article;
  }

  async getArticles() {
    return axios.get("/api/articles");
  }

  async deleteArticle(id) {
    return axios.delete(`/api/articles/${id}`);
  }
}

const api = new API();

export { api as API };
