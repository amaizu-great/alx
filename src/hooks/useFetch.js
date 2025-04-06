import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const useFetch = (pathType) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);

      if (!API_KEY) {
        setError("API key is missing. Please check your environment variables.");
        setIsLoading(false);
        return;
      }

      try {
        let apiUrl;
        const defaultParams = `&language=en&apiKey=${API_KEY}`;

        // If there's a search query, use it across all path types
        if (searchQuery) {
          apiUrl = `${BASE_URL}/everything?q=${encodeURIComponent(searchQuery)}&sortBy=relevancy${defaultParams}`;
        } else {
          // If no search query, use the original path-based logic
          switch (pathType) {
            case "latest":
              // Fetch latest news from the last 24 hours
              const today = new Date();
              const yesterday = new Date(today);
              yesterday.setDate(yesterday.getDate() - 1);
              apiUrl = `${BASE_URL}/everything?q=general&from=${yesterday.toISOString().split("T")[0]}&sortBy=publishedAt${defaultParams}`;
              break;

            case "trending":
              apiUrl = `${BASE_URL}/top-headlines?country=us&sortBy=popularity${defaultParams}`;
              break;

            case "explore":
            default:
              // Fetch general news with a wider scope
              apiUrl = `${BASE_URL}/everything?q=general&sortBy=relevancy${defaultParams}`;
              break;
          }
        }

        const response = await axios.get(apiUrl);
        const articlesWithId = response.data.articles.map((article, index) => ({ ...article, id: index + 1, }));
        setData(articlesWithId);
      } catch (error) {
        setError(
          error.response?.status === 401 
            ? "Invalid API key. Please check your NewsAPI key configuration."
            : error.message || "An Error Occurred while fetching data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [pathType, searchQuery]);

  return { data, error, isLoading };
};

export default useFetch;
