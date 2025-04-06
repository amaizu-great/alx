import useFetch from '../hooks/useFetch';
import NewsCard, { LoadingState } from './newsCard';

const Trending = () => {
  const { data: articles, error, isLoading } = useFetch("trending");

  if (isLoading){ 
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return (
      <main className="flex flex-col">
        {arr.map((item)=> <LoadingState key={item}/>)} 
      </main>
    )
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col">
        {articles?.map((article) => (
          <NewsCard key={article.id} path="trending" {...article} />
        ))}
    </div>
  );
};

export default Trending;