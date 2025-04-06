import React from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const SearchResults = ({ data, isLoading, error }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = searchParams.get('q');
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPath = pathSegments[1] || 'explore';

  if (!searchQuery) return null;

  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-6 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Search Results for "{searchQuery}"
        </h2>
        {data && (
          <p className="text-gray-600 mt-1">
            Found {data.length} {data.length === 1 ? 'result' : 'results'}
          </p>
        )}
      </div>

      {/* Search Results Grid */}
      <div className="grid grid-cols-1 gap-6">
        {data?.map((article) => (
          <article 
            key={article.id}
            onClick={() => navigate(`/news/${currentPath}/${article.id}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row">
              {article.urlToImage && (
                <div className="md:w-48 h-48">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=No+Image'}
                  />
                </div>
              )}
              <div className="flex-1 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-2 line-clamp-2">
                  {article.description || 'No description available'}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.source?.name || 'Unknown Source'}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {data?.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No results found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults; 