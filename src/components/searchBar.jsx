import { useState, useEffect } from 'react';
import { SearchNormal1, QuoteDownSquare } from "iconsax-react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  // Update search term when URL changes
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Get the current path segments
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const basePath = pathSegments[0] === 'news' ? pathSegments[1] || 'explore' : 'explore';
      
      // Navigate to the search results with the current base path
      navigate(`/news/${basePath}?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className=" flex items-center justify-around w-full border-b border-gray-200 px-[5%] py-2">
      <Link to="/news/explore" className="hidden text-Leo text-2xl font-bold font-DM-Sans md:flex">
        CHATTER
      </Link>

      <Link to="/news/explore" className="flex md:hidden">
        <QuoteDownSquare size="30" color="#543EE0"/>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <form onSubmit={handleSearch} className="flex gap-4 items-center px-4 py-[6px] border border-gray-200 rounded-sm">
          <button type="submit">
            <SearchNormal1 size="18" color="#543EE0"/>
          </button>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search News..." className="w-full outline-none placeholder-gray-400 placeholder:text-[14px]" /> 
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

