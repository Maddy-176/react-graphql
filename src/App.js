import "./App.css";
import { Routes, Route } from "react-router-dom";

import Movies from "./components/Movies";
import Home from "./components/Home";
import MovieDtls from "./components/MovieDtls";
import NotFound from "./components/NotFound";
import AllPlanets from "./components/AllPlanets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDtls />} />
        <Route path="/planets" element={<AllPlanets />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
