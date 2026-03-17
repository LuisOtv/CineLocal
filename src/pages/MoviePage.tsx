import Navbar from "../components/Navbar";
import Poster from "../assets/Poster.jpg";
function MoviePage() {
  return (
    <>
      <div className="flex gap-8">
        <img className="w-64 object-cover" src={Poster} alt="" />
        <div className="flex-1">
          <h1 className="text-5xl">Titulo</h1>
          <h1 className="">Diretor</h1>
          <h1 className="">Atores Principais</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi temporibus ut fugit eius obcaecati enim? Rerum sint fugiat perferendis. Laborum
            maiores recusandae similique asperiores autem odit eligendi iusto ipsam sequi expedita excepturi, inventore eaque accusantium quod officia, impedit
            ut quisquam repellat ducimus? Vitae esse tenetur et velit vel eveniet nostrum doloribus possimus culpa praesentium hic quaerat cupiditate, pariatur
            commodi aut aperiam optio nobis reiciendis mollitia nulla quisquam. Harum odio consectetur animi earum a, tempora, officiis sequi, fugit neque
            voluptatum recusandae iusto iure. Optio aperiam quidem provident eveniet, illo nostrum illum, possimus tenetur natus culpa ab. Omnis nisi
            consequatur quod sapiente.
          </p>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
