import React from 'react';
import useFetch from '../hooks/useFetch';
import SearchResults from './SearchResults';
import { useSearchParams } from 'react-router-dom';

const Latest = () => {
  const { data: articles, error, isLoading } = useFetch("latest");
  const [searchParams] = useSearchParams();
  const hasSearchQuery = searchParams.get('q');

  return (
    <div className="container mx-auto px-4 py-8">
      {hasSearchQuery ? (
        <SearchResults data={articles} isLoading={isLoading} error={error} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Latest News</h1>
          {isLoading && (
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center">
              <p className="text-xl font-semibold">{error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles?.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {article.urlToImage && (
                    <img 
                      src={article.urlToImage} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=No+Image'} 
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description || 'No description available'}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.source?.name || 'Unknown Source'}</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Latest;