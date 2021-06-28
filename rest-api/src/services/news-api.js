import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 8d3440b64c1b415b88003d4bff53819d";

const fetchArticles = ({ currentPage = 1, searchQuery = "", pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.articles);
};

export default { fetchArticles };
