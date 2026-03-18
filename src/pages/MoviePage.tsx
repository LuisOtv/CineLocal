import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  overview: string;
  runtime: number;
  genres: { id: number; name: string }[];
}

interface Credits {
  cast: { id: number; name: string }[];
  crew: { id: number; name: string; job: string }[];
}

function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
      .then((res) => res.json())
      .then(setMovie);
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`)
      .then((res) => res.json())
      .then(setCredits);
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : "";
  const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : posterUrl;
  const year = movie.release_date?.split("-")[0];
  const genreText = movie.genres.map((g) => g.name).join(" · ");
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const runtimeText = movie.runtime ? `${hours}h ${minutes}min` : "";
  const director = credits?.crew.find((c) => c.job === "Director")?.name ?? "—";
  const cast = credits?.cast.slice(0, 3).map((c) => c.name).join(", ") ?? "—";

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="relative">
        {/* Backdrop blur */}
        <div
          className="absolute inset-0 blur-2xl opacity-20"
          style={{ backgroundImage: `url(${backdropUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />

        {/* Conteúdo */}
        <div className="relative flex gap-10 p-12 max-w-5xl mx-auto">
          {posterUrl && (
            <img className="w-52 h-80 object-cover rounded-xl shrink-0" src={posterUrl} alt={movie.title} />
          )}

          <div className="flex flex-col justify-center gap-3 text-white">
            <div className="flex items-center gap-3">
              <span className="bg-red-600 text-xs px-2 py-1 rounded font-bold">{year}</span>
              <span className="text-zinc-400 text-sm">
                {genreText}{runtimeText && ` · ${runtimeText}`}
              </span>
            </div>

            <h1 className="text-5xl font-bold">{movie.title}</h1>

            <div className="text-sm text-zinc-400">
              <p><span className="text-zinc-300">Diretor:</span> {director}</p>
              <p><span className="text-zinc-300">Elenco:</span> {cast}</p>
            </div>

            <p className="text-zinc-300 text-sm max-w-xl">
              {movie.overview || "Sem descrição disponível."}
            </p>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-2xl text-zinc-600 hover:text-yellow-400">★</button>
                ))}
              </div>
              <button className="px-4 py-2 bg-zinc-800 text-white text-sm rounded-lg border border-zinc-700 hover:bg-red-600">
                ♥ Favoritar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
