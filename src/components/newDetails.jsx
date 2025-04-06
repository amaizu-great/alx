import useNewsDetails from '../hooks/useNewsDetails';
import { useParams, useNavigate } from 'react-router-dom';

const NewsDetails = () => {
  const navigate = useNavigate();
  const { path, id } = useParams();
  const { article, error, isLoading } = useNewsDetails(path, id);

  // Validate path
  const validPaths = ['latest', 'trending', 'explore'];
  if (!validPaths.includes(path)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Invalid Path</h1>
          <button
            onClick={() => navigate('/news/explore')}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Go back to News
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-500 mb-4">{error}</p>
          <button
            onClick={() => navigate(`/news/${path}`)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Back to {path.charAt(0).toUpperCase() + path.slice(1)} News
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-4">Article not found</p>
          <button
            onClick={() => navigate(`/news/${path}`)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Back to {path.charAt(0).toUpperCase() + path.slice(1)} News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => navigate(`/news/${path}`)}
        className="mb-6 flex items-center text-purple-600 hover:text-purple-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to {path.charAt(0).toUpperCase() + path.slice(1)} News
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-[400px] object-cover"
            onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=No+Image'}
          />
        )}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{article.source?.name || 'Unknown Source'}</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>

          {article.author && (
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">By:</span> {article.author}
            </p>
          )}

          <p className="text-gray-700 mb-6 leading-relaxed">
            {article.description}
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {article.content?.split('[+')[0] || 'No content available'}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Read Full Article
          </a>
        </div>
      </article>
    </div>
  );
};

export default NewsDetails;