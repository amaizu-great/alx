import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeTab, setActiveTab] = useState("");
  const [sliderPosition, setSliderPosition] = useState(0); 

  useEffect(() => {
    const loadedPath = window.location.pathname.split("/")[2]
    setActiveTab(loadedPath)
    const activeTab = document.getElementById(loadedPath);
    setSliderWidth(activeTab.offsetWidth + 10);
    setSliderPosition(activeTab.offsetLeft - 5);
  }, []);

  const handleTabClick = (e) => {
    setActiveTab(e.target.textContent.toLowerCase());
    setSliderPosition(e.target.offsetLeft - 5);
    setSliderWidth(e.target.offsetWidth + 10);
    navigate(e.target.textContent.toLowerCase());
  };

  return (
    <section className="flex flex-col w-full gap-10">
      <div className="flex flex-col gap-1 mt-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 font-DM-Sans">
          FEED
        </h1>
        <p className="text-xs sm:text-sm text-Wayne">
          Explore different content you'd love
        </p>
      </div>

      <div className="relative flex flex-col w-full border border-gray-100 rounded-md py-2 px-6 overflow-hidden"> 
        <div className="flex w-full justify-between text-[14px] sm:text-[16px]">
          <button id="latest" onClick={(e) => handleTabClick(e)} className={`hover:text-Leo cursor-pointer ${activeTab === "latest" ? "text-Leo" : "text-Wayne"}`}>Latest</button>
          <button id="explore" onClick={(e) => handleTabClick(e)} className={`hover:text-Leo cursor-pointer ${activeTab === "explore" ? "text-Leo" : "text-Wayne"}`}>Explore</button>
          <button id="trending" onClick={(e) => handleTabClick(e)} className={`hover:text-Leo cursor-pointer ${activeTab === "trending" ? "text-Leo" : "text-Wayne"}`}>Trending</button>
        </div>
 
        <div id="slider" className="absolute bottom-1 rounded bg-Leo h-[2px] w-[100px] transition-all duration-300 ease-in-out" style={{ left: `${sliderPosition}px`, width: `${sliderWidth}px` }}></div>
      </div>
    </section>
  );
};

export default NavBar;
