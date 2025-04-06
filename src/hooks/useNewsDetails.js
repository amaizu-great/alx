import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useNewsDetails = (path, id) => {
  const { data: articles, error: fetchError, isLoading: fetchLoading } = useFetch(path);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetchLoading) {
      setIsLoading(true);
      return;
    }

    if (fetchError) {
      setError(fetchError);
      setIsLoading(false);
      return;
    }

    if (articles) {
      const foundArticle = articles.find(article => article.id === parseInt(id));
      if (foundArticle) {
        setArticle(foundArticle);
        setError(null);
      } else {
        setError("Article not found");
      }
    }
    
    setIsLoading(false);
  }, [articles, fetchError, fetchLoading, id]);

  return { article, error, isLoading };
};

export default useNewsDetails; 