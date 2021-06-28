import { Component } from "react";

import SearchArticle from "../SearchArticle";
import newsApi from "../../services/news-api";

class Articles extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;

    const options = { currentPage, searchQuery };

    newsApi.fetchArticles(options).then((articles) =>
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...articles],
        currentPage: prevState.currentPage + 1,
      }))
    );
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Статті</h1>
        <SearchArticle onSubmit={this.onChangeQuery} />
        <ul>
          {articles.map(({ title, url }) => (
            <li key={url}>
              <a href={url} target="blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
        {articles.length > 0 && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default Articles;
