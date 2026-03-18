import { Link } from "react-router-dom";
import Poster from "../assets/Poster.jpg";

interface MovieCardProps {
  id?: number;
  title?: string;
  posterPath?: string | null;
  year?: string;
}

function MovieCard({ id, title, posterPath, year }: MovieCardProps) {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : Poster;

  const card = (
    <div className="w-36 shrink-0 cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title || "Poster do filme"} className="w-full h-52 object-cover" />
      </div>
      <p className="text-zinc-200 text-sm mt-2 truncate">{title || "Titulo"}</p>
      <p className="text-zinc-500 text-xs">{year || "2024"}</p>
    </div>
  );

  if (id) {
    return <Link to={`/movie/${id}`}>{card}</Link>;
  }

  return card;
}

export default MovieCard;
