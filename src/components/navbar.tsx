import Pfp from "../assets/pfp.jpg";
import CineLocal from "../assets/CineLocal.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <img className="size-12 object-cover w-fit" src={CineLocal} alt="" />
        <div className="flex gap-1">
          <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">Home</button>
          <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">Amigos</button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">Perfil</button>
        <img className="size-9 rounded-full object-cover ring-2 ring-zinc-700 hover:ring-red-500 transition-all" src={Pfp} alt="Foto de perfil" />
      </div>
    </nav>
  );
}

export default Navbar;
