import MovieCard from "../components/MovieCard";
import Intro from "../components/Intro";

function Home() {
  return (
    <>
      <Intro />
      <h1 className="text-white">Recem Assistidos</h1>
      <div className="flex gap-2">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <h1 className="text-white">Sugestões</h1>
      <MovieCard />
      <h1 className="text-white">Seus Amigos Viram</h1>
      <MovieCard />
    </>
  );
}

export default Home;
