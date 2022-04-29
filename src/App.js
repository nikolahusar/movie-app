import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import TvShow from "./pages/TvShow";
import TvshowList from "./pages/TvshowList";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="tv/:tvShowId" element={<TvShow />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/tv-show-list" element={<TvshowList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
