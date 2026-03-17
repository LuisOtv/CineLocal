import Pfp from "../assets/pfp.jpg";

function Navbar() {
  return (
    <>
      <div className="flex p-5">
        <div className="flex bg-white w-full gap-2">
          <button>
            <h2>Home</h2>
          </button>
          <button>
            <h2>Friends</h2>
          </button>
        </div>
        <div className="flex justify-end bg-white w-full gap-2">
          <button>
            <h2>Profile</h2>
          </button>
          <img className="size-8" src={Pfp} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
