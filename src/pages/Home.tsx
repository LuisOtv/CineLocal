import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Intro from "../components/Intro";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

function Section({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="px-8 py-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-red-500 rounded-full" />
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">{children || <></>}</div>
    </section>
  );
}

function Home() {
  const [trending, setTrending] = useState<Movie[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
      .then((res) => res.json())
      .then((data) => setTrending(data.results ?? []));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Intro />
      <Section title="Recém Assistidos" />
      <Section title="Em Alta">
        {trending.slice(0, 7).map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} posterPath={movie.poster_path} year={movie.release_date?.split("-")[0]} />
        ))}
      </Section>
      <Section title="Seus Amigos Viram" />
    </div>
  );
}

export default Home;
