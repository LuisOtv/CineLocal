import Poster from "../assets/Poster.jpg";

function MovieCard() {
  return (
    <>
      <div className=" max-w-32 p-2 bg-slate-600 rounded-b-sm">
        <img src={Poster} alt="Poster do filme" />
        <h1 className="text-white ">Titulo</h1>
      </div>
    </>
  );
}

export default MovieCard;
