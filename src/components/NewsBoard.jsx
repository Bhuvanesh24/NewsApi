import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

// NewsBoard Component - renders the news board with a list of all available news items.
export const NewsBoard = ({ category }) => {
  // State to store the fetched articles
  const [articles, setArticles] = useState([]);
  // State to handle errors during API request
  const [error, setError] = useState(null);

  // useEffect hook to fetch news articles when the component mounts or when the category changes
  useEffect(() => {
    // API URL for fetching news based on the selected category
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    // Fetch data from the API
    fetch(url)
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) {
          throw new Error('Failed to fetch headlines');
        }
        return res.json();
      })
      .then((data) => {
        // Update the articles state with the fetched data
        setArticles(data.articles);
        // Clear any previous errors
        setError(null);
      })
      .catch((error) => {
        // Log the error to the console
        console.error(error);
        // Clear articles in case of an error
        setArticles([]);
        // Set an error message to be displayed to the user
        setError('Error fetching headlines. Please try again later.');
      });
  }, [category]);

  return (
    <div>
      {/* Display the heading */}
      <h2 className="text-center">Latest <span className="badge bg-success">News</span></h2>
      
      {/* Display an error message if there is an error during the API request */}
      {error && <div className="alert alert-danger">{error}</div>}
      
      {/* Map through the articles and render a NewsItem component for each */}
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} date={news.publishedAt} />
      ))}
    </div>
  );
};

