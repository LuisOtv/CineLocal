import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <div className="w-7xl">
        <Navbar />
        <MoviePage />
      </div>
    </>
  );
}

export default App;
