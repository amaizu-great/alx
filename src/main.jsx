import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import Latest from "./components/latest.jsx";
import { createRoot } from "react-dom/client";
import Explore from "./components/explore.jsx";
import Trending from "./components/trending.jsx";
import NewsDetails from "./components/newDetails.jsx";
import LandingPage from "./Landingpage/landingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="news" element={<App />}>
          <Route path="latest" element={<Latest />} />
          <Route path="explore" element={<Explore />} />  
          <Route path="trending" element={<Trending />} />
        </Route>
        <Route path="news/:path/:id" element={<NewsDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
