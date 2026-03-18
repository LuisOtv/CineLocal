import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
